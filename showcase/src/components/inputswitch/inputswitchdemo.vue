<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">InputSwitch</span>
          <span>InputSwitch is used to select a boolean value.</span>
        </div>
      </div>
      <div id="wrapper">

        <h2>Features</h2>

        <h3>1. Basic</h3>

        <p>The inputswitch component displays on and off toggleable state.</p>

        <p-inputSwitch v-model="checked1"></p-inputSwitch>
        <h3>{{checked1}}</h3>

        <h3>2. Labels</h3>

        <p>The inputswitch component displays customized labels for on and off toggleable state.</p>
        <p-inputSwitch onLabel="Yes" offLabel="No" v-model="checked2"></p-inputSwitch>
        <h3>Labels - <span> {{checked2}} </span></h3>

      </div>
  </div>
</template>
<script>
  export default {
    name: 'inputswitchdemo',
    data () {
      return {
        checked1: false,
        checked2: true
      };
    }
  };
</script>

