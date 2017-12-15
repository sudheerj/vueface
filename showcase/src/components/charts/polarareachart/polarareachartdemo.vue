<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">PolarAreaChart</span>
          <span>Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.</span>
        </div>
      </div>
      <div id="wrapper">
        <p>Define the type as polarData(type="polarData").</p>
        <p-charts type="polarArea" :data="polarData" width="100" height="20">></p-charts>
      </div>
  </div>
</template>
<script>
  const polarData = {
    datasets: [{
      data: [45, 35, 10, 15, 5],
      backgroundColor: ['#6544a9', '#51cc00', '#5d4361', '#E7E9ED', '#36A2EB'],
      label: 'Single page application frameworks'
    }],
    labels: ['VueJS', 'Angular', 'React', 'Ember', 'Meteor.js']
  };
  export default {
    name: 'chartsdemo',
    data () {
      return {
        polarData
      };
    }
  };
</script>

