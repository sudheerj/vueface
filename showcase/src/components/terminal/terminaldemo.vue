<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">Terminal</span>
          <span>Terminal is a text based user interface. Enter "date" to display the current date.</span>
        </div>
      </div>
      <div id="wrapper">

        <h2>Features</h2>

        <h3>1. Interactive Terminal</h3>

        <p-terminal @handler="onCommand($event)" :response="response" welcomeMessage="Welcome to VueFace" prompt="VueFace $"></p-terminal>

      </div>
  </div>
</template>
<script>
  export default {
    name: 'terminaldemo',
    data () {
      return {
        response: null
      };
    },
    methods: {
      onCommand (event) {
        //event.command = entered command
        //in a real application connect to remote service to process the command and update the response field in return
        this.response = (event.command === 'date') ? new Date().toDateString() : 'Unknown command: ' + event.command;
      }
    }
  };
</script>

