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

import ButtonDemo from './src/components/button/buttondemo.vue'
import ProgressbarDemo from './src/components/progressbar/progressbardemo.vue'
import ProgressSpinnerDemo from './src/components/progressspinner/progressspinnerdemo.vue'
import CheckboxDemo from './src/components/checkbox/checkboxdemo.vue'
import TristateCheckboxDemo from './src/components/tristatecheckbox/tristatecheckboxdemo.vue'
import ChartsDemo from './src/components/charts/chartsdemo.vue'
import RatingDemo from './src/components/rating/ratingdemo.vue'
import ToggleButtonDemo from './src/components/togglebutton/togglebuttondemo.vue'
import RadioButtonDemo from './src/components/radiobutton/radiobuttondemo.vue'
import CaptchaDemo from './src/components/captcha/captchademo.vue'
import Index from './src/components/index.vue'

const routes = [
  { path: '/components/button', component: ButtonDemo },
  { path: '/components/progressspinner', component: ProgressSpinnerDemo },
  { path: '/components/progressbar', component: ProgressbarDemo },
  { path: '/components/checkbox', component: CheckboxDemo },
  { path: '/components/tristatecheckbox', component: TristateCheckboxDemo },
  { path: '/components/charts', component: ChartsDemo },
  { path: '/components/rating', component: RatingDemo },
  { path: '/components/togglebutton', component: ToggleButtonDemo },
  { path: '/components/radiobutton', component: RadioButtonDemo },
  { path: '/components/captcha', component: CaptchaDemo },
  { path: '/components/index', component: Index },
  { path: '/', redirect: '/components/index' }
]
const router = new VueRouter({
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  router: router,
  template: '<router-view></router-view>'
}).$mount('#app')
