import LogoIcon from "../icons/logo.svg";

export default function Navbar() {
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      <nav className="fixed w-full h-20 px-4 flex items-center space-x-4 bg-gray-dark shadow">
        <a href="/">
          <LogoIcon className="h-10 w-10" />
        </a>
        <ul className="flex-1 flex space-x-4 justify-end">
          {menuItems.map(({ href, label }, key) => (
            <li key={key}>
              <a href={href} className="text-gray-light text-xl">
                <button className="p-2">{label}</button>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="h-20" />
    </>
  );
}
