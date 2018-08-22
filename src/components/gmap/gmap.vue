<template>
  <div ref="gmap"></div>
</template>
<script>
  const google = window.google;
  export default {
    name: 'vf-gmap',
    data () {
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
      }
    },
    watch: {
      overlays (newValue, oldValue) {
        if (this.map !== null) {
          for (let overlay of oldValue) {
            overlay.setMap(null);
          }
          for (let overlay of this.overlays) {
            overlay.setMap(this.map);
            this.bindOverlayEvents(overlay);
          }
        }
      }
    },
    methods: {
      initialize () {
        this.map = new google.maps.Map(this.$refs.gmap, this.options);

        this.$emit('ready', {
          map: this.map
        });

        if (this.overlays) {
          for (let overlay of this.overlays) {
            overlay.setMap(this.map);
            this.bindOverlayEvents(overlay);
          }
        }

        this.map.addListener('click', (event) => {
          this.$emit('click', event);
        });

        this.map.addListener('dragend', (event) => {
          this.$emit('dragend', event);
        });

        this.map.addListener('zoom_changed', (event) => {
          this.$emit('zoomchanged', event);
        });
      },
      bindOverlayEvents (overlay) {
        overlay.addListener('click', (event) => {
          this.$emit('overlayclick', {
            originalEvent: event,
            overlay: overlay,
            map: this.map
          });
        });

        if (overlay.getDraggable()) {
          this.bindDragEvents(overlay);
        }
      },
      bindDragEvents (overlay) {
        overlay.addListener('dragstart', (event) => {
          this.$emit('overlaydragstart', {
            originalEvent: event,
            overlay: overlay,
            map: this.map
          });
        });

        overlay.addListener('drag', (event) => {
          this.$emit('overlaydrag', {
            originalEvent: event,
            overlay: overlay,
            map: this.map
          });
        });

        overlay.addListener('dragend', (event) => {
          this.$emit('overlaydragend', {
            originalEvent: event,
            overlay: overlay,
            map: this.map
          });
        });
      },
      getMap () {
        return this.map;
      }
    },
    mounted () {
      if (!this.map && this.$refs.gmap.offsetParent) {
        this.$nextTick(() => {
          this.initialize();
        });
      }
    }
  };
</script>
