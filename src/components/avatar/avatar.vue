<template>
  <div :class="['ui-avatar', avatarStyleClass]" :style="[avatarStyle, {'color': color, 'background-color': backgroundColor}]" @click="handleClick">
    <div class="ui-avatar-content">
      <i v-if="icon" :class="['fa', icon, iconClass]"></i>
      <img :src="src" v-if="src" :class="['ui-image',imageClass]" />
    </div>
    <slot></slot>
  </div>
</template>
<style lang="css" src="./avatar.css"></style>
<script>
  export default {
    name: 'p-avatar',
    props: {
      icon: {
        type: String,
        default: ''
      },
      iconClass: {
        type: [String, Object, Array]
      },
      src: {
        type: String,
        default: ''
      },
      imageClass: {
        type: String
      },
      backgroundColor: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: ''
      },
      size: {
        type: Number
      },
      iconSize: {
        type: Number
      },
      avatarStyle: {
        type: String,
        default: null
      },
      avatarStyleClass: {
        type: String,
        default: null
      }
    },
    methods: {
      handleClick (event) {
        this.$emit('click', event);
      }
    }
  };
</script>
