<template>
  <div id="app">
    <layout>
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

        <p-galleria :images="images" :panelWidth="500" :panelHeight="313" :showCaption="true"></p-galleria>

      </div>
    </layout>
  </div>
</template>
<script>
  import Layout from "../layout";
  //var images = [];
  export default {
    name: 'galleriademo',
    components: {Layout},
    data: function () {
      return {
          images: []
      }

    },
    methods: {
       createImages() {
         this.images.push({source:'https://www.primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria1.jpg', alt:'Description for Image 1', title:'Title 1'});
         this.images.push({source:'https://www.primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria2.jpg', alt:'Description for Image 2', title:'Title 2'});
         this.images.push({source:'https://www.primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria3.jpg', alt:'Description for Image 3', title:'Title 3'});
         this.images.push({source:'https://www.primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria4.jpg', alt:'Description for Image 4', title:'Title 4'});
         this.images.push({source:'https://www.primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria5.jpg', alt:'Description for Image 5', title:'Title 5'});
         this.images.push({source:'https://www.primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria6.jpg', alt:'Description for Image 6', title:'Title 6'});
         this.images.push({source:'https://www.primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria7.jpg', alt:'Description for Image 7', title:'Title 7'});
         this.images.push({source:'https://www.primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria8.jpg', alt:'Description for Image 8', title:'Title 8'});
         this.images.push({source:'https://www.primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria9.jpg', alt:'Description for Image 9', title:'Title 9'});
         this.images.push({source:'https://www.primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria10.jpg', alt:'Description for Image 10', title:'Title 10'});
         this.images.push({source:'https://www.primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria11.jpg', alt:'Description for Image 11', title:'Title 11'});
         this.images.push({source:'https://www.primefaces.org/primeng/assets/showcase/images/demo/galleria/galleria12.jpg', alt:'Description for Image 12', title:'Title 12'});
       }

    },
    mounted() {
       this.createImages();
    }

  };
</script>

