<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">Panel</span>
          <span>Panel is a grouping component providing with content toggle feature.</span>
        </div>
      </div>
      <div id="wrapper">

        <h2>Features</h2>

        <h3>1. Basic</h3>

        <p>The basic panel component displays the content with a header.</p>

        <p-panel header="Godfather I" :toggleable="true" :style="{'margin-bottom':'20px'}">
          The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
   His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
   Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
   kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.

        </p-panel>

        <h3>2. Customization</h3>

        <p>The panel component customized with header and footer slots.</p>

        <p-panel  :style="{'margin-bottom':'20px'}">
          <div slot="header">
            <div class="ui-helper-clearfix">
              <span class="ui-panel-title"
                    style="font-size:16px;display:inline-block;margin-top:2px">Custom Header</span>

              <p-button :style="{'float':'right'}" label="Save" icon="fa-check"></p-button>
            </div>
          </div>
          The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
   His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
   Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
   kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.

          <div slot="footer">
            <div class="ui-helper-clearfix">
              <p-button :style="{'float':'left'}" label="New" icon="fa-plus"></p-button>
              <p-button :style="{'float':'right'}" label="Delete" icon="fa-close"></p-button>
            </div>
          </div>
        </p-panel>

      </div>
  </div>
</template>
<script>
  export default {
    name: 'paneldemo',
    data () {
      return {};
    }
  };
</script>

