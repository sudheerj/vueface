import Button from './components/button/button.vue';
import ProgressSpinner from './components/progressspinner/progressspinner.vue';
import ProgressBar from './components/progressbar/progressbar.vue';
import Checkbox from './components/checkbox/checkbox.vue';
import TristateCheckbox from './components/tristatecheckbox/tristatecheckbox.vue';
import Chart from './components/charts/charts.vue';
import Rating from './components/rating/rating.vue';
import ToggleButton from './components/togglebutton/togglebutton.vue';
import RadioButton from './components/radiobutton/radiobutton.vue';
import Captcha from './components/captcha/captcha.vue';
import Panel from './components/panel/panel.vue';
import Fieldset from './components/fieldset/fieldset.vue';
import Toolbar from './components/toolbar/toolbar.vue';
import Galleria from './components/galleria/galleria.vue';
import Message from './components/message/message.vue';

const components = {
  'p-button': Button,
  'p-progressSpinner': ProgressSpinner,
  'p-progressBar': ProgressBar,
  'p-checkbox': Checkbox,
  'p-tristatecheckbox': TristateCheckbox,
  'p-charts': Chart,
  'p-rating': Rating,
  'p-toggleButton': ToggleButton,
  'p-radioButton': RadioButton,
  'p-captcha': Captcha,
  'p-panel': Panel,
  'p-fieldset': Fieldset,
  'p-toolbar': Toolbar,
  'p-galleria': Galleria,
  'p-message': Message
};

const install = function (Vue, opts = {}) {
  Object.keys(components).forEach((component) => {
    Vue.component(component, components[component]);
  });
};

export default Object.assign({}, components, {install});  // eslint-disable-line no-undef
