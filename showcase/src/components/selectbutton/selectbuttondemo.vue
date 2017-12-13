<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">SelectButton</span>
          <span>SelectButton is used to choose single or multiple items from a list using buttons.</span>
        </div>
      </div>
      <div id="wrapper">

        <h3 class="first">Single</h3>
        <p-selectButton :options="types" v-model="selectedType"></p-selectButton>

        <p>Selected Type: {{selectedType}}</p>

        <h3>Multiple</h3>
        <p-selectButton :options="types" v-model="selectedTypes" :multiple="true"></p-selectButton>
        <p>Selected Types: <span>{{selectedTypes}} </span></p>

        <hr />

        <p-button type="button" @click="clear" icon="fa-close" label="Clear"></p-button>
      </div>
  </div>
</template>
<script>
  
  const types = []
  types.push({label: 'Apartment', value: 'Apartment'});
  types.push({label: 'House', value: 'House'});
  types.push({label: 'Studio', value: 'Studio'});
 
  export default {
    name: 'ratingdemo',
    data () {
      return {
        types,
        selectedType: null,
        selectedTypes: ['Apartment','Studio']
      };
    },
    methods: {
      clear () {
        this.selectedType = null;
        this.selectedTypes = [];
      }
    }
  };
</script>

