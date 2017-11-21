<template>
  <div id="app">
    <layout>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">Rating</span>
          <span>Rating components is a star based selection input for the evaluation or assessment of something.</span>
        </div>
      </div>
      <div id="wrapper">

        <h2>Features</h2>

        <h3>1. Basic</h3>

        <p>The rating is measured with number of stars.</p>
        <p-rating v-model="val1"></p-rating>
        {{val1}}

        <h3>2. Abort cancel</h3>
        <p>The rating component doesn't allow cancelling the rating.</p>
        <p-rating v-model="val2" :cancel="false"></p-rating>

        <h3>3. ReadOnly</h3>
        <p>The component appears in read mode using readOnly attribute</p>
        <p-rating v-model="val3" :readonly="true" :stars="10" :cancel="false"></p-rating>

        <h3>4. Disabled</h3>
        <p>The component disabled using disabled attribute</p>
        <p-rating v-model="val4" :disabled="true" :stars="10"></p-rating>

        <h3>5. Custom Icons</h3>
        <p>The component is customized(apart from star icon) using icon classes</p>
        <p-rating v-model="val5" iconOnClass="fa-plus-circle" iconOffClass="fa-minus-circle"
                      iconCancelClass="fa-close"></p-rating>

        <h3>6. Events</h3>
        <p>The rating component supports rating and caceling events</p>
        <p-rating v-model="val6" @rating="rating($event)" @canceling="canceling"></p-rating>
        <span v-if="msg" >{{msg}}</span>

      </div>
    </layout>
  </div>
</template>
<script>
  import Layout from "../layout";

  let val1;
  let val2;
  let val3=6;
  let val4=8;
  let val5;
  let val6;
  let msg;
  export default {
    name: 'ratingdemo',
    components: {Layout},
    data: function () {
      return {
        val1,

        val2,

        val3,

        val4,

        val5,

        val6,

        msg

      }

    },
    methods: {
      rating(event) {
        this.msg = "You rated " + event.value;
      },

      canceling() {
        this.msg = "Rating is Cancelled";
      }
    }
  };
</script>

