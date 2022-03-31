import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },

  //  default args
  args: {
    primary: false,
  },

  // component level parameters
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'parrot-green', value: '#0f0' },
        { name: 'whatever', value: '#0fff' },
      ],
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

// story level parameters
Primary.parameters = {
  backgrounds: {
    values: [
      { name: 'brown', value: '#f001' },
      { name: 'green', value: '#0f0a' },
      { name: 'blue', value: '#12a' },
    ],
  },
};

console.log('hello', Primary.parameters);

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button changes',
};

export const Large = Template.bind({});
Large.args = {
  ...Secondary.args,
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  ...Secondary.args,
  size: 'small',
};
