import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#163025] text-[#CFE1D6]">

      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3">

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-serif text-4xl sm:text-5xl text-white">
              V
            </span>
            <h2 className="text-2xl font-semibold text-white">Velnixa</h2>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Premium fashion for everyday lifestyle.  
            Discover styles that match your confidence.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/about" className="hover:text-white">About Us</NavLink></li>
            <li><NavLink to="/help" className="hover:text-white">Help & Support</NavLink></li>
            <li><NavLink to="/offices" className="hover:text-white">Offices</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-white">Contact</NavLink></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/mens" className="hover:text-white">Men</NavLink></li>
            <li><NavLink to="/womens" className="hover:text-white">Women</NavLink></li>
            <li><NavLink to="/kids" className="hover:text-white">Kids</NavLink></li>
            <li><NavLink to="/" className="hover:text-white">New Arrivals</NavLink></li>
          </ul>
        </div>

      </div>

      <div className="flex justify-center gap-6 pb-6">
        <Instagram className="cursor-pointer hover:text-white transition-all" />
        <Facebook className="cursor-pointer hover:text-white transition-all"/>
        <FaWhatsapp className="cursor-pointer hover:text-white transition-all text-2xl"/>
      </div>

      <div className="border-t border-white/10 py-3 text-center text-xs text-[#AFC5B8]">
        © 2025 Velnixa. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
