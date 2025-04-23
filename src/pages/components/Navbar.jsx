import React, { useState, useEffect } from "react";
import { Link } from "react-router"; // Updated import for react-router-dom v6
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const currentPage = window.location.pathname;

  const navbarStyle =
    currentPage === "/" || currentPage === "/home"
      ? isScrolled
        ? "bg-white shadow-md text-black"
        : "bg-transparent text-white"
      : "bg-white text-black"; // Force white bg on other pages

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Change color when scrolling down
      } else {
        setIsScrolled(false); // Transparent at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex flex-row justify-between px-20 py-6 h-14 w-[100%] items-center text-black z-50 fixed border-b border-gray-400 transition-all duration-300 bg-white shadow-md `}
    >
      <Link to="/" className="text-2xl font-bold">
        Medic<span className="text-blue-400">Plus</span>
      </Link>
      <div className="flex gap-x-10 text-black">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="flex gap-x-10 text-black">
        <Link to="/selectsignup">Sign Up</Link>
        <Link to="/selectlogin">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
