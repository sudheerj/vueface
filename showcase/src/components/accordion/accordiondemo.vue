<template>
  <div id="app">
    <layout>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">Accordion</span>
          <span>Accordion groups a collection of contents in tabs.</span>
        </div>
      </div>
      <div id="wrapper">

        <h2>Features</h2>

        <h3>1. Basic</h3>

        <p>The accordion displays stacked group of information in the form of tabs.</p>

        <p-accordion>
          <p-accordionTab header="Godfather I" :selected="true">
            The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
        </p-accordionTab>
          <p-accordionTab header="Godfather II">
            Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.
        </p-accordionTab>
          <p-accordionTab header="Godfather III">
            After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
        </p-accordionTab>
        </p-accordion>

        <h3>2. Multiple</h3>

        <p>Enabled multiple tabs selected at the same time using multiple attribute.</p>
        <p-accordion :multiple="true">
          <p-accordionTab header="Godfather I">
            The story begins  as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
        </p-accordionTab>
          <p-accordionTab header="Godfather II">
            Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.
       </p-accordionTab>
          <p-accordionTab header="Godfather III">
            After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
        </p-accordionTab>
        </p-accordion>


        <h3>3. Events</h3>
        <p>The events such as onClose and onOpen invoked on tab change</p>

        <p-accordion @onClose="onTabClose($event)" @onOpen="onTabOpen($event)">
          <p-accordionTab header="Godfather I">
            The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
        </p-accordionTab>
          <p-accordionTab header="Godfather II">
            Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.
        </p-accordionTab>
          <p-accordionTab header="Godfather III">
            After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
        </p-accordionTab>
          <p-accordionTab header="Godfather IV" :disabled="true">
            After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
        </p-accordionTab>
        </p-accordion>

        <h3>4. Programmatic</h3>
        <p>The tabs interacted in a programmatic way using methods available</p>

        <div style="margin-bottom: 1em">
          <p-button type="button"  icon="fa fa-chevron-up" @click="openPrev()"></p-button>
          <p-button type="button"  icon="fa fa-chevron-down" @click="openNext()"></p-button>
        </div>

        <p-accordion :activeIndex="index">
          <p-accordionTab header="Godfather I">
            The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
        </p-accordionTab>
          <p-accordionTab header="Godfather II">
            Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.
        </p-accordionTab>
          <p-accordionTab header="Godfather III">
            After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
        </p-accordionTab>
          <p-accordionTab header="Godfather IV">
            After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.
        </p-accordionTab>
        </p-accordion>

      </div>
    </layout>
  </div>
</template>
<script>
  import Layout from "../layout";

  let msgs = [];
  let index = -1;
  export default {
    name: 'accordiondemo',
    components: {Layout},
    data: function () {
      return {
        msgs: msgs,

        index: index
      }

    },
    methods: {
      onTabClose(event) {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Tab Closed', detail: 'Index: ' + event.index});
      },

      onTabOpen(event) {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
      },

      openNext() {
        this.index = (this.index === 3) ? 0 : this.index + 1;
      },

      openPrev() {
        this.index = (this.index <=0 ) ? 3 : this.index - 1;
      }
    }
  };
</script>

