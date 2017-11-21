<template>
  <div id="app">
    <div class="content-section introduction" id="component">
      <div>
        <span class="feature-title">ProgressSpinner</span>
        <span>ProgressSpinnerDemo is a process status indicator.</span>
      </div>
    </div>
    <layout>
      <div id="wrapper">
        <h2>Features</h2>
        <h3>1. Basic</h3>
        <p>Progress of loading is displayed using basic spinner element</p>
        <p-progressSpinner></p-progressSpinner>
        <h3>2. Custom</h3>
        <p>The customized spinner with different colors with different percentages</p>
        <p-progressSpinner style="{width: '50px', height: '50px'}" strokeWidth="8" fill="#EEEEEE"
                               animationDuration=".5s"></p-progressSpinner>
      </div>
    </layout>
  </div>
</template>
<script>
  import Layout from "../layout";
  export default {
    name: 'progressspinnerdemo',
    components: {Layout},
    data: function () {
      return {
        value: 100
      }

    },
    methods: {
    }
  };
</script>

