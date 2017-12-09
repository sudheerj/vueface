<template>
  <div id="app">
    <layout>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">SideBar</span>
          <span>Sidebar is a panel component displayed as an overlay..</span>
        </div>
      </div>
      <div id="wrapper">

        <p-sidebar :visible="visibleSidebar1" baseZIndex="10000">
          <h1 style="font-weight:normal">Left Sidebar</h1>
          <p-button type="button" @click="visibleSidebar1 = false" label="Save" class="ui-button-success"></p-button>
          <p-button type="button" @click="visibleSidebar1 = false" label="Cancel"
                    class="ui-button-secondary"></p-button>
        </p-sidebar>

        <p-sidebar :visible="visibleSidebar2" position="right" baseZIndex="10000">
            <h1 style="font-weight:normal">Right Sidebar</h1>
        <p-button type="button" @click="visibleSidebar2 = false" label="Save" class="ui-button-success"></p-button>
        <p-button type="button" @click="visibleSidebar2 = false" label="Cancel" class="ui-button-secondary"></p-button>
        </p-sidebar>

        <p-sidebar :visible="visibleSidebar3" position="top" baseZIndex="10000">
            <h1 style="font-weight:normal">Top Sidebar</h1>
        <p-button type="button" @click="visibleSidebar3 = false" label="Save" class="ui-button-success"></p-button>
        <p-button type="button" @click="visibleSidebar3 = false" label="Cancel" class="ui-button-secondary"></p-button>
        </p-sidebar>

        <p-sidebar :visible="visibleSidebar4" position="bottom" baseZIndex="10000">
          <h1 style="font-weight:normal">Bottom Sidebar</h1>
          <p-button type="button" @click="visibleSidebar4 = false" label="Save" class="ui-button-success"></p-button>
          <p-button type="button" @click="visibleSidebar4 = false" label="Cancel"
                    class="ui-button-secondary"></p-button>
        </p-sidebar>

        <p-sidebar :visible="visibleSidebar5" :fullScreen="true" baseZIndex="10000">
            <h1 style="font-weight:normal">Full Screen Sidebar</h1>
        <p-button type="button" @click="visibleSidebar5 = false" label="Save" class="ui-button-success"></p-button>
        <p-button type="button" @click="visibleSidebar5 = false" label="Cancel" class="ui-button-secondary"></p-button>
        </p-sidebar>

        <p-button type="button" @click="visibleSidebar1 = true" icon="fa-arrow-right"></p-button>
        <p-button type="button" @click="visibleSidebar2 = true" icon="fa-arrow-left"></p-button>
        <p-button type="button" @click="visibleSidebar3 = true" icon="fa-arrow-down"></p-button>
        <p-button type="button" @click="visibleSidebar4 = true" icon="fa-arrow-up"></p-button>
        <p-button type="button" @click="visibleSidebar5 = true" icon="fa-arrows-alt"></p-button>


      </div>
    </layout>
  </div>
</template>

<script>
  import Layout from "../layout";

  export default {
    name: 'inputtextdemo',
    components: {Layout},
    data () {
      return {
        visibleSidebar1: false,

        visibleSidebar2: false,

        visibleSidebar3: false,

        visibleSidebar4: false,

        visibleSidebar5: false
      };
    }
  };
</script>
