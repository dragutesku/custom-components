import { html } from 'lit-element';

import {{ properCase name }} from '../dist/{{ dashCase name }}.js';

// This default export determines where your story goes in the story list
export default {
  title: '{{ properCase name }}',
};

// 👇 We create a “template” of how args map to rendering
const story = ({}) => html`<{{ dashCase name }}></{{ dashCase name }}>`;

export const Core = story.bind({});

