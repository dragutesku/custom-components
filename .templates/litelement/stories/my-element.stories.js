import '../dist/{{ dashCase name }}'
export default {
  title: '{{ properCase name }}',
};

// 👇 We create a “template” of how args map to rendering
const Template = ({playerId}, { globals: { domain } }) => 
  `<{{ dashCase name }} src=${domain} playerid=${playerId}></{{ dashCase name }}>`;

export const {{ properCase name }} = Template.bind({});

{{ properCase name }}.args = {
  playerId: '3592761'
};
