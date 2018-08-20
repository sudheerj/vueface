<template>

    <div>
      <div style="text-align: center;margin-top: 80px;">
      <h2>VueFace</h2>
      <h5>A VueJS Component library</h5>
      </div>
      <div id="wrapper">
      <h3>Install</h3>
      <p>Install using npm package manager</p>
      <pre v-highlightjs><code class="bash">$ npm install --save vueface</code></pre>
      <h3>Quick Start (Using vue-cli)</h3>
      <pre v-highlightjs><code class="bash">$ npm install -g vue-cli
$ vue init webpack vue-app
$ cd vue-app
$ npm install --save vueface</code></pre>

      <h4>main.js</h4>
      <pre v-highlightjs><code class="javascript">
import Vue from &#x27;vue&#x27;
import App from &#x27;./App&#x27;
import VueFace from &#x27;vueface&#x27;

Vue.use(VueFace);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: &#x27;#app&#x27;,
  template: &#x27;&lt;App/&gt;&#x27;,
  components: { App };
})
</code></pre>
      <h4>App.vue</h4>
      <pre v-highlightjs><code class="html">&lt;template&gt;
  &lt;div id=&quot;app&quot;&gt;
    &lt;router-view&gt;&lt;/router-view&gt;
    &lt;p-button&gt;Testing&lt;/p-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: &#x27;app&#x27;
}
&lt;/script&gt;

&lt;style&gt;
#app {
  font-family: &#x27;Avenir&#x27;, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
&lt;/style&gt;
</code></pre>
      <h4>Run</h4>
      <pre v-highlightjs><code class="bash">$ npm run dev</code></pre>
      </div>
    </div>

</template>
<script>
  export default {
    name: 'indexdemo'
  }
</script>
<style>
  #wrapper {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    margin-top: 80px;
    margin-left: 330px;
  }
</style>
