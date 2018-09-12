<template>
  <div>
    <div class="content-section introduction" id="component">
      <div>
        <span class="feature-title">Checkbox</span>
        <span>Checkbox is an extension to standard checkbox element with skinning capabilities.</span>
      </div>
    </div>
      <div id="wrapper">
        <h2>Features</h2>

        <h3>1. Binary</h3>

        <h3>Boolean - {{checked}}</h3>
        <p>A single boolean value can be bound using the ngModel property as well by enabling the binary option.</p>
        <vf-checkbox v-model="checked" binary="true"></vf-checkbox>

        <h3>2. Checkbox Group</h3>
        <p>Collection of checkboxes categorized as a one group known as Checkbox Group</p>

          <vf-checkbox name="group1" value="VueJS" label="VueJS" v-model="selectedFrameworks" inputId="ny"></vf-checkbox>
          <br/>
          <vf-checkbox name="group1" value="Angular" label="Angular" v-model="selectedFrameworks" inputId="sf"></vf-checkbox>
          <br/>
          <vf-checkbox name="group1" value="React" label="React" v-model="selectedFrameworks" inputId="la"></vf-checkbox>
        </div>

      </div>
  </div>
</template>
<script>
  export default {
    name: 'checkboxdemo',
    data () {
      return {
        checked: true,
        selectedFrameworks: ['VueJS','React']
      };
    }
  };
</script>


