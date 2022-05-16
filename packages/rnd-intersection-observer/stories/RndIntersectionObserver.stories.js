import { html } from 'lit-element';

import RndIntersectionObserver from '../dist/rnd-intersection-observer.js';

// This default export determines where your story goes in the story list
export default {
  title: 'RndIntersectionObserver',
};

// 👇 We create a “template” of how args map to rendering
const story = ({ aProperty }) => html`<rnd-intersection-observer src=${aProperty}></rnd-intersection-observer>`;

export const Core = story.bind({});

Core.args = {
  /* 👇 The args you need here will depend on your component */
  aProperty: 'Test'
};

