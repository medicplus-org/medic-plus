import React from "react";
import logo from "../../assets/images/logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        console.log("Scroll position:", window.scrollY);
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
      className={`flex flex-row justify-between px-20 py-6 h-14 w-[100%] items-center text-white z-50 fixed border-b border-gray-400 transition-all duration-300
      ${
        isScrolled
          ? "bg-white shadow-md text-black"
          : "bg-transparent text-white"
      }
    `}
    >
      <span>
        <img className="h-11 w-auto " src={logo} alt="" />
      </span>
      <div
        className={`flex gap-x-10 ${isScrolled ? "text-black" : "text-white"}`}
      >
        <span>Home</span>
        <span>About</span>
        <span>Doctors</span>
        <span>Appointment</span>
      </div>
      <div
        className={`flex gap-x-10 ${isScrolled ? "text-black" : "text-white"}`}
      >
        <span>Sign Up</span>
        <span>Login</span>
      </div>
    </nav>
  );
};

export default Navbar;
