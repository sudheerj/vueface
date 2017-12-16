<template>
  <div>
    <div class="content-section introduction" id="component">
      <div>
        <span class="feature-title">Badge</span>
        <span>A number or status mark on form components.</span>
      </div>
    </div>
    <div id="wrapper">

      <h3 class="first">Numbers</h3>
      <p-badge :value="100">
        <p-button type="button" icon="fa-thumbs-up" label="Likes"></p-button>
      </p-badge>
      <p-badge :value="50">
        <p-button type="button" icon="fa-thumbs-down" label="Dislikes"></p-button>
      </p-badge>

      <h3 class="first">Color</h3>
      <p-badge :value="100" backgroundColor="red">
        <p-button type="button" icon="fa-thumbs-up" label="Likes"></p-button>
      </p-badge>
      <p-badge :value="50" backgroundColor="blue">
        <p-button type="button" icon="fa-thumbs-down" label="Dislikes"></p-button>
      </p-badge>

      <h3>Max</h3>
      <p-badge :value="200" :max="100">
        <p-button type="button" icon="fa-thumbs-up" label="Likes"></p-button>
      </p-badge>
      <p-badge :value="100" :max="50">
        <p-button type="button" icon="fa-thumbs-down" label="Dislikes"></p-button>
      </p-badge>

      <h3>Text</h3>
      <p-badge value="new">
        <p-button type="button" icon="fa-comments" label="Comments"></p-button>
      </p-badge>
      <p-badge value="old">
        <p-button type="button" icon="fa-comments" label="Comments"></p-button>
      </p-badge>

      <h3>Notify</h3>
      <p-badge :dot="true">
        <p-button type="button" label="Alert"></p-button>
      </p-badge>
      <p-badge :dot="true">
        <p-button type="button" icon="fa-exclamation-circle"></p-button>
      </p-badge>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'badgedemo',
    data () {
      return {};
    }
  };
</script>
