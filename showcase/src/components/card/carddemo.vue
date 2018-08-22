<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">Card</span>
          <span>Show information in a card container.</span>
        </div>
      </div>
      <div id="wrapper">

        <h3 class="first">Different slots</h3>
        <vf-card>
          <div slot="header">
            Card header
          </div>
          <div>
            <img src="https://placekitten.com/500/350"/>
          </div>
          <div slot="footer">
            Card footer
          </div>
        </vf-card>

      </div>
  </div>
</template>

<script>
  export default {
    name: 'carddemo',
    data () {
      return {};
    }
  };
</script>
