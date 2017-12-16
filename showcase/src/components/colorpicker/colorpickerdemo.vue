<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">ColorPicker</span>
          <span>ColorPicker is an input component to select a color..</span>
        </div>
      </div>
      <div id="wrapper">

        <h3 class="first">Inline</h3>
        <p-colorPicker v-model="color1" :inline="true"></p-colorPicker>

        <p style="margin-top:.5em">Selected Color: <span :style="{display:'inline-block',width:'32px',height:'32px','vertical-align':'middle', backgroundColor: color1}" ></span> {{color1}} </p>

        <h3>Overlay</h3>
        <p-colorPicker v-model="color2"></p-colorPicker>

        <p style="margin-top:.5em">Selected Color: <span :style="{'color':color2}">{{color2}}</span></p>

      </div>
  </div>
</template>

<script>
  export default {
    name: 'colorpickerdemo',
    data () {
      return {
        color1: null,
        color2: '#1976D2'
      };
    }
  };
</script>
