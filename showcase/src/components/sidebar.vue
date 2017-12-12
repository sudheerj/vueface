<template>
  <div id="layout-sidebar">
    <div class="layout-menu">
      <a id="menu_input" ref="inputmenutitle" :class="{ 'active-menuitem':$refs.inputmenutitle == activeMenuId}"
         @click="activeMenuId = (activeMenuId === $refs.inputmenutitle ? null : $refs.inputmenutitle)">
        <img src="../assets/images/icons/input-active.svg" class="layout-menu-icon-active"/>
        <img src="../assets/images/icons/input.svg" class="layout-menu-icon-inactive"/>
        <span>Input</span>
      </a>

      <div
        :class="{submenushow: ($refs.inputmenutitle == activeMenuId), 'submenuhide': ($refs.inputmenutitle != activeMenuId)}">
        <router-link to="/components/inputtext">InputText</router-link>
        <router-link to="/components/inputtextarea">InputTextarea</router-link>
        <router-link to="/components/password">Password</router-link>
        <router-link to="/components/inputgroup">InputGroup</router-link>
        <router-link to="/components/checkbox">Checkbox</router-link>
        <router-link to="/components/tristatecheckbox">TriStateCheckbox</router-link>
        <router-link to="/components/togglebutton">ToggleButton</router-link>
        <router-link to="/components/radiobutton">RadioButton</router-link>
        <router-link to="/components/editor">Editor</router-link>
        <router-link to="/components/inplace">Inplace</router-link>
        <router-link to="/components/selectbutton">SelectButton</router-link>
        <router-link to="/components/rating">Rating</router-link>
        <router-link to="/components/inputswitch">InputSwitch</router-link>
        <router-link to="/components/spinner">Spinner</router-link>
      </div>

      <a id="button_menutitle" ref="buttonmenutitle" :class="{'active-menuitem': $refs.buttonmenutitle == activeMenuId}"
         @click="activeMenuId = (activeMenuId === $refs.buttonmenutitle ? null : $refs.buttonmenutitle)">
        <img src="../assets/images/icons/button-active.svg" class="layout-menu-icon-active"/>
        <img src="../assets/images/icons/button.svg" class="layout-menu-icon-inactive"/>
        <span>Button</span>
      </a>
      <div
        :class="{'submenushow': ($refs.buttonmenutitle == activeMenuId), 'submenuhide': ($refs.buttonmenutitle != activeMenuId)}">
        <router-link to="/components/button">Button</router-link>
      </div>

      <a id="data_menutitle" ref="datamenutitle" :class="{'active-menuitem': $refs.datamenutitle == activeMenuId}"
         @click="activeMenuId = (activeMenuId === $refs.datamenutitle ? null : $refs.datamenutitle)">
        <img src="../assets/images/icons/data-active.svg" class="layout-menu-icon-active"/>
        <img src="../assets/images/icons/data.svg" class="layout-menu-icon-inactive"/>
        <span>Data</span>
      </a>
      <div
        :class="{'submenushow': ($refs.datamenutitle == activeMenuId), 'submenuhide': ($refs.datamenutitle != activeMenuId)}">
        <router-link to="/components/gmap">Gmap</router-link>
      </div>

      <a id="menu_panel" ref="panelmenutitle" :class="{'active-menuitem': $refs.panelmenutitle == activeMenuId}"
         @click="activeMenuId = (activeMenuId === $refs.panelmenutitle ? null : $refs.panelmenutitle)">
        <img src="../assets/images/icons/panel-active.svg" class="layout-menu-icon-active"/>
        <img src="../assets/images/icons/panel.svg" class="layout-menu-icon-inactive"/>
        <span>Panel</span>
      </a>
      <div
        :class="{'submenushow': ($refs.panelmenutitle == activeMenuId), 'submenuhide': ($refs.panelmenutitle != activeMenuId)}">
        <router-link to="/components/panel">Panel</router-link>
        <router-link to="/components/accordion">Accordion</router-link>
        <router-link to="/components/fieldset">Fieldset</router-link>
        <router-link to="/components/grid">Grid</router-link>
        <router-link to="/components/toolbar">Toolbar</router-link>
      </div>

      <a id="menu_overlay" ref="overlaymenutitle" :class="{'active-menuitem': $refs.overlaymenutitle == activeMenuId}"
         @click="activeMenuId = (activeMenuId === $refs.overlaymenutitle ? null : $refs.overlaymenutitle)">
        <img src="../assets/images/icons/overlay-active.svg" class="layout-menu-icon-active"/>
        <img src="../assets/images/icons/overlay.svg" class="layout-menu-icon-inactive"/>
        <span>Overlay</span>
      </a>
      <div
        :class="{'submenushow': ($refs.overlaymenutitle == activeMenuId), 'submenuhide': ($refs.overlaymenutitle != activeMenuId)}">
        <router-link to="/components/sidebar">Sidebar</router-link>
      </div>


      <a id="menu_chart" ref="chartmenutitle" :class="{'active-menuitem': $refs.chartmenutitle == activeMenuId}"
         @click="activeMenuId = (activeMenuId === $refs.chartmenutitle ? null : $refs.chartmenutitle)">
        <img src="../assets/images/icons/charts-active.svg" class="layout-menu-icon-active"/>
        <img src="../assets/images/icons/charts.svg" class="layout-menu-icon-inactive"/>
        <span>Charts</span>
      </a>
      <div
        :class="{'submenushow': ($refs.chartmenutitle == activeMenuId), 'submenuhide': ($refs.chartmenutitle != activeMenuId)}">
        <router-link to="/components/charts">Charts</router-link>
      </div>

      <a id="menu_messages" ref="messagesmenutitle"
         :class="{'active-menuitem': $refs.messagesmenutitle == activeMenuId}"
         @click="activeMenuId = (activeMenuId === $refs.messagesmenutitle ? null : $refs.messagesmenutitle)">
        <img src="../assets/images/icons/message-active.svg" class="layout-menu-icon-active"/>
        <img src="../assets/images/icons/message.svg" class="layout-menu-icon-inactive"/>
        <span>Messages</span>
      </a>
      <div
        :class="{'submenushow': ($refs.messagesmenutitle == activeMenuId), 'submenuhide': ($refs.messagesmenutitle != activeMenuId)}">
        <router-link to="/components/message">Message</router-link>
        <router-link to="/components/growl">Growl</router-link>
      </div>

      <a id="menu_multimedia" ref="multimediamenutitle"
         :class="{'active-menuitem':$refs.multimediamenutitle == activeMenuId}"
         @click="activeMenuId = (activeMenuId === $refs.multimediamenutitle ? null : $refs.multimediamenutitle)">
        <img src="../assets/images/icons/multimedia-active.svg" class="layout-menu-icon-active"/>
        <img src="../assets/images/icons/multimedia.svg" class="layout-menu-icon-inactive"/>
        <span>Multimedia</span>
      </a>
      <div
        :class="{'submenushow': ($refs.multimediamenutitle == activeMenuId), 'submenuhide': ($refs.multimediamenutitle != activeMenuId)}">
        <router-link to="/components/galleria">Galleria</router-link>
      </div>

      <a id="menu_misc" ref="misctitle" :class="{'active-menuitem':$refs.misctitle == activeMenuId}"
         @click="activeMenuId = (activeMenuId === $refs.misctitle ? null : $refs.misctitle)">
        <img src="../assets/images/icons/misc-active.svg" class="layout-menu-icon-active"/>
        <img src="../assets/images/icons/misc.svg" class="layout-menu-icon-inactive"/>
        <span>Misc</span>
      </a>
      <div :class="{'submenushow': ($refs.misctitle == activeMenuId), 'submenuhide': ($refs.misctitle != activeMenuId)}">
        <router-link to="/components/captcha">Captcha</router-link>
        <router-link to="/components/progressspinner">ProgressSpinner</router-link>
        <router-link to="/components/progressbar">ProgressBar</router-link>
        <router-link to="/components/terminal">Terminal</router-link>
        <router-link to="/components/blockui">BlockUI</router-link>
        <router-link to="/components/backtotop">BackToTop</router-link>
        <router-link to="/components/codehighlighter">CodeHighlighter</router-link>
      </div>

    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'sidebar',
    data: function () {
      return {
        menuActive: false,
        activeMenuId: ''
      }

    }
  };
</script>

