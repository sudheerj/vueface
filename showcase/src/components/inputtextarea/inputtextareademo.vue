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
        <p-inputTextarea rows="5" cols="30" v-model="text"></p-inputTextarea>

        <h3>AutoResize</h3>
        <p-inputTextarea rows="5" cols="30"  :autoResize="autoResize"></p-inputTextarea>

      </div>
  </div>
</template>

<script>
  export default {
    name: 'inputtextareademo',
    data () {
      return {
        text: 'PrimeVue',
        autoResize: true
      };
    }
  };
</script>
