import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 min-h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Topics</h2>
      <ul className="space-y-2">
        <li><Link to="/dsa" className="block p-2 rounded hover:bg-blue-500 hover:text-white">Getting Started</Link></li>
        <li><Link to="/array" className="block p-2 rounded hover:bg-blue-500 hover:text-white">Array</Link></li>
        <li><Link to="/linkedlist" className="block p-2 rounded hover:bg-blue-500 hover:text-white">Linked List</Link></li>
        <li><Link to="/greedy" className="block p-2 rounded hover:bg-blue-500 hover:text-white">Greedy Algorithm</Link></li>
        <li><Link to="/recursion" className="block p-2 rounded hover:bg-blue-500 hover:text-white">Recursion</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
