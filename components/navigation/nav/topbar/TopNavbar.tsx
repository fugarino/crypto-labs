import { BellIcon } from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export interface ITopNavbar {}

const TopNavbar: React.FC<ITopNavbar> = () => {
  const [profileBorder, setProfileBorder] = useState(false);
  const { data: session } = useSession();

  return (
    <div className="h-14 border-b border-gray-100 w-screen flex justify-end items-center pr-6 space-x-3">
      <Link href="/notifications">
        <a>
          <BellIcon className="w-5 h-5 text-gray-400 hover:text-gray-600" />
        </a>
      </Link>
      {session ? (
        <>
          <Link href="/profile">
            <a
              onMouseEnter={() => setProfileBorder(true)}
              onMouseLeave={() => setProfileBorder(false)}
              onClick={() => setProfileBorder(false)}
              className={`cursor-pointer flex flex-col p-[2px] border-gray-200 ${
                profileBorder ? "hover:border-gray-400" : ""
              } border rounded-full transition-all duration-200 ease-out`}
            >
              <picture>
                <img
                  src={session.user.image}
                  height={32}
                  width={32}
                  alt="profile"
                  referrerPolicy="no-referrer"
                  className="rounded-full object-contain"
                />
              </picture>
            </a>
          </Link>
          <button onClick={() => signOut()}>sign out</button>
        </>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </div>
  );
};

export default TopNavbar;
