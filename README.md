# VueFace
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] <!--[![Coverage Status][coveralls-image]][coveralls-url]--> [![npm](https://img.shields.io/npm/dt/vueface.svg)]() [![Dependency Status][daviddm-image]][daviddm-url] ![Crates.io](https://img.shields.io/github/license/mashape/apistatus.svg)

> VueFace is an open source component library for VueJS framework with around 40 components at the moment. It supports 20+ themes for giving different look & feel for all the components.

## Install
VueFace is available in NPM and you can add to your project as a dependency as below

``` shell
npm install --save vueface
```

## Quick start
The VueFace library need to be configured before going to use the components
``` javascript
import Vue from 'vue'
import VueFace from 'vueface'

Vue.use(VueFace)
```
Configure styles for your components in your home.vue/index.html. Forexample, add below resources to home.vue as below
``` css
<style id="current-theme" lang="css" src="node_modules/src/assets/themes/omega/theme.css"></style>
<style lang="css" src="node_modules/src/assets/vue-face.css"></style>
<style lang="css" src="node_modules/font-awesome/css/font-awesome.min.css"></style>
```
## Demo
The showcase is available here(https://sudheerj.github.io/vueface) for each component and their features.

## How to Run


#### build for production with minification
``` shell
npm run build
```

#### serve with hot reload at localhost:8080
``` shell
npm start
```

### LICENSE
MIT

[npm-image]: https://img.shields.io/npm/v/vueface.svg
[npm-url]: https://npmjs.org/package/vueface
[travis-image]: https://travis-ci.org/sudheerj/vueface.svg?branch=master
[travis-url]: https://travis-ci.org/sudheerj/vueface
[daviddm-image]: https://david-dm.org/sudheerj/vueface.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/sudheerj/vueface-module
[coveralls-image]: https://coveralls.io/repos/sudheerj/vueface/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/github/sudheerj/vueface?branch=master
