import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { within, userEvent } from '@storybook/testing-library';
import { Page } from './Page';

// Args composition
import * as HeaderStroies from './Header.stories';

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});

// export const CustomeFooter = Template.bind({});

// CustomeFooter.args = {
//   footer: 'Made by asif',
// };

LoggedIn.args = {
  ...HeaderStroies.LoggedIn.args,
};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// LoggedIn.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const loginButton = await canvas.getByRole('button', { name: /Log in/i });
//   await userEvent.click(loginButton);
// };
