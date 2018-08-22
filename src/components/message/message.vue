<template>
  <div aria-live="polite" class="ui-message ui-widget ui-corner-all" v-if="severity"
       :class="{'ui-messages-info': (severity === 'info'),
                'ui-messages-warn': (severity === 'warn'),
                'ui-messages-error': (severity === 'error'),
                'ui-messages-success': (severity === 'success')}">
    <span class="ui-message-icon" :class="getIcon()"></span>
    <span class="ui-message-text">{{text}}</span>
  </div>
</template>
<style lang="css" src="./message.css"></style>
<script>
  export default {
    name: 'vf-message',
    data: function () {
      return {
      };
    },
    props: {
      severity: {
        type: String,
        default: null
      },
      text: {
        type: String,
        default: null
      }
    },
    methods: {
      getIcon () {
        let icon = null;

        if (this.severity) {
          switch (this.severity) {
            case 'success':
              icon = 'fa fa-check';
              break;

            case 'info':
              icon = 'fa fa-info-circle';
              break;

            case 'error':
              icon = 'fa fa-close';
              break;

            case 'warn':
              icon = 'fa fa-warning';
              break;

            default:
              icon = 'fa fa-info-circle';
              break;
          }
        }

        return icon;
      }
    }
  };
</script>
