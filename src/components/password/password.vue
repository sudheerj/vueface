<template>
  <input ref="password" v-model="newValue" type="password"
         :class="[
            'ui-inputtext', 'ui-corner-all', 'ui-state-default', 'ui-widget', {
            'ui-state-filled': filled
           }]" @keyup="handleKeyup($event)" @focus="handleFocus($event)" @blur="handleBlur($event)"
         @input="handleInput($event)"/>
</template>
<style lang="css" src="./password.css"></style>
<script>
  import domHandler from '../dom/domhandler';
  export default {
    name: 'p-password',
    props: {
      value: String,
      promptLabel: {
        type: String,
        default: 'Please enter a password'
      },
      weakLabel: {
        type: String,
        default: 'Weak'
      },
      mediumLabel: {
        type: String,
        default: 'Medium'
      },
      strongLabel: {
        type: String,
        default: 'Strong'
      },
      feedback: {
        type: Boolean,
        default: true
      }

    },
    data () {
      return {
        newValue: this.value,
        filled: false,
        panel: null,
        meter: null,
        info: null
      };
    },
    watch: {
      value (value) {
        this.newValue = value;
      },
      newValue (value) {
        this.updateFilled(value);
        this.$emit('input', value);
      }
    },
    methods: {
      updateFilled (value) {
        this.filled = value && value.length;
      },
      testStrength (str) {
        let grade = 0;
        let val;

        val = str.match('[0-9]');
        grade += this.normalize(val ? val.length : 1 / 4, 1) * 25;

        val = str.match('[a-zA-Z]');
        grade += this.normalize(val ? val.length : 1 / 2, 3) * 10;

        val = str.match('[!@#$%^&*?_~.,;=]');
        grade += this.normalize(val ? val.length : 1 / 6, 1) * 35;

        val = str.match('[A-Z]');
        grade += this.normalize(val ? val.length : 1 / 6, 1) * 30;

        grade *= str.length / 8;

        return grade > 100 ? 100 : grade;
      },

      normalize (x, y) {
        let diff = x - y;

        if (diff <= 0) {
          return x / y;
        } else {
          return 1 + 0.5 * (x / (x + y / 4));
        }
      },

      disabled () {
        return this.$refs.password.disabled;
      },

      handleKeyup (e) {
        let value = e.target.value;
        let label = null;
        let meterPos = null;

        if (value.length === 0) {
          label = this.promptLabel;
          meterPos = '0px 0px';
        } else {
          var score = this.testStrength(value);
          if (score < 30) {
            label = this.weakLabel;
            meterPos = '0px -10px';
          } else if (score >= 30 && score < 80) {
            label = this.mediumLabel;
            meterPos = '0px -20px';
          } else if (score >= 80) {
            label = this.strongLabel;
            meterPos = '0px -30px';
          }
        }

        this.meter.style.backgroundPosition = meterPos;
        this.info.textContent = label;
      },

      handleFocus (e) {
        this.panel.style.zIndex = String(++domHandler.zindex);
        domHandler.removeClass(this.panel, 'ui-helper-hidden');
        domHandler.absolutePosition(this.panel, this.$refs.password);
        domHandler.fadeIn(this.panel, 250);
      },

      handleBlur (e) {
        domHandler.addClass(this.panel, 'ui-helper-hidden');
      },

      handleInput (e) {
        this.updateFilled();
      }
    },
    mounted () {
      this.panel = document.createElement('div');
      this.panel.className = 'ui-password-panel ui-widget ui-state-highlight ui-corner-all ui-helper-hidden ui-password-panel-overlay';
      this.meter = document.createElement('div');
      this.meter.className = 'ui-password-meter';
      this.info = document.createElement('div');
      this.info.className = 'ui-password-info';
      this.info.textContent = this.promptLabel;
      if (this.feedback) {
        this.panel.appendChild(this.meter);
        this.panel.appendChild(this.info);
        document.body.appendChild(this.panel);
      }
      this.updateFilled(this.value);
    },
    destroyed () {
      if (!this.feedback) {
        return;
      }

      this.panel.removeChild(this.meter);
      this.panel.removeChild(this.info);
      document.body.removeChild(this.panel);
      this.panel = null;
      this.meter = null;
      this.info = null;
    }
  };
</script>
