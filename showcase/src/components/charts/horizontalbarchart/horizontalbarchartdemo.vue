<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">HorizontalBarChart</span>
          <span>A horizontal bar chart is a variation on a vertical bar chart. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.</span>
        </div>
      </div>
      <div id="wrapper">
        <p>Define the type as horizontalBar(type="horizontalBar").</p>
        <p-charts type="horizontalBar" :data="horizontalBarData" width="100" height="20">></p-charts>
      </div>
  </div>
</template>
<script>
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July' ,'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'VueJS downloads',
        backgroundColor: '#F2A5F5',
        borderColor: '#1988E5',
        data: [65, 88, 80, 81, 56, 95, 60, 65, 88, 80, 81, 56, 95, 60,]
      },
      {
        label: 'Angular downloads',
        backgroundColor: '#DCCC65',
        borderColor: '#799342',
        data: [77, 66, 50, 69, 86, 97, 90, 77, 66, 50, 69, 86, 97, 90,]
      }
    ]
  };
  const horizontalBarData = barData;
  export default {
    name: 'horizontalbarchartdemo',
    data () {
      return {
        horizontalBarData
      };
    }
  };
</script>

