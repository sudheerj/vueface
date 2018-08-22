<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">RadarChart</span>
          <span>A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point.</span>
        </div>
      </div>
      <div id="wrapper">
        <p>Define the type as radarData(type="radarData").</p>
        <vf-charts type="radar" :data="radarData" width="100" height="20">></vf-charts>
      </div>
  </div>
</template>
<script>
  const radarData = {
    labels: ['Requirement', 'Design', 'Implementation', 'Testing', 'Deployment', 'Maintainance'],
    datasets: [
      {
        label: 'VueJS',
        backgroundColor: 'rgba(162,141,158,0.4)',
        borderColor: 'rgba(145,171,188,1)',
        pointBackgroundColor: 'rgba(145,171,188,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(145,171,188,1)',
        data: [76, 55, 66, 78, 93, 74]
      },
      {
        label: 'Angular',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [30, 43, 38, 17, 89, 33]
      }
    ]
  };

  export default {
    name: 'radarchartdemo',
    data () {
      return {
        radarData
      };
    }
  };
</script>

