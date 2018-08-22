<template>
  <div class="ui-widget ui-widget-content ui-corner-all ui-card dimensions">
    <div class="ui-card-header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div :style="contentStyle">
      <slot></slot>
    </div>
    <div class="ui-card-footer" v-if="$slots.footer || footer">
      <slot name="footer">{{ footer }}</slot>
    </div>
  </div>
</template>
<style lang="css" src="./card.css"></style>
<script>
  export default {
    name: 'vf-card',
    props: {
      header: {
        type: String,
        default: null
      },
      footer: {
        type: String,
        default: null
      },
      contentStyle: {
        type: String,
        default: null
      }
    }
  };
</script>
