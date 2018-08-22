<template>
  <div class="ui-badge ui-position">
    <slot></slot>
      <span
        v-show="display"
        v-text="data"
        class="ui-badge-content" :style="{'background-color': backgroundColor}"
        :class="['ui-widget ui-widget-content ui-corner-all', badgeClass, {'fixed': true, 'dot': dot }]">
      </span>
  </div>
</template>
<style lang="css" src="./badge.css"></style>
<script>
  export default {
    name: 'vf-badge',
    props: {
      value: {

      },
      max: {
        type: Number,
        default: null
      },
      dot: {
        type: Boolean,
        default: false
      },
      backgroundColor: {
        type: String,
        default: ''
      },
      badgeClass: {
        type: [String, Object, Array]
      }
    },
    computed: {
      data () {
        if (this.dot) return;
        if (typeof this.value === 'number' && typeof this.max === 'number') {
          return this.max < this.value ? `${this.max}+` : this.value;
        } else {
          return this.value;
        }
      },
      display () {
        return (this.data || this.dot);
      }
    }
  };
</script>
