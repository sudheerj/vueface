<template>
  <div id="app">
    <div class="content-section introduction" id="component">
      <div>
        <span class="feature-title">Checkbox</span>
        <span>Checkbox is an extension to standard checkbox element with skinning capabilities.</span>
      </div>
    </div>
    <layout>
      <div id="wrapper">
        <h2>Features</h2>

        <h3>1. Binary</h3>

        <h3>Boolean - {{checked}}</h3>
        <p>A single boolean value can be bound using the ngModel property as well by enabling the binary option.</p>
        <p-checkbox v-model="checked" binary="true"></p-checkbox>

        <h3>2. Checkbox Group</h3>
        <p>Collection of checkboxes categorized as a one group known as Checkbox Group</p>

        <div class="ui-g" style="width:250px;margin-bottom:10px">
          <div class="ui-g-12"><p-checkbox name="group1" value="VueJS" label="VueJS" v-model="selectedFrameworks" inputId="ny"></p-checkbox></div>
          <div class="ui-g-12"><p-checkbox name="group1" value="Angular" label="Angular" v-model="selectedFrameworks" inputId="sf"></p-checkbox></div>
          <div class="ui-g-12"><p-checkbox name="group1" value="React" label="React" v-model="selectedFrameworks" inputId="la"></p-checkbox></div>
        </div>

      </div>
    </layout>
  </div>
</template>
<script>

  import Layout from "../layout";
  export default {
    name: 'checkboxdemo',
    components: {Layout},
    data: function () {
      return {
        checked: true,
        selectedFrameworks: ['VueJS','React']
      }

    },
    methods: {

    }
  };
</script>


