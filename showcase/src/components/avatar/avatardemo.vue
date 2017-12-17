<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">Avatar</span>
          <span>Avatars can be used to represent people or objects..</span>
        </div>
      </div>
      <div id="wrapper">
        <h2>Image</h2>
        <p-avatar src="https://placekitten.com/500/350" color="blue" backgroundColor="orange" :size="30" :iconSize="20" imageClass="imageClass">Tom</p-avatar>

        <h2>Icon</h2>
        <p-avatar icon="fa-github-square" color="blue" backgroundColor="orange" :size="30" :iconSize="20">Github</p-avatar>

      </div>
  </div>
</template>
<style>
  .imageClass {
    width: 40px;
    height: 40px;
  }
</style>
<script>
  export default {
    name: 'avatardemo',
    data () {
      return {
        urlName: ''
      };
    }
  };
</script>
