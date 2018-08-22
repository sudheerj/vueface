<template>
  <div>
    <div :style="checkboxStyle"
         class="ui-chkbox ui-widget"
         :class="checkboxStyleClass">
      <div class="ui-helper-hidden-accessible">
        <input ref="cb"
               type="checkbox"
               :id="inputId"
               :name="name"
               v-model="newModel"
               :value="value"
               :disabled="disabled"
               :tabindex="tabindex"
               v-bind="$attrs"
               @focus="onFocus"
               @blur="onBlur"
               :class="{'ui-state-focus': focused}">
      </div>
      <div class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"
           @click.prevent="onClick($event, true)"
           :class="{
             'ui-state-active': checked,
             'ui-state-disabled': disabled,
             'ui-state-focus': focused
           }">
        <span class="ui-chkbox-icon ui-clickable"
              :class="{'fa fa-check': checked}">
        </span>
      </div>
    </div>
    <label class="ui-chkbox-label"
           @click.prevent="onClick($event, true)"
           :class="{
             'ui-label-active': checked,
             'ui-label-disabled':disabled,
             'ui-label-focus':focused
           }"
           v-if="label"
           :for="inputId">
      {{label}}
    </label>
  </div>
</template>
<style lang="css" src="./checkbox.css"></style>
<script>
  export default {
    name: 'vf-checkbox',
    inheritAttrs: false,
    model: {
      prop: 'model',
      event: 'input'
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      value: {},
      label: {
        type: String
      },
      name: {
        type: String
      },
      inputId: {
        type: String
      },
      tabindex: {
        type: [Number, String]
      },
      checkboxStyle: {},
      checkboxStyleClass: {
        type: String
      },
      model: {}
    },
    data () {
      return {
        focused: false,
        checked: false,
        newModel: this.model
      };
    },
    watch: {
      model (value) {
        this.newModel = value;
      },
      newModel (value) {
        this.$emit('input', value);
        this.$nextTick(() => {
          this.checked = this.$refs.cb.checked;
        });
      }
    },
    methods: {
      onClick (event, focus) {
        if (this.disabled) {
          return;
        }
        this.$refs.cb.click();
        this.checked = this.$refs.cb.checked;
        if (focus) {
          this.$refs.cb.focus();
        }
      },
      onFocus (event) {
        this.focused = true;
        this.$emit('focus', event);
      },
      onBlur (event) {
        this.focused = false;
        this.$emit('blur', event);
      }
    },
    mounted () {
      this.checked = this.$refs.cb.checked;
    }
  };
</script>
