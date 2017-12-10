<template>
  <transition name="backtotop-fade">
    <div class="back-to-top" v-show="visible" @click="backToTop">
      <div v-if="!textOnly">
        <i :class="['fa', icon]" style="align: middle"></i>
      </div>
      <span v-if="!iconOnly">
        {{ text }}
      </span>
    </div>
  </transition>
</template>
<style lang="css" src="./backtotop.css"></style>
<style>
  .backtotop-fade-enter-active, .backtotop-fade-leave-active {
    transition: opacity .5s;
  }

  .backtotop-fade-enter, .backtotop-fade-leave-to {
    opacity: 0;
  }
</style>
<script>
  export default {
    name: 'p-backToTop',
    props: {
      text: {
        type: String,
        default: null
      },
      offset: {
        type: [String, Number],
        default: 500
      },
      icon: {
        type: String,
        default: 'fa-arrow-up'
      },
      iconOnly: {
        type: Boolean,
        default: false
      },
      textOnly: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        visible: false
      };
    },
    created () {
      window.createscroll = () => {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          window.requestAnimationFrame(window.createscroll);
          window.scrollTo(0, currentScroll - (currentScroll / 5));
        }
      };
      window.onscroll = () => {
        this.visible = (window.pageYOffset > parseInt(this.offset));
      };
    },
    methods: {
      backToTop () {
        window.createscroll();
      }
    }
  };
</script>
