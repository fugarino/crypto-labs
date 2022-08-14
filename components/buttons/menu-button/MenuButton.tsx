import Link from "next/link";
import { ReactNode } from "react";

export interface IMenuButton {
  href: string;
  children: ReactNode;
}

const MenuButton: React.FC<IMenuButton> = ({ href, children }) => {
  return (
    <li>
      <Link href={href}>
        <a className="cursor-pointer flex flex-col items-center justify-center w-10 h-10 hover:bg-gray-200 rounded-md transition-all ease-out">
          {children}
        </a>
      </Link>
    </li>
  );
};

export default MenuButton;
