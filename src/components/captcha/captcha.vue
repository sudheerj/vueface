<template>
  <div ref="captcha"></div>
</template>
<script>
  let _instance = null;
  export default {
    name: 'vf-captcha',
    data: function () {
      return {
        _instance
      };
    },
    props: {
      siteKey: {
        type: String,
        default: null
      },
      theme: {
        type: String,
        default: 'light'
      },
      type: {
        type: String,
        default: 'image'
      },
      size: {
        type: String,
        default: 'normal'
      },
      tabindex: {
        type: Number,
        default: 0
      },
      language: {
        type: String,
        default: null
      },
      initCallback: {
        type: String,
        default: 'initRecaptcha'
      }
    },
    methods: {
      init () {
        this._instance = (window).grecaptcha.render(this.$refs.captcha, {
          'sitekey': this.siteKey,
          'theme': this.theme,
          'type': this.type,
          'size': this.size,
          'tabindex': this.tabindex,
          'hl': this.language,
          'callback': (response) => { this._zone.run(() => this.recaptchaCallback(response)); },
          'expired-callback': () => { this._zone.run(() => this.recaptchaExpiredCallback()); }
        });
      },

      reset () {
        if (this._instance === null) { return; }

        (window).grecaptcha.reset(this._instance);
      },

      getResponse () {
        if (this._instance === null) { return null; }

        return (window).grecaptcha.getResponse(this._instance);
      },

      recaptchaCallback (response) {
        this.$emit('response', {
          response: response
        });
      },

      recaptchaExpiredCallback () {
        this.$emit('expire');
      }
    },
    mounted: function () {
      if ((window).grecaptcha) {
        this.init();
      } else {
        (window)[this.initCallback] = () => {
          this.init();
        };
      }
    },
    computed: {

    }
  };
</script>
