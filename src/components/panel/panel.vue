<template>
  <div ref="panel" :id="id" class="ui-panel ui-widget ui-widget-content ui-corner-all" :style="panelStyle" :class="panelStyleClass">
    <div class="ui-panel-titlebar ui-widget-header ui-helper-clearfix ui-corner-all" v-if="showHeader">
      <span class="ui-panel-title" v-if="header">{{header}}</span>
      <slot name="header"></slot>
      <a v-if="toggleable" :id="id + '-label'" class="ui-panel-titlebar-icon ui-panel-titlebar-toggler ui-corner-all ui-state-default" href="#"
         @click="toggle($event)" :aria-controls="id + '-content'" role="tab" :aria-expanded="!collapsedStatus">
        <span :class="collapsedStatus ? 'fa fa-fw ' + expandIcon : 'fa fa-fw ' + collapseIcon"></span>
      </a>
    </div>
    <transition name="fade" @enter="onToggleDone($event)" @leave="onToggleDone($event)">
    <div :id="id + '-content'" class="ui-panel-content-wrapper" v-show ="!collapsedStatus"
         :class="{'ui-panel-content-wrapper-overflown': collapsedStatus||animating}"
         role="region" :aria-hidden="collapsedStatus" :aria-labelledby="id + '-label'">
      <div class="ui-panel-content ui-widget-content">
        <slot></slot>
      </div>

      <div class="ui-panel-footer ui-widget-content" v-if="hasFooter()">
        <slot name="footer"></slot>
      </div>
    </div>
    </transition>
  </div>
</template>
<style lang="css" src="./panel.css"></style>
<style>
  .slide-enter-active {
    height: 0%;
  }
  .slide-leave-active {
    height: 100%;
  }
  .slide-enter, .slide-leave-to  {
    transition: .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
</style>
<script>
  let idx = 0;

  export default {
    name: 'p-panel',
    data: function () {
      return {
        animating: false,
        id: `ui-panel-${idx++}`,
        collapsedStatus: false
      };
    },
    props: {
      toggleable: {
        type: Boolean,
        default: false
      },
      header: {
        type: String,
        default: null
      },
      collapsed: {
        type: Boolean,
        default: false
      },
      panelStyle: {
        type: String,
        default: null
      },
      panelStyleClass: {
        type: String,
        default: null
      },
      expandIcon: {
        type: String,
        default: 'fa-plus'
      },
      collapseIcon: {
        type: String,
        default: 'fa-minus'
      },
      showHeader: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      hasFooter () {
        return this.$slots.footer;
      },

      toggle (event) {
        if (this.animating) {
          return false;
        }

        this.animating = true;
        this.$emit('onBeforeToggle', {originalEvent: event, collapsed: this.collapsedStatus});

        if (this.toggleable) {
          if (this.collapsedStatus) { this.expand(event); } else { this.collapse(event); }
        }

        event.preventDefault();
      },

      expand (event) {
        this.collapsedStatus = false;
        this.$emit('collapsedChange', this.collapsedStatus);
      },

      collapse (event) {
        this.collapsedStatus = true;
        this.$emit('collapsedChange', this.collapsedStatus);
      },

      onToggleDone (event) {
        this.animating = false;
        this.$emit('onAfterToggle', {originalEvent: event, collapsed: this.collapsedStatus});
      }
    },
    mounted: function () {

    },
    computed: {

    }
  };
</script>
