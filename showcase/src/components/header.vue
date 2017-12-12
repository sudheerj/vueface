<template>
<div id="layout-topbar" class="content-section introduction">
  <a href="#" class="menu-button" click="onMenuButtonClick">
    <i class="fa fa-bars"></i>
  </a>

  <a href="#" class="logo" >
    <img alt="logo" src="../assets/images/logo.png" /><span style="font-weight: bold;font-size:40px;color:white">PrimeVue</span>
  </a>

  <!--<ul class="topbar-menu">
    <li class="topbar-menu-themes">
      <a href="#">THEMES</a>
      <ul>
        <li class="topbar-submenu-header">THEMING</li>
        <li><a href="#" @click="changeTheme($event, 'omega')"><span class="ui-text">Omega</span></a></li>
        <li><a href="#" @click="changeTheme($event, 'cupertino')"><span class="ui-text">Cupertino</span></a></li>
        <li><a href="#" @click="changeTheme($event, 'cruze')"><span class="ui-text">Cruze</span></a></li>
        <li><a href="#" @click="changeTheme($event, 'darkness')"><span class="ui-text">Darkness</span></a></li>
        <li><a href="#" @click="changeTheme($event, 'flick')"><span class="ui-text">Flick</span></a></li>
        <li><a href="#" @click="changeTheme($event, 'home')"><span class="ui-text">Home</span></a></li>
        <li><a href="#" @click="changeTheme($event, 'kasper')"><span class="ui-text">Kasper</span></a></li>
        <li><a href="#" @click="changeTheme($event, 'lightness')"><span class="ui-text">Lightness</span></a></li>
        <li><a href="#" @click="changeTheme($event, 'ludvig')"><span class="ui-text">Ludvig</span></a></li>
        <li><a href="#" @click="changeTheme($event, 'pepper-grinder')"><span class="ui-text">Pepper-Grinder</span></a></li>
        <li><a href="#" @click="changeTheme($event, 'redmond')"><span class="ui-text">Redmond</span></a></li>
        <li><a href="#" @click="changeTheme($event, 'rocket')"><span class="ui-text">Rocket</span></a></li>
        <li><a href="#" @click="changeTheme($event, 'south-street')"><span class="ui-text">South-Street</span></a></li>
        <li><a href="#" @click="changeTheme($event, 'start')"><span class="ui-text">Start</span></a></li>
        <li><a href="#" @click="changeTheme($event, 'trontastic')"><span class="ui-text">Trontastic</span></a></li>
        <li><a href="#" @click="changeTheme($event, 'voclain')"><span class="ui-text">Voclain</span></a></li>
      </ul>
    </li>
  </ul>-->
</div>
</template>

<script>
  export default {
    name: 'header-layout',
    data: function(){
      return {
        menuActive: false,
        activeMenuId: ''
      }

    },
    methods: {
      onMenuButtonClick : function (event)  {
        this.menuActive = !this.menuActive;
        event.preventDefault();
      },
      changeTheme(event, theme) {
        let themeLink =  document.getElementById('current-theme');
        themeLink.href = '../../../src/assets/themes/' + theme + '/theme.css';
        event.preventDefault();
      }
    }
  };
</script>
