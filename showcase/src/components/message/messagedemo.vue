<template>
  <div id="app">
    <layout>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">Message</span>
          <span>Messages is used to display messages inline.</span>
        </div>
      </div>
      <div id="wrapper">

        <h2>Features</h2>

        <h3>Inline Message CSS</h3>
        <p>CSS helpers to display inline messages mostly within forms.</p>
        <p-message severity="info" text="PrimeNG Rocks"></p-message>
        <p-message severity="success" text="Record Saved"></p-message>
        <p-message severity="warn" text="Are you sure?"></p-message>
        <p-message severity="error" text="Field is required"></p-message>

      </div>
    </layout>
  </div>
</template>
<script>
  import Layout from "../layout";

  export default {
    name: 'messagedemo',
    components: {Layout},
    data: function () {
      return {}

    },
    methods: {
    }
  };
</script>

