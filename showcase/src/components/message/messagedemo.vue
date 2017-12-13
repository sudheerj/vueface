<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">Message</span>
          <span>Messages is used to display messages inline.</span>
        </div>
      </div>
      <div id="wrapper">

        <p-messages :value="msgs"></p-messages>

        <h2>Features</h2>

        <h3 class="first">1. Basic</h3>
        <p>The list of messages displayed in one place using p-messages component.</p>
        <div>
          <p-button type="button"  @click="showSuccess()" label="Success" class="ui-button-success"></p-button>
          <p-button type="button"  @click="showInfo()" label="Info" class="ui-button-info"></p-button>
          <p-button type="button"  @click="showWarn()" label="Warn" class="ui-button-warning"></p-button>
          <p-button type="button"  @click="showError()" label="Error" class="ui-button-danger"></p-button>
          <p-button type="button"  @click="showMultiple()" label="Multiple"></p-button>
          <p-button type="button"  @click="clear()" icon="fa-close"  label="Clear"></p-button>
        </div>

        <h3>2. Inline Message CSS</h3>
        <p>CSS helpers to display inline messages mostly within forms.</p>
        <p-message severity="info" text="PrimeVue Rocks"></p-message>
        <p-message severity="success" text="Record Saved"></p-message>
        <p-message severity="warn" text="Are you sure?"></p-message>
        <p-message severity="error" text="Field is required"></p-message>

      </div>
  </div>
</template>
<script>
  export default {
    name: 'messagedemo',
    data () {
      return {
        msgs : []
      };
    },
    methods: {
      showSuccess () {
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Success Message', detail:'Order submitted'});
      },
      showInfo () {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeVue rocks'});
      },
      showWarn () {
        this.msgs = [];
        this.msgs.push({severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'});
      },
      showError () {
        this.msgs = [];
        this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
      },
      showMultiple () {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Message 1', detail:'PrimeVue rocks'});
        this.msgs.push({severity:'info', summary:'Message 2', detail:'PrimeNG rocks'});
        this.msgs.push({severity:'info', summary:'Message 3', detail:'PrimeReact rocks'});
      },
      clear () {
        this.msgs = [];
      }
    }
  };
</script>

