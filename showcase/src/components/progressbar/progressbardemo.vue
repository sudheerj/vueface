<template>
  <div id="app">
    <div class="content-section introduction" id="component">
      <div>
        <span class="feature-title">ProgressBar</span>
        <span>ProgressBar is a process status indicator.</span>
      </div>
    </div>
    <layout>
      <div id="wrapper">
        <h2>Features</h2>
        <h3>1. Dynamic</h3>
        The progress bar is displayed with dynamic value
        <p-progressBar :value="value"></p-progressBar>
        <h3>2. Static</h3>
        The progress bar is displayed with static value
       <p-progressBar :value="50"></p-progressBar>

        <h3>3. Indeterminate</h3>
        The progress bar displayed without any bound using mode attribute instead of showing the value between 0 and 100
        <p-progressBar mode="indeterminate" :style="{'height': '6px'}"></p-progressBar>
      </div>
    </layout>
  </div>
</template>
<script>
  import Layout from "../layout";
  export default {
    name: 'progressbardemo',
    components: {Layout},
    data: function () {
      return {
        value: 0
      }

    },
    mounted: function () {
      let interval = setInterval(() => {
        this.value = this.value + Math.floor(Math.random() * 10) + 1;
        if(this.value >= 100) {
          this.value = 100;
          this.msgs = [{severity: 'info', summary: 'Success', detail: 'Process Completed'}];
          clearInterval(interval);
        }
      }, 2000);
    },
    methods: {
    }
  };
</script>


