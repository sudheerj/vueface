<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">BubbleChart</span>
          <span>A bubble chart is used to display three dimensions of data at the same time. The location of the bubble is determined by the first two dimensions and the corresponding horizontal and vertical axes. The third dimension is represented by the size of the individual bubbles.</span>
        </div>
      </div>
      <div id="wrapper">

        <p>Define the type as bubble(type="bubble").</p>
        <p-charts type="bubble" :data="bubbleData" width="100" height="20"></p-charts>

      </div>
  </div>
</template>
<script>
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
    name: 'bubblechartdemo',
    data () {
      return {
        bubbleData
      };
    }
  };
</script>

