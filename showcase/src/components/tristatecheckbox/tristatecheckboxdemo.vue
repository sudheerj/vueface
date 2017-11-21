<template>
  <div id="app">
    <div class="content-section introduction" id="component">
      <div>
        <span class="feature-title">TriStateCheckbox</span>
        <span>TriStateCheckbox is used to select either "true", "false" or "null" as the value.</span>
      </div>
    </div>
    <layout>
      <div id="wrapper">
        <h2>Features</h2>

        <h3>1. Basic</h3>
        <p>Three states of element can be displayed in an icon format.</p>
        <h3>Boolean - {{checked}}</h3>
        <p-tristatecheckbox v-model="checked" ></p-tristatecheckbox>

        <h3>2. Disabled</h3>
        <p>The checkbox selection is prevented using disabled attribute.</p>
        <h3>Boolean - {{checked}}</h3>
        <p-tristatecheckbox v-model="disabledCheck" :disabled="true"></p-tristatecheckbox>

      </div>
    </layout>
  </div>
</template>
<script>
  import Layout from "../layout";
  export default {
    name: 'tristatecheckboxdemo',
    components: {Layout},
    data: function () {
      return {
        checked: false,
        disabledCheck: true
      }

    }
  };
</script>


