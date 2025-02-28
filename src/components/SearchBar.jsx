import { useState } from "react";
import { useNavigate } from "react-router-dom";

const searchData = [
  { name: "DSA", path: "/dsa" },
  { name: "JavaScript", path: "/javascript" },
  { name: "ReactJS", path: "/reactjs" },
  { name: "NextJS", path: "/nextjs" },
  { name: "NodeJS", path: "/nodejs" },
  { name: "MongoDB", path: "/mongodb" },
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();

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

  // Function to find content on the current page
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
    <div className="relative md:w-64 hidden md:inline-block min-w-[200px]">
      <div className="relative flex items-center text-gray-900 dark:text-gray-300">
        <input
          spellCheck="false"
          className="block w-full appearance-none rounded-lg px-3 py-2 transition-colors text-base leading-tight 
          md:text-sm bg-black/10 dark:bg-gray-50/10 focus:bg-white dark:focus:bg-gray-900 
          placeholder:text-gray-500 dark:placeholder:text-gray-400"
          type="search"
          placeholder="Search content..."
          value={query}
          onChange={handleSearch}
          onKeyDown={handleEnterKey} // Detect Enter key
        />
        <kbd className="absolute right-2 top-2.5 hidden sm:flex px-1.5 bg-gray-200 text-gray-700 text-xs rounded">
          CTRL K
        </kbd>
      </div>

      {/* Dropdown results */}
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
  );
};

export default SearchBar;
