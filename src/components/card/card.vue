<template>
  <div class="card dimensions">
    <div class="card-header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="card-content" :style="contentStyle">
      <slot></slot>
    </div>
    <div class="card-footer" v-if="$slots.footer || footer">
      <slot name="footer">{{ footer }}</slot>
    </div>
  </div>
</template>
<style lang="css" src="./card.css"></style>
<script>
  export default {
    name: 'p-card',
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
