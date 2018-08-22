<template>
  <div class="ui-toolbar ui-widget ui-widget-header ui-corner-all ui-helper-clearfix" :style="toolbarStyle" :class="toolbarStyleClass">
    <slot></slot>
  </div>
</template>
<style lang="css" src="./toolbar.css"></style>
<script>
  export default {
    name: 'vf-toolbar',
    data: function () {
      return {
      };
    },
    props: {
      toolbarStyle: {
        type: String,
        default: null
      },
      toolbarStyleClass: {
        type: String,
        default: null
      }
    }

  };
</script>
