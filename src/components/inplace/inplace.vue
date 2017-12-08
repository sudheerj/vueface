<template>
  <div :class="['ui-inplace', 'ui-widget', { inplaceStyleClass: true}]" :style="inplaceStyle">
    <div ref="inplace" :class="['ui-inplace-display', {'ui-state-disabled':disabled}]" @click="activate($event)" v-if="!active">
      <slot name="display"></slot>
    </div>
    <div class="ui-inplace-content" v-if="active">
      <slot name="content"></slot>
      <p-button type="button" icon="fa-close" @click="deactivate($event)" v-if="closable"></p-button>
    </div>
  </div>
</template>
<style lang="css" src="./inplace.css"></style>
<script>
  import Button from '../button/button.vue';
  export default {
    name: 'p-inplace',
    props: {
      active: this.activated,
      closable: Boolean,
      disabled: Boolean,
      inplaceStyle: String,
      inplaceStyleClass: String
    },
    data () {
      return {
        hover: false,
        activated: false
      };
    },
    components: {
      Button
    },
    methods: {
      activate (event) {
        if (!this.disabled) {
          this.active = true;
          this.$emit('activate', event);
        }
      },
      deactivate (event) {
        if (!this.disabled) {
          this.active = false;
          this.hover = false;
          this.$emit('deactivate', event);
        }
      }
    },
    mounted () {
      this.activated = this.active;
    }
  };
</script>
