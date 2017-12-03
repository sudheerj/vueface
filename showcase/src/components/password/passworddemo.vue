<template>
  <div id="app">
    <layout>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">Password</span>
          <span>Password displays strength indicator for password fields.</span>
        </div>
      </div>
      <div id="wrapper">

        <h3 class="first">Basic</h3>
        <p-password />

      </div>
    </layout>
  </div>
</template>

<script>
  import Layout from "../layout";
  import PPassword from "../../../../src/components/password/password";

  export default {
    name: 'passworddemo',
    components: {Layout},
    data () {
      return {
      };
    }
  };
</script>
