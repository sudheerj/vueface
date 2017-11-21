<template>
  <div id="layout-footer">
    <router-view></router-view>
  <div class="content-section layout-footer">
    <span><a href="http://primefaces.org">PrimeFaces</a>, Copyright &copy; 2017</span>
    <div class="footer-links">
      <a href="https://github.com/primefaces/primevue"><i class="fa fa-github"></i></a>
      <a href="https://twitter.com/primefaces?lang=en"><i class="fa fa-twitter"></i></a>
    </div>
   </div>
</div>
</template>

<script>

  export default {
    name: 'footer-layout'
  };
</script>
