<template>
  <div :style="indicatorStyle" role="progressbar" aria-valuemin="0" :aria-valuenow="value" aria-valuemax="100"
       :class="{'indicatorStyleClass': true,'ui-progressbar ui-widget ui-widget-content ui-corner-all': true, 'ui-progressbar-determinate': (mode === 'determinate'), 'ui-progressbar-indeterminate': (mode === 'indeterminate')}">
    <div class="ui-progressbar-value ui-progressbar-value-animate ui-widget-header ui-corner-all" :style="{width: value + '%', display :'block'}" ></div>
    <div class="ui-progressbar-label" :style="value ? 'display: block' : 'display: none'" v-if="showValue">{{value}}{{unit}}</div>
  </div>
</template>
<style lang="css" src="./progressbar.css"></style>
<script>
  export default {
    name: 'vf-progressBar',
    data: function () {
      return {};
    },
    props: {
      value: {
        type: Number,
        default: null
      },
      showValue: {
        type: Boolean,
        default: true
      },
      indicatorStyle: {
        type: String,
        default: null
      },
      indicatorStyleClass: {
        type: String,
        default: null
      },
      unit: {
        type: String,
        default: '%'
      },
      mode: {
        type: String,
        default: 'determinate'
      }
    }
  };
</script>
