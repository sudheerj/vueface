<template>
  <div>
    <canvas ref="qrcode"></canvas>
  </div>
</template>

<script>
  import Qrious from 'qrious';
  export default {
    name: 'p-qrcode',
    data () {
      return {
        qrcode: null
      };
    },
    props: {
      value: {
        type: String,
        required: ''
      },
      background: {
        type: String,
        default: 'white'
      },
      backgroundAlpha: {
        type: Number,
        default: 1.0
      },
      foreground: {
        type: String,
        default: 'black'
      },
      foregroundAlpha: {
        type: Number,
        default: 1.0
      },
      level: {
        type: String,
        default: 'L'
      },
      mime: {
        type: String,
        default: 'image/png'
      },
      padding: {
        type: Number,
        default: null
      },
      size: {
        type: Number,
        default: 100
      }
    },
    watch: {
      background () {
        this.qrcode.background = this.background;
      },
      backgroundAlpha () {
        this.qrcode.backgroundAlpha = this.backgroundAlpha;
      },
      foreground () {
        this.qrcode.foreground = this.foreground;
      },
      foregroundAlpha () {
        this.qrcode.foregroundAlpha = this.foregroundAlpha;
      },
      level () {
        this.qrcode.level = this.level;
      },
      mime () {
        this.qrcode.mime = this.mime;
      },
      padding () {
        this.qrcode.padding = this.padding;
      },
      size () {
        this.qrcode.size = this.size;
      },
      value () {
        this.qrcode.value = this.value;
      }
    },
    methods: {
      init () {
        let qrObject = {
          element: this.$refs.qrcode,
          background: this.background,
          backgroundAlpha: this.backgroundAlpha,
          foreground: this.foreground,
          foregroundAlpha: this.foregroundAlpha,
          level: this.level,
          mime: this.mime,
          padding: this.padding,
          size: this.size,
          value: this.value
        };
        this.qrcode = new Qrious(qrObject);
      }
    },
    mounted () {
      this.init();
    }
  };
</script>
