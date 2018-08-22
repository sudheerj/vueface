<template>
  <div>
      <div class="content-section introduction" id="component">
        <div>
          <span class="feature-title">InputGroup</span>
          <span>Text, icon, buttons and other content can be grouped next to an input by wrapping the addons and input inside .ui-inputgroup element. Multiple addons can be used within the same group as well.</span>
        </div>
      </div>
      <div id="wrapper">

        <h3 class="first">Addons</h3>
        <div class="ui-g ui-fluid">
          <div class="ui-g-12 ui-md-4">
            <div class="ui-inputgroup">
              <span class="ui-inputgroup-addon"><i class="fa fa-user"></i></span>
              <vf-inputText type="text" placeholder="Username"/>
            </div>
          </div>

          <div class="ui-g-12 ui-md-4">
            <div class="ui-inputgroup">
              <span class="ui-inputgroup-addon">$</span>
              <vf-inputText type="text" placeholder="Price"/>
              <span class="ui-inputgroup-addon">.00</span>
            </div>
          </div>

          <div class="ui-g-12 ui-md-4">
            <div class="ui-inputgroup">
              <span class="ui-inputgroup-addon">www</span>
              <vf-inputText type="text" placeholder="Website"/>
            </div>
          </div>
        </div>

        <h3>Multiple Addons</h3>
        <div class="ui-g">
          <div class="ui-g-12">
            <div class="ui-inputgroup">
              <span class="ui-inputgroup-addon"><i class="fa fa-credit-card"></i></span>
              <span class="ui-inputgroup-addon"><i class="fa fa-cc-visa"></i></span>
              <vf-inputText type="text" placeholder="Price"/>
              <span class="ui-inputgroup-addon">$</span>
              <span class="ui-inputgroup-addon">.00</span>
            </div>
          </div>
        </div>

        <h3>Button Addons</h3>
        <div class="ui-g ui-fluid">
          <div class="ui-g-12 ui-md-4">
            <div class="ui-inputgroup">
              <vf-button type="button" label="Search"></vf-button>
              <vf-inputText type="text"  placeholder="Keyword"/>
            </div>
          </div>

          <div class="ui-g-12 ui-md-4">
            <div class="ui-inputgroup">
              <vf-inputText type="text" placeholder="Keyword"/>
              <vf-button type="button" icon="fa-superpowers" class="ui-button-secondary"></vf-button>
            </div>
          </div>

          <div class="ui-g-12 ui-md-4">
            <div class="ui-inputgroup">
              <button type="button" icon="fa-check" class="ui-button-success"></button>
              <vf-inputText type="text" placeholder="Vote"/>
              <vf-button type="button" icon="fa-close" class="ui-button-danger"></vf-button>
            </div>
          </div>
        </div>

        <h3>Checkbox and RadioButton</h3>
        <div class="ui-g ui-fluid">
          <div class="ui-g-12 ui-md-4">
            <div class="ui-inputgroup">
              <span class="ui-inputgroup-addon"><vf-checkbox></vf-checkbox></span>
              <vf-inputText type="text" placeholder="Username"/>
            </div>
          </div>

          <div class="ui-g-12 ui-md-4">
            <div class="ui-inputgroup">
              <vf-inputText type="text" placeholder="Price"/>
              <span class="ui-inputgroup-addon"><vf-radioButton></vf-radioButton></span>
            </div>
          </div>

          <div class="ui-g-12 ui-md-4">
            <div class="ui-inputgroup">
              <span class="ui-inputgroup-addon"><vf-checkbox></vf-checkbox></span>
              <vf-inputText type="text" placeholder="Website"/>
              <span class="ui-inputgroup-addon"><vf-radioButton></vf-radioButton></span>
            </div>
          </div>
        </div>

      </div>
  </div>
</template>
<script>
  export default {
    name: 'inputgroupdemo',
    data () {
      return {};
    }
  };
</script>
