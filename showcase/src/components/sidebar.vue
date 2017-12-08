<template>
<div id="layout-sidebar" >
  <div class="layout-menu">
    <router-link to="/components/inputtext">InputText</router-link>
    <router-link to="/components/inputtextarea">InputTextarea</router-link>
    <router-link to="/components/password">Password</router-link>
    <router-link to="/components/inputgroup">InputGroup</router-link>
    <router-link to="/components/button">Button</router-link>
    <router-link to="/components/progressspinner">ProgressSpinner</router-link>
    <router-link to="/components/progressbar">ProgressBar</router-link>
    <router-link to="/components/checkbox">Checkbox</router-link>
    <router-link to="/components/tristatecheckbox">TriStateCheckbox</router-link>
    <router-link to="/components/charts">Charts</router-link>
    <router-link to="/components/rating">Rating</router-link>
    <router-link to="/components/togglebutton">ToggleButton</router-link>
    <router-link to="/components/radiobutton">RadioButton</router-link>
    <router-link to="/components/captcha">Captcha</router-link>
    <router-link to="/components/panel">Panel</router-link>
    <router-link to="/components/fieldset">Fieldset</router-link>
    <router-link to="/components/grid">Grid</router-link>
    <router-link to="/components/toolbar">Toolbar</router-link>
    <router-link to="/components/galleria">Galleria</router-link>
    <router-link to="/components/message">Message</router-link>
    <router-link to="/components/editor">Editor</router-link>
    <router-link to="/components/accordion">Accordion</router-link>
    <router-link to="/components/terminal">Terminal</router-link>
    <router-link to="/components/growl">Growl</router-link>
    <router-link to="/components/inputswitch">InputSwitch</router-link>
    <router-link to="/components/spinner">Spinner</router-link>
    <router-link to="/components/gmap">Gmap</router-link>
    <router-link to="/components/inplace">Inplace</router-link>
  </div>
  <router-view></router-view>
</div>
</template>

<script>

  export default {
    name: 'sidebar'
  };
</script>

