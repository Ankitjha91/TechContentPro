import React from "react";
import { Link } from "react-router-dom";

const ReactJSPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen px-4 md:px-8 py-6">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 border-r md:pr-6">
        <h2 className="text-lg font-semibold mb-4">ReactJS Topics</h2>
        <ul className="space-y-2">
          <li>
            <Link to="#" className="block py-2 px-4 bg-blue-100 rounded">
              Introduction to React
            </Link>
          </li>
          <li><Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded">JSX</Link></li>
          <li><Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded">Components</Link></li>
          <li><Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded">Props & State</Link></li>
          <li><Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded">Hooks</Link></li>
          <li><Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded">Virtual DOM</Link></li>
          <li><Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded">React Router</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/5 px-6">
        <nav className="text-gray-500 text-sm mb-4">
          <Link to="/" className="hover:text-blue-500">ReactJS</Link> &gt; <span className="text-black">Introduction</span>
        </nav>
        <h1 className="text-3xl font-bold mb-4">ReactJS Overview</h1>
        <p className="text-lg text-gray-700">
          ReactJS is a JavaScript library for building fast and interactive user interfaces. It enables
          the creation of reusable components and promotes efficient rendering using the Virtual DOM.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Key Highlights:</h2>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-lg text-gray-700">
          <li>Component-based architecture for modular development.</li>
          <li>Efficient updates and rendering with the Virtual DOM.</li>
          <li>Declarative syntax using JSX for building UIs.</li>
          <li>State management with Hooks like useState and useEffect.</li>
          <li>Seamless integration with frameworks like Next.js.</li>
        </ul>
      </main>

      {/* Right Sidebar (On This Page) */}
      <aside className="w-full md:w-1/5 border-l px-6 hidden md:block">
        <h2 className="text-lg font-semibold mb-4">On This Page</h2>
        <ul className="space-y-2 text-blue-500">
          <li><a href="#overview" className="hover:underline">ReactJS Overview</a></li>
          <li><a href="#highlights" className="hover:underline">Key Highlights</a></li>
        </ul>
      </aside>
    </div>
  );
};

export default ReactJSPage;