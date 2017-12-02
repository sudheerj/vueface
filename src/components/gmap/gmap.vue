<template>
  <div ref="gmap" :style="gmapStyle" :class="gmapStyleClass"></div>
</template>
<script>
  var google;
  export default {
    name: 'p-gmap',
    data: function () {
      return {
        map: null
      };
    },
    props: {
      options: {
        type: Object,
        default: null
      },
      overlays: {
        type: Array,
        default: null
      },
      gmapStyle: {
        type: String,
        default: null
      },
      gmapStyleClass: {
        type: String,
        default: null
      }
    },
    methods: {
      initialize () {
        this.map = new google.maps.Map(this.$refs.gmap, this.options);
        this.$emit('onMapReady', {
          map: this.map
        });

        if (this.overlays) {
          for (let overlay of this.overlays) {
            overlay.setMap(this.map);
            this.bindOverlayEvents(overlay);
          }
        }

        this.map.addListener('click', (event) => {
          this.zone.run(() => {
            this.$emit('onMapClick', event);
          });
        });

        this.map.addListener('dragend', (event) => {
          this.zone.run(() => {
            this.$emit('onMapDragEnd', event);
          });
        });

        this.map.addListener('zoom_changed', (event) => {
          this.zone.run(() => {
            this.$emit('onZoomChanged', event);
          });
        });
      },
      bindOverlayEvents (overlay) {
        overlay.addListener('click', (event) => {
          this.zone.run(() => {
            this.$emit('onOverlayClick', {
              originalEvent: event,
              'overlay': overlay,
              map: this.map
            });
          });
        });

        if (overlay.getDraggable()) {
          this.bindDragEvents(overlay);
        }
      },
      bindDragEvents (overlay) {
        overlay.addListener('dragstart', (event) => {
          this.zone.run(() => {
            this.$emit('onOverlayDragStart', {
              originalEvent: event,
              overlay: overlay,
              map: this.map
            });
          });
        });

        overlay.addListener('drag', (event) => {
          this.zone.run(() => {
            this.$emit('onOverlayDrag', {
              originalEvent: event,
              overlay: overlay,
              map: this.map
            });
          });
        });

        overlay.addListener('dragend', (event) => {
          this.zone.run(() => {
            this.$emit('onOverlayDragEnd', {
              originalEvent: event,
              overlay: overlay,
              map: this.map
            });
          });
        });
      },
      getMap () {
        return this.map;
      }
    },
    watch: {

    },
    updated () {
      if (!this.map && this.$refs.gmap.offsetParent) {
        this.initialize();
      }
    }

  };
</script>
