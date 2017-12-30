<template>
  <div ref="schedule" :style="scheduleStyle" :class="scheduleStyleClass"></div>
</template>
<style lang="css" src="./schedule.css"></style>
<script>
  var jQuery: null;
  export default {
    name: 'p-schedule',
    props: {
      value: String,
      events: {
        type: Array,
        default: []
      },
      header: {
        type: String,
        default: null
      },
      scheduleStyle: {
        type: String,
        default: null
      },
      scheduleStyleClass: {
        type: String,
        default: null
      },
      rtl: {
        type: Boolean,
        default: false
      },
      weekends: {
        type: Boolean,
        default: false
      },
      hiddenDays: {
        type: Array,
        default: []
      },
      fixedWeekCount: {
        type: Boolean,
        default: false
      },
      weekNumbers: {
        type: Boolean,
        default: false
      },
      businessHours: {
        type: String,
        default: null
      },
      height: {
        type: String,
        default: null
      },
      contentHeight: {
        type: String,
        default: null
      },
      aspectRatio: {
        type: Number,
        default: 1.35
      },
      eventLimit: {
        type: String,
        default: null
      },
      defaultDate: {
        type: String,
        default: null
      },
      editable: {
        type: Boolean,
        default: false
      },
      droppable: {
        type: Boolean,
        default: false
      },
      eventStartEditable: {
        type: Boolean,
        default: false
      },
      eventDurationEditable: {
        type: Boolean,
        default: false
      },
      defaultView: {
        type: String,
        default: 'month'
      },
      allDaySlot: {
        type: Boolean,
        default: true
      },
      allDayText: {
        type: String,
        default: 'all-day'
      },
      slotDuration: {
        type: String,
        default: '00:30:00'
      },
      slotLabelInterval: {
        type: String,
        default: null
      },
      snapDuration: {
        type: String,
        default: null
      },
      scrollTime: {
        type: String,
        default: '06:00:00'
      },
      minTime: {
        type: String,
        default: '00:00:00'
      },
      maxTime: {
        type: String,
        default: '24:00:00'
      },
      slotEventOverlap: {
        type: Boolean,
        default: true
      },
      nowIndicator: {
        type: Boolean,
        default: false
      },
      dragRevertDuration: {
        type: Number,
        default: 500
      },
      dragOpacity: {
        type: Number,
        default: 0.75
      },
      dragScroll: {
        type: Boolean,
        default: true
      },
      eventOverlap: {
        type: String,
        default: null
      },
      eventConstraint: {
        type: String,
        default: null
      },
      locale: {
        type: String,
        default: null
      },
      timezone: {
        type: Boolean,
        default: false
      },
      timeFormat: {
        type: String,
        default: null
      },
      eventRender: {
        type: Function,
        default: {}
      },
      dayRender: {
        type: Function,
        default: {}
      },
      navLinks: {
        type: Boolean,
        default: false
      },
      options: {
        type: String,
        default: null
      }

    },
    data () {
      return {
        newValue: this.value,
        filled: false,
        initialized: false,
        schedule: null,
        config: null
      };
    },
    watch: {
      value (value) {
        this.newValue = value;
      },
      newValue (value) {
        this.updateFilled(value);
        this.$emit('input', value);
      }
    },
    methods: {
      initialize () {
        this.schedule = jQuery(this.$refs.schedule.children[0]);
        this.schedule.fullCalendar(this.config);
        if (this.events) {
          this.schedule.fullCalendar('addEventSource', this.events);
        }
        this.initialized = true;
      },
      gotoDate (date) {
        this.schedule.fullCalendar('gotoDate', date);
      },

      prev () {
        this.schedule.fullCalendar('prev');
      },

      next () {
        this.schedule.fullCalendar('next');
      },

      prevYear () {
        this.schedule.fullCalendar('prevYear');
      },

      nextYear () {
        this.schedule.fullCalendar('nextYear');
      },

      today () {
        this.schedule.fullCalendar('today');
      },

      incrementDate (duration) {
        this.schedule.fullCalendar('incrementDate', duration);
      },

      changeView (viewName) {
        this.schedule.fullCalendar('changeView', viewName);
      },

      getDate () {
        return this.schedule.fullCalendar('getDate');
      },

      updateEvent (event) {
        this.schedule.fullCalendar('updateEvent', event);
      },

      _findEvent (id) {
        let event;
        if (this.events) {
          for (let e of this.events) {
            if (e.id === id) {
              event = e;
              break;
            }
          }
        }
        return event;
      },

      _updateEvent (event) {
        let sourceEvent = this._findEvent(event.id);
        if (sourceEvent) {
          sourceEvent.start = event.start.format();
          if (event.end) {
            sourceEvent.end = event.end.format();
          }
        }
      },
      init () {
        this.config = {
          theme: true,
          header: this.header,
          isRTL: this.rtl,
          weekends: this.weekends,
          hiddenDays: this.hiddenDays,
          fixedWeekCount: this.fixedWeekCount,
          weekNumbers: this.weekNumbers,
          businessHours: this.businessHours,
          height: this.height,
          contentHeight: this.contentHeight,
          aspectRatio: this.aspectRatio,
          eventLimit: this.eventLimit,
          defaultDate: this.defaultDate,
          locale: this.locale,
          timezone: this.timezone,
          timeFormat: this.timeFormat,
          editable: this.editable,
          droppable: this.droppable,
          eventStartEditable: this.eventStartEditable,
          eventDurationEditable: this.eventDurationEditable,
          defaultView: this.defaultView,
          allDaySlot: this.allDaySlot,
          allDayText: this.allDayText,
          slotDuration: this.slotDuration,
          slotLabelInterval: this.slotLabelInterval,
          snapDuration: this.snapDuration,
          scrollTime: this.scrollTime,
          minTime: this.minTime,
          maxTime: this.maxTime,
          slotEventOverlap: this.slotEventOverlap,
          nowIndicator: this.nowIndicator,
          dragRevertDuration: this.dragRevertDuration,
          dragOpacity: this.dragOpacity,
          dragScroll: this.dragScroll,
          eventOverlap: this.eventOverlap,
          eventConstraint: this.eventConstraint,
          eventRender: this.eventRender,
          dayRender: this.dayRender,
          navLinks: this.navLinks,
          dayClick: (date, jsEvent, view) => {
            this.$emit('onDayClick', {
              'date': date,
              'jsEvent': jsEvent,
              'view': view
            });
          },
          drop: (date, jsEvent, ui, resourceId) => {
            this.$emit('onDrop', {
              'date': date,
              'jsEvent': jsEvent,
              'ui': ui,
              'resourceId': resourceId
            });
          },
          eventClick: (calEvent, jsEvent, view) => {
            this.$emit('onEventClick', {
              'calEvent': calEvent,
              'jsEvent': jsEvent,
              'view': view
            });
          },
          eventMouseover: (calEvent, jsEvent, view) => {
            this.$emit('onEventMouseover', {
              'calEvent': calEvent,
              'jsEvent': jsEvent,
              'view': view
            });
          },
          eventMouseout: (calEvent, jsEvent, view) => {
            this.$emit('onEventMouseout', {
              'calEvent': calEvent,
              'jsEvent': jsEvent,
              'view': view
            });
          },
          eventDragStart: (event, jsEvent, ui, view) => {
            this.$emit('onEventDragStart', {
              'event': event,
              'jsEvent': jsEvent,
              'view': view
            });
          },
          eventDragStop: (event, jsEvent, ui, view) => {
            this.$emit('onEventDragStop', {
              'event': event,
              'jsEvent': jsEvent,
              'view': view
            });
          },
          eventDrop: (event, delta, revertFunc, jsEvent, ui, view) => {
            this._updateEvent(event);

            this.$emit('onEventDrop', {
              'event': event,
              'delta': delta,
              'revertFunc': revertFunc,
              'jsEvent': jsEvent,
              'view': view
            });
          },
          eventResizeStart: (event, jsEvent, ui, view) => {
            this.$emit('onEventResizeStart', {
              'event': event,
              'jsEvent': jsEvent,
              'view': view
            });
          },
          eventResizeStop: (event, jsEvent, ui, view) => {
            this.$emit('onEventResizeStop', {
              'event': event,
              'jsEvent': jsEvent,
              'view': view
            });
          },
          eventResize: (event, delta, revertFunc, jsEvent, ui, view) => {
            this._updateEvent(event);

            this.$emit('onEventResize', {
              'event': event,
              'delta': delta,
              'revertFunc': revertFunc,
              'jsEvent': jsEvent,
              'view': view
            });
          },
          viewRender: (view, element) => {
            this.$emit('onViewRender', {
              'view': view,
              'element': element
            });
          },
          viewDestroy: (view, element) => {
            this.$emit('onViewDestroy', {
              'view': view,
              'element': element
            });
          }
        };

        if (this.options) {
          for (let prop in this.options) {
            this.config[prop] = this.options[prop];
          }
        }
      }
    },
    created () {
      this.initialized = false;
    },
    updated () {
      if (!this.initialized && this.$refs.schedule.offsetParent) {
        this.initialize();
      }
    },
    destroyed () {
      jQuery(this.$refs.schedule.children[0]).fullCalendar('destroy');
      this.initialized = false;
      this.schedule = null;
    }
  };
</script>
