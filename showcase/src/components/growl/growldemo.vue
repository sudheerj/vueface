<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">Growl</span>
          <span>Growl is used to display messages in an overlay.</span>
        </div>
      </div>
      <div id="wrapper">
        <vf-growl :value="msgs" :growlStyle="{top:'100px'}"></vf-growl>
        <vf-growl :value="msgs1" :growlStyle="{top:'100px'}" :sticky="true"></vf-growl>

        <h3 class="first"></h3>
        <p>The notifications displayed in one place using p-growl component.</p>
        <div>
          <vf-button type="button"  @click="showSuccess()" label="Success" class="ui-button-success"></vf-button>
          <vf-button type="button"  @click="showInfo()" label="Info" class="ui-button-info"></vf-button>
          <vf-button type="button"  @click="showWarn()" label="Warn" class="ui-button-warning"></vf-button>
          <vf-button type="button"  @click="showError()" label="Error" class="ui-button-danger"></vf-button>
          <vf-button type="button"  @click="showMultiple()" label="Multiple"></vf-button>
          <vf-button type="button"  @click="showSticky()" label="Sticky"></vf-button>
          <vf-button type="button"  @click="clear()" icon="fa-close"  label="Clear"></vf-button>
        </div>

      </div>
  </div>
</template>
<script>
  export default {
    name: 'growldemo',
    data () {
      return {
        msgs : [],
        msgs1: []
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
        this.msgs.push({severity:'info', summary:'Message 1', detail:'VueJS rocks'});
        this.msgs.push({severity:'info', summary:'Message 2', detail:'Angular rocks'});
        this.msgs.push({severity:'info', summary:'Message 3', detail:'React rocks'});
      },
      showSticky () {
        this.msgs1 = [];
        this.msgs1.push({severity:'success', summary:'Error Message', detail:'Sticky message'});
        this.msgs1.push({severity:'info', summary:'Message 1', detail:'VueJS rocks'});
        this.msgs1.push({severity:'warn', summary:'Message 2', detail:'Angular rocks'});
        this.msgs1.push({severity:'error', summary:'Message 3', detail:'React rocks'});
      },
      clear () {
        this.msgs = [];
        this.msgs1 = [];
      }
    }
  };
</script>

