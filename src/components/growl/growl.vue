<template>
  <div ref="container" :class="['ui-growl ui-widget', growlStyleClass]" :style="[growlStyle, {'zIndex': zIndex}]" >
    <div ref="msgel" v-for="(msg,index) in value" class="" aria-live="polite"
         :class="['ui-growl-item-container ui-state-highlight ui-corner-all ui-shadow', {'ui-growl-message-info':msg.severity == 'info','ui-growl-message-warn':msg.severity == 'warn',
                    'ui-growl-message-error':msg.severity == 'error','ui-growl-message-success':msg.severity == 'success'}]" @click="onMessageClick(index)">
      <div class="ui-growl-item">
        <div class="ui-growl-icon-close fa fa-close" @click="remove(index)"></div>
        <span :class="['ui-growl-image fa fa-2x', {'fa-info-circle':msg.severity == 'info','fa-exclamation-circle':msg.severity == 'warn',
                                'fa-close':msg.severity == 'error','fa-check':msg.severity == 'success'}]"></span>
        <div class="ui-growl-message">
          <span class="ui-growl-title">{{msg.summary}}</span>
          <p v-html="msg.detail"></p>
        </div>
        <div style="clear: both;"></div>
      </div>
    </div>
  </div>
</template>
<style lang="css" src="./growl.css"></style>
<script>
  import domHandler from '../dom/domhandler';
  export default {
    name: 'vf-growl',
    data: function () {
      return {
        zIndex: ++domHandler.zindex,

        container: null,

        timeout: null,

        preventRerender: false,

        _value: null,

        _growlStyle: null
      };
    },
    props: {
      sticky: {
        type: Boolean,
        default: false
      },
      life: {
        type: [String, Number],
        default: 3000
      },
      growlStyle: {
        type: Object,
        default: null
      },
      growlStyleClass: {
        type: String,
        default: null
      },
      value: {
        type: Array,
        default: []
      }
    },
    methods: {
      handleValueChange () {
        if (this.preventRerender) {
          this.preventRerender = false;
          return;
        }

        domHandler.fadeIn(this.container, 250);

        if (!this.sticky) {
          this.initTimeout();
        }
      },

      initTimeout () {
        if (this.timeout) {
          clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
          this.removeAll();
        }, this.life);
      },

      remove (index) {
        domHandler.fadeOut(this.$refs.msgel, 250);

        setTimeout(() => {
          this.preventRerender = true;
          this.$emit('onClose', {message: this.value[index]});

          this._value = this.value.filter((val, i) => i !== index);
          this.$emit('valueChange', this._value);
        }, 250);
      },

      removeAll () {
        if (this.value && this.value.length) {
          domHandler.fadeOut(this.container, 250);

          setTimeout(() => {
            this.value.forEach((msg, index) => this.$emit('onClose', {message: this.value[index]}));
            this._value = [];
            this.$emit('valueChange', this._value);
          }, 250);
        }
      },

      onMessageClick (i) {
        this.$emit('onClick', {message: this.value[i]});
      }

    },
    mounted: function () {
      this.container = this.$refs.container;

      if (!this.sticky) {
        this.initTimeout();
      }
    },
    destroyed: function () {
      if (!this.sticky) {
        clearTimeout(this.timeout);
      }
    },
    updated: function () {
      if (this.container) {
        this.handleValueChange();
      }
    },
    watch: {
      value (val) {
        this._value = val;
        if (this.container) {
          this.handleValueChange();
        }
      }
    }
  };
</script>
