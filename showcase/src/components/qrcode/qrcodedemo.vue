<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">QRCode</span>
          <span>A barcode is a machine-readable optical label that contains information about the item to which it is attached.</span>
        </div>
      </div>
      <div id="wrapper">

        <h3 class="first">Customized QRCode</h3>
        <p-qrcode value="https://github.com/primefaces/primevue" :size="300"  background="green" backgroundAlpha="0.7" foreground="black" foregroundAlpha="0.7"/>

      </div>
  </div>
</template>

<script>
  export default {
    name: 'qrcodedemo',
    data () {
      return {
      };
    }
  };
</script>
