<template>
  <div>
    <div class="content-section introduction" id="component">
      <div>
        <span class="feature-title">ProgressSpinner</span>
        <span>ProgressSpinnerDemo is a process status indicator.</span>
      </div>
    </div>
      <div id="wrapper">
        <h2>Features</h2>
        <h3>1. Basic</h3>
        <p>Progress of loading is displayed using basic spinner element</p>
        <vf-progressSpinner></vf-progressSpinner>
        <h3>2. Custom</h3>
        <p>The customized spinner with different colors with different percentages</p>
        <vf-progressSpinner style="{width: '50px', height: '50px'}" strokeWidth="8" fill="#EEEEEE"
                               animationDuration=".5s"></vf-progressSpinner>
      </div>
  </div>
</template>
<script>
  export default {
    name: 'progressspinnerdemo',
    data () {
      return {
        value: 100
      };
    }
  };
</script>

