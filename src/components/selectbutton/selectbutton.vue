<template>
  <div class="ui-selectbutton ui-buttonset ui-widget ui-corner-all"
       :class="'ui-buttonset-' + options.length">
    <div v-for="(option, index) in options"
         :key="index"
         class="ui-button ui-widget ui-state-default ui-button-text-only"
         :class="[optionStyleClass, {
          'ui-state-active': isChecked(option),
          'ui-state-disabled': disabled,
          'ui-state-focus': $refs.cbox && $refs.cbox[index] == focusedItem
         }]"
         @click="onItemClick($event, option, index)">
        <span class="ui-button-text ui-clickable">{{option.label}}</span>
        <div class="ui-helper-hidden-accessible">
            <input ref="cbox"
                   type="checkbox"
                   :value="option.value"
                   @focus="onFocus($event)"
                   @blur="onBlur($event)"
                   :tabindex="tabindex"
                   :disabled="disabled" />
        </div>
    </div>
  </div>
</template>
<style lang="css" src="./selectbutton.css"></style>
<script>
export default {
  name: 'vf-selectButton',
  props: {
    value: {},
    options: {
      type: Array,
      default: () => { return []; }
    },
    optionStyleClass: String,
    tabindex: {
      type: [String, Number]
    },
    disabled: Boolean,
    multiple: Boolean
  },
  data () {
    return {
      newValue: this.value,
      focusedItem: null
    };
  },
  watch: {
    value (value) {
      this.newValue = value;
    },
    newValue (value) {
      this.$emit('input', value);
    }
  },
  methods: {
    onItemClick (event, option, index) {
      if (this.disabled) {
        return;
      }
      this.$refs.cbox[index].focus();
      const checked = this.isChecked(option);
      if (this.multiple) {
        if (!checked) {
          this.newValue.push(option.value);
        } else {
          const i = this.newValue.indexOf(option.value);
          this.newValue.splice(i, 1);
        }
      } else {
        this.newValue = option.value;
      }
    },
    onFocus (event) {
      this.focusedItem = event.target;
      this.$emit('focus', event);
    },
    onBlur (event) {
      this.focusedItem = null;
      this.$emit('blur', event);
    },
    isChecked (option) {
      if (this.multiple) {
        return this.newValue.indexOf(option.value) >= 0;
      } else {
        return this.newValue === option.value;
      }
    }
  }
};
</script>
