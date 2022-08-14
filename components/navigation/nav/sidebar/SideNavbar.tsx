import {
  BellIcon,
  BookmarkIcon,
  ChatAlt2Icon,
  CogIcon,
  HomeIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import MenuButton from "../../../buttons/menu-button/MenuButton";

export interface ISideNavbar {}

const SideNavbar: React.FC<ISideNavbar> = () => {
  return (
    <div className="absolute bg-white w-14 border-r border-gray-100 h-screen flex flex-col justify-between items-center pt-4 pb-6">
      <div>
        <Link href="/">
          <a className="cursor-pointer flex flex-col">
            <Image src="/L.svg" height={25} width={30} alt="logo" />
          </a>
        </Link>
        <ul className="mt-20 space-y-12 flex flex-col items-center">
          <MenuButton href="/">
            <HomeIcon className="menuIcon" />
          </MenuButton>
          <MenuButton href="/cryptocurrencies">
            <svg
              width="30"
              height="14"
              viewBox="0 0 29 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_20_45" fill="white">
                <path d="M14.192 20.1896C15.7854 20.8548 17.5184 21.1168 19.2372 20.9522C20.9561 20.7877 22.6079 20.2018 24.0463 19.2465C25.4846 18.2911 26.6652 16.9957 27.4833 15.4751C28.3015 13.9545 28.732 12.2556 28.7368 10.5289C28.7415 8.80217 28.3204 7.10092 27.5106 5.57584C26.7008 4.05076 25.5274 2.74893 24.0943 1.78566C22.6612 0.822387 21.0127 0.227411 19.2948 0.0534326C17.5768 -0.120546 15.8425 0.131843 14.2454 0.788242L15.2848 3.31724C16.466 2.83177 17.7487 2.6451 19.0193 2.77378C20.2898 2.90245 21.5091 3.34249 22.569 4.05492C23.6289 4.76735 24.4967 5.73018 25.0956 6.85812C25.6945 7.98606 26.006 9.24429 26.0025 10.5214C25.999 11.7985 25.6806 13.055 25.0755 14.1796C24.4704 15.3042 23.5972 16.2622 22.5334 16.9688C21.4696 17.6754 20.248 18.1087 18.9767 18.2304C17.7054 18.3521 16.4238 18.1584 15.2453 17.6664L14.192 20.1896Z" />
              </mask>
              <path
                d="M14.192 20.1896C15.7854 20.8548 17.5184 21.1168 19.2372 20.9522C20.9561 20.7877 22.6079 20.2018 24.0463 19.2465C25.4846 18.2911 26.6652 16.9957 27.4833 15.4751C28.3015 13.9545 28.732 12.2556 28.7368 10.5289C28.7415 8.80217 28.3204 7.10092 27.5106 5.57584C26.7008 4.05076 25.5274 2.74893 24.0943 1.78566C22.6612 0.822387 21.0127 0.227411 19.2948 0.0534326C17.5768 -0.120546 15.8425 0.131843 14.2454 0.788242L15.2848 3.31724C16.466 2.83177 17.7487 2.6451 19.0193 2.77378C20.2898 2.90245 21.5091 3.34249 22.569 4.05492C23.6289 4.76735 24.4967 5.73018 25.0956 6.85812C25.6945 7.98606 26.006 9.24429 26.0025 10.5214C25.999 11.7985 25.6806 13.055 25.0755 14.1796C24.4704 15.3042 23.5972 16.2622 22.5334 16.9688C21.4696 17.6754 20.248 18.1087 18.9767 18.2304C17.7054 18.3521 16.4238 18.1584 15.2453 17.6664L14.192 20.1896Z"
                className="menuIconAlt"
                strokeWidth="2"
                mask="url(#path-1-inside-1_20_45)"
              />
              <circle
                cx="10.5"
                cy="10.5"
                r="9.2"
                className="menuIconAlt1"
                strokeWidth="2.6"
              />
            </svg>
          </MenuButton>
          <MenuButton href="/discussions">
            <ChatAlt2Icon className="menuIcon" />
          </MenuButton>
          <MenuButton href="/favorites">
            <BookmarkIcon className="menuIcon" />
          </MenuButton>
          <MenuButton href="/notifications">
            <BellIcon className="menuIcon" />
          </MenuButton>
        </ul>
      </div>
      <div>
        <ul className="space-y-10 mt-12">
          <MenuButton href="/help">
            <InformationCircleIcon className="menuIcon" />
          </MenuButton>
          <MenuButton href="/settings">
            <CogIcon className="menuIcon" />
          </MenuButton>
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
