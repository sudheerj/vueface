<template>
  <transition name="slide">
    <div ref="container" :class="['ui-sidebar ui-widget ui-widget-content ui-shadow', sidebarStyleClass,  {'ui-sidebar-active': visible,
            'ui-sidebar-left': (position === 'left'), 'ui-sidebar-right': (position === 'right'),
            'ui-sidebar-top': (position === 'top'), 'ui-sidebar-bottom': (position === 'bottom'),
            'ui-sidebar-full': fullScreen}]"
         :style="sidebarStyle">
      <a :class="['ui-sidebar-close', 'ui-corner-all']" href="#" role="button" @click="close($event)">
        <span class="fa fa-fw fa-close"></span>
      </a>
      <slot></slot>
    </div>
  </transition>
</template>
<style lang="css" src="./sidebar.css"></style>
<style>
  .slide-enter-active, .slide-leave-active {
    transition: 0.3s ease;
  }

  .slide-enter, .slide-leave-to {
    opacity: 0;
  }
</style>
<script>
  import domHandler from '../dom/domhandler.js';
  export default {
    name: 'p-sidebar',
    props: {
      position: {
        type: String,
        default: 'left'
      },
      fullScreen: {
        type: Boolean,
        default: false
      },
      appendTo: {
        type: String,
        default: null
      },
      blockScroll: {
        type: Boolean,
        default: false
      },
      sidebarStyle: {
        type: String,
        default: null
      },
      sidebarStyleClass: {
        type: String,
        default: null
      },
      autoZIndex: {
        type: Boolean,
        default: true
      },
      baseZIndex: {
        type: [Number, String],
        default: 0
      },
      visible: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        initialized: false,

        _visible: false,

        preventVisibleChangePropagation: false,

        mask: null,

        executePostDisplayActions: false

      };
    },
    watch: {
      visible (val) {
        this._visible = val;
        if (this.initialized && this.$refs.container) {
          if (this._visible) { this.show(); } else {
            if (this.preventVisibleChangePropagation) { this.preventVisibleChangePropagation = false; } else { this.hide(); }
          }
        }
      }
    },
    methods: {
      show () {
        this.executePostDisplayActions = true;
        if (this.autoZIndex) {
          this.$refs.container.style.zIndex = String(this.baseZIndex + (++domHandler.zindex));
        }
        this.enableModality();
      },

      hide () {
        this.$emit('hide', {});
        this.disableModality();
      },

      close (event) {
        this.preventVisibleChangePropagation = true;
        this.hide();
        this.$emit('visibleChange', false);
        this.$refs.container.style.opacity = 0;
        this._visible = false;
        event.preventDefault();
      },

      enableModality () {
        if (!this.mask) {
          this.mask = document.createElement('div');
          this.mask.style.zIndex = String(parseInt(this.$refs.container.style.zIndex) - 1);
          this.mask.setAttribute('id', 'maskElement');
          domHandler.addMultipleClasses(this.mask, 'ui-widget-overlay ui-sidebar-mask');
          this.mask.addEventListener('click', (event) => { this.close(event); });
          document.body.appendChild(this.mask);
          if (this.blockScroll) {
            domHandler.addClass(document.body, 'ui-overflow-hidden');
          }
        }
      },

      disableModality () {
        if (this.mask) {
          this.unbindMaskClickListener();
          document.body.removeChild(this.mask);
          if (this.blockScroll) {
            domHandler.removeClass(document.body, 'ui-overflow-hidden');
          }
          this.mask = null;
        }
      },

      unbindMaskClickListener () {
        if (this.mask) {
          this.mask.removeEventListener('click', null);
        }
      }
    },
    mounted () {
      this.initialized = true;

      if (this.appendTo) {
        if (this.appendTo === 'body') { document.body.appendChild(this.$refs.container); } else { domHandler.appendChild(this.$refs.container, this.appendTo); }
      }

      if (this.visible) {
        this.show();
      }
    },
    updated () {
      if (this.executePostDisplayActions) {
        this.$emit('show', {});
        this.executePostDisplayActions = false;
      }
    },
    destroyed () {
      this.initialized = false;

      if (this.visible) {
        this.hide();
      }

      if (this.appendTo) {
        document.body.removeChild(this.$refs.container);
      }

      this.unbindMaskClickListener();
    }
  };
</script>
