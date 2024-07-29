"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const navItemVariants = {
    hover: { scale: 1.1, color: "#000", transition: { duration: 0.2 } },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
    hover: { scale: 1.1, color: "#000", transition: { duration: 0.2 } },
  };

  return (
    <motion.header
      style={{ position: "sticky", top: 0, zIndex: 100 }}
      initial="hidden"
      animate="visible"
      variants={headerVariants}>
      <div className="flex justify-between items-center py-4 px-7 border-b bg-gray-300 flex-1">
        {/* Logo */}
        <motion.div
          style={{ position: "relative", width: 80, height: 60 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          <Image
            src="/images/logo-black.png"
            alt="logo"
            layout="fill"
            objectFit="contain"
            className="size-20"
          />
        </motion.div>
        {/* Hamburger menu icon */}
        <motion.div
          className="flex md:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          {isMenuOpen ? (
            <CloseOutlined className="cursor-pointer" onClick={toggleMenu} />
          ) : (
            <MenuOutlined className="cursor-pointer" onClick={toggleMenu} />
          )}
        </motion.div>
        {/* Navigation menu */}
        <AnimatePresence>
          {(isMenuOpen || window.innerWidth >= 768) && (
            <motion.nav
              className={`md:flex md:space-x-4 ${
                isMenuOpen
                  ? "block absolute top-full left-0 right-0 bg-white md:relative space-y-6 py-4"
                  : "hidden"
              } md:!block`}
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}>
              {[
                "T-shirts",
                "Chains",
                "CDs & Casette Tapes",
                "Events",
                "Songs",
                "Contact Us",
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="block md:inline-block text-gray-600 hover:text-gray-900 mb-2 md:mb-0 px-7 md:px-0 text-center kanit-semibold"
                  variants={menuItemVariants}
                  whileHover="hover">
                  {item}
                </motion.a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
      <LyricMarquee />
    </motion.header>
  );
};

export default Header;

const LyricMarquee = () => {
  const placeholderLyrics = [
    "ممنوع دخولك هنا منطقة جامدين ",
    "في عيد ميلادك بطرشق البلالين",
    "خانق ياسمين زي علاء الدين",
    "بقتبس من رقبتي طاشي للدين",
    "ممنوع دخولك هنا منطقة جامدين ",
    "في عيد ميلادك بطرشق البلالين",
    "خانق ياسمين زي علاء الدين",
    "بقتبس من رقبتي طاشي للدين",
    "ممنوع دخولك هنا منطقة جامدين ",
    "في عيد ميلادك بطرشق البلالين",
    "خانق ياسمين زي علاء الدين",
    "بقتبس من رقبتي طاشي للدين",
  ];

  const [blinkingIndex, setBlinkingIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlinkingIndex(Math.floor(Math.random() * placeholderLyrics.length));
    }, 500); // Change blink every 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap bg-white border-b">
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{
          x: { repeat: Infinity, duration: 20, ease: "linear" },
        }}
        className="inline-block">
        {placeholderLyrics.map((lyric, index) => (
          <span
            key={index}
            className={`text-2xl mx-4 ${
              index === blinkingIndex ? "opacity-0" : "opacity-100"
            } aref-ruqaa-ink-regular text-black`}
            style={{ transition: "opacity 0.3s" }}>
            {lyric}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
