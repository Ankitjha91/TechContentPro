import React from "react";
import { Link } from "react-router-dom";

const NodeJSPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen px-4 md:px-8 py-6">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 border-r md:pr-6">
        <h2 className="text-lg font-semibold mb-4">Node.js Topics</h2>
        <ul className="space-y-2">
          <li>
            <Link href="#" className="block py-2 px-4 bg-blue-100 rounded">
              Introduction to Node.js
            </Link>
          </li>
          <li>
            <Link href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
              Event Loop
            </Link>
          </li>
          <li>
            <Link href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
              Modules
            </Link>
          </li>
          <li>
            <Link href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
              Express.js
            </Link>
          </li>
          <li>
            <Link href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
              Middleware
            </Link>
          </li>
          <li>
            <Link href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
              File System
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/5 px-6">
        <nav className="text-gray-500 text-sm mb-4">
          <Link href="/" className="hover:text-blue-500">Node.js</Link> &gt; <span className="text-black">Introduction</span>
        </nav>
        <h1 className="text-3xl font-bold mb-4">Node.js Overview</h1>
        <p className="text-lg text-gray-700">
          Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows you to run JavaScript on the server-side,
          enabling full-stack development using JavaScript for both frontend and backend.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Key Highlights:</h2>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-lg text-gray-700">
          <li>Asynchronous, event-driven architecture for high performance.</li>
          <li>Built-in modules for handling HTTP, file system, and more.</li>
          <li>Express.js for fast and scalable web applications.</li>
          <li>Works with databases like MongoDB, PostgreSQL, and MySQL.</li>
          <li>Used for APIs, microservices, and real-time applications.</li>
        </ul>
      </main>

      {/* Right Sidebar (On This Page) */}
      <aside className="w-full md:w-1/5 border-l px-6 hidden md:block">
        <h2 className="text-lg font-semibold mb-4">On This Page</h2>
        <ul className="space-y-2 text-blue-500">
          <li><Link href="#overview" className="hover:underline">Node.js Overview</Link></li>
          <li><Link href="#highlights" className="hover:underline">Key Highlights</Link></li>
        </ul>
      </aside>
    </div>
  );
};

export default NodeJSPage;
