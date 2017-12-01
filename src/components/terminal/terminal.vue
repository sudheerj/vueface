<template>
  <div ref="terminal" class="ui-terminal ui-widget ui-widget-content ui-corner-all" :style="terminalStyle" :class="terminalStyleClass" @click="focus()">
    <div v-if="welcomeMessage">{{welcomeMessage}}</div>
    <div class="ui-terminal-content">
      <div v-for="command of commands">
        <span>{{prompt}}</span>
        <span class="ui-terminal-command">{{command.text}}</span>
        <div>{{command.response}}</div>
      </div>
    </div>
    <div>
      <span class="ui-terminal-content-prompt">{{prompt}}</span>
      <input ref="in" type="text" v-model="command" class="ui-terminal-input" autocomplete="off" @keydown="handleCommand($event)" autofocus>
    </div>
  </div>
</template>
<style lang="css" src="./terminal.css"></style>
<script>
  import domHandler from '../dom/domhandler.js';
  export default {
    name: 'p-terminal',
    data: function () {
      return {
        commands: [],
        command: null,
        container: null,
        commandProcessed: false
      };
    },
    props: {
      welcomeMessage: {
        type: String,
        default: null
      },
      prompt: {
        type: String,
        default: null
      },
      terminalStyle: {
        type: Object,
        default: null
      },
      terminalStyleClass: {
        type: String,
        default: null
      },
      response: {
        type: String,
        default: null
      }
    },
    methods: {
      handleCommand (event) {
        if (event.keyCode === 13) {
          this.commands.push({text: this.command});
          this.$emit('handler', {originalEvent: event, command: this.command});
          this.command = '';
        }
      },

      focus () {
        this.$refs.in.focus();
      }
    },
    mounted: function () {
      this.container = domHandler.find(this.$refs.terminal, '.ui-terminal');
    },
    updated: function () {
      if (this.commandProcessed) {
        this.container.scrollTop = this.container.scrollHeight;
        this.commandProcessed = false;
      }
    },
    watch: {
      response (value) {
        if (value) {
          this.commands[this.commands.length - 1].response = value;
          this.commandProcessed = true;
        }
      }
    }
  };
</script>
