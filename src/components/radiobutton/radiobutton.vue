<template>
  <div>
    <div :style="radioStyle"
         class="ui-radiobutton ui-widget"
         :class="radioStyleClass">
      <div class="ui-helper-hidden-accessible">
          <input ref="rb"
                 type="radio"
                 :id="inputId"
                 :name="name"
                 :tabindex="tabindex"
                 :disabled="disabled"  
                 v-model="newModel"
                 :value="value"
                 v-bind="$attrs" 
                 @focus="onFocus($event)"
                 @blur="onBlur($event)">
      </div>
      <div @click="!disabled && select()"
           :class="{
            'ui-radiobutton-box ui-widget ui-state-default': true,
            'ui-state-active': checked,
            'ui-state-disabled': disabled,
            'ui-state-focus': focused
           }">
          <span class="ui-radiobutton-icon ui-clickable" 
                :class="{'fa fa-circle': checked}">
          </span>
      </div>
    </div>
    <label class="ui-radiobutton-label" 
           @click="select" 
           :class="{
            'ui-label-active': checked,
            'ui-label-disabled': disabled,
            'ui-label-focus': focused
           }"
           v-if="label"
           :for="inputId">
      {{label}}
    </label>
  </div>
</template>
<style lang="css" src="./radiobutton.css"></style>
<script>
  export default {
    name: 'p-radioButton',
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
      label: {
        type: String
      },
      model: {},
      value: {},
      name: {
        type: String
      },
      inputId: {
        type: String
      },
      tabindex: {
        type: [Number, String]
      },
      radioStyle: {},
      radioStyleClass: {
        type: String
      }
    },
    data () {
      return {
        checked: false,
        focused: false,
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
          this.checked = this.$refs.rb.checked;
        });
      }
    },
    methods: {
      select (event) {
        if (this.disabled) {
          return;
        }
        this.$refs.rb.click();
        this.$emit('click');
        this.checked = this.$refs.rb.checked;
        if (focus) {
          this.$refs.rb.focus();
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
      this.checked = this.$refs.rb.checked;
    }
  };
</script>
