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
      <vf-badge :value="100">
        <vf-button type="button" icon="fa-thumbs-up" label="Likes"></vf-button>
      </vf-badge>
      <vf-badge :value="50">
        <vf-button type="button" icon="fa-thumbs-down" label="Dislikes"></vf-button>
      </vf-badge>

      <h3 class="first">Color</h3>
      <vf-badge :value="100" backgroundColor="red">
        <vf-button type="button" icon="fa-thumbs-up" label="Likes"></vf-button>
      </vf-badge>
      <vf-badge :value="50" backgroundColor="blue">
        <vf-button type="button" icon="fa-thumbs-down" label="Dislikes"></vf-button>
      </vf-badge>

      <h3>Max</h3>
      <vf-badge :value="200" :max="100">
        <vf-button type="button" icon="fa-thumbs-up" label="Likes"></vf-button>
      </vf-badge>
      <vf-badge :value="100" :max="50">
        <vf-button type="button" icon="fa-thumbs-down" label="Dislikes"></vf-button>
      </vf-badge>

      <h3>Text</h3>
      <vf-badge value="new">
        <vf-button type="button" icon="fa-comments" label="Comments"></vf-button>
      </vf-badge>
      <vf-badge value="old">
        <vf-button type="button" icon="fa-comments" label="Comments"></vf-button>
      </vf-badge>

      <h3>Notify</h3>
      <vf-badge :dot="true">
        <vf-button type="button" label="Alert"></vf-button>
      </vf-badge>
      <vf-badge :dot="true">
        <vf-button type="button" icon="fa-exclamation-circle"></vf-button>
      </vf-badge>

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
