import { ComponentMeta, ComponentStory } from "@storybook/react";
import TopNavbar, { ITopNavbar } from "./TopNavbar";
import { mockTopNavbarProps } from "./TopNavbar.mocks";

export default {
  title: "nav/TopNavbar",
  component: TopNavbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TopNavbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TopNavbar> = (args) => (
  <TopNavbar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTopNavbarProps.base,
} as ITopNavbar;
