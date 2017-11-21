<template>
  <div id="app">
    <div class="ui-rating" :class="{'ui-state-disabled': disabled}">
      <a href="#" v-if="cancel" @click="clear">
        <span class="fa" :class="iconCancelClass" :style="iconCancelStyle"></span>
      </a>
      <a href="#" v-for="(star, index) in starsArray" @click="rate(index)">
                <span class="fa"
                      :class="(!value || index >= value) ? iconOffClass : iconOnClass"
                      :style="(!value || index >= value) ? iconOffStyle : iconOnStyle"></span>
      </a>
    </div>
  </div>
</template>
<!--<style lang="css" src="./rating.css"></style>-->
<script>
  let starsArray = [];
  let value = 0;
  export default {
    name: 'p-rating',
    data: function () {
      return {
        starsArray, value
      };
    },
    model: {
      prop: 'model',
      event: 'rating'
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      stars: {
        type: Number,
        default: 5
      },
      cancel: {
        type: Boolean,
        default: false
      },
      iconOnClass: {
        type: String,
        default: 'fa-star'
      },
      iconOnStyle: {
        type: String,
        default: null
      },
      iconOffClass: {
        type: String,
        default: 'fa-star-o'
      },
      iconOffStyle: {
        type: String,
        default: null
      },
      iconCancelClass: {
        type: String,
        default: 'fa-ban'
      },
      iconCancelStyle: {
        type: String,
        default: null
      },
      model: {
        type: Number,
        default: 0
      }
    },
    methods: {

      rate (i) {
        if (!this.readonly && !this.disabled) {
          this.value = (i + 1);
          this.$emit('rating',
            this.value
          );
        }
       // event.preventDefault();
      },

      clear (event) {
        if (!this.readonly && !this.disabled) {
          this.value = null;
          this.emit('canceling', event);
        }
        event.preventDefault();
      }

    },
    mounted: function () {
      this.value = this.model;
      this.starsArray = [];
      for (let i = 0; i < this.stars; i++) {
        this.starsArray[i] = i;
      }
    }
  };
</script>
