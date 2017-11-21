<template>
  <div>
    <div :style="checkboxStyle" class="ui-chkbox ui-widget" :class="checkboxStyleClass">
      <div class="ui-helper-hidden-accessible">
        <input ref="cb" type="checkbox" :id="inputId" :name="name" :value="value" :checked="checked" @focus="onFocus"
               @blur="onBlur"
               :class="{'ui-state-focus':focused}" @change="handleChange" :disabled="disabled" :tabindex="tabindex">
      </div>
      <div class="ui-chkbox-box ui-widget ui-corner-all ui-state-default" @click="onClick($event,true)"
           :class="{'ui-state-active':checked,'ui-state-disabled':disabled,'ui-state-focus':focused}">
        <span class="ui-chkbox-icon ui-clickable" :class="{'fa fa-check':checked}"></span>
      </div>
    </div>
    <label class="ui-chkbox-label" @click="onClick($event,true)"
           :class="{'ui-label-active':checked, 'ui-label-disabled':disabled, 'ui-label-focus':focused}"
           v-if="label" :for="inputId">{{label}}</label>
  </div>
</template>
<style lang="css" src="./checkbox.css"></style>
<script>
  export default {
    name: 'p-checkbox',
    data: function () {
      return {
        focused: false,
        checked: false
      };
    },
    model: {
      prop: 'model',
      event: 'onChange'
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      value: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: null
      },
      name: {
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
      model: {
        default: undefined
      }

    },
    methods: {
      onClick (event, focus) {
        event.preventDefault();

        if (this.disabled) {
          return;
        }

        this.checked = !this.checked;
        this.updateModel();

        if (focus) {
          this.$refs.cb.focus();
        }
      },
      handleChange (event) {
        this.checked = event.target.checked;
      },
      updateModel () {
        if (!this.binary) {
          if (this.checked) { this.addValue(); } else { this.removeValue(); }
        }

        this.$emit('onChange', this.checked);
      },
      onFocus (event) {
        this.focused = true;
      },

      onBlur (event) {
        this.focused = false;
      },

      isChecked () {
        if (this.binary) { return this.model; } else { return this.model && this.model.indexOf(this.value) > -1; }
      },

      removeValue () {
        this.model = this.model.filter(val => val !== this.value);
      },

      addValue () {
        if (this.model) { this.model = [...this.model, this.value]; } else { this.model = [this.value]; }
      }
    },
    mounted: function () {
      this.checked = this.isChecked();
    }
  };
</script>
