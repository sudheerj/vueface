<template>
  <div id="app">
    <layout>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">Spinner</span>
          <span>Spinner is an input component to provide a numerical input.</span>
        </div>
      </div>
      <div id="wrapper">

        <h3 class="first">Basic</h3>
        <p-spinner :size="30" v-model="val1"></p-spinner>

        <h3>Min/Max</h3>
        <p-spinner :size="30" v-model="val2" :min="0" :max="100"></p-spinner>

        <h3>Step</h3>
        <p-spinner :size="30" v-model="val3" :step="0.25"></p-spinner>

        <h3>Disabled</h3>
        <p-spinner :size="30" v-model="val4" :disabled="true"></p-spinner>

      </div>
    </layout>
  </div>
</template>

<script>
  import Layout from "../layout";

  export default {
    name: 'spinnerdemo',
    components: {Layout},
    data () {
      return {
        val1: null,
        val2: null,
        val3: null,
        val4: 100
      };
    }
  };
</script>
