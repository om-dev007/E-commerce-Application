import React from "react";
import { NavLink } from "react-router-dom";
import { Heart, ShoppingCart, UserRound } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-black/5">
      <nav className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-10 py-3">

        <div className="flex items-center justify-between w-full sm:w-auto">
          <NavLink to="/" className="flex items-center gap-1">
            <span className="font-serif text-4xl sm:text-5xl text-[#1F3D2B]">
              V
            </span>
            <span className="font-semibold text-xl sm:text-2xl text-[#1F3D2B]">
              Velnixa
            </span>
          </NavLink>

          <div className="flex sm:hidden items-center gap-4">
            <NavIcon to="/like" icon={<Heart />} />
            <NavIcon to="/login" icon={<UserRound />} />
            <NavIcon to="/cart" icon={<ShoppingCart />} />
          </div>
        </div>

        <div className="flex gap-6 sm:gap-8 mt-3 sm:mt-0 text-sm sm:text-base font-medium">
          <NavItem to="/" label="Home" />
          <NavItem to="/mens" label="Men" />
          <NavItem to="/womens" label="Women" />
          <NavItem to="/kids" label="Kids" />
        </div>

        <div className="hidden sm:flex items-center gap-5">
          <NavIcon to="/like" icon={<Heart />} />
          <NavIcon to="/login" icon={<UserRound />} />
          <NavIcon to="/cart" icon={<ShoppingCart />} />
        </div>

      </nav>
    </header>
  );
};

const NavItem = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `
      relative transition-all duration-300
      ${isActive ? "text-[#1F3D2B] font-semibold" : "text-[#6B7280]"}
      hover:text-[#2F6B4F]
      after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full
      after:bg-[#1F3D2B] after:scale-x-0 after:origin-left
      after:transition-transform after:duration-300
      ${isActive ? "after:scale-x-100" : "hover:after:scale-x-100"}
      `
    }
  >
    {label}
  </NavLink>
);

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
