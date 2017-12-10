<script>
  import Prism from '../../../node_modules/prismjs/prism.js';

  function inserted (el) {
    Prism.highlightElement(el);
  };
export default {
    name: 'code',
    inserted
};
</script>
