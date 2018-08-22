<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">Editor</span>
          <span>Editor is rich text editor component based on Quill.</span>
        </div>
      </div>
      <div id="wrapper">

        <h2>Features</h2>

        <h3>1. Basic</h3>

        <p>The basic WYSIWYG editor is built for the modern web.</p>

        <vf-editor v-model="text1" editorStyle="height:320px"></vf-editor>
        <p>Value: {{text1}}</p>

        <vf-button type="button" label="Clear" icon="fa-close" @click="text1=null"></vf-button>

        <h3>2. Custom Toolbar</h3>
        <p>Editor customized with required toolbar option</p>
        <vf-editor v-model="text2" editorStyle="height:320px">
          <div slot="toolbar">
            <span class="ql-formats">
                <button class="ql-bold" aria-label="Bold"></button>
                <button class="ql-italic" aria-label="Italic"></button>
                <button class="ql-underline" aria-label="Underline"></button>
            </span>
          </div>
        </vf-editor>
        <p>Value: {{text2}}</p>

        <vf-button type="button" label="Clear" icon="fa-close" @click="text2=null"></vf-button>

      </div>
  </div>
</template>
<script>
  export default {
    name: 'editordemo',
    data () {
      return {
          text1: '<div>Hello World!</div><div>VueFace <b>Editor</b> Rocks</div><div><br></div>',
          text2: null
      };
    },
    methods: {
        clear (){
            this.text1 = '';
        }
    }
  };
</script>

