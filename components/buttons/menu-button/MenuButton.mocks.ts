import { IMenuButton } from "./MenuButton";

const base: IMenuButton = {
  href: "/",
  children: "{{component}}",
  name: "Home",
};

export const mockMenuButtonProps = {
  base,
};
