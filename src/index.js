import InputText from './components/inputtext/inputtext.vue';
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
import Messages from './components/messages/messages.vue';
import Editor from './components/editor/editor.vue';
import Accordion from './components/accordion/accordion.vue';
import AccordionTab from './components/accordion/accordiontab.vue';
import Terminal from './components/terminal/terminal.vue';

const components = {
  'p-inputText': InputText,
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
  'p-message': Message,
  'p-messages': Messages,
  'p-editor': Editor,
  'p-accordion': Accordion,
  'p-accordionTab': AccordionTab,
  'p-terminal': Terminal
};

const install = function (Vue, opts = {}) {
  Object.keys(components).forEach((component) => {
    Vue.component(component, components[component]);
  });
};

export default Object.assign({}, components, {install});  // eslint-disable-line no-undef
