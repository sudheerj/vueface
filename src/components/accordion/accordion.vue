<template>
  <div class="ui-accordion ui-widget ui-helper-reset" :style="accordionStyle" :class="accordionStyleClass" role="presentation">
    <slot></slot>
  </div>
</template>
<style lang="css" src="./accordion.css"></style>
<script>
  export default {
    name: 'vf-accordion',
    data: function () {
      return {
        _activeIndex: 0,
        tabs: []
      };
    },
    props: {
      multiple: {
        type: Boolean,
        default: false
      },
      accordionStyle: {
        type: String,
        default: null
      },
      accordionStyleClass: {
        type: String,
        default: null
      },
      lazy: {
        type: String,
        default: 'left'
      }
    },
    methods: {
      addTab (tab) {
        this.tabs.push(tab);
      },
      getTabs () {
        return this.tabs;
      }
    },
    updated: function () {
      if (this.tabs && this.tabs.length && this._activeIndex != null) {
        for (let i = 0; i < this.tabs.length; i++) {
          let selected = this.multiple ? this._activeIndex.includes(i) : (i === this._activeIndex);
          let changed = selected !== this.tabs[i].selected;

          if (changed) {
            this.tabs[i].animating = true;
          }

          this.tabs[i].selected = selected;
          this.tabs[i].$emit('selectedChange', selected);
        }
      }
    },
    computed: {
    }
  };
</script>
