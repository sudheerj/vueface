<template>
  <div>
  <div ref="galleria" class="ui-galleria ui-widget ui-widget-content ui-corner-all" :style="galleriaStyle" :class="galleriaStyleClass" >
    <ul class="ui-galleria-panel-wrapper" :style="{width:panelWidth + 'px', height: panelHeight + 'px'}" >
      <li v-for="(image,i) in images" class="ui-galleria-panel" :class="{'ui-helper-hidden':i!=activeIndex}"
          :style="{width:panelWidth + 'px', height: panelHeight + 'px'}" @click="clickImage($event,image,i)">
        <img class="ui-panel-images" :src="image.source" :alt="image.alt" :title="image.title"/>
      </li>
    </ul>
    <div class="ui-galleria-filmstrip-wrapper" v-if="showFilmstrip">
      <ul class="ui-galleria-filmstrip" :style="{transition:'left 1s',left: stripLeft + 'px'}" >
        <li ref="frame" v-for="(image, i) in images" :class="{'ui-galleria-frame-active':i==activeIndex}" class="ui-galleria-frame" @click="frameClick(frame)"
            :style="{width:frameWidth + 'px', height: frameHeight + 'px', transition: 'opacity 0.75s ease'}" >
          <div class="ui-galleria-frame-content">
            <img :src="image.source" :alt="image.alt" :title="image.title" class="ui-galleria-frame-image"
                 :style="{width:frameWidth + 'px', height: frameHeight + 'px'}">
          </div>
        </li>
      </ul>
    </div>
    <div class="ui-galleria-nav-prev fa fa-fw fa-chevron-circle-left" @click="clickNavLeft()" :style="{bottom: frameHeight/2 +'px'}" v-if="activeIndex !== 0"></div>
    <div class="ui-galleria-nav-next fa fa-fw fa-chevron-circle-right" @click="clickNavRight()" :style="{bottom: frameHeight/2 +'px'}"></div>
    <div class="ui-galleria-caption" v-if="showCaption&&images" style="display:block">
      <h4>{{images[activeIndex] ? images[activeIndex].title : ''}}</h4><p>{{images[activeIndex] ? images[activeIndex].alt : ''}}</p>
    </div>
  </div>
    </div>
</template>
<style lang="css" src="./galleria.css"></style>
<script>
  import domHandler from '../dom/domhandler.js';
  export default {
    name: 'p-galleria',
    data: function () {
      return {
        _images: null,

        slideshowActive: false,

        container: null,

        panelWrapper: null,

        panels: null,

        caption: null,

        stripWrapper: null,

        strip: null,

        frames: null,

        interval: null,

        stripLeft: 0,

        imagesChanged: false,

        initialized: false,

        domHandler: domHandler,

        activeIndex: 0
      };
    },
    props: {
      images: {
        type: Array,
        default: null
      },
      galleriaStyle: {
        type: String,
        default: null
      },
      galleriaStyleClass: {
        type: String,
        default: null
      },
      panelWidth: {
        type: Number,
        default: 600
      },
      panelHeight: {
        type: Number,
        default: 400
      },
      frameWidth: {
        type: Number,
        default: 60
      },
      frameHeight: {
        type: Number,
        default: 40
      },
      activeImageIndex: {
        type: Number,
        default: 0
      },
      transitionInterval: {
        type: Number,
        default: 4000
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      showFilmstrip: {
        type: Boolean,
        default: true
      },
      showCaption: {
        type: Boolean,
        default: true
      }

    },
    methods: {
      render () {
        this.panels = domHandler.find(this.panelWrapper, 'li.ui-galleria-panel');

        if (this.showFilmstrip) {
          this.frames = domHandler.find(this.strip, 'li.ui-galleria-frame');
          this.stripWrapper.style.width = domHandler.width(this.panelWrapper) - 50 + 'px';
          this.stripWrapper.style.height = this.frameHeight + 'px';
        }

        if (this.showCaption) {
          this.caption = domHandler.findSingle(this.container, 'div.ui-galleria-caption');
          this.caption.style.bottom = this.showFilmstrip ? domHandler.getOuterHeight(this.stripWrapper, true) + 'px' : 0 + 'px';
          this.caption.style.width = domHandler.width(this.panelWrapper) + 'px';
        }

        if (this.autoPlay) {
          this.startSlideshow();
        }

        this.container.style.visibility = 'visible';
      },

      startSlideshow () {
        this.interval = setInterval(() => {
          this.next();
        }, this.transitionInterval);

        this.slideshowActive = true;
      },

      stopSlideshow () {
        if (this.interval) {
          clearInterval(this.interval);
        }

        this.slideshowActive = false;
      },

      clickNavRight () {
        if (this.slideshowActive) {
          this.stopSlideshow();
        }
        this.next();
      },

      clickNavLeft () {
        if (this.slideshowActive) {
          this.stopSlideshow();
        }
        this.prev();
      },

      frameClick (frame) {
        if (this.slideshowActive) {
          this.stopSlideshow();
        }

        this.select(domHandler.index(frame), false);
      },

      prev () {
        if (this.activeIndex !== 0) {
          this.select(this.activeIndex - 1, true);
        }
      },

      next () {
        if (this.activeIndex !== (this.panels.length - 1)) {
          this.select(this.activeIndex + 1, true);
        } else {
          this.select(0, false);
          this.stripLeft = 0;
        }
      },

      select (index, reposition) {
        if (index !== this.activeIndex) {
          let newPanel = this.panels[index];
          domHandler.fadeIn(newPanel, 500);

          if (this.showFilmstrip) {
            let newFrame = this.frames[index];

            if (reposition === undefined || reposition === true) {
              let frameLeft = newFrame.offsetLeft;
              let stepFactor = this.frameWidth + parseInt(getComputedStyle(newFrame)['margin-right'], 10);
              let stripLeft = this.strip.offsetLeft;
              let frameViewportLeft = frameLeft + stripLeft;
              let frameViewportRight = frameViewportLeft + this.frameWidth;

              if (frameViewportRight > domHandler.width(this.stripWrapper)) { this.stripLeft -= stepFactor; } else if (frameViewportLeft < 0) { this.stripLeft += stepFactor; }
            }
          }

          this.activeIndex = index;
        }
      },

      clickImage (event, image, i) {
        this.$emit('onImageClicked', {originalEvent: event, image: image, index: i});
      }

    },
    mounted: function () {
      this.activeIndex = this.activeImageIndex;
      this.imagesChanged = true;
      this.container = this.$refs.galleria;
      this.panelWrapper = domHandler.findSingle(this.container, 'ul.ui-galleria-panel-wrapper');
      this.initialized = true;

      if (this.showFilmstrip) {
        this.stripWrapper = domHandler.findSingle(this.container, 'div.ui-galleria-filmstrip-wrapper');
        this.strip = domHandler.findSingle(this.stripWrapper, 'ul.ui-galleria-filmstrip');
      }

      this._images = this.images;
      this.$refs.galleria.style.width = this.panelWidth + 'px';
      this.$refs.galleria.style.visibility = 'visible';

      if (this.images && this.images.length) {
        this.render();
      }
    },
    watch: {
      images (value) {
        this._images = value;
        this.activeIndex = 0;
        this.imagesChanged = true;
      }
    },
    updated: function () {
      if (this.imagesChanged) {
        this.stopSlideshow();
        this.render();
        this.imagesChanged = false;
      }
    },
    destroyed: function () {
      this.stopSlideshow();
    },
    computed: {
    }
  };
</script>
