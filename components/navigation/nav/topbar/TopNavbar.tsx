import { BellIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface ITopNavbar {}

const TopNavbar: React.FC<ITopNavbar> = () => {
  const [profileBorder, setProfileBorder] = useState(false);
  return (
    <div className="h-14 border-b border-gray-100 w-screen flex justify-end items-center pr-6 space-x-3">
      <Link href="/notifications">
        <a>
          <BellIcon className="w-5 h-5 text-gray-400 hover:text-gray-600" />
        </a>
      </Link>
      <Link href="/profile">
        <a
          onMouseEnter={() => setProfileBorder(true)}
          onMouseLeave={() => setProfileBorder(false)}
          onClick={() => setProfileBorder(false)}
          className={`cursor-pointer flex flex-col p-[2px] border-gray-200 ${
            profileBorder ? "hover:border-gray-400" : ""
          } border rounded-full transition-all duration-200 ease-out`}
        >
          <Image
            src="/xuki.jpeg"
            height={32}
            width={32}
            alt="logo"
            className="rounded-full object-contain"
          />
        </a>
      </Link>
    </div>
  );
};

export default TopNavbar;
