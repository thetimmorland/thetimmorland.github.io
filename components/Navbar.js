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
          className="text-lg hover:underline text-gray-light"
        >
          {title}
        </a>
      ))}
    </>
  );

  return (
    <>
      <nav className="bg-gray-dark">
        <div className="flex justify-between items-center max-w-4xl mx-auto p-4">
          <a href="/">
            <div className="flex items-center space-x-4">
              <LogoIcon className="h-10 w-10" />
              <p className="text-gray-light text-2xl">timothy-morland.com</p>
            </div>
          </a>
          <div className="hidden md:block space-x-4">{navLinks}</div>
          <button className="block md:hidden" onClick={toggleDrawer}>
            <MenuIcon className="h-10 fill-current text-gray-light" />
          </button>
        </div>
      </nav>
      {drawerOpen && (
        <div className="block md:hidden">
          <div className="origin-top-right absolute right-2 p-2 mt-2 rounded-md shadow-lg py-1 bg-gray-dark">
            <div className="flex flex-col items-end">{navLinks}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
