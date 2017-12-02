<template>
  <div ref="checkbox" :class="[inputswitchStyleClass, {'ui-inputswitch ui-widget ui-widget-content ui-corner-all': true,
            'ui-state-disabled': disabled,'ui-inputswitch-checked':checked, 'ui-state-focus':focused}]" @click="toggle($event)"
       :style="inputswitchStyle">
    <div class="ui-inputswitch-off">
      <span class="ui-inputswitch-offlabel">{{offLabel}}</span>
    </div>
    <div class="ui-inputswitch-on">
      <span class="ui-inputswitch-onlabel">{{onLabel}}</span>
    </div>
    <div :class="{'ui-inputswitch-handle ui-state-default':true, 'ui-state-focus':focused}"></div>
    <div class="ui-helper-hidden-accessible">
      <input ref="in" v-model="newValue" type="checkbox" :aria-label="ariaLabel" :aria-labelledby="ariaLabelledBy" aria-live="polite" :id="inputId" @focus="onFocus($event)" @blur="onBlur($event)" readonly="readonly" :tabindex="tabindex"/>
    </div>
  </div>
</template>
<style lang="css" src="./inputswitch.css"></style>
<script>
  import domHandler from '../dom/domhandler';
  export default {
    name: 'p-inputSwitch',
    data: function () {
      return {
        checked: false,
        focused: false,
        container: null,
        handle: null,
        onContainer: null,
        offContainer: null,
        onLabelChild: null,
        offLabelChild: null,
        offset: null,
        ariaLabel: null,
        ariaLabelledBy: null,
        initialized: false,
        newValue: this.value
      };
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      onLabel: {
        type: String,
        default: 'On'
      },
      offLabel: {
        type: String,
        default: 'Off'
      },
      tabindex: {
        type: Number,
        default: 0
      },
      inputId: {
        type: String,
        default: null
      },
      inputswitchStyle: {
        type: String,
        default: null
      },
      inputswitchStyleClass: {
        type: String,
        default: null
      },
      ariaLabelTemplate: {
        type: String,
        default: 'InputSwitch {0}'
      }
    },
    methods: {
      render () {
        let onContainerWidth = domHandler.width(this.onContainer);
        let offContainerWidth = domHandler.width(this.offContainer);
        let spanPadding = domHandler.innerWidth(this.offLabelChild) - domHandler.width(this.offLabelChild);
        let handleMargins = domHandler.getOuterWidth(this.handle) - domHandler.innerWidth(this.handle);

        var containerWidth = (onContainerWidth > offContainerWidth) ? onContainerWidth : offContainerWidth;
        var handleWidth = containerWidth;

        this.handle.style.width = handleWidth + 'px';
        handleWidth = domHandler.width(this.handle);
        containerWidth = containerWidth + handleWidth + 6;

        var labelWidth = containerWidth - handleWidth - spanPadding - handleMargins;

        this.container.style.width = containerWidth + 'px';
        this.onLabelChild.style.width = labelWidth + 'px';
        this.offLabelChild.style.width = labelWidth + 'px';

        // position
        this.offContainer.style.width = (domHandler.width(this.container) - 5) + 'px';
        this.offset = domHandler.width(this.container) - domHandler.getOuterWidth(this.handle);

        // default value
        if (this.checked) {
          this.handle.style.left = this.offset + 'px';
          this.onContainer.style.width = this.offset + 'px';
          this.offLabelChild.style.marginRight = -this.offset + 'px';
        } else {
          this.onContainer.style.width = 0 + 'px';
          this.onLabelChild.style.marginLeft = -this.offset + 'px';
        }

        this.initialized = true;
      },

      toggle (event) {
        if (!this.disabled) {
          if (this.checked) {
            this.checked = false;
            this.uncheckUI();
          } else {
            this.checked = true;
            this.checkUI();
          }

          this.$emit('onChange', {
            originalEvent: event,
            checked: this.checked
          });
          this.$refs.in.focus();
        }
      },

      checkUI () {
        this.onContainer.style.width = this.offset + 'px';
        this.onLabelChild.style.marginLeft = 0 + 'px';
        this.offLabelChild.style.marginRight = -this.offset + 'px';
        this.handle.style.left = this.offset + 'px';
        this.updateAriaLabel();
      },

      uncheckUI () {
        this.onContainer.style.width = 0 + 'px';
        this.onLabelChild.style.marginLeft = -this.offset + 'px';
        this.offLabelChild.style.marginRight = 0 + 'px';
        this.handle.style.left = 0 + 'px';
        this.updateAriaLabel();
      },

      onFocus (event) {
        this.focused = true;
      },

      onBlur (event) {
        this.focused = false;
      },

      setDisabledState (val) {
        this.disabled = val;
      },

      updateAriaLabel () {
        let pattern = /{(.*?)}/;
        let value = this.checked ? this.onLabel : this.offLabel;

        this.ariaLabel = this.ariaLabelTemplate.replace(this.ariaLabelTemplate.match(pattern)[0], value);
      }
    },
    watch: {
      value (value) {
        this.newValue = value;
      },
      newValue (value) {
        this.$emit('onChange', {
          originalEvent: event,
          checked: value
        });
      }
    },
    mounted: function () {
      this.container = this.$refs.checkbox;
      this.handle = domHandler.findSingle(this.container, 'div.ui-inputswitch-handle');
      this.onContainer = domHandler.findSingle(this.container, 'div.ui-inputswitch-on');
      this.offContainer = domHandler.findSingle(this.container, 'div.ui-inputswitch-off');
      this.onLabelChild = domHandler.findSingle(this.onContainer, 'span.ui-inputswitch-onlabel');
      this.offLabelChild = domHandler.findSingle(this.offContainer, 'span.ui-inputswitch-offlabel');
      if (this.container && this.container.offsetParent && !this.initialized) {
        this.render();
      }
    }
  };
</script>
