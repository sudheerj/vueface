<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">SideBar</span>
          <span>Sidebar is a panel component displayed as an overlay..</span>
        </div>
      </div>
      <div id="wrapper">

        <vf-sidebar :visible="visibleSidebar1" baseZIndex="10000">
          <h1 style="font-weight:normal">Left Sidebar</h1>
          <vf-button type="button" @click="visibleSidebar1 = false" label="Save" class="ui-button-success"></vf-button>
          <vf-button type="button" @click="visibleSidebar1 = false" label="Cancel"
                    class="ui-button-secondary"></vf-button>
        </vf-sidebar>

        <vf-sidebar :visible="visibleSidebar2" position="right" baseZIndex="10000">
            <h1 style="font-weight:normal">Right Sidebar</h1>
        <vf-button type="button" @click="visibleSidebar2 = false" label="Save" class="ui-button-success"></vf-button>
        <vf-button type="button" @click="visibleSidebar2 = false" label="Cancel" class="ui-button-secondary"></vf-button>
        </vf-sidebar>

        <vf-sidebar :visible="visibleSidebar3" position="top" baseZIndex="10000">
            <h1 style="font-weight:normal">Top Sidebar</h1>
        <vf-button type="button" @click="visibleSidebar3 = false" label="Save" class="ui-button-success"></vf-button>
        <vf-button type="button" @click="visibleSidebar3 = false" label="Cancel" class="ui-button-secondary"></vf-button>
        </vf-sidebar>

        <vf-sidebar :visible="visibleSidebar4" position="bottom" baseZIndex="10000">
          <h1 style="font-weight:normal">Bottom Sidebar</h1>
          <vf-button type="button" @click="visibleSidebar4 = false" label="Save" class="ui-button-success"></vf-button>
          <vf-button type="button" @click="visibleSidebar4 = false" label="Cancel"
                    class="ui-button-secondary"></vf-button>
        </vf-sidebar>

        <vf-sidebar :visible="visibleSidebar5" :fullScreen="true" baseZIndex="10000">
            <h1 style="font-weight:normal">Full Screen Sidebar</h1>
        <vf-button type="button" @click="visibleSidebar5 = false" label="Save" class="ui-button-success"></vf-button>
        <vf-button type="button" @click="visibleSidebar5 = false" label="Cancel" class="ui-button-secondary"></vf-button>
        </vf-sidebar>

        <vf-button type="button" @click="visibleSidebar1 = true" icon="fa-arrow-right"></vf-button>
        <vf-button type="button" @click="visibleSidebar2 = true" icon="fa-arrow-left"></vf-button>
        <vf-button type="button" @click="visibleSidebar3 = true" icon="fa-arrow-down"></vf-button>
        <vf-button type="button" @click="visibleSidebar4 = true" icon="fa-arrow-up"></vf-button>
        <vf-button type="button" @click="visibleSidebar5 = true" icon="fa-arrows-alt"></vf-button>


      </div>
  </div>
</template>

<script>
  export default {
    name: 'inputtextdemo',
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
