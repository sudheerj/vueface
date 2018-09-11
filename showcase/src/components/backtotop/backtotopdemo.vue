<template>
  <div id="scrollPage">
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">BackToTop</span>
          <span>This Back to top link allows users to smoothly scroll back to the top of the page.</span>
        </div>
      </div>
      <div id="wrapper">
          <div class="form-control">
            <span>Scroll down the window scroll to 200px</span><br/>
            <label for="">
              <strong>Offset</strong>
            </label><br>
            <vf-inputText type="text" v-model="offset"
                          onkeypress='return event.charCode >= 48 && event.charCode <= 57'/>
          </div>
          <div class="form-control">
            <label for="">
              <strong>Text</strong>
            </label><br>
            <vf-inputText type="text" v-model="text"/>
          </div>
          <vf-backToTop :offset="offset" :text="text"></vf-backToTop>
      </div>
  </div>
</template>
<script>
  export default {
    name: 'backtotopdemo',
    data () {
      return {
        offset: '200',
        text: 'Top'
      };
    },
    watch: {
      offset (newVal) {
        document.body.style.height = parseInt(newVal) + 600
      }
    }
  };
</script>
<style>
  #scrollPage {
    height: 1510px;
    overflow: scroll;
  }
</style>

