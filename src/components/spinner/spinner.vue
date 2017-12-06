<template>
  <span class="ui-spinner ui-widget ui-corner-all">
      <input ref="inputfield"
        :type="type"
        :id="inputId" 
        :value="valueAsString"
        class="ui-spinner-input ui-inputtext ui-widget ui-state-default ui-corner-all"
        :size="size"
        :maxlength="maxlength"
        :tabindex="tabindex"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        @keydown="onInputKeydown($event)"
        @keyup="onInputKeyup($event)"
        @keypress="onInputKeyPress($event)"
        @blur="onInputBlur($event)"
        @change="handleChange($event)"
        @focus="onInputFocus($event)">
      <button type="button" 
        :class="[
          'ui-spinner-button ui-spinner-up ui-corner-tr ui-button ui-widget ui-state-default',{
          'ui-state-disabled': disabled
        }]"
        :disabled="disabled"
        :readonly="readonly"
        @mouseleave="onUpButtonMouseleave($event)"
        @mousedown="onUpButtonMousedown($event)"
        @mouseup="onUpButtonMouseup($event)">
        <span class="fa fa-caret-up ui-clickable"></span>
      </button>
      <button type="button"
              :class="[
                'ui-spinner-button ui-spinner-down ui-corner-br ui-button ui-widget ui-state-default',{
                'ui-state-disabled': disabled
              }]"
              :disabled="disabled"
              :readonly="readonly"
              @mouseleave="onDownButtonMouseleave($event)"
              @mousedown="onDownButtonMousedown($event)"
              @mouseup="onDownButtonMouseup($event)">
          <span class="fa fa-caret-down ui-clickable"></span>
      </button>
  </span>
</template>
<style lang="css" src="./spinner.css"></style>
<script>
  export default {
    name: 'p-spinner',
    props: {
      value: {
        type: [Number, String]
      },
      step: {
        type: Number,
        default: 1
      },
      min: {
        type: Number
      },
      max: {
        type: Number
      },
      maxlength: {
        type: Number
      },
      size: {
        type: Number
      },
      placeholder: {
        type: String
      },
      inputId: {
        type: String
      },
      disabled: {
        type: Boolean
      },
      readonly: {
        type: Boolean
      },
      decimalSeparator: {
        type: String,
        default: '.'
      },
      thousandSeparator: {
        type: String,
        default: ','
      },
      tabindex: {
        type: Number
      },
      formatInput: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'text'
      },
      required: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        filled: false,
        newValue: this.value,
        valueAsString: null,
        keyPattern: new RegExp('/[0-9\+\-]/'),
        precision: null,
        timer: null,
        focus: false
      };
    },
    watch: {
      value (value) {
        this.newValue = value;
      },
      newValue (value) {
        this.formatValue();
        this.updateFilled(value);
        this.$emit('input', value);
      }
    },
    methods: {
      updateFilled (value) {
        this.filled = value && value.length;
      },
      repeat (event, interval, dir) {
        let i = interval || 500;

        this.clearTimer();
        this.timer = setTimeout(() => {
          this.repeat(event, 40, dir);
        }, i);

        this.spin(event, dir);
      },

      spin (event, dir) {
        let step = this.step * dir;
        let currentValue = this.newValue || 0;

        if (this.precision) {
          this.newValue = parseFloat(this.toFixed(currentValue + step, this.precision));
        } else {
          this.newValue = currentValue + step;
        }

        if (this.maxlength !== undefined && this.newValue.toString().length > this.maxlength) {
          this.newValue = currentValue;
        }

        if (this.min !== undefined && this.newValue < this.min) {
          this.newValue = this.min;
        }

        if (this.max !== undefined && this.newValue > this.max) {
          this.newValue = this.max;
        }

        this.formatValue();
        this.$emit('change', event);
      },

      toFixed (value, precision) {
        let power = Math.pow(10, precision || 0);
        return String(Math.round(value * power) / power);
      },

      onUpButtonMousedown (event) {
        if (!this.disabled) {
          this.$refs.inputfield.focus();
          this.repeat(event, null, 1);
          this.updateFilled();
        }
      },

      onUpButtonMouseup (event) {
        if (!this.disabled) {
          this.clearTimer();
        }
      },

      onUpButtonMouseleave (event) {
        if (!this.disabled) {
          this.clearTimer();
        }
      },

      onDownButtonMousedown (event) {
        if (!this.disabled) {
          this.$refs.inputfield.focus();
          this.repeat(event, null, -1);
          this.updateFilled();
        }
      },

      onDownButtonMouseup (event) {
        if (!this.disabled) {
          this.clearTimer();
        }
      },

      onDownButtonMouseleave (event) {
        if (!this.disabled) {
          this.clearTimer();
        }
      },

      onInputKeydown (event) {
        if (event.which === 38) {
          this.spin(event, 1);
          event.preventDefault();
        } else if (event.which === 40) {
          this.spin(event, -1);
          event.preventDefault();
        }
      },

      onInputKeyPress (event) {
        let inputChar = String.fromCharCode(event.charCode);
        if (!this.keyPattern.test(inputChar) && inputChar !== this.decimalSeparator && event.keyCode !== 9 && event.keyCode !== 8 && event.keyCode !== 37 && event.keyCode !== 39 && event.keyCode !== 46) {
          event.preventDefault();
        }
      },

      onInputKeyup (event) {
        this.newValue = this.parseValue((event.target).value);
        this.formatValue();
        this.updateFilled();
      },

      onInputBlur (event) {
        this.focus = false;
        this.$emit('blur', event);
      },

      onInputFocus (event) {
        this.focus = true;
        this.$emit('focus', event);
      },

      parseValue (val) {
        let value;

        if (this.formatInput) {
          val = val.split(this.thousandSeparator).join('');
        }

        if (val.trim() === '') {
          value = null;
        } else {
          if (this.precision) {
            value = parseFloat(val.replace(',', '.'));
          } else {
            value = parseInt(val);
          }

          if (!isNaN(value)) {
            if (this.max !== undefined && value > this.max) {
              value = this.max;
            }

            if (this.min !== undefined && value < this.min) {
              value = this.min;
            }
          } else {
            value = null;
          }
        }

        return value;
      },

      formatValue () {
        if (this.newValue !== null && this.newValue !== undefined) {
          let textValue = String(this.newValue).replace('.', this.decimalSeparator);

          if (this.formatInput) {
            textValue = textValue.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandSeparator);
          }

          this.valueAsString = textValue;
        } else {
          this.valueAsString = '';
        }

        this.$refs.inputfield.value = this.valueAsString;
      },

      handleChange (event) {
        this.$emit('change', event);
      },

      clearTimer () {
        if (this.timer) {
          clearInterval(this.timer);
        }
      }
    },
    mounted () {
      this.updateFilled(this.newValue);
      this.formatValue();
      if (Math.floor(this.step) === 0) {
        this.precision = this.step.toString().split(/[,]|[.]/)[1].length;
      }
    }
  };
</script>
