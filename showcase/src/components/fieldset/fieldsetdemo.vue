<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">Fieldset</span>
          <span>Fieldset is a grouping component with a content toggle feature.</span>
        </div>
      </div>
      <div id="wrapper">

        <h2>Features</h2>

        <h3>1. Basic</h3>

        <p>The basic fieldset component displays the content with a legend.</p>

        <vf-fieldset legend="Godfather I" :style="{'margin-bottom':'20px'}">
          The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
   His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
   Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
   kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.

        </vf-fieldset>

        <h3>2. Toggleable</h3>

        <p>The fieldset component displays the content with a toggleable legend.</p>

        <vf-fieldset legend="Godfather II" :toggleable="true" :style="{'margin-bottom':'20px'}">
          The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
   His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
   Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
   kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
        </vf-fieldset>

      </div>
  </div>
</template>
<script>
  export default {
    name: 'fieldsetdemo',
    data () {
      return {};
    },
  };
</script>

