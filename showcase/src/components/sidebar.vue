<template>
  <div id="layout-sidebar" :class="{'active': menuActive}">
    <div class="layout-menu">
      <a id="menu_input" ref="inputmenutitle" :class="{'active-menuitem':(element.inputmenutitle) == activeMenuId}"
         @click="activeMenuId = (activeMenuId === element.inputmenutitle ? null : element.inputmenutitle)">
        <img src="../assets/images/icons/input-active.svg" class="layout-menu-icon-active"/>
        <img src="../assets/images/icons/input.svg" class="layout-menu-icon-inactive"/>
        <span>Input</span>
      </a>

      <div
        :class="{submenushow: (element.inputmenutitle == activeMenuId), 'submenuhide': (element.inputmenutitle != activeMenuId)}">
        <span @click="menuActive = false">
        <router-link to="/components/inputtext" >&#9679; InputText</router-link>
          </span>
        <router-link to="/components/inputtextarea">&#9679; InputTextarea</router-link>
        <router-link to="/components/password">&#9679; Password</router-link>
        <router-link to="/components/inputgroup">&#9679; InputGroup</router-link>
        <router-link to="/components/checkbox">&#9679; Checkbox</router-link>
        <router-link to="/components/tristatecheckbox">&#9679; TriStateCheckbox</router-link>
        <router-link to="/components/togglebutton">&#9679; ToggleButton</router-link>
        <router-link to="/components/radiobutton">&#9679; RadioButton</router-link>
        <router-link to="/components/editor">&#9679; Editor</router-link>
        <router-link to="/components/inplace">&#9679; Inplace</router-link>
        <router-link to="/components/selectbutton">&#9679; SelectButton</router-link>
        <router-link to="/components/rating">&#9679; Rating</router-link>
        <router-link to="/components/inputswitch">&#9679; InputSwitch</router-link>
        <router-link to="/components/spinner">&#9679; Spinner</router-link>
      </div>

      <a id="button_menutitle" ref="buttonmenutitle" :class="{'active-menuitem': element.buttonmenutitle == activeMenuId}"
         @click="activeMenuId = (activeMenuId === element.buttonmenutitle ? null : element.buttonmenutitle)">
        <img src="../assets/images/icons/button-active.svg" class="layout-menu-icon-active"/>
        <img src="../assets/images/icons/button.svg" class="layout-menu-icon-inactive"/>
        <span>Button</span>
      </a>
      <div
        :class="{'submenushow': (element.buttonmenutitle == activeMenuId), 'submenuhide': (element.buttonmenutitle != activeMenuId)}">
        <router-link to="/components/button">&#9679; Button</router-link>
      </div>

      <a id="data_menutitle" ref="datamenutitle" :class="{'active-menuitem': element.datamenutitle == activeMenuId}"
         @click="activeMenuId = (activeMenuId === element.datamenutitle ? null : element.datamenutitle)">
        <img src="../assets/images/icons/data-active.svg" class="layout-menu-icon-active"/>
        <img src="../assets/images/icons/data.svg" class="layout-menu-icon-inactive"/>
        <span>Data</span>
      </a>
      <div
        :class="{'submenushow': (element.datamenutitle == activeMenuId), 'submenuhide': (element.datamenutitle != activeMenuId)}">
        <router-link to="/components/gmap">&#9679; Gmap</router-link>
      </div>

      <a id="menu_panel" ref="panelmenutitle" :class="{'active-menuitem': element.panelmenutitle == activeMenuId}"
         @click="activeMenuId = (activeMenuId === element.panelmenutitle ? null : element.panelmenutitle)">
        <img src="../assets/images/icons/panel-active.svg" class="layout-menu-icon-active"/>
        <img src="../assets/images/icons/panel.svg" class="layout-menu-icon-inactive"/>
        <span>Panel</span>
      </a>
      <div
        :class="{'submenushow': (element.panelmenutitle == activeMenuId), 'submenuhide': (element.panelmenutitle != activeMenuId)}">
        <router-link to="/components/panel">&#9679; Panel</router-link>
        <router-link to="/components/accordion">&#9679; Accordion</router-link>
        <router-link to="/components/fieldset">&#9679; Fieldset</router-link>
        <router-link to="/components/grid">&#9679; Grid</router-link>
        <router-link to="/components/toolbar">&#9679; Toolbar</router-link>
      </div>

      <a id="menu_overlay" ref="overlaymenutitle" :class="{'active-menuitem': element.overlaymenutitle == activeMenuId}"
         @click="activeMenuId = (activeMenuId === element.overlaymenutitle ? null : element.overlaymenutitle)">
        <img src="../assets/images/icons/overlay-active.svg" class="layout-menu-icon-active"/>
        <img src="../assets/images/icons/overlay.svg" class="layout-menu-icon-inactive"/>
        <span>Overlay</span>
      </a>
      <div
        :class="{'submenushow': (element.overlaymenutitle == activeMenuId), 'submenuhide': (element.overlaymenutitle != activeMenuId)}">
        <router-link to="/components/sidebar">&#9679; Sidebar</router-link>
      </div>


      <a id="menu_chart" ref="chartmenutitle" :class="{'active-menuitem': element.chartmenutitle == activeMenuId}"
         @click="activeMenuId = (activeMenuId === element.chartmenutitle ? null : element.chartmenutitle)">
        <img src="../assets/images/icons/charts-active.svg" class="layout-menu-icon-active"/>
        <img src="../assets/images/icons/charts.svg" class="layout-menu-icon-inactive"/>
        <span>Charts</span>
      </a>
      <div
        :class="{'submenushow': (element.chartmenutitle == activeMenuId), 'submenuhide': (element.chartmenutitle != activeMenuId)}">
        <router-link to="/components/charts/piechart">&#9679; PieChart</router-link>
        <router-link to="/components/charts/barchart">&#9679; BarChart</router-link>
        <router-link to="/components/charts/horizontalbarchart">&#9679; HorizontalBar</router-link>
        <router-link to="/components/charts/linechart">&#9679; LineChart</router-link>
        <router-link to="/components/charts/polarareachart">&#9679; PolarareaChart</router-link>
        <router-link to="/components/charts/doughnutchart">&#9679; DoughnutChart</router-link>
        <router-link to="/components/charts/radarchart">&#9679; RadarChart</router-link>
        <router-link to="/components/charts/bubblechart">&#9679; BubbleChart</router-link>
      </div>

      <a id="menu_messages" ref="messagesmenutitle"
         :class="{'active-menuitem': element.messagesmenutitle == activeMenuId}"
         @click="activeMenuId = (activeMenuId === element.messagesmenutitle ? null : element.messagesmenutitle)">
        <img src="../assets/images/icons/message-active.svg" class="layout-menu-icon-active"/>
        <img src="../assets/images/icons/message.svg" class="layout-menu-icon-inactive"/>
        <span>Messages</span>
      </a>
      <div
        :class="{'submenushow': (element.messagesmenutitle == activeMenuId), 'submenuhide': (element.messagesmenutitle != activeMenuId)}">
        <router-link to="/components/message">&#9679; Message</router-link>
        <router-link to="/components/growl">&#9679; Growl</router-link>
      </div>

      <a id="menu_multimedia" ref="multimediamenutitle"
         :class="{'active-menuitem':element.multimediamenutitle == activeMenuId}"
         @click="activeMenuId = (activeMenuId === element.multimediamenutitle ? null : element.multimediamenutitle)">
        <img src="../assets/images/icons/multimedia-active.svg" class="layout-menu-icon-active"/>
        <img src="../assets/images/icons/multimedia.svg" class="layout-menu-icon-inactive"/>
        <span>Multimedia</span>
      </a>
      <div
        :class="{'submenushow': (element.multimediamenutitle == activeMenuId), 'submenuhide': (element.multimediamenutitle != activeMenuId)}">
        <router-link to="/components/galleria">&#9679; Galleria</router-link>
      </div>

      <a id="menu_misc" ref="misctitle" :class="{'active-menuitem':element.misctitle == activeMenuId}"
         @click="activeMenuId = (activeMenuId === element.misctitle ? null : element.misctitle)">
        <img src="../assets/images/icons/misc-active.svg" class="layout-menu-icon-active"/>
        <img src="../assets/images/icons/misc.svg" class="layout-menu-icon-inactive"/>
        <span>Misc</span>
      </a>
      <div :class="{'submenushow': (element.misctitle == activeMenuId), 'submenuhide': (element.misctitle != activeMenuId)}">
        <router-link to="/components/captcha">&#9679; Captcha</router-link>
        <router-link to="/components/progressspinner">&#9679;ProgressSpinner</router-link>
        <router-link to="/components/progressbar">&#9679; ProgressBar</router-link>
        <router-link to="/components/terminal">&#9679; Terminal</router-link>
        <router-link to="/components/blockui">&#9679; BlockUI</router-link>
        <router-link to="/components/backtotop">&#9679; BackToTop</router-link>
        <router-link to="/components/codehighlighter">&#9679; CodeHighlighter</router-link>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'sidebar',
    data () {
      return {
        menuActive: false,
        activeMenuId: '',
        element: {}
      }
    },
    mounted () {
      this.element.inputmenutitle = this.$refs.inputmenutitle.id;
      this.element.buttonmenutitle = this.$refs.buttonmenutitle.id;
      this.element.datamenutitle = this.$refs.datamenutitle.id;
      this.element.panelmenutitle = this.$refs.panelmenutitle.id;
      this.element.overlaymenutitle = this.$refs.overlaymenutitle.id;
      this.element.chartmenutitle = this.$refs.chartmenutitle.id;
      this.element.messagesmenutitle = this.$refs.messagesmenutitle.id;
      this.element.multimediamenutitle = this.$refs.multimediamenutitle.id;
      this.element.misctitle = this.$refs.misctitle.id;
    }
  };
</script>

