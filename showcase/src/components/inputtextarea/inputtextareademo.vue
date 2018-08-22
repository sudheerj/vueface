<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">InputTextarea</span>
          <span>Inputtextarea add styling and autoResize functionality to standard textare element.</span>
        </div>
      </div>
      <div id="wrapper">


        <h3 class="first">Default</h3>
        <vf-inputTextarea rows="5" cols="30" v-model="text"></vf-inputTextarea>

        <h3>AutoResize</h3>
        <vf-inputTextarea rows="5" cols="30"  :autoResize="autoResize"></vf-inputTextarea>

      </div>
  </div>
</template>

<script>
  export default {
    name: 'inputtextareademo',
    data () {
      return {
        text: 'VueFace',
        autoResize: true
      };
    }
  };
</script>
