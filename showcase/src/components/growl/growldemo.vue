<template>
  <div id="app">
    <layout>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">Growl</span>
          <span>Growl is used to display messages in an overlay.</span>
        </div>
      </div>
      <div id="wrapper">
        <p-growl :value="msgs" :growlStyle="{top:'100px'}"></p-growl>
        <p-growl :value="msgs1" :growlStyle="{top:'100px'}" :sticky="true"></p-growl>

        <h3 class="first"></h3>
        <p>The notifications displayed in one place using p-growl component.</p>
        <div>
          <p-button type="button"  @click="showSuccess()" label="Success" class="ui-button-success"></p-button>
          <p-button type="button"  @click="showInfo()" label="Info" class="ui-button-info"></p-button>
          <p-button type="button"  @click="showWarn()" label="Warn" class="ui-button-warning"></p-button>
          <p-button type="button"  @click="showError()" label="Error" class="ui-button-danger"></p-button>
          <p-button type="button"  @click="showMultiple()" label="Multiple"></p-button>
          <p-button type="button"  @click="showSticky()" label="Sticky"></p-button>
          <p-button type="button"  @click="clear()" icon="fa-close"  label="Clear"></p-button>
        </div>

      </div>
    </layout>
  </div>
</template>
<script>
  import Layout from "../layout";

  export default {
    name: 'growldemo',
    components: {Layout},
    data: function () {
      return {
        msgs : [],
        msgs1: []
      }

    },
    methods: {
      showSuccess() {
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Success Message', detail:'Order submitted'});
      },

      showInfo() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeVue rocks'});
      },

      showWarn() {
        this.msgs = [];
        this.msgs.push({severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'});
      },

      showError() {
        this.msgs = [];
        this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
      },

      showMultiple() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Message 1', detail:'PrimeVue rocks'});
        this.msgs.push({severity:'info', summary:'Message 2', detail:'PrimeNG rocks'});
        this.msgs.push({severity:'info', summary:'Message 3', detail:'PrimeReact rocks'});
      },

      showSticky() {
        this.msgs1 = [];
        this.msgs1.push({severity:'info', summary:'Error Message', detail:'Sticky message'});
      },

      clear() {
        this.msgs = [];
        this.msgs1 = [];
      }
    }
  };
</script>

