<template>
  <div class="badge position">
    <slot></slot>
      <span
        v-show="display"
        v-text="data"
        class="badge-content" :style="{'background-color': backgroundColor}"
        :class="[badgeClass, {'fixed': true, 'dot': dot }]">
      </span>
  </div>
</template>
<style lang="css" src="./badge.css"></style>
<script>
  export default {
    name: 'p-badge',
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
        default: 'green'
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
