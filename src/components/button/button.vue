<template>
  <button ref="myButton"
    :class="styleClass"
    :disabled="disabled"
    @click="handleClick"
    name="button">
  </button>
</template>
<style lang="css" src="./button.css"></style>
<script>
  export default {
    name: 'vf-button',
    data: function () {
      return {
        cornerStyleClass: 'ui-corner-all'
      };
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: null
      },
      icon: {
        type: String,
        default: null
      },
      iconPos: {
        type: String,
        default: 'left'
      }
    },
    methods: {
      handleClick (e) {
        this.$emit('click', e);
      }
    },
    mounted: function () {
      if (this.icon) {
        let iconElement = document.createElement('span');
        let iconPosClass = (this.iconPos === 'right') ? 'ui-button-icon-right' : 'ui-button-icon-left';
        iconElement.className = iconPosClass + ' ui-clickable fa fa-fw ' + this.icon;
        this.$el.appendChild(iconElement);
      }

      let labelElement = document.createElement('span');
      labelElement.className = 'ui-button-text ui-clickable';
      labelElement.appendChild(document.createTextNode(this.label || 'ui-btn'));
      this.$el.appendChild(labelElement);
      // this.initialized = true;
    },
    computed: {
      styleClass: function () {
        let styleClass = 'ui-button ui-widget ui-state-default ' + this.cornerStyleClass;
        if (this.icon) {
          if (this.label != null && this.label !== undefined) {
            if (this.iconPos === 'left') {
              styleClass = styleClass + ' ui-button-text-icon-left';
            } else {
              styleClass = styleClass + ' ui-button-text-icon-right';
            }
          } else {
            styleClass = styleClass + ' ui-button-icon-only';
          }
        } else {
          styleClass = styleClass + ' ui-button-text-only';
        }

        return styleClass;
      }
    }
  };
</script>
