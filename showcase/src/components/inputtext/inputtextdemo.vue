<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">InputText</span>
          <span>InputText is an extension to standard input element with theming.</span>
        </div>
      </div>
      <div id="wrapper">

        <h3 class="first">Basic</h3>
        <vf-inputText id="input" type="text" size="30" v-model="text"></vf-inputText>
        <span id="text">{{text}}</span>

        <h3>Float Label</h3>
        <span class="ui-float-label">
            <vf-inputText id="float-input" type="text" size="30"></vf-inputText>
            <label for="float-input">Username</label>
        </span>

        <h3>Disabled</h3>
        <vf-inputText id="disabled-input" type="text" size="30" :disabled="disabled"></vf-inputText>
        <vf-button id="disabled-btn" type="button" @click="toggleDisabled" label="Toggle"></vf-button>

      </div>
  </div>
</template>

<script>
  export default {
    name: 'inputtextdemo',
    data () {
      return {
        text: '20',
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
