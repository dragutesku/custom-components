import { html } from 'lit-element';

import '../dist/test-autonomous.js';

// This default export determines where your story goes in the story list
export default {
  title: 'TestAutonomous',
};

// 👇 We create a “template” of how args map to rendering
const Template = () => { 
  return html`<test-autonomous></test-autonomous>`;
}

export const Primary = Template.bind({});

