<template>
    <input v-model="newValue"
           :class="[
            'ui-inputtext', 'ui-corner-all', 'ui-state-default', 'ui-widget', {
            'ui-state-filled': filled
           }]" />
</template>
<style lang="css" src="./inputtext.css"></style>
<script>
export default {
  name: 'p-inputText',
  props: {
    value: String
  },
  data () {
    return {
      newValue: this.value,
      filled: false
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
    }
  },
  created () {
    this.updateFilled(this.value);
  }
};
</script>
