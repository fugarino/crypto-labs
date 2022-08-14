import { ComponentMeta, ComponentStory } from "@storybook/react";
import MenuButton, { IMenuButton } from "./MenuButton";
import { mockMenuButtonProps } from "./MenuButton.mocks";

export default {
  title: "buttons/MenuButton",
  component: MenuButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MenuButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MenuButton> = (args) => (
  <MenuButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMenuButtonProps.base,
} as IMenuButton;
