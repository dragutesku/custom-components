import {{ properCase name }} from './{{properCase name}}.svelte';
import { SvelteElement } from 'svelte/internal';

SvelteElement.prototype.disconnectedCallback = function() {
  this.$destroy();
}

!customElements.get('{{ dashCase name }}') && customElements.define('{{ dashCase name }}', {{ properCase name }});
export default {{ properCase name }};
