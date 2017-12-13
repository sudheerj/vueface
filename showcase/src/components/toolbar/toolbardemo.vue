<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">Toolbar</span>
          <span>Toolbar is a grouping component for buttons and other content.</span>
        </div>
      </div>
      <div id="wrapper">

        <h2>Features</h2>

        <h3>Basic</h3>

        <p>Container component holds the various components where left aligned content is placed inside a div having .ui-toolbar-group-left class and similarly .ui-toolbar-group-right for right alignment.</p>

        <p-toolbar>
          <div class="ui-toolbar-group-left">
            <p-button type="button" label="New" icon="fa-plus"></p-button>
            <p-button  type="button" label="Open" icon="fa-folder-open" class="ui-button-success"></p-button>

            <i class="fa fa-bars"></i>

          </div>

          <div class="ui-toolbar-group-right">
            <p-button  pButton type="button" icon="fa-search"></p-button>
            <i class="fa fa-bars"></i>
            <p-button  pButton type="button" icon="fa-refresh"></p-button>
            <p-button  pButton type="button" icon="fa-trash" class="ui-button-danger"></p-button>
          </div>
        </p-toolbar>

      </div>
  </div>
</template>
<script>
  export default {
    name: 'toolbardemo',
    data () {
      return {};
    }
  };
</script>

