import { html } from 'lit-element';

import TestLitTranslations from '../dist/test-lit-translations.js';

// This default export determines where your story goes in the story list
export default {
  title: 'TestLitTranslations',
};

// 👇 We create a “template” of how args map to rendering
const story = ({ aProperty }) => html`<test-lit-translations src=${aProperty}></test-lit-translations>`;

export const Core = story.bind({});

Core.args = {
  /* 👇 The args you need here will depend on your component */
  aProperty: 'Test'
};

