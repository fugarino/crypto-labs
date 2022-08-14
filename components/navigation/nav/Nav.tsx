import SideNavbar from "./sidebar/SideNavbar";
import TopNavbar from "./topbar/TopNavbar";

export interface INav extends React.ComponentPropsWithoutRef<"header"> {}

const Nav: React.FC<INav> = ({ className, ...navProps }) => {
  return (
    <nav {...navProps} className={`fixed top-0 ${className}`}>
      <SideNavbar />
      <TopNavbar />
    </nav>
  );
};

export default Nav;
