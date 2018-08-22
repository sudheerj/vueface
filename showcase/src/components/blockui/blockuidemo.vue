<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">BlockUI</span>
          <span>BlockUI can either block other components or the whole page.</span>
        </div>
      </div>
      <div id="wrapper">

        <h2>Features</h2>

        <h3 class="first">1. Document</h3>
        <p>The entire document is blocked</p>
        <vf-blockUI :blocked="blockedDocument"></vf-blockUI>

        <vf-button type="button" label="Block" @click="blockDocument()"></vf-button>

        <h3>2. Target</h3>
        <p>Particular target</p>
        <vf-button type="button" label="Block" @click="blockPanel()"></vf-button>
        <vf-button type="button" label="Unblock" @click="unblockPanel()"></vf-button>

        <vf-blockUI :target="target" :blocked="blockedPanel">
          <i class="fa fa-lock fa-5x" style="position:absolute;top:25%;left:50%"></i>
        </vf-blockUI>
        <vf-panel id="pnl" header="Godfather I" :style="{'margin-top':'20px'}">
          The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
          His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
          Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
          kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
      </vf-panel>

      </div>
  </div>
</template>
<script>
  export default {
    name: 'blockuidemo',
    data () {
      return {
        blockedPanel: false,
        blockedDocument: false,
        target: 'pnl'
      };
    },
    methods: {
      blockDocument () {
        this.blockedDocument = true;
        setTimeout(() => {
          this.blockedDocument = false;
        }, 3000);
      },
      blockPanel () {
        this.blockedPanel = true;
      },
      unblockPanel () {
        this.blockedPanel = false;
      }
    }
  };
</script>

