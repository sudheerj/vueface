<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">Spinner</span>
          <span>Spinner is an input component to provide a numerical input.</span>
        </div>
      </div>
      <div id="wrapper">

        <h3 class="first">Basic</h3>
        <vf-spinner :size="30" v-model="val1"></vf-spinner>

        <h3>Min/Max</h3>
        <vf-spinner :size="30" v-model="val2" :min="0" :max="100"></vf-spinner>

        <h3>Step</h3>
        <vf-spinner :size="30" v-model="val3" :step="0.25"></vf-spinner>

        <h3>Disabled</h3>
        <vf-spinner :size="30" v-model="val4" :disabled="true"></vf-spinner>

      </div>
  </div>
</template>

<script>
  export default {
    name: 'spinnerdemo',
    data () {
      return {
        val1: 10,
        val2: 5,
        val3: 10,
        val4: 100
      };
    }
  };
</script>
