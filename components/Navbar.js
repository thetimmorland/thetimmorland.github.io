import { useState } from "react";

import LogoIcon from "../icons/logo.svg";
import MenuIcon from "../icons/menu.svg";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen((x) => !x);

  const navLinks = (
    <>
      {[
        ["/", "Home"],
        ["/posts", "Articles"],
        ["/about", "About"],
        ["/portfolio", "Portfolio"],
      ].map(([href, title], idx) => (
        <a
          key={idx}
          href={href}
          className="text-xl hover:underline text-gray-light"
        >
          {title}
        </a>
      ))}
    </>
  );

  return (
    <>
      <nav className="bg-gray-dark fixed w-full">
        <div className="h-20 mx-auto p-4 flex justify-between items-center">
          <a href="/">
            <div className="flex items-center space-x-4">
              <LogoIcon className="h-10 w-10" />
              <p className="text-gray-light text-2xl">timothy-morland.com</p>
            </div>
          </a>
          <ul className="hidden md:block space-x-4">{navLinks}</ul>
          <button className="block md:hidden" onClick={toggleDrawer}>
            <MenuIcon className="h-10 w-10 fill-current text-gray-light" />
          </button>
        </div>
      </nav>
      {drawerOpen && (
        <div className="block md:hidden fixed object-right-top right-4 top-24">
          <div className="bg-gray-dark rounded-md shadow-lg p-2">
            <ul className="flex flex-col items-end">{navLinks}</ul>
          </div>
        </div>
      )}
      {/* empty div prevents navbar from hiding content */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
