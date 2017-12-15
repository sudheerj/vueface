<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">PieChart</span>
          <span>A pie chart is a circular statistical graphic, which is divided into slices to illustrate numerical proportion.</span>
        </div>
      </div>
      <div id="wrapper">
        <p>Define the type as pieData(type="pieData").</p>
        <p-charts type="pie" :data="pieData" width="100" height="20"></p-charts>
      </div>
  </div>
</template>
<script>
  const pieData = {
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
    name: 'piechartdemo',
    data () {
      return {
        pieData
      };
    }
  };
</script>

