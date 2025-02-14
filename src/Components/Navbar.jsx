import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/images/logosaas.png";
import { FiMenu, FiX } from "react-icons/fi";
import { useWindowScroll } from "react-use";

const Navbar = () => {
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
    } else if (currentScrollY < lastScrollY && currentScrollY > 50) {
      setIsNavVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`fixed w-full mt-1.5 z-50 backdrop-blur-sm transition-all duration-300 ${
        currentScrollY === 0 ? "top-auto" : isNavVisible ? "top-0" : "-top-20"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <a href="#">
            <img src={Logo} alt="saas logo" height={40} width={40} />
          </a>
          {/* Mobile Menu Button */}
          <button
            className="text-2xl md:hidden "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 capitalize text-black/60 items-center">
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#features">features</a>
            <a href="#">customers</a>
            <a href="#">update</a>
            <a href="#">help</a>
            <button className="btn">get it for free</button>
          </nav>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`absolute top-0 left-0 w-full bg-white p-5 transform transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden shadow-md`}
      >
        <nav className="flex flex-col gap-4 text-black/70 text-lg">
          <a href="#" onClick={() => setMenuOpen(false)}>home</a>
          <a href="#" onClick={() => setMenuOpen(false)}>about</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>features</a>
          <a href="#" onClick={() => setMenuOpen(false)}>customers</a>
          <a href="#" onClick={() => setMenuOpen(false)}>update</a>
          <a href="#" onClick={() => setMenuOpen(false)}>help</a>
          <button className="btn w-full" onClick={() => setMenuOpen(false)}>
            get it for free
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
