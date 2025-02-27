import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-3 px-6 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold">
        <span className="text-yellow-500">Interview</span>
        <span className="text-pink-500">Pro</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-5 text-lg">
        <Link to="/dsa" className="hover:text-blue-600">DSA</Link>
        <Link to="/javascript" className="hover:text-blue-600">JavaScript</Link>
        <Link to="/reactjs" className="hover:text-blue-600">ReactJS</Link>
        <Link to="/nextjs" className="hover:text-blue-600">NextJS</Link>
        <Link to="/nodejs" className="hover:text-blue-600">NodeJS</Link>
        <Link to="/mongodb" className="hover:text-blue-600">MongoDB</Link>
      </nav>

      {/* Search Bar (Desktop) */}
      <div className="relative hidden md:block w-1/3">
        <input
          type="text"
          placeholder="Search documentation..."
          className="w-full border border-gray-300 rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
      </div>

      {/* Mobile Hamburger Icon */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><Link to="/dsa" onClick={() => setIsOpen(false)}>DSA</Link></li>
            <li><Link to="/javascript" onClick={() => setIsOpen(false)}>JavaScript</Link></li>
            <li><Link to="/reactjs" onClick={() => setIsOpen(false)}>ReactJS</Link></li>
            <li><Link to="/nextjs" onClick={() => setIsOpen(false)}>NextJS</Link></li>
            <li><Link to="/nodejs" onClick={() => setIsOpen(false)}>NodeJS</Link></li>
            <li><Link to="/mongodb" onClick={() => setIsOpen(false)}>MongoDB</Link></li>
            <li className="w-full px-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border border-gray-300 rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
