<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">Message</span>
          <span>Messages is used to display messages inline.</span>
        </div>
      </div>
      <div id="wrapper">

        <vf-messages :value="msgs"></vf-messages>

        <h2>Features</h2>

        <h3 class="first">1. Basic</h3>
        <p>The list of messages displayed in one place using p-messages component.</p>
        <div>
          <vf-button type="button"  @click="showSuccess()" label="Success" class="ui-button-success"></vf-button>
          <vf-button type="button"  @click="showInfo()" label="Info" class="ui-button-info"></vf-button>
          <vf-button type="button"  @click="showWarn()" label="Warn" class="ui-button-warning"></vf-button>
          <vf-button type="button"  @click="showError()" label="Error" class="ui-button-danger"></vf-button>
          <vf-button type="button"  @click="showMultiple()" label="Multiple"></vf-button>
          <vf-button type="button"  @click="clear()" icon="fa-close"  label="Clear"></vf-button>
        </div>

        <h3>2. Inline Message CSS</h3>
        <p>CSS helpers to display inline messages mostly within forms.</p>
        <vf-message severity="info" text="VueFace Rocks"></vf-message>
        <vf-message severity="success" text="Record Saved"></vf-message>
        <vf-message severity="warn" text="Are you sure?"></vf-message>
        <vf-message severity="error" text="Field is required"></vf-message>

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
        this.msgs.push({severity:'info', summary:'Info Message', detail:'VueFace rocks'});
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
        this.msgs.push({severity:'info', summary:'Message 1', detail:'Vue rocks'});
        this.msgs.push({severity:'info', summary:'Message 2', detail:'Angular rocks'});
        this.msgs.push({severity:'info', summary:'Message 3', detail:'React rocks'});
      },
      clear () {
        this.msgs = [];
      }
    }
  };
</script>

