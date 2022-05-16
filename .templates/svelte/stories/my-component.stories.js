import { html } from 'lit-element';

import {{ properCase name }} from '../dist/{{ dashCase name }}.js';

// This default export determines where your story goes in the story list
export default {
  title: '{{ properCase name }}',
};

// 👇 We create a “template” of how args map to rendering
const story = ({ aProperty }) => html`<{{ dashCase name }} src=${aProperty}></{{ dashCase name }}>`;

export const Core = story.bind({});

Core.args = {
  /* 👇 The args you need here will depend on your component */
  aProperty: 'Test'
};

