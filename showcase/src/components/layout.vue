<template>
  <div class="layout-wrapper">
    <div slot="header">
      <header-layout></header-layout>
    </div>
    <div slot="sider">
      <sidebar-layout></sidebar-layout>
    </div>
    <div slot="content">
      <slot></slot>
    </div>
    <div>
      <footer-layout></footer-layout>
    </div>
  </div>
</template>
<style lang="css" src="../assets/css/showcase.css"></style>
<style id="current-theme" lang="css" src="../../../src/assets/themes/omega/theme.css"></style>
<style lang="css" src="../../../src/assets/vue.css"></style>
<style lang="css" src="../../../node_modules/font-awesome/css/font-awesome.min.css"></style>
<script>
  import HeaderLayout from './header.vue'
  import FooterLayout from './footer.vue'
  import SidebarLayout from './sidebar.vue'

  export default {
    components: {
      HeaderLayout,
      SidebarLayout,
      FooterLayout
    },
    name: 'Layout',
    methods:{
      changeTheme(event, theme) {
        let themeLink =  document.getElementById('current-theme');
        themeLink.href = '../../../src/assets/themes/' + theme + '/theme.css';
        event.preventDefault();
      }
    }

  }
</script>
<style>
  #wrapper {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    margin-left: 330px;
    color: #2c3e50;
    margin-top: 40px;
    margin-bottom: 100px;
  }

  #component {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    margin-left: 300px;
    color: #ffffff;
    margin-top: 70px;
  }
</style>
