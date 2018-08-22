<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">ScrollPanel</span>
          <span>ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar.</span>
        </div>
      </div>
      <div id="wrapper">

        <div class="ui-g">
          <div class="ui-g-12 ui-md-4">
            <vf-scrollPanel :scrollpanelStyle="{'width': '100%', 'height': '200px'}">
              <div style="{padding:'1em',line-height:'1.5'}">
                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                son Michael has just come home from the war, but does not intend to become part of his father's business. Through
                Michael's life the nature of the family business becomes clear. The business of the family is just like the head
                of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands
                against the good of the family.
                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's
                life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind
                and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the
                family.
            </div>
            </vf-scrollPanel>
          </div>
          <div class="ui-g-12 ui-md-4">
            <vf-scrollPanel :scrollpanelStyle="{'width': '100%', 'height': '200px'}" scrollpanelStyleClass="custombar1">
              <div style="{padding:'1em',line-height:'1.5'}">
                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                son Michael has just come home from the war, but does not intend to become part of his father's business. Through
                Michael's life the nature of the family business becomes clear. The business of the family is just like the head
                of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands
                against the good of the family.
                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's
                life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind
                and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the
                family.
            </div>
            </vf-scrollPanel>
          </div>
          <div class="ui-g-12 ui-md-4">
            <vf-scrollPanel :scrollpanelStyle="{'width': '100%', 'height': '200px'}" scrollpanelStyleClass="custombar2">
              <div style="{padding:'1em',line-height:'1.5'}">
                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                son Michael has just come home from the war, but does not intend to become part of his father's business. Through
                Michael's life the nature of the family business becomes clear. The business of the family is just like the head
                of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands
                against the good of the family.
                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
                son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's
                life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind
                and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the
                family.
            </div>
            </vf-scrollPanel>
          </div>
        </div>

      </div>
  </div>
</template>
<style>
  .custombar1 .ui-scrollpanel-wrapper {
    border-right: 9px solid #f4f4f4;
  }

  .custombar1 .ui-scrollpanel-bar {
    background-color: #1976d2;
    opacity: 1;
    transition: background-color .3s;
  }

  .custombar1 .ui-scrollpanel-bar:hover {
    background-color: #135ba1;
  }

  .custombar2 .ui-scrollpanel-wrapper {
    border-right: 9px solid #000000;
  }

  .custombar2 .ui-scrollpanel-bar {
    background-color: #68C77D;
    border-radius: 0;
    opacity: 1;
    transition: background-color .3s;
  }

  .custombar2:hover .ui-scrollpanel-bar {
    background-color: #46A55A;
  }
</style>
<script>
  export default {
    name: 'scrollPaneldemo',
    data () {
      return {
      };
    }
  };
</script>
