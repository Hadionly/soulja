"use client";
import Image from "next/image";
import React from "react";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100 }}>
      <div className="flex justify-between items-center py-4 px-7 border-b bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 flex-1">
        {/* Logo */}
        <div style={{ position: "relative", width: 80, height: 60 }}>
          <Image
            src="/images/travis-scott-name-logo.png"
            alt="logo"
            layout="fill"
            objectFit="contain"
            className="size-20"
          />
        </div>
        {/* Hamburger menu icon */}
        <div className="flex md:hidden">
          <MenuOutlined className="cursor-pointer" onClick={toggleMenu} />
        </div>
        {/* Navigation menu */}
        <nav
          className={`md:flex md:space-x-4 ${
            isMenuOpen
              ? "block absolute top-full left-0 right-0 bg-white md:relative space-y-6 py-4"
              : "hidden"
          } md:!block`}>
          <a
            href="#"
            className="block md:inline-block text-gray-600 hover:text-gray-900 mb-2 md:mb-0 px-7 md:px-0">
            T-shirts
          </a>
          <a
            href="#"
            className="block md:inline-block text-gray-600 hover:text-gray-900 mb-2 md:mb-0 px-7 md:px-0">
            Chains
          </a>
          <a
            href="#"
            className="block md:inline-block text-gray-600 hover:text-gray-900 mb-2 md:mb-0 px-7 md:px-0">
            CDs & Casette Tapes
          </a>
          <a
            href="#"
            className="block md:inline-block text-gray-600 hover:text-gray-900 mb-2 md:mb-0 px-7 md:px-0">
            Events
          </a>
          <a
            href="#"
            className="block md:inline-block text-gray-600 hover:text-gray-900 mb-2 md:mb-0 px-7 md:px-0">
            Songs
          </a>
          <a
            href="#"
            className="block md:inline-block text-gray-600 hover:text-gray-900 px-7 md:px-0">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
