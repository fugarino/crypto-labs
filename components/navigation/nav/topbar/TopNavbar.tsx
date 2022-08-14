import { BellIcon } from "@heroicons/react/outline";
import Link from "next/link";

export interface ITopNavbar {}

const TopNavbar: React.FC<ITopNavbar> = () => {
  return (
    <div className="h-14 border-b border-gray-100 w-screen flex justify-end items-center pr-6 space-x-3">
      <Link href="/notifications">
        <a>
          <BellIcon className="w-5 h-5 text-gray-500" />
        </a>
      </Link>
      <div className="w-7 h-7 bg-red-400 rounded-full"></div>
    </div>
  );
};

export default TopNavbar;
