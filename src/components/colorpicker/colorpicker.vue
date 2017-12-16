<template>
  <div ref="colorPicker" :style="[colorpickerStyle]"
       :class="[colorpickerStyleClass,{'ui-colorpicker ui-widget':true,'ui-colorpicker-overlay':!inline,'ui-colorpicker-dragging':colorDragging||hueDragging}]">
    <input ref="pickerInput" type="text" v-if="!inline"
           :class="['ui-colorpicker-preview ui-inputtext ui-state-default ui-corner-all',{'ui-state-disabled': disabled}]"
           readonly="readonly"
           @click="onInputClick()" @keydown="onInputKeydown($event)" :id="inputId"
           :tabindex="tabindex" :disabled="disabled"
           :style="{backgroundColor: inputBgColor}">
    <transition name="slide">
      <div ref="pickerPanel"
           :class="{'ui-colorpicker-panel ui-corner-all': true, 'ui-colorpicker-overlay-panel ui-shadow':!inline, 'ui-state-disabled': disabled}"
           @click="onPanelClick()"
           v-show="inline || panelVisible">
        <div class="ui-colorpicker-content">
          <div ref="colorSelector" class="ui-colorpicker-color-selector" @mousedown="onColorMousedown($event)">
            <div class="ui-colorpicker-color">
              <div ref="colorHandle" class="ui-colorpicker-color-handle"></div>
            </div>
          </div>
          <div ref="hue" class="ui-colorpicker-hue" @mousedown="onHueMousedown($event)">
            <div ref="hueHandle" class="ui-colorpicker-hue-handle"></div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<style lang="css" src="./colorpicker.css"></style>
<style>
  .slide-enter-active, .slide-leave-active {
    transition: 0.4s ease;
  }

  .slide-enter{
    opacity: 1;
  },
  .slide-leave {
    opacity: 0;
  }
</style>
<script>
  import domHandler from '../dom/domhandler';
  export default {
    name: 'p-colorPicker',
    props: {
      value: {
        type: String,
        default: null
      },
      colorpickerStyle: {
        type: Object,
        default: null
      },
      colorpickerStyleClass: {
        type: String,
        default: null
      },
      inline: {
        type: Boolean,
        default: false
      },
      format: {
        type: String,
        default: 'hex'
      },
      appendTo: {
        type: String,
        default: null
      },
      disabled: {
        type: Boolean,
        default: false
      },
      tabindex: {
        type: String,
        default: null
      },
      inputId: {
        type: String,
        default: null
      }
    },
    data () {
      return {
        inputValue: this.value,
        filled: false,
        inputBgColor: null,
        shown: false,
        panelVisible: false,
        defaultColor: 'ff0000',
        selfClick: false,
        colorDragging: false,
        hueDragging: false
      };
    },
    watch: {
      value (value) {
        this.inputValue = value;
      },
      inputValue (value) {
        this.writeValue(value);
        this.$emit('input', value);
      }
    },
    methods: {
      onHueMousedown (event) {
        if (this.disabled) {
          return;
        }

        this.bindDocumentMousemoveListener();
        this.bindDocumentMouseupListener();

        this.hueDragging = true;
        this.pickHue(event);
      },

      pickHue (event) {
        let top = this.$refs.hue.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
        this.inputValue = this.validateHSB({
          h: Math.floor(360 * (150 - Math.max(0, Math.min(150, (event.pageY - top)))) / 150),
          s: this.inputValue.s,
          b: this.inputValue.b
        });

        this.updateColorSelector();
        this.updateUI();
        this.updateModel();
        this.$emit('change', {originalEvent: event, value: this.getValueToUpdate()});
      },

      onColorMousedown (event) {
        if (this.disabled) {
          return;
        }

        this.bindDocumentMousemoveListener();
        this.bindDocumentMouseupListener();

        this.colorDragging = true;
        this.pickColor(event);
      },

      pickColor (event) {
        let rect = this.$refs.colorSelector.getBoundingClientRect();
        let top = rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
        let left = rect.left + document.body.scrollLeft;
        let saturation = Math.floor(100 * (Math.max(0, Math.min(150, (event.pageX - left)))) / 150);
        let brightness = Math.floor(100 * (150 - Math.max(0, Math.min(150, (event.pageY - top)))) / 150);
        this.inputValue = this.validateHSB({
          h: this.inputValue.h,
          s: saturation,
          b: brightness
        });

        this.updateUI();
        this.updateModel();
        this.$emit('change', {originalEvent: event, value: this.getValueToUpdate()});
      },

      getValueToUpdate () {
        let val;
        switch (this.format) {
          case 'hex':
            val = '#' + this.HSBtoHEX(this.inputValue);
            break;

          case 'rgb':
            val = this.HSBtoRGB(this.inputValue);
            break;

          case 'hsb':
            val = this.inputValue;
            break;
        }

        return val;
      },

      updateModel () {
        this.inputValue = this.getValueToUpdate();
      },

      writeValue (value) {
        if (value) {
          switch (this.format) {
            case 'hex':
              this.inputValue = this.HEXtoHSB(value);
              break;

            case 'rgb':
              this.inputValue = this.RGBtoHSB(value);
              break;

            case 'hsb':
              this.inputValue = value;
              break;
          }
        } else {
          this.inputValue = this.HEXtoHSB(this.defaultColor);
        }

        this.updateColorSelector();
        this.updateUI();
      },

      updateColorSelector () {
        this.$refs.colorSelector.style.backgroundColor = '#' + this.HSBtoHEX(this.inputValue);
      },

      updateUI () {
        this.$refs.colorHandle.style.left = Math.floor(150 * this.inputValue.s / 100) + 'px';
        this.$refs.colorHandle.style.top = Math.floor(150 * (100 - this.inputValue.b) / 100) + 'px';
        this.$refs.hueHandle.style.top = Math.floor(150 - (150 * this.inputValue.h / 360)) + 'px';
        this.inputBgColor = '#' + this.HSBtoHEX(this.inputValue);
      },

      show () {
        this.$refs.pickerPanel.style.zIndex = String(++domHandler.zindex);
        this.panelVisible = true;
        this.shown = true;
      },

      hide () {
        this.panelVisible = false;
        this.unbindDocumentClickListener();
      },

      onShow () {
        this.alignPanel();
        this.bindDocumentClickListener();
      },

      alignPanel () {
        if (this.appendTo) { domHandler.absolutePosition(this.$refs.pickerPanel, this.$refs.pickerInput); } else { domHandler.relativePosition(this.$refs.pickerPanel, this.$refs.pickerInput); }
      },

      onInputClick () {
        this.selfClick = true;
        this.togglePanel();
      },

      togglePanel () {
        if (!this.panelVisible) { this.show(); } else { this.hide(); }
      },

      onInputKeydown (event) {
        switch (event.which) {
          // space
          case 32:
            this.togglePanel();
            event.preventDefault();
            break;

          // escape and tab
          case 27:
          case 9:
            this.hide();
            break;
        }
      },

      onPanelClick () {
        this.selfClick = true;
        this.panelVisible = !this.panelVisible;
      },

      setDisabledState (val) {
        this.disabled = val;
      },

      bindDocumentClickListener () {
        document.addEventListener('click', () => {
          if (!this.selfClick) {
            this.panelVisible = false;
            this.unbindDocumentClickListener();
          }

          this.selfClick = false;
        });
      },

      unbindDocumentClickListener () {
        document.removeEventListener('click', null);
      },

      bindDocumentMousemoveListener () {
        document.addEventListener('mousemove', (event) => {
          if (this.colorDragging) {
            this.pickColor(event);
          }

          if (this.hueDragging) {
            this.pickHue(event);
          }
        });
      },

      unbindDocumentMousemoveListener () {
        document.removeEventListener('mousemove', null);
      },

      bindDocumentMouseupListener () {
        document.addEventListener('mouseup', () => {
          this.colorDragging = false;
          this.hueDragging = false;
          this.unbindDocumentMousemoveListener();
          this.unbindDocumentMouseupListener();
        });
      },

      unbindDocumentMouseupListener () {
        document.removeEventListener('mouseup', null);
      },

      validateHSB (hsb) {
        return {
          h: Math.min(360, Math.max(0, hsb.h)),
          s: Math.min(100, Math.max(0, hsb.s)),
          b: Math.min(100, Math.max(0, hsb.b))
        };
      },

      validateRGB (rgb) {
        return {
          r: Math.min(255, Math.max(0, rgb.r)),
          g: Math.min(255, Math.max(0, rgb.g)),
          b: Math.min(255, Math.max(0, rgb.b))
        };
      },

      validateHEX (hex) {
        var len = 6 - hex.length;
        if (len > 0) {
          var o = [];
          for (var i = 0; i < len; i++) {
            o.push('0');
          }
          o.push(hex);
          hex = o.join('');
        }
        return hex;
      },

      HEXtoRGB (hex) {
        let hexValue = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
        return {r: hexValue >> 16, g: (hexValue & 0x00FF00) >> 8, b: (hexValue & 0x0000FF)};
      },

      HEXtoHSB (hex) {
        return this.RGBtoHSB(this.HEXtoRGB(hex));
      },

      RGBtoHSB (rgb) {
        var hsb = {
          h: 0,
          s: 0,
          b: 0
        };
        var min = Math.min(rgb.r, rgb.g, rgb.b);
        var max = Math.max(rgb.r, rgb.g, rgb.b);
        var delta = max - min;
        hsb.b = max;
        if (max !== 0) {

        }
        hsb.s = max !== 0 ? 255 * delta / max : 0;
        if (hsb.s !== 0) {
          if (rgb.r === max) {
            hsb.h = (rgb.g - rgb.b) / delta;
          } else if (rgb.g === max) {
            hsb.h = 2 + (rgb.b - rgb.r) / delta;
          } else {
            hsb.h = 4 + (rgb.r - rgb.g) / delta;
          }
        } else {
          hsb.h = -1;
        }
        hsb.h *= 60;
        if (hsb.h < 0) {
          hsb.h += 360;
        }
        hsb.s *= 100 / 255;
        hsb.b *= 100 / 255;
        return hsb;
      },

      HSBtoRGB (hsb) {
        var rgb = {
          r: null, g: null, b: null
        };
        var h = Math.round(hsb.h);
        var s = Math.round(hsb.s * 255 / 100);
        var v = Math.round(hsb.b * 255 / 100);
        if (s === 0) {
          rgb = {
            r: v,
            g: v,
            b: v
          };
        } else {
          var t1 = v;
          var t2 = (255 - s) * v / 255;
          var t3 = (t1 - t2) * (h % 60) / 60;
          if (h === 360) h = 0;
          if (h < 60) {
            rgb.r = t1;
            rgb.b = t2;
            rgb.g = t2 + t3;
          } else if (h < 120) {
            rgb.g = t1;
            rgb.b = t2;
            rgb.r = t1 - t3;
          } else if (h < 180) {
            rgb.g = t1;
            rgb.r = t2;
            rgb.b = t2 + t3;
          } else if (h < 240) {
            rgb.b = t1;
            rgb.r = t2;
            rgb.g = t1 - t3;
          } else if (h < 300) {
            rgb.b = t1;
            rgb.g = t2;
            rgb.r = t2 + t3;
          } else if (h < 360) {
            rgb.r = t1;
            rgb.g = t2;
            rgb.b = t1 - t3;
          } else {
            rgb.r = 0;
            rgb.g = 0;
            rgb.b = 0;
          }
        }
        return {r: Math.round(rgb.r), g: Math.round(rgb.g), b: Math.round(rgb.b)};
      },

      RGBtoHEX (rgb) {
        var hex = [
          rgb.r.toString(16),
          rgb.g.toString(16),
          rgb.b.toString(16)
        ];

        for (var key in hex) {
          if (hex[key].length === 1) {
            hex[key] = '0' + hex[key];
          }
        }

        return hex.join('');
      },

      HSBtoHEX (hsb) {
        return this.RGBtoHEX(this.HSBtoRGB(hsb));
      },

      updateFilled (value) {
        this.filled = value && value.length;
      }
    },
    created () {
      this.updateFilled(this.inputValue);
    },
    mounted () {
      if (this.appendTo) {
        if (this.appendTo === 'body') { document.body.appendChild(this.$refs.pickerPanel); } else { domHandler.appendChild(this.$refs.pickerPanel, this.appendTo); }
      }
    },
    updated () {
      if (this.shown) {
        this.onShow();
        this.shown = false;
      }
    },
    destroyed () {
      this.unbindDocumentClickListener();

      if (this.appendTo) {
        this.$refs.colorPicker.appendChild(this.$refs.pickerPanel);
      }
    }
  };
</script>
