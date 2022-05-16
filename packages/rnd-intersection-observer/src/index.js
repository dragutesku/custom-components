import RndIntersectionObserver from './RndIntersectionObserver.svelte';
import { SvelteElement } from 'svelte/internal';

SvelteElement.prototype.disconnectedCallback = function() {
  this.$destroy();
}

!customElements.get('rnd-intersection-observer') && customElements.define('rnd-intersection-observer', RndIntersectionObserver);
export default RndIntersectionObserver;
