<template>
  <div>
  <div class="ui-accordion-header ui-state-default ui-corner-all" :class="{'ui-state-active': selected,'ui-state-disabled':disabled}">
    <a href="#" :id="id" :aria-controls="id + '-content'" role="tab" :aria-expanded="selected" @click="toggle($event)" v-on:keydown.space="toggle($event)">
      <span class="ui-accordion-toggle-icon fa fa-fw" :class="{'fa-caret-down': selected, 'fa-caret-right': !selected}"></span>
      <span class="ui-accordion-header-text" v-if="!hasHeaderFacet()">
                    {{header}}
                </span>
      <slot name="header" v-if="hasHeaderFacet()"></slot>
    </a>
  </div>
  <transition name="slide-fade" @enter="onToggleDone($event)" @leave="onToggleDone($event)">
  <div :id="id + '-content'" class="ui-accordion-content-wrapper" v-show="selected"
       :class="{'ui-accordion-content-wrapper-overflown': !selected||animating}"
       role="region" :aria-hidden="!selected" :aria-labelledby="id">
    <div class="ui-accordion-content ui-widget-content" v-if="getLazy() ? selected : true">
      <slot></slot>
    </div>
  </div>
  </transition>
  </div>
</template>
<style lang="css" src="./accordion.css"></style>
<style>
    .slide-fade-enter-active {
      transition: all .3s ease;
    }

    .slide-fade-leave-active {
      transition: 0.4s cubic-bezier(0.86, 0 , 0.07, 1);
    }

    .slide-fade-enter, .slide-fade-leave-to {
      height: 100%;
    }

</style>
<script>
  let idx = 0;
  export default {
    name: 'vf-accordionTab',
    data: function () {
      return {
        animating: false,
        selected: false,
        id: `ui-accordiontab-${idx++}`
      };
    },
    props: {
      tabSelected: {
        type: Boolean,
        default: false
      },
      header: {
        type: String,
        default: null
      },
      disabled: {
        type: Boolean,
        default: null
      }
    },
    methods: {
      toggle (event) {
        if (this.disabled || this.animating) {
          return false;
        }

        this.animating = true;
        let index = this.findTabIndex();

        if (this.selected) {
          this.selected = false;
          this.$parent.$emit('onClose', { originalEvent: event, index: index });
        } else {
          if (!this.$parent.multiple) {
            for (var i = 0; i < this.$parent.$children.length; i++) {
              this.$parent.$children[i].selected = false;
              this.$parent.$children[i].$emit('selectedChange', false);
            }
          }

          this.selected = true;
          this.$parent.$emit('onOpen', { originalEvent: event, index: index });
        }

        this.$emit('selectedChange', this.selected);

        event.preventDefault();
      },

      findTabIndex () {
        let index = -1;
        for (var i = 0; i < this.$parent.$children.length; i++) {
          if (this.$parent.$children[i] === this) {
            index = i;
            break;
          }
        }
        return index;
      },

      getLazy () {
        return this.$parent.lazy;
      },

      hasHeaderFacet () {
        return this.$slots.header;
      },

      onToggleDone (event) {
        this.animating = false;
      }
    },
    created: function () {
      this.selected = this.tabSelected;
    },
    destroyed: function () {
      this.$parent.$children.splice(this.findTabIndex(), 1);
    }
  };
</script>
