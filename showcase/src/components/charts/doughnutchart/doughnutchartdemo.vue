<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">DoughnutChart</span>
          <span>A doughnut chart is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included.</span>
        </div>
      </div>
      <div id="wrapper">
        <p>Define the type as doughnut(type="doughnut").</p>
        <vf-charts type="doughnut" :data="doughnutData" width="100" height="20">></vf-charts>
      </div>
  </div>
</template>
<script>
  const doughnutData = {
    labels: ['VueJS','Angular','ReactJS'],
    datasets: [
      {
        data: [35, 35, 30],
        backgroundColor: [
          "#886384",
          "#12A2EB",
          "#FFCE56"
        ],
        hoverBackgroundColor: [
          "#126384",
          "#CDA2EB",
          "#FFCE56"
        ]
      }]
  };
  export default {
    name: 'doughnutchartdemo',
    data () {
      return {
        doughnutData
      };
    }
  };
</script>

