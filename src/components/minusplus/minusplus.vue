<template>
  <div :class="[minusplusStyleClass, {'ui-minusplus ui-widget ui-widget-content ui-corner-all': true,'ui-minusplus-vertical': vertical, 'ui-state-disabled': disabled}]">
    <vf-button  :class="getButtonClass(true)" @click="decrement()" :label="decrementLabel">
    </vf-button>
    <div class="ui-minusplus-value">
      <slot>{{ inputValue }}</slot>
    </div>
    <vf-button :class="getButtonClass(false)" @click="increment()" :label="incrementLabel">
    </vf-button>
  </div>
</template>

<script>
  export default {
    name: 'vf-minusplus',
    props: {
      value: {
        default: 0,
        type: Number
      },
      min: {
        default: 0,
        type: Number
      },
      max: {
        default: 10,
        type: Number
      },
      step: {
        default: 1,
        type: Number
      },
      vertical: {
        default: false,
        type: Boolean
      },
      disabled: {
        type: Boolean,
        default: false
      },
      decrementLabel: {
        type: String,
        default: '-'
      },
      incrementLabel: {
        type: String,
        default: '+'
      },
      minusplusStyleClass: {
        type: String,
        default: null
      }
    },
    data () {
      return {
        inputValue: 0
      };
    },
    computed: {
      isIncrement () {
        return (this.inputValue + this.step) <= this.max;
      },
      isDecrement () {
        return (this.inputValue - this.step) >= this.min;
      }
    },
    methods: {
      getButtonClass (decrement) {
        let buttonClass = '';
        if (decrement) {
          if (!this.isDecrement) buttonClass += ' ui-state-disabled';
        } else {
          if (!this.isIncrement) buttonClass += ' ui-state-disabled';
        }
        return buttonClass;
      },
      increment () {
        if (this.isIncrement) {
          this.inputValue = this.inputValue + this.step;
          this.$emit('onIncrement', this.inputValue);
          this.$emit('input', this.inputValue);
        }
      },
      decrement () {
        if (this.isDecrement) {
          this.inputValue = this.inputValue - this.step;
          this.$emit('onDecrement', this.inputValue);
          this.$emit('input', this.inputValue);
        }
      }
    },
    watch: {
      value: {
        handler: function (newVal, oldVal) {
          this.inputValue = parseInt(newVal);
        }
      }
    },
    created () {
      this.inputValue = this.value;
      if (this.step < 1) this.step = 1;
    }
  };
</script>
<style lang="scss" src="./minusplus.css"></style>

