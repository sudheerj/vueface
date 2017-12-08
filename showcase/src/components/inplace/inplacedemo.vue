<template>
  <div id="app">
    <layout>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">InputText</span>
          <span>InputText is an extension to standard input element with theming.</span>
        </div>
      </div>
      <div id="wrapper">

        <h3 class="first">Basic</h3>
        <p-inplace :closable="closable">
    <span slot="display">
        Click to Edit
    </span>
          <span slot="content">
            <p-inputText type="text" v-model="text"></p-inputText>
    </span>
        </p-inplace>

        <h3>Image</h3>
        <p-inplace>
    <span slot="display">
        <span class="fa fa-picture-o"></span><span style="margin-left:8px">View Picture</span>
    </span>
          <span slot="content" >
        <img src="../../assets/images/demo/galleria/galleria5.jpg" alt="Nature">
    </span>
        </p-inplace>
      </div>
    </layout>
  </div>
</template>

<script>
  import Layout from "../layout";

  export default {
    name: 'inputplacedemo',
    components: {Layout},
    data () {
      return {
        text: 'PrimeVUE',
        closable: true
      };
    }
  };
</script>
