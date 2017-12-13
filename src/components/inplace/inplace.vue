<template>
  <div :class="['ui-inplace', 'ui-widget', { inplaceStyleClass: true}]" :style="inplaceStyle">
    <div ref="inplace" :class="['ui-inplace-display', {'ui-state-disabled':disabled}]" @click="activate($event)" v-if="!isActive">
      <slot name="display"></slot>
    </div>
    <div class="ui-inplace-content" v-if="isActive">
      <slot name="content"></slot>
      <p-button type="button" icon="fa-close" @click="deactivate($event)" v-if="closable"></p-button>
    </div>
  </div>
</template>
<style lang="css" src="./inplace.css"></style>
<script>
  export default {
    name: 'p-inplace',
    props: {
      active: Boolean,
      closable: Boolean,
      disabled: Boolean,
      inplaceStyle: String,
      inplaceStyleClass: String
    },
    data () {
      return {
        hover: false,
        isActive: this.active
      };
    },
    methods: {
      activate (event) {
        if (!this.disabled) {
          this.isActive = true;
          this.$emit('activate', event);
        }
      },
      deactivate (event) {
        if (!this.disabled) {
          this.isActive = false;
          this.hover = false;
          this.$emit('deactivate', event);
        }
      }
    }
  };
</script>
