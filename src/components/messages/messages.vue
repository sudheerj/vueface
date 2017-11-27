<template>
  <div v-if="hasMessages()" class="ui-messages ui-widget ui-corner-all" style="display:block"
       :class="{'ui-messages-info':(value[0].severity === 'info'),
                    'ui-messages-warn':(value[0].severity === 'warn'),
                    'ui-messages-error':(value[0].severity === 'error'),
                    'ui-messages-success':(value[0].severity === 'success')}">
    <a href="#" class="ui-messages-close" @click="clear($event)" v-if="closable">
      <i class="fa fa-close"></i>
    </a>
    <span class="ui-messages-icon fa fa-fw fa-2x" :class="getIcon()"></span>
    <ul>
      <li v-for="msg in value">
        <span v-if="msg.summary" class="ui-messages-summary" v-html="msg.summary"></span>
        <span v-if="msg.detail" class="ui-messages-detail" v-html="msg.detail"></span>
      </li>
    </ul>
  </div>
</template>
<style lang="css" src="./messages.css"></style>
<script>
  export default {
    name: 'p-messages',
    data: function () {
      return {
      };
    },
    props: {
      value: {
        type: Array,
        default: []
      },
      closable: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      hasMessages () {
        return this.value && this.value.length > 0;
      },

      getSeverityClass () {
        return this.value[0].severity;
      },

      clear (event) {
        this.value = [];
        this.$emit('valueChange', this.value);

        event.preventDefault();
      },

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
      },
      destroyed: function () {
      }
    }
  };
</script>
