<template>
  <div>
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
        <vf-rating v-model="val1"></vf-rating>
        {{val1}}

        <h3>2. Abort cancel</h3>
        <p>The rating component doesn't allow cancelling the rating.</p>
        <vf-rating v-model="val2" :cancel="false"></vf-rating>

        <h3>3. ReadOnly</h3>
        <p>The component appears in read mode using readOnly attribute</p>
        <vf-rating v-model="val3" :readonly="true" :stars="10" :cancel="false"></vf-rating>

        <h3>4. Disabled</h3>
        <p>The component disabled using disabled attribute</p>
        <vf-rating v-model="val4" :disabled="true" :stars="10"></vf-rating>

        <h3>5. Custom Icons</h3>
        <p>The component is customized(apart from star icon) using icon classes</p>
        <vf-rating v-model="val5" iconOnClass="fa-plus-circle" iconOffClass="fa-minus-circle"
                      iconCancelClass="fa-close"></vf-rating>

        <h3>6. Events</h3>
        <p>The rating component supports rating and caceling events</p>
        <vf-rating v-model="val6" @rating="rating($event)" @canceling="canceling"></vf-rating>
        <span v-if="msg" >{{msg}}</span>

      </div>
  </div>
</template>
<script>
  export default {
    name: 'ratingdemo',
    data () {
      return {
        val1: null,
        val2: null,
        val3: 6,
        val4: 8,
        val5: null,
        val6: null,
        msg: null
      };
    },
    methods: {
      rating (event) {
        this.msg = "You rated " + event.value;
      },
      canceling () {
        this.msg = "Rating is Cancelled";
      }
    }
  };
</script>

