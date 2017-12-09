<template>
  <div id="app">
    <layout>
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
        <p-blockUI :blocked="blockedDocument"></p-blockUI>

        <p-button type="button" label="Block" @click="blockDocument()"></p-button>

        <h3>2. Target</h3>
        <p>Particular target</p>
        <p-button type="button" label="Block" @click="blockPanel()"></p-button>
        <p-button type="button" label="Unblock" @click="unblockPanel()"></p-button>

        <p-blockUI :target="target" :blocked="blockedPanel">
          <i class="fa fa-lock fa-5x" style="position:absolute;top:25%;left:50%"></i>
        </p-blockUI>
        <p-panel id="pnl" header="Godfather I" :style="{'margin-top':'20px'}">
          The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
          His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
          Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
          kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
      </p-panel>

      </div>
    </layout>
  </div>
</template>
<script>
  import Layout from "../layout";
  let target = null;
  export default {
    name: 'blockuidemo',
    components: {Layout},
    data: function () {
      return {
        blockedPanel: false,
        blockedDocument: false,
        target: 'pnl'
      }

    },
    methods: {
      blockDocument() {
        this.blockedDocument = true;
        setTimeout(() => {
          this.blockedDocument = false;
        }, 3000);
      },
      blockPanel() {
        this.blockedPanel = true;
      },
      unblockPanel() {
        this.blockedPanel = false;
      }
    },
    mounted: {
       // this.target = (HTMLElement)this.$refs.pnl;
    }
  };
</script>

