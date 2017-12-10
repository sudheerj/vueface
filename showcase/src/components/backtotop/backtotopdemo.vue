<template>
  <div id="app" style="height: 3000px">
    <layout>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">BackToTop</span>
          <span>This Back to top link allows users to smoothly scroll back to the top of the page.</span>
        </div>
      </div>
      <div id="wrapper">

        <div class="form-control">
          <label for="">
            <strong>Offset</strong>
          </label><br>
          <p-inputText type="text" v-model="offset" onkeypress='return event.charCode >= 48 && event.charCode <= 57'/>
        </div>
        <div class="form-control">
          <label for="">
            <strong>Text</strong>
          </label><br>
          <p-inputText type="text" v-model="text"/>
        </div>
        <p-backToTop :offset="offset" :text="text"></p-backToTop>
      </div>
    </layout>
  </div>
</template>
<script>
  import Layout from "../layout";

  export default {
    name: 'backtotopdemo',
    components: {Layout},
    data () {
      return {
        offset: '600',
        text: 'Top'
      }
    },
    watch: {
      offset (newVal) {
        document.body.style.height = parseInt(newVal) + 600
      }
    }

  };
</script>

