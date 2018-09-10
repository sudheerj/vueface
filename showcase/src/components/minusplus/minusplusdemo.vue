<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">MinusPlusInput</span>
          <span>MinusPlusInput is an input element with increment and decrement controls.</span>
        </div>
      </div>
      <div id="wrapper">

        <h3 class="first">Basic</h3>
        <vf-minusplus :min="0"
                           :max="20"
                           :step="1"
                           :value="value1"
                          >
        </vf-minusplus>

        <h3>Vertical</h3>
        <vf-minusplus class="demo-vertical" :min="0" :max="9" :vertical="true" :value="value2" ></vf-minusplus>

        <h3>Custom</h3>
        <vf-minusplus :min="0" :max="30"
                           :step="2"
                           v-model="value3" :decrementLabel="decrement_desc" :incrementLabel="increment_desc">
          {{ input_header }} {{ value3 }}
        </vf-minusplus>

      </div>
  </div>
</template>

<<script>
  export default {
    name: 'minusplusinputdemo',
    data () {
      return {
        value1: 10,
        value2: 5,
        value3: 10,
        decrement_desc: 'Loss',
        increment_desc: 'Win',
        input_header: 'Total points:'
      };
    }
  };
</script>
