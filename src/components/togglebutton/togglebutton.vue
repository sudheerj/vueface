<template>
  <div :class="{'ui-button ui-togglebutton ui-widget ui-state-default ui-corner-all': true, 'ui-button-text-only': (!onIcon&&!offIcon),
                'ui-button-text-icon-left': (onIcon&&offIcon&&hasOnLabel()&&hasOffLabel()), 'ui-button-icon-only': (onIcon&&offIcon&&!hasOnLabel()&&!hasOffLabel()),
                'ui-state-active': checked,'ui-state-focus':focus,'ui-state-disabled':disabled, buttonStyleClass: true}"
       :style="buttonStyle"
       @click="toggle($event)">
    <div class="ui-helper-hidden-accessible">
      <input :name="name" ref="cb" type="checkbox" :id="inputId" :checked="checked" @focus="onFocus()" @blur="onBlur()"
             :tabindex="tabindex">
    </div>
    <span v-if="onIcon||offIcon" :class="getIconClass()"></span>
    <span
      class="ui-button-text ui-unselectable-text">{{checked ? hasOnLabel() ? this.onLabel : 'ui-btn' : hasOffLabel() ? this.offLabel : 'ui-btn'}}</span>
  </div>
</template>
<style lang="css" src="./togglebutton.css"></style>
<script>
  let focus = false;
  let checked = false;

  export default {
    name: 'p-toggleButton',
    data: function () {
      return {
        focus, checked
      };
    },
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      onLabel: {
        type: String,
        default: 'Yes'
      },
      offLabel: {
        type: String,
        default: 'No'
      },
      onIcon: {
        type: String,
        default: null
      },
      offIcon: {
        type: String,
        default: null
      },
      disabled: {
        type: Boolean,
        default: false
      },
      inputId: {
        type: String,
        default: null
      },
      tabindex: {
        type: Number,
        default: 0
      },
      buttonStyle: {
        type: String,
        default: null
      },
      buttonStyleClass: {
        type: String,
        default: null
      },
      name: {
        type: String,
        default: 'button'
      }
    },
    methods: {
      getIconClass () {
        let baseClass = 'ui-button-icon-left fa fa-fw';
        return baseClass + ' ' + (this.checked ? this.onIcon : this.offIcon);
      },

      toggle (event) {
        if (!this.disabled) {
          this.checked = !this.checked;
          this.$emit('change', this.checked);
          this.$refs.cb.focus();
        }
      },

      onFocus () {
        this.focus = true;
      },

      onBlur () {
        this.focus = false;
      },

      hasOnLabel () {
        return this.onLabel && this.onLabel.length > 0;
      },

      hasOffLabel () {
        return this.onLabel && this.onLabel.length > 0;
      }
    },
    mounted: function () {
      this.checked = this.value;
    }
  };
</script>
