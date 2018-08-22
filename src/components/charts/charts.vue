<template>
  <div ref="chart">
    <canvas :width="width" :height="height" @click="onCanvasClick($event)"></canvas>
  </div>
  </button>
</template>
<script>
  var Chart = require('../../../node_modules/chart.js/dist/Chart.js');

  export default {
    name: 'vf-charts',
    data: function () {
      return {
      };
    },
    props: {
      width: {
        type: String,
        default: null
      },
      height: {
        type: String,
        default: null
      },
      type: {
        type: String,
        default: null
      },
      options: {
        type: String,
        default: null
      },
      data: {
        type: Object,
        default: () => {}
      }
    },
    methods: {

      onCanvasClick (event) {
        if (this.chart) {
          let element = this.chart.getElementAtEvent(event);
          let dataset = this.chart.getDatasetAtEvent(event);
          if (element && element[0] && dataset) {
            this.$emit('onDataSelect', {originalEvent: event, element: element[0], dataset: dataset});
          }
        }
      },

      initChart () {
        this.chart = new Chart(this.getCanvas(), {
          type: this.type,
          data: this.data,
          options: this.options
        });
      },

      getCanvas () {
        return this.$refs.chart.children[0];
      },

      getBase64Image () {
        return this.chart.toBase64Image();
      },

      generateLegend () {
        if (this.chart) {
          this.chart.generateLegend();
        }
      },

      refresh () {
        if (this.chart) {
          this.chart.update();
        }
      },

      reinit () {
        if (this.chart) {
          this.chart.destroy();
          this.initChart();
        }
      }
    },
    mounted: function () {
      this.initChart();
    }
  };
</script>
