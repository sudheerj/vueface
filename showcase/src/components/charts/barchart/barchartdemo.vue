<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">BarChart</span>
          <span>A bar chart or bar graph is a chart that presents Grouped data with rectangular bars with lengths proportional to the values that they represent.</span>
        </div>
      </div>
      <div id="wrapper">

        <p>Define the type as bar(type="bar").</p>
        <vf-charts type="bar" :data="barData" width="100" height="20"></vf-charts>

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

  export default {
    name: 'barchartdemo',
    data () {
      return {
        barData
      };
    }
  };
</script>

