// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
//import App from './App.vue';
import VueRouter from 'vue-router'
import VueHighlightJS from 'vue-highlightjs'
import PrimeVue from '../src/index.js'

Vue.config.productionTip = false;

Vue.use(PrimeVue)
Vue.use(VueHighlightJS)
Vue.use(VueRouter)

import Home from './src/components/home.vue'

import InputTextDemo from './src/components/inputtext/inputtextdemo.vue'
import InputTextareaDemo from './src/components/inputtextarea/inputtextareademo.vue'
import ButtonDemo from './src/components/button/buttondemo.vue'
import ProgressbarDemo from './src/components/progressbar/progressbardemo.vue'
import ProgressSpinnerDemo from './src/components/progressspinner/progressspinnerdemo.vue'
import CheckboxDemo from './src/components/checkbox/checkboxdemo.vue'
import TristateCheckboxDemo from './src/components/tristatecheckbox/tristatecheckboxdemo.vue'
import BarChartDemo from './src/components/charts/barchart/barchartdemo.vue'
import BubbleChartDemo from './src/components/charts/bubblechart/bubblechartdemo.vue'
import DoughnutChartDemo from './src/components/charts/doughnutchart/doughnutchartdemo.vue'
import HorizontalBarChartDemo from './src/components/charts/horizontalbarchart/horizontalbarchartdemo.vue'
import LineChartDemo from './src/components/charts/linechart/linechartdemo.vue'
import PieChartDemo from './src/components/charts/piechart/piechartdemo.vue'
import PolarareaChartDemo from './src/components/charts/polarareachart/polarareachartdemo.vue'
import RadarChartDemo from './src/components/charts/radarchart/radarchartdemo.vue'
import RatingDemo from './src/components/rating/ratingdemo.vue'
import ToggleButtonDemo from './src/components/togglebutton/togglebuttondemo.vue'
import RadioButtonDemo from './src/components/radiobutton/radiobuttondemo.vue'
import CaptchaDemo from './src/components/captcha/captchademo.vue'
import PanelDemo from './src/components/panel/paneldemo.vue'
import FieldsetDemo from './src/components/fieldset/fieldsetdemo.vue'
import GridDemo from './src/components/grid/griddemo.vue'
import ToolbarDemo from './src/components/toolbar/toolbardemo.vue'
import GalleriaDemo from './src/components/galleria/galleriademo.vue'
import MessageDemo from './src/components/message/messagedemo.vue'
import EditorDemo from './src/components/editor/editordemo.vue'
import AccordionDemo from './src/components/accordion/accordiondemo.vue'
import TerminalDemo from './src/components/terminal/terminaldemo.vue'
import GrowlDemo from './src/components/growl/growldemo.vue'
import GmapDemo from './src/components/gmap/gmapdemo.vue'
import InputSwitchDemo from './src/components/inputswitch/inputswitchdemo.vue'
import InputGroupDemo from './src/components/inputgroup/inputgroupdemo.vue'
import PasswordDemo from './src/components/password/passworddemo.vue'
import SpinnerDemo from './src/components/spinner/spinnerdemo.vue'
import InplaceDemo from './src/components/inplace/inplacedemo.vue'
import BlockuiDemo from './src/components/blockui/blockuidemo.vue'
import SidebarDemo from './src/components/sidebar/sidebardemo.vue'
import BacktotopDemo from './src/components/backtotop/backtotopdemo.vue'
import CodeHighlighterDemo from './src/components/codehighlighter/codehighlighterdemo.vue'
import SelectButtonDemo from './src/components/selectbutton/selectbuttondemo.vue'
import Index from './src/components/index.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/components/inputtext', component: InputTextDemo },
  { path: '/components/button', component: ButtonDemo },
  { path: '/components/inputgroup', component: InputGroupDemo },
  { path: '/components/progressspinner', component: ProgressSpinnerDemo },
  { path: '/components/progressbar', component: ProgressbarDemo },
  { path: '/components/checkbox', component: CheckboxDemo },
  { path: '/components/tristatecheckbox', component: TristateCheckboxDemo },
  { path: '/components/charts/barchart', component: BarChartDemo },
  { path: '/components/charts/bubblechart', component: BubbleChartDemo },
  { path: '/components/charts/doughnutchart', component: DoughnutChartDemo },
  { path: '/components/charts/horizontalbarchart', component: HorizontalBarChartDemo },
  { path: '/components/charts/linechart', component: LineChartDemo },
  { path: '/components/charts/piechart', component: PieChartDemo },
  { path: '/components/charts/linechart', component: LineChartDemo },
  { path: '/components/charts/polarareachart', component: PolarareaChartDemo },
  { path: '/components/charts/radarchart', component: RadarChartDemo },
  { path: '/components/rating', component: RatingDemo },
  { path: '/components/togglebutton', component: ToggleButtonDemo },
  { path: '/components/radiobutton', component: RadioButtonDemo },
  { path: '/components/captcha', component: CaptchaDemo },
  { path: '/components/panel', component: PanelDemo },
  { path: '/components/fieldset', component: FieldsetDemo },
  { path: '/components/grid', component: GridDemo },
  { path: '/components/toolbar', component: ToolbarDemo },
  { path: '/components/galleria', component: GalleriaDemo },
  { path: '/components/message', component: MessageDemo },
  { path: '/components/editor', component: EditorDemo },
  { path: '/components/accordion', component: AccordionDemo },
  { path: '/components/terminal', component: TerminalDemo },
  { path: '/components/growl', component: GrowlDemo },
  { path: '/components/gmap', component: GmapDemo },
  { path: '/components/inputswitch', component: InputSwitchDemo },
  { path: '/components/inputtextarea', component: InputTextareaDemo },
  { path: '/components/password', component: PasswordDemo },
  { path: '/components/spinner', component: SpinnerDemo },
  { path: '/components/inplace', component: InplaceDemo },
  { path: '/components/blockui', component: BlockuiDemo },
  { path: '/components/sidebar', component: SidebarDemo },
  { path: '/components/backtotop', component: BacktotopDemo },
  { path: '/components/codehighlighter', component: CodeHighlighterDemo },
  { path: '/components/selectbutton', component: SelectButtonDemo }
]
const router = new VueRouter({
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  router: router,
  template: '<home/>',
  components: { Home }
}).$mount('#app')
