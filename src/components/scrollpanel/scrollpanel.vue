<template>
  <div ref="container" :class="['ui-scrollpanel ui-widget ui-widget-content ui-corner-all', scrollpanelStyleClass]" :style="scrollpanelStyle">
    <div class="ui-scrollpanel-wrapper">
      <div ref="content" class="ui-scrollpanel-content">
        <slot></slot>
      </div>
    </div>
    <div ref="bar" class="ui-scrollpanel-bar"></div>
  </div>
</template>
<style lang="css" src="./scrollpanel.css"></style>
<script>
  import domHandler from '../dom/domhandler';
  export default {
    name: 'p-scrollPanel',
    props: {
      scrollpanelStyle: {
        type: Object,
        default: null
      },
      scrollpanelStyleClass: {
        type: String,
        default: null
      }
    },
    data () {
      return {
        scrollRatio: null,
        initialized: false,
        lastPageY: null
      };
    },
    watch: {
    },
    methods: {
      init () {
        this.moveBar();
        this.moveBar = this.moveBar.bind(this);
        this.onBarMouseDown = this.onBarMouseDown.bind(this);
        this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this);
        this.onDocumentMouseUp = this.onDocumentMouseUp.bind(this);

        window.addEventListener('resize', this.moveBar);
        this.$refs.content.addEventListener('scroll', this.moveBar);
        this.$refs.content.addEventListener('mouseenter', this.moveBar);
        this.$refs.bar.addEventListener('mousedown', this.onBarMouseDown);
        this.initialized = true;
      },
      moveBar () {
        let container = this.$refs.container;
        let content = this.$refs.content;
        let bar = this.$refs.bar;
        let totalHeight = content.scrollHeight;
        let ownHeight = content.clientHeight;
        let right = (container.clientWidth - bar.clientWidth) * -1;

        this.scrollRatio = ownHeight / totalHeight;

        this.requestAnimationFrame(() => {
          if (this.scrollRatio >= 1) {
            domHandler.addClass(bar, 'ui-scrollpanel-hidden');
          } else {
            domHandler.removeClass(bar, 'ui-scrollpanel-hidden');
            bar.style.cssText = 'height:' + Math.max(this.scrollRatio * 100, 10) + '%; top:' + (content.scrollTop / totalHeight) * 100 + '%;right:' + right + 'px;';
          }
        });
      },

      onBarMouseDown (e) {
        this.lastPageY = e.pageY;
        domHandler.addClass(this.$refs.bar, 'ui-scrollpanel-grabbed');
        domHandler.addClass(document.body, 'ui-scrollpanel-grabbed');

        document.addEventListener('mousemove', this.onDocumentMouseMove);
        document.addEventListener('mouseup', this.onDocumentMouseUp);
        e.preventDefault();
      },

      onDocumentMouseMove (e) {
        let delta = e.pageY - this.lastPageY;
        this.lastPageY = e.pageY;

        this.requestAnimationFrame(() => {
          this.$refs.content.scrollTop += delta / this.scrollRatio;
        });
      },

      onDocumentMouseUp (e) {
        domHandler.removeClass(this.$refs.bar, 'ui-scrollpanel-grabbed');
        domHandler.removeClass(document.body, 'ui-scrollpanel-grabbed');

        document.removeEventListener('mousemove', this.onDocumentMouseMove);
        document.removeEventListener('mouseup', this.onDocumentMouseUp);
      },

      requestAnimationFrame (f) {
        let frame = window.requestAnimationFrame || setTimeout(f, 0);
        frame(f);
      }
    },
    mounted () {
      this.init();
    },
    destroyed () {
      if (this.initialized) {
        window.removeEventListener('resize', this.moveBar);
        this.$refs.content.removeEventListener('scroll', this.moveBar);
        this.$refs.content.removeEventListener('mouseenter', this.moveBar);
        this.$refs.bar.removeEventListener('mousedown', this.onBarMouseDown);
      }
    }
  };
</script>
