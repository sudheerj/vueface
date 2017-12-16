<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">CodeHighlighter</span>
          <span>CodeHighlighter CodeHighlighter is an attribute directive to highlight code blocks using PrismJS.</span>
        </div>
      </div>
      <div id="wrapper">

        <div class="content-section implementation">
          <h3 class="first">CSS</h3>
<pre>
<code class="language-css" v-code>
.ui-datatable table {
    border-collapse:collapse;
    width: 100%;
    table-layout: fixed;
}
</code>
</pre>
          <h3>HTML</h3>
 <pre>
<code class="language-markup" v-code>
&lt;div id="pm" style="width:300px"&gt;
&lt;div&gt;
&lt;div&gt;&lt;a data-icon="fa-file-o"&gt;File&lt;/a&gt;&lt;/div&gt;
&lt;div&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a data-icon="fa-plus"&gt;New&lt;/a&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a&gt;Project&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a&gt;Other&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/li&gt;
        &lt;li&gt;&lt;a&gt;Open&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a&gt;Quit&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
</code>
 </pre>

          <h3>Javascript</h3>
          <pre>
<code class="language-javascript" v-code>
var map;
    function initMap() &#123;
        map = new google.maps.Map(document.getElementById('map'), &#123;
        center: &#123;lat: -34.397, lng: 150.644&#125;,
        zoom: 8
    &#125;);
&#125;
</code>
</pre>
        </div>
      </div>
  </div>
</template>
<script>
  import code  from '../../../../src/components/codehighlighter/codehighlighter';
  export default {
    name: 'codehighlighterdemo',
    data () {
      return {};
    },
    directives: {
      code
    }
  };
</script>

