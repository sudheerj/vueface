<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">Inplace</span>
          <span>Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.</span>
        </div>
      </div>
      <div id="wrapper">

        <h3 class="first">Basic</h3>
        <vf-inplace :closable="closable">
    <span slot="display">
        Click to Edit
    </span>
          <span slot="content">
            <vf-inputText type="text" v-model="text"></vf-inputText>
    </span>
        </vf-inplace>

        <h3>Image</h3>
        <vf-inplace>
    <span slot="display">
        <span class="fa fa-picture-o"></span><span style="margin-left:8px">View Picture</span>
    </span>
          <span slot="content" >
        <img src="../../assets/images/demo/galleria/galleria5.jpg" alt="Nature">
    </span>
        </vf-inplace>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'inputplacedemo',
    data () {
      return {
        text: 'VueFace',
        closable: true
      };
    }
  };
</script>
