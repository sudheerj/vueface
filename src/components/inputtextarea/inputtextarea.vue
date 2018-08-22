<template>
    <textarea ref="textarea" v-model="newValue"
           :class="[
            'ui-inputtext', 'ui-corner-all', 'ui-state-default', 'ui-widget', {
            'ui-state-filled': filled
           }]" :rows="rows" :cols="cols " @focus="handleAutoresize($event)" @blur="handleAutoresize($event)" @keyup="handleAutoresize($event)" @input="handleFilledState($event)"/>
</template>
<style lang="css" src="./inputtextarea.css"></style>
<script>
export default {
  name: 'vf-inputTextarea',
  props: {
    value: String,
    autoResize: Boolean,
    rows: [Number, String],
    cols: [Number, String]
  },
  data () {
    return {
      newValue: this.value,
      filled: false,
      rowsDefault: 0,
      colsDefault: 0
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
    resize (event) {
      let linesCount = 0;
      let lines = this.$refs.textarea.value.split('\n');

      for (let i = lines.length - 1; i >= 0; --i) {
        linesCount += Math.floor((lines[i].length / this.colsDefault) + 1);
      }

      this.rows = (linesCount >= this.rowsDefault) ? (linesCount + 1) : this.rowsDefault;
      this.$emit('onResize', event || {});
    },
    handleAutoresize (event) {
      if (this.autoResize) {
        this.resize(event);
      }
    },
    handleFilledState (event) {
      this.updateFilled();
    }
  },
  created () {
    this.rowsDefault = this.rows;
    this.colsDefault = this.cols;
    this.updateFilled(this.value);
  }
};
</script>
