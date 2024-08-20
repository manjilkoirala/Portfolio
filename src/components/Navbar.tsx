import Logo from "../assets/logo.png";
import Sidebar from "./Sidebar";

const navList = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Technologies",
    link: "#technologies",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2" src={Logo} alt="Logo" width={100} />
      </div>
      <div className="hidden md:flex items-center space-x-6">
        {navList.map((navItem, index) => (
          <a
            key={index}
            href={navItem.link}
            className="text-neutral-300 hover:text-neutral-200"
          >
            {navItem.name}
          </a>
        ))}
      </div>
      <div className="block md:hidden mx-10">
        <Sidebar navList={navList} />
      </div>
    </nav>
  );
};

export default Navbar;
