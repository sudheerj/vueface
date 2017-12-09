<template>
  <div>
    <div :style="checkboxStyle" class="ui-chkbox ui-tristatechkbox ui-widget" :class="checkboxStyleClass">
      <div class="ui-helper-hidden-accessible">
        <input ref="input" type="text" :id="inputId" :name="name" :tabindex="tabindex" readonly :disabled="disabled" @keyup="onKeyup($event)" @keydown="onKeydown($event)" @focus="onFocus()" @blur="onBlur()">

      </div>
      <div class="ui-chkbox-box ui-widget ui-corner-all ui-state-default" @click="onClick($event)"
           :class="{'ui-state-active':value!=null,'ui-state-disabled':disabled,'ui-state-focus':focus}">
        <span class="ui-chkbox-icon fa ui-clickable" :class="{'fa-check':value==true,'fa-close':value==false}"></span>
      </div>
    </div>
    <label class="ui-chkbox-label" @click="onClick($event,input)"
           :cass="{'ui-label-active':value!=null, 'ui-label-disabled':disabled, 'ui-label-focus':focus}"
           v-if="label" :for="inputId">{{label}}</label>
  </div>
</template>
<style lang="css" src="./tristatecheckbox.css"></style>
<script>
  export default {
    name: 'p-tristatecheckbox',
    data: function () {
      return {
        focus: false
      };
    },
    model: {
      prop: 'value',
      event: 'onChange'
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: null
      },
      binary: {
        type: String,
        default: null
      },
      inputId: {
        type: String,
        default: null
      },
      tabindex: {
        type: Number,
        default: null
      },
      checkboxStyle: {
        type: String,
        default: null
      },
      checkboxStyleClass: {
        type: String,
        default: null
      },
      value: {
        default: undefined
      }

    },
    methods: {
      onClick (event) {
        if (!this.disabled) {
          this.toggle(event);
          this.focus = true;
          this.$refs.input.focus();
        }
      },

      onKeydown (event) {
        if (event.keyCode === 32) {
          event.preventDefault();
        }
      },

      onKeyup (event) {
        if (event.keyCode === 32) {
          this.toggle(event);
          event.preventDefault();
        }
      },

      toggle (event) {
        if (this.value === null || this.value === undefined) { this.value = true; } else if (this.value === true) { this.value = false; } else if (this.value === false) { this.value = null; }
        this.$emit('onChange', this.value);
      },

      onFocus () {
        this.focus = true;
      },

      onBlur () {
        this.focus = false;
      }

    }
  };
</script>
