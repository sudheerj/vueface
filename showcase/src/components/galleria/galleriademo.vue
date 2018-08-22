<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">Galleria</span>
          <span>Galleria is a content gallery component.</span>
        </div>
      </div>
      <div id="wrapper">

        <h2>Features</h2>

        <h3>Basic</h3>

        <p>Galleria requires a set of images to display. Images attribute defines the path of the image whereas title and alt attributes are used in the caption section to display summary and description about an image.</p>

        <vf-galleria :images="images" :panelWidth="500" :panelHeight="313" :showCaption="true"></vf-galleria>

      </div>
  </div>
</template>
<script>
  export default {
    name: 'galleriademo',
    data () {
      return {
        images: []
      };
    },
    methods: {
       createImages () {
         this.images.push({source:'https://github.com/sudheerj/vueface/tree/master/showcase/src/assets/images/cars/Golf.png', alt:'Description for Image 1', title:'Title 1'});
         this.images.push({source:'https://github.com/sudheerj/vueface/tree/master/showcase/src/assets/images/cars/Jetta.png', alt:'Description for Image 2', title:'Title 2'});
         this.images.push({source:'https://github.com/sudheerj/vueface/tree/master/showcase/src/assets/images/cars/Passat.png', alt:'Description for Image 3', title:'Title 3'});
         this.images.push({source:'https://github.com/sudheerj/vueface/tree/master/showcase/src/assets/images/cars/Polo.png', alt:'Description for Image 4', title:'Title 4'});
         this.images.push({source:'https://github.com/sudheerj/vueface/tree/master/showcase/src/assets/images/cars/Scirocco.png', alt:'Description for Image 5', title:'Title 5'});
         this.images.push({source:'https://github.com/sudheerj/vueface/tree/master/showcase/src/assets/images/cars/Touareg.png', alt:'Description for Image 6', title:'Title 6'});
         this.images.push({source:'https://github.com/sudheerj/vueface/tree/master/showcase/src/assets/images/cars/Yeni.png', alt:'Description for Image 7', title:'Title 7'});
       }
    },
    mounted() {
       this.createImages();
    }
  };
</script>

