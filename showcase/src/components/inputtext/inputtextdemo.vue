<template>
  <div id="app">
    <layout>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">InputText</span>
          <span>InputText is an extension to standard input element with theming.</span>
        </div>
      </div>
      <div id="wrapper">

        <h3 class="first">Basic</h3>
        <p-inputText id="input" type="text" size="30" v-model="text"></p-inputText> 
        <span id="text">{{text}}</span>

        <h3>Float Label</h3>
        <span class="ui-float-label">
            <p-inputText id="float-input" type="text" size="30"></p-inputText> 
            <label for="float-input">Username</label>
        </span>

        <h3>Disabled</h3>
        <p-inputText id="disabled-input" type="text" size="30" :disabled="disabled"></p-inputText>
        <p-button id="disabled-btn" type="button" @click="toggleDisabled" label="Toggle"></p-button>

      </div>
    </layout>
  </div>
</template>

<script>
  import Layout from "../layout";

  export default {
    name: 'inputtextdemo',
    components: {Layout},
    data () {
      return {
        text: '',
        disabled: true
      };
    },
    methods: {
      toggleDisabled () {
        this.disabled = !this.disabled;
      }
    }
  };
</script>
