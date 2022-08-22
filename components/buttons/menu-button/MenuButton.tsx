import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";

export interface IMenuButton {
  href?: string;
  children: ReactNode;
  name: string;
  pageLink?: boolean;
}

const MenuButton: React.FC<IMenuButton> = ({
  href,
  children,
  name,
  pageLink,
}) => {
  const [showLabel, setShowLabel] = useState(false);
  const router = useRouter();

  const handleSignOut = () => {
    setShowLabel(false);
    console.log("signed out");
  };

  return (
    <>
      {pageLink ? (
        <li className="relative">
          <Link href={href ?? ""}>
            <a
              onMouseEnter={() => setShowLabel(true)}
              onMouseLeave={() => setShowLabel(false)}
              onClick={() => setShowLabel(false)}
              className={`cursor-pointer flex flex-col items-center justify-center w-10 h-10 hover:bg-gray-200 active:translate-y-1 rounded-md transition-all ease-out ${
                router.pathname == href ? "active" : ""
              }`}
            >
              {children}
            </a>
          </Link>
          {showLabel && (
            <div className="absolute left-12 bottom-1 px-4 py-1 bg-white text-gray-600 text-center rounded-md shadow-md">
              <div className="absolute top-3 -left-1 bg-white p-1 rotate-45 shadow-md"></div>
              {name}
            </div>
          )}
        </li>
      ) : (
        <li className="relative">
          <a
            onMouseEnter={() => setShowLabel(true)}
            onMouseLeave={() => setShowLabel(false)}
            onClick={handleSignOut}
            className={`cursor-pointer flex flex-col items-center justify-center w-10 h-10 hover:bg-gray-200 active:translate-y-1 rounded-md transition-all ease-out ${
              router.pathname == href ? "active" : ""
            }`}
          >
            {children}
          </a>
          {showLabel && (
            <div className="absolute left-12 bottom-1 px-4 py-1 bg-white text-gray-600 text-center rounded-md shadow-md">
              <div className="absolute top-3 -left-1 bg-white p-1 rotate-45 shadow-md"></div>
              <div className="whitespace-nowrap">{name}</div>
            </div>
          )}
        </li>
      )}
    </>
  );
};

export default MenuButton;
