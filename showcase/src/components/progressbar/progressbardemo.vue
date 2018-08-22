<template>
  <div>
    <div class="content-section introduction" id="component">
      <div>
        <span class="feature-title">ProgressBar</span>
        <span>ProgressBar is a process status indicator.</span>
      </div>
    </div>
      <div id="wrapper">
        <h2>Features</h2>
        <h3>1. Dynamic</h3>
        The progress bar is displayed with dynamic value
        <vf-progressBar :value="value"></vf-progressBar>
        <h3>2. Static</h3>
        The progress bar is displayed with static value
       <vf-progressBar :value="50"></vf-progressBar>

        <h3>3. Indeterminate</h3>
        The progress bar displayed without any bound using mode attribute instead of showing the value between 0 and 100
        <vf-progressBar mode="indeterminate" :style="{'height': '6px'}"></vf-progressBar>
      </div>
  </div>
</template>
<script>
  export default {
    name: 'progressbardemo',
    data () {
      return {
        value: 0
      };
    },
    mounted () {
      let interval = setInterval(() => {
        this.value = this.value + Math.floor(Math.random() * 10) + 1;
        if(this.value >= 100) {
          this.value = 100;
          this.msgs = [{severity: 'info', summary: 'Success', detail: 'Process Completed'}];
          clearInterval(interval);
        }
      }, 2000);
    }
  };
</script>


