import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X, Sun, Moon } from "lucide-react";

const searchData = [
  { name: "DSA", path: "/dsa" },
  { name: "JavaScript", path: "/javascript" },
  { name: "ReactJS", path: "/reactjs" },
  { name: "NextJS", path: "/nextjs" },
  { name: "NodeJS", path: "/nodejs" },
  { name: "MongoDB", path: "/mongodb" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value.length > 0) {
      const results = searchData.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  };

  const handleSelect = (path) => {
    setQuery(""); // Clear search input
    setFilteredResults([]); // Hide suggestions
    navigate(path); // Redirect to the page
  };

  const findTextOnPage = (text) => {
    if (window.find && text) {
      window.find(text);
    }
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      if (filteredResults.length > 0) {
        handleSelect(filteredResults[0].path);
      } else {
        findTextOnPage(query);
      }
    }
  };

  return (
    <header
      className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} shadow-md py-3 px-6 flex items-center justify-between`}
    >
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold font-[Cairo] bg-gradient-text">
        TechContentPro
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6">
        {searchData.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Search Bar (Desktop) */}
      <div className="relative md:w-64 hidden md:inline-block min-w-[200px]">
        <div className="relative flex items-center">
          <input
            type="search"
            placeholder="Search..."
            value={query}
            onChange={handleSearch}
            onKeyDown={handleEnterKey}
            className="block w-full appearance-none rounded-lg px-3 py-2 bg-black/10 dark:bg-gray-50/10 focus:bg-white dark:focus:bg-gray-900 placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />
          <Search className="absolute right-3 text-gray-500 dark:text-gray-300" size={18} />
        </div>

        {/* Search Results Dropdown */}
        {filteredResults.length > 0 && (
          <ul className="absolute left-0 mt-1 w-full bg-white border border-gray-300 dark:bg-gray-900 dark:border-gray-700 shadow-md rounded-lg z-10">
            {filteredResults.map((item) => (
              <li
                key={item.path}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => handleSelect(item.path)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Dark Mode Toggle */}
      <button onClick={() => setDarkMode(!darkMode)} className="ml-4 p-2 rounded-full">
        {darkMode ? <Sun size={24} color="yellow" /> : <Moon size={24} />}
      </button>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className={`absolute top-14 left-0 w-full ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} shadow-lg md:hidden`}>
          <ul className="flex flex-col items-center space-y-4 py-4">
            {searchData.map((item) => (
              <li key={item.path}>
                <Link to={item.path} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="w-full px-4">
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleSearch}
                onKeyDown={handleEnterKey}
                className={`w-full border ${darkMode ? "border-gray-700 bg-gray-800 text-white" : "border-gray-300 bg-white text-black"} rounded-full px-4 py-2 pl-10`}
              />
            </li>

            {/* Search Results in Mobile View */}
            {filteredResults.length > 0 && (
              <ul className="w-full px-4">
                {filteredResults.map((item) => (
                  <li
                    key={item.path}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                    onClick={() => handleSelect(item.path)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
