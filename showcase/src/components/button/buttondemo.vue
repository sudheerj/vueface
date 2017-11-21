<template>
  <div id="app">
    <layout>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">Button</span>
          <span>Button is an extension to standard input element with icons and theming.</span>
        </div>
      </div>
      <div id="wrapper">

        <h2>Features</h2>

        <h3>1. Icon positions</h3>

        <p>The icon of a button is specified using icon attribute and position is customized using iconPos attribute. The default icon position is left. To display only an icon, leave label as undefined.</p>

        <p-button type="button" icon="fa-check" label="VueJS"></p-button>

        <p-button type="button" icon="fa-check" iconPos="right" label="VueJS"></p-button>

        <p-button type="button" icon="fa-close"></p-button>

        <h3>2. Severity Buttons</h3>

        <p>Different color options are available to define severity levels.</p>
        <ul>
          <li>.ui-button-secondary</li>
          <li>.ui-button-success</li>
          <li>.ui-button-info</li>
          <li>.ui-button-warning</li>
          <li>.ui-button-danger</li>
        </ul>

        <p-button type="button" label="Primary"></p-button>

        <p-button type="button" label="Secondary" class="ui-button-secondary"></p-button>

        <p-button type="button" label="Success" class="ui-button-success"></p-button>

        <p-button type="button" label="Info" class="ui-button-info"></p-button>

        <p-button type="button" label="Warning" class="ui-button-warning"></p-button>

        <p-button type="button" label="Danger" class="ui-button-danger"></p-button>

        <h3>3. Events</h3>
        <p>The button component supports click event</p>

        <p-button type="button" label="Click" @click="clickMe"></p-button>

        <h3>4. Disabled</h3>
        <p>The component disabled using disabled attribute</p>

        <p-button type="button" icon="fa-check" :disabled="true" label="Disabled"></p-button>

      </div>
    </layout>
  </div>
</template>
<script>
  import Layout from "../layout";

  export default {
    name: 'buttondemo',
    components: {Layout},
    data: function () {
      return {}

    },
    methods: {
      clickMe: function (event) {
        if (event) {
          alert(event.target.innerText)
        }

      }
    }
  };
</script>

