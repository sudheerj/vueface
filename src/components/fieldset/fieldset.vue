<template>
  <fieldset :id="id" :class="{'fieldsetStyleClass:true, ui-fieldset ui-widget ui-widget-content ui-corner-all': true, 'ui-fieldset-toggleable': toggleable}" :style="fieldsetStyle">
    <legend class="ui-fieldset-legend ui-corner-all ui-state-default ui-unselectable-text">
      <a href="#" @click="toggle($event)" :aria-controls="id + '-content'" :aria-expanded="!collapsed" :tabindex="toggleable ? null : -1">
        <span class="ui-fieldset-toggler fa fa-w" :class="{'fa-minus': !collapsed,'fa-plus':collapsed}"></span>
        <span class="ui-fieldset-legend-text">{{legend}}</span>
                    <slot name="header"></slot>
      </a>
    </legend>
    <transition name="slide" @enter="onToggleDone($event)" @leave="onToggleDone($event)">
    <div :id="id + '-content'" class="ui-fieldset-content-wrapper"
         :class="{'ui-fieldset-content-wrapper-overflown': collapsed||animating}" :aria-hidden="collapsed"
          role="region">
      <div class="ui-fieldset-content">
        <slot></slot>
      </div>
    </div>
    </transition>
  </fieldset>
</template>
<style lang="css" src="./fieldset.css"></style>
<style>
  .slide-enter-active {
    height: 0%;
  }
  .slide-leave-active {
    height: 100%;
  }
  .slide-enter, .slide-leave-to  {
    transition: .4s cubic-bezier(0.86, 0, 0.07, 1);
  }
</style>
<script>
  let idx = 0;
  export default {
    name: 'p-fieldset',
    data: function () {
      return {
        id: `ui-fieldset-${idx++}`,
        animating: false,
        collapsedStatus: false
      };
    },
    props: {
      toggleable: {
        type: Boolean,
        default: false
      },
      collapsed: {
        type: Boolean,
        default: false
      },
      legend: {
        type: String,
        default: null
      },
      fieldsetStyle: {
        type: String,
        default: null
      },
      fieldsetStyleClass: {
        type: String,
        default: null
      }
    },
    methods: {
      toggle (event) {
        if (this.animating) {
          return false;
        }

        this.animating = true;
        this.$emit('onBeforeToggle', {originalEvent: event, collapsed: this.collapsedStatus});

        if (this.collapsedStatus) { this.expand(event); } else { this.collapse(event); }

        this.$emit('onAfterToggle', {originalEvent: event, collapsed: this.collapsedStatus});
        event.preventDefault();
      },

      expand (event) {
        this.collapsedStatus = false;
      },

      collapse (event) {
        this.collapsedStatus = true;
      },

      onToggleDone (event) {
        this.animating = false;
      }
    },
    mounted: function () {
      this.collapsedStatus = this.collapsed;
    },
    computed: {}
  };
</script>
