"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo-b.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="">
        <div className="">
        <nav className="max-w-full sticky top-0 z-10 bg-black text-center">
        <div className="max-w-7xl px-10 py-10 flex justify-between items-center">
          <Link
            className="flex items-center uppercase text-white ml-12 no-underline font-[system-ui] font-bold text-2xl hover:text-red-700 transition-all duration-500 truncate"
            href="/"
          >
            <Image
            src={logo}
              alt="My image"
              className="w-12 h-12"
            />
            BloG
          </Link>

          <button className="lg:hidden text-white p-2" onClick={toggleMenu}>
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white"></span>
          </button>

          <ul
            className={`text-white gap-6 mr-12 ${
              isMenuOpen
                ? "flex flex-col w-full bg-black lg:bg-transparent"
                : "hidden lg:flex"
            } lg:flex lg:flex-row absolute lg:static top-full left-0 lg:top-auto lg:left-auto shadow-lg lg:shadow-none`}
          >
            <li className="px-4 py-2 lg:py-0 text-center">
              <Link
                className="hover:text-red-700 transition-colors duration-200 font-semibold"
                href="/"
              >
                HOME
              </Link>
            </li>
            <li className="px-4 py-2 lg:py-0 text-center">
              <Link
                className="hover:text-red-700 transition-colors duration-200 font-semibold"
                href="/blogs"
              >
                BLOG
              </Link>
            </li>
            <li className="px-4 py-2 lg:py-0 text-center">
              <Link
                className="hover:text-red-700 transition-colors duration-500 font-semibold "
                href="/aboutUs"
              >
                ABOUT
              </Link>
            </li>
            <li className="px-4 py-2 lg:py-0 text-center">
              <Link
                className="hover:text-red-700 transition-colors duration-500 font-semibold hover:underline"
                href="/contactUs"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content below the Navbar */}
      <div className={`transition-all duration-500 ${isMenuOpen ? "mt-[20rem]" : "mt-0"}`}>
        <div className="p-4">
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;