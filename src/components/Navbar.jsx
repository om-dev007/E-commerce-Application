import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Heart, ShoppingCart, Menu, X, UserRound } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center">
            <span className="font-serif text-4xl sm:text-5xl text-[#1F3D2B]">
              V
            </span>
            <span className="font-semibold text-xl sm:text-2xl text-[#1F3D2B]">
              elnixa
            </span>
          </NavLink>

          {/* DESKTOP LINKS */}
          <div className="hidden gap-6 sm:flex sm:gap-8 mt-3 sm:mt-0 text-sm sm:text-base font-medium">
            <NavItem to="/" label="Home" />
            <NavItem to="/mens" label="Men" />
            <NavItem to="/womens" label="Women" />
            <NavItem to="/kids" label="Kids" />
          </div>

          {/* DESKTOP ICONS */}
          <div className="hidden sm:flex items-center gap-5">
            <NavIcon to="/like" icon={<Heart />} />
            <NavIcon to="/login" icon={<UserRound />} />
            <NavIcon to="/cart" icon={<ShoppingCart />} />
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden outline-0 text-[#1F3D2B]"
            aria-label="Toggle Menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {/* MOBILE MENU */}
<div
  className={`
    sm:hidden fixed top-0 left-0 w-full h-screen bg-white z-40
    transform transition-transform duration-300 ease-in-out
    ${open ? "translate-y-0" : "-translate-y-full"}
  `}
>
  {/* Header */}
  <div className="flex items-center justify-between px-5 h-16 border-b">
    <div className="flex items-center">
      <span className="font-serif text-3xl text-[#1F3D2B]">V</span>
      <span className="font-semibold text-lg text-[#1F3D2B]">elnixa</span>
    </div>
    <button onClick={() => setOpen(false)}>
      <X size={24} />
    </button>
  </div>

  {/* Links */}
  <div className="px-6 pt-8 flex flex-col gap-6 text-base font-medium">
    <MobileNavItem to="/" label="Home" onClick={() => setOpen(false)} />
    <MobileNavItem to="/mens" label="Men" onClick={() => setOpen(false)} />
    <MobileNavItem to="/womens" label="Women" onClick={() => setOpen(false)} />
    <MobileNavItem to="/kids" label="Kids" onClick={() => setOpen(false)} />
  </div>

  {/* Icons */}
  <div className="mt-10 px-6 pt-6 border-t flex gap-8">
    <NavIcon to="/like" icon={<Heart size={22} />} />
    <NavIcon to="/login" icon={<UserRound size={22} />} />
    <NavIcon to="/cart" icon={<ShoppingCart size={22} />} />
  </div>
</div>

    </header>
  );
};

/* NAV ITEM */
const NavItem = ({ to, label, mobile = false, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) => `
      relative block transition-colors duration-300
      ${mobile ? "py-1 text-base" : "pb-1"}

      ${
        isActive
          ? "text-[#1F3D2B] font-semibold"
          : "text-[#6B7280]"
      }
      hover:text-[#2F6B4F]

      ${
        mobile
          ? "" // ❌ MOBILE: no underline, no hover border
          : `
            after:content-['']
            after:absolute
            after:left-0
            after:-bottom-0.5
            after:h-0.5
            after:w-full
            after:bg-[#1F3D2B]
            after:origin-left
            after:transition-transform
            after:duration-300
            ${
              isActive
                ? "after:scale-x-100"
                : "after:scale-x-0 hover:after:scale-x-100"
            }
          `
      }
    `}
  >
    {label}
  </NavLink>
);

const MobileNavItem = ({ to, label, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `
      block py-2
      transition-colors
      ${isActive ? "text-[#1F3D2B] font-semibold" : "text-gray-600"}
      `
    }
  >
    {label}
  </NavLink>
);

/* NAV ICON */
const NavIcon = ({ to, icon }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `
      transition-colors duration-300
      ${isActive ? "text-[#1F3D2B]" : "text-[#6B7280]"}
      hover:text-[#2F6B4F]
      `
    }
  >
    {icon}
  </NavLink>
);

export default Navbar;
