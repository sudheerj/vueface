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
          <code class="language-css" v-code>
            .ui-datatable table {
                border-collapse:collapse;
                width: 100%;
                table-layout: fixed;
            }
            </code>
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

