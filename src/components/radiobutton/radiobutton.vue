<template>
  <div>
    <div :style="radioStyle" class="ui-radiobutton ui-widget" :class="radioStyleClass">
      <div class="ui-helper-hidden-accessible">
        <input ref="rb" type="radio" :id="inputId" :name="name" :value="value" :tabindex="tabindex"
               :checked="checked" @change="onChange($event)" @focus="onFocus($event)" @blur="onBlur($event)">
      </div>
      <div @click="handleClick()"
           :class="{'ui-radiobutton-box ui-widget ui-state-default':true,
                'ui-state-active':checked,'ui-state-disabled':disabled,'ui-state-focus':focused}">
        <span class="ui-radiobutton-icon ui-clickable" :class="{'fa fa-circle':checked}"></span>
      </div>
    </div>
    <label class="ui-radiobutton-label" @click="select()"
           :class="{'ui-label-active':checked,'ui-label-disabled':disabled,'ui-label-focus':focused}"
           v-if="label" :for="inputId">{{label}}</label>
  </div>
</template>
<style lang="css" src="./radiobutton.css"></style>
<script>
  export default {
    name: 'p-radiobutton',
    data: function () {
      return {
        checked: false, focused: false
      };
    },
    model: {
      prop: 'model',
      event: 'click'
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
      value: {
        type: String,
        default: null
      },
      model: {
        type: String,
        default: null
      },
      name: {
        type: String,
        default: null
      },
      inputId: {
        type: String,
        default: null
      },
      tabindex: {
        type: Number,
        default: 0
      },
      radioStyle: {
        type: String,
        default: null
      },
      radioStyleClass: {
        type: String,
        default: null
      }
    },
    methods: {
      handleClick () {
        if (!this.disabled) {
          this.select();
        }
      },

      select () {
        if (!this.disabled) {
          this.$emit('click', null);
          this.$refs.rb.checked = true;
          this.checked = true;
        }
      },

      onFocus (event) {
        this.focused = true;
      },

      onBlur (event) {
        this.focused = false;
      },

      onChange (event) {
        this.select();
      },

      checkedStatus () {
        this.checked = this.model === this.value;
      }
    },
    mounted: function () {
      this.checkedStatus();
    }
  };
</script>
