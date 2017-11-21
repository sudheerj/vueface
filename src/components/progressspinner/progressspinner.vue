<template>
  <div class="ui-progress-spinner" :style="indicatorStyle" :class="indicatorStyleClass" name="progressSpinner">
    <svg class="ui-progress-spinner-svg" viewBox="25 25 50 50" :animation-duration="animationDuration">
      <circle class="ui-progress-spinner-circle" cx="50" cy="50" r="20" :fill="fill" :stroke-width="strokeWidth" stroke-miterlimit="10"/>
    </svg>
  </div>
</template>
<style lang="css" src="./progressspinner.css"></style>
<script>
  export default {
    name: 'p-progressSpinner',
    data: function () {
      return {
        cornerStyleClass: 'ui-corner-all'
      };
    },
    props: {
      fill: {
        type: String,
        default: 'none'
      },
      strokeWidth: {
        type: String,
        default: '2'
      },
      animationDuration: {
        type: String,
        default: '2s'
      },
      indicatorStyle: {
        type: String,
        default: null
      },
      indicatorStyleClass: {
        type: String,
        default: null
      }
    }
  };
</script>
