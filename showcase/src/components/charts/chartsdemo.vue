<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">Charts</span>
          <span>Chart components are based on Charts.js 2.1.x, an open source HTML5 based charting library.</span>
        </div>
      </div>
      <div id="wrapper">

        <h2>Features</h2>

        <h3>1. PieChart</h3>

        <p>A pie chart is a circular statistical graphic, which is divided into slices to illustrate numerical proportion.</p>

        <vf-charts type="pie" :data="pieData" width="100" height="20"></vf-charts>

        <h3>2. BarChart</h3>

        <p>A bar chart or bar graph is a chart that presents Grouped data with rectangular bars with lengths proportional to the values that they represent.</p>

        <vf-charts type="bar" :data="barData" width="100" height="20">></vf-charts>

        <h3>3. HorizontalBarChart</h3>

        <p>A horizontal bar chart is a variation on a vertical bar chart. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.</p>

        <vf-charts type="horizontalBar" :data="horizontalBarData" width="100" height="20">></vf-charts>

        <h3>4. LineChart</h3>

        <p>A line chart or line graph is a type of chart which displays information as a series of data points called 'markers' connected by straight line segments.</p>

        <vf-charts type="line" :data="lineData" width="100" height="20">></vf-charts>

        <h3>5. DoughnutChart</h3>

        <p>A doughnut chart is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included.</p>

        <vf-charts type="doughnut" :data="doughnutData" width="100" height="20">></vf-charts>


        <h3>6. RadarChart</h3>

        <p>A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point.</p>

        <vf-charts type="radar" :data="radarData" width="100" height="20">></vf-charts>

        <h3>7. PolarAreaChart</h3>

        <p>Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.</p>

        <vf-charts type="polarArea" :data="polarData" width="100" height="20">></vf-charts>

        <h3>8. BubbleChart</h3>

        <p>A bubble chart is used to display three dimensions of data at the same time. The location of the bubble is determined by the first two dimensions and the corresponding horizontal and vertical axes. The third dimension is represented by the size of the individual bubbles.</p>

        <vf-charts type="bubble" :data="bubbleData" width="100" height="20">></vf-charts>

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

  const polarData = {
    datasets: [{
      data: [45, 35, 10, 15, 5],
      backgroundColor: ['#6544a9', '#51cc00', '#5d4361', '#E7E9ED', '#36A2EB'],
      label: 'Single page application frameworks'
    }],
    labels: ['VueJS', 'Angular', 'React', 'Ember', 'Meteor.js']
  };

  const bubbleData = {
    datasets: [
      {
        label: 'VueJS',
        backgroundColor: '#FF7989',
        data: [
          {
            x: 10,
            y: 25,
            r: 25
          },
          {
            x: 20,
            y: 10,
            r: 10
          },
          {
            x: 40,
            y: 30,
            r: 30
          }
        ]
      },
      {
        label: 'Angular',
        backgroundColor: '#DC8CFF',
        data: [
          {
            x: 20,
            y: 10,
            r: 15
          },
          {
            x: 40,
            y: 20,
            r: 10
          },
          {
            x: 50,
            y: 30,
            r: 25
          }
        ]
      }
    ]
  }

  export default {
    name: 'chartsdemo',
    data () {
      return {
        pieData,
        barData,
        horizontalBarData,
        lineData,
        doughnutData,
        radarData,
        polarData,
        bubbleData
      };
    }
  };
</script>

