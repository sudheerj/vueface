<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">LineChart</span>
          <span>A line chart or line graph is a type of chart which displays information as a series of data points called 'markers' connected by straight line segments.</span>
        </div>
      </div>
      <div id="wrapper">
        <p>Define the type as lineData(type="lineData").</p>
        <vf-charts type="line" :data="lineData" width="100" height="20">></vf-charts>
      </div>
  </div>
</template>
<script>
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July' ,'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'VueJS downloads',
        fill: false,
        borderColor: '#1988E5',
        data: [65, 88, 80, 81, 56, 95, 60, 65, 88, 80, 81, 56, 95, 60,]
      },
      {
        label: 'Angular downloads',
        fill: false,
        borderColor: '#799342',
        data: [77, 66, 50, 69, 86, 97, 90, 77, 66, 50, 69, 86, 97, 90,]
      }
    ]
  };
  export default {
    name: 'chartsdemo',
    data () {
      return {
        lineData
      };
    }
  };
</script>

