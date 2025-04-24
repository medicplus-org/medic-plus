import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full bg-white text-black shadow-md transition-all duration-300">
      <div className="flex justify-between items-center px-6 py-4 md:px-20">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold whitespace-nowrap">
          Medic<span className="text-blue-400">Plus</span>
        </Link>

        {/* Center nav links */}
        <div className="hidden md:flex gap-x-10 justify-center flex-1">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Auth buttons */}
        <div className="hidden md:flex gap-x-6 whitespace-nowrap">
          <Link to="/selectsignup">Sign Up</Link>
          <Link to="/selectlogin">Login</Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 bg-white text-black">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/doctors" onClick={() => setMenuOpen(false)}>
            Doctors
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/selectsignup" onClick={() => setMenuOpen(false)}>
            Sign Up
          </Link>
          <Link to="/selectlogin" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
