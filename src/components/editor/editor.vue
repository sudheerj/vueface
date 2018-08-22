<template>
  <div ref="editor" class="ui-widget ui-editor-container ui-corner-all" :class="editorStyleClass">
    <div class="ui-editor-toolbar ui-widget-header ui-corner-top" v-if="hasToolbar()">
      <slot name="toolbar"></slot>
    </div>
    <div class="ui-editor-toolbar ui-widget-header ui-corner-top" v-if="!hasToolbar()">
                <span class="ql-formats">
                    <select class="ql-header">
                      <option value="1">Heading</option>
                      <option value="2">Subheading</option>
                      <option selected>Normal</option>
                    </select>
                    <select class="ql-font">
                      <option selected>Sans Serif</option>
                      <option value="serif">Serif</option>
                      <option value="monospace">Monospace</option>
                    </select>
                </span>
      <span class="ql-formats">
                    <button class="ql-bold" aria-label="Bold"></button>
                    <button class="ql-italic" aria-label="Italic"></button>
                    <button class="ql-underline" aria-label="Underline"></button>
                </span>
      <span class="ql-formats">
                    <select class="ql-color"></select>
                    <select class="ql-background"></select>
                </span>
      <span class="ql-formats">
                    <button class="ql-list" value="ordered" aria-label="Ordered List"></button>
                    <button class="ql-list" value="bullet" aria-label="Unordered List"></button>
                    <select class="ql-align">
                        <option selected></option>
                        <option value="center"></option>
                        <option value="right"></option>
                        <option value="justify"></option>
                    </select>
                </span>
      <span class="ql-formats">
                    <button class="ql-link" aria-label="Insert Link"></button>
                    <button class="ql-image" aria-label="Insert Image"></button>
                    <button class="ql-code-block" aria-label="Insert Code Block"></button>
                </span>
      <span class="ql-formats">
                    <button class="ql-clean" aria-label="Remove Styles"></button>
                </span>
    </div>
    <div class="ui-editor-content" :style="editorStyle"></div>
  </div>
</template>
<style lang="css" src="../../../node_modules/quill/dist/quill.snow.css"></style>
<script>
  import Quill from '../../../node_modules/quill/dist/quill.js';
  import domHandler from '../dom/domhandler.js';
  export default {
    name: 'vf-editor',
    data: function () {
      return {
        value: null,
        _readonly: false,
        quill: null
      };
    },
    model: {
      prop: 'model',
      event: 'onChange'
    },
    props: {
      placeholder: {
        type: String,
        default: null
      },
      formats: {
        type: Array,
        default: null
      },
      editorStyle: {
        type: String,
        default: null
      },
      editorStyleClass: {
        type: String,
        default: null
      },
      readonly: {
        type: Boolean,
        default: false
      },
      model: {
        type: undefined
      }
    },
    methods: {
      getQuill () {
        return this.quill;
      },
      hasToolbar () {
        return this.$slots.toolbar;
      }
    },
    mounted: function () {
      let editorElement = domHandler.findSingle(this.$refs.editor, 'div.ui-editor-content');
      let toolbarElement = domHandler.findSingle(this.$refs.editor, 'div.ui-editor-toolbar');

      this.quill = new Quill(editorElement, {
        modules: {
          toolbar: toolbarElement
        },
        placeholder: this.placeholder,
        readOnly: this.readonly,
        theme: 'snow',
        formats: this.formats
      });

      this.value = this.model;

      if (this.quill) {
        if (this.value) { this.quill.pasteHTML(this.value); } else { this.quill.setText(''); }
      }

      this._readonly = this.readonly;

      if (this.quill) {
        if (this._readonly) { this.quill.disable(); } else { this.quill.enable(); }
      }

      if (this.value) {
        this.quill.pasteHTML(this.value);
      }

      this.quill.on('text-change', (delta, oldContents, source) => {
        let html = editorElement.children[0].innerHTML;
        let text = this.quill.getText();
        if (html === '<p><br></p>') {
          html = null;
        }

        this.$emit('onTextChange', {
          htmlValue: html,
          textValue: text,
          delta: delta,
          source: source
        });

        this.$emit('onChange', html);
      });

      this.quill.on('selection-change', (range, oldRange, source) => {
        this.$emit('onSelectionChange', {
          range: range,
          oldRange: oldRange,
          source: source
        });
      });

      this.$emit('onInit', {
        editor: this.quill
      });
    },
    computed: {
    }
  };
</script>
