import '../dist/wc-cc-input'
export default {
  title: 'WcCcInput',
};

// 👇 We create a “template” of how args map to rendering
const Template = ({playerId}, { globals: { domain } }) => 
  `<wc-cc-input src=${domain} playerid=${playerId}></wc-cc-input>`;

export const WcCcInput = Template.bind({});

WcCcInput.args = {
  playerId: '3592761'
};
