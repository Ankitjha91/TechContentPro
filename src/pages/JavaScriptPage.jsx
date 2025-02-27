import React from "react";
import { Link } from "react-router-dom";

const JavaScriptPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen px-4 md:px-8 py-6">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 border-r md:pr-6">
        <h2 className="text-lg font-semibold mb-4">JavaScript Topics</h2>
        <ul className="space-y-2">
          <li>
            <Link to="#" className="block py-2 px-4 bg-blue-100 rounded">
              Getting Started
            </Link>
          </li>
          <li><Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded">Variables & Data Types</Link></li>
          <li><Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded">Functions</Link></li>
          <li><Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded">ES6 Features</Link></li>
          <li><Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded">Promises & Async</Link></li>
          <li><Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded">Closures</Link></li>
          <li><Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded">Event Loop</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/5 px-6">
        <nav className="text-gray-500 text-sm mb-4">
          <Link to="/" className="hover:text-blue-500">JavaScript</Link> &gt; <span className="text-black">Getting Started</span>
        </nav>
        <h1 className="text-3xl font-bold mb-4">JavaScript Overview</h1>
        <p className="text-lg text-gray-700">
          JavaScript is a versatile programming language that powers dynamic web applications. 
          It enables interactivity, DOM manipulation, and asynchronous programming, making it essential for modern web development.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Key Highlights:</h2>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-lg text-gray-700">
          <li>JavaScript is the backbone of front-end web development.</li>
          <li>Supports object-oriented, functional, and event-driven programming.</li>
          <li>Asynchronous capabilities with Promises and async/await.</li>
          <li>Wide usage in frameworks like React, Vue, and Angular.</li>
        </ul>
      </main>

      {/* Right Sidebar (On This Page) */}
      <aside className="w-full md:w-1/5 border-l px-6 hidden md:block">
        <h2 className="text-lg font-semibold mb-4">On This Page</h2>
        <ul className="space-y-2 text-blue-500">
          <li><a href="#overview" className="hover:underline">JavaScript Overview</a></li>
          <li><a href="#highlights" className="hover:underline">Key Highlights</a></li>
        </ul>
      </aside>
    </div>
  );
};

export default JavaScriptPage;
