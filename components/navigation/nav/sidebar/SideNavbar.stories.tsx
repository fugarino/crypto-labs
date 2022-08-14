import { ComponentMeta, ComponentStory } from "@storybook/react";
import SideNavbar, { ISideNavbar } from "./SideNavbar";
import { mockSideNavbarProps } from "./SideNavbar.mocks";

export default {
  title: "nav/SideNavbar",
  component: SideNavbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SideNavbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SideNavbar> = (args) => (
  <SideNavbar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSideNavbarProps.base,
} as ISideNavbar;
