<template>
  <div ref="mask" class="ui-blockui ui-widget-overlay" :class="{'ui-blockui-document':!target}" :style="{'display': (blocked ? 'block' : 'none')}">
    <slot></slot>
  </div>
</template>
<style lang="css" src="./blockui.css"></style>
<script>
  import domHandler from '../dom/domhandler.js';
  export default {
    name: 'p-blockUI',
    data: function () {
      return {
        _blocked: false,
        targetElement: null
      };
    },
    props: {
      autoZIndex: {
        type: Boolean,
        default: true
      },
      target: {
        type: String,
        default: null
      },
      baseZIndex: {
        type: Number,
        default: 0
      },
      blocked: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      block () {
        if (this.targetElement) {
          this.targetElement.appendChild(this.$refs.mask);
          this.targetElement.style.position = 'relative';
        } else {
          document.body.appendChild(this.$refs.mask);
        }

        if (this.autoZIndex) {
          this.$refs.mask.style.zIndex = String(this.baseZIndex + (++domHandler.zindex));
        }
      },

      unblock () {
        if (this.targetElement) {
          this.targetElement.removeChild(this.$refs.mask);
        } else {
          document.body.removeChild(this.$refs.mask);
        }
      }

    },
    destroyed: function () {
      this.unblock();
    },
    mounted: function () {
      this.targetElement = document.getElementById(this.target);
    },
    watch: {
      blocked (val) {
        this._blocked = val;

        if (this.$refs.mask) {
          if (this._blocked) { this.block(); } else { this.unblock(); }
        }
      }
    }
  };
</script>
