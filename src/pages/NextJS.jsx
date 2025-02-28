import React from "react";
import { Link } from "react-router-dom";
const NextJSPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen px-4 md:px-8 py-6">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 border-r md:pr-6">
        <h2 className="text-lg font-semibold mb-4">Next.js Topics</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/nextjs/introduction">
              <a className="block py-2 px-4 bg-blue-100 rounded">Introduction to Next.js</a>
            </Link>
          </li>
          <li>
            <Link href="/nextjs/routing">
              <a className="block py-2 px-4 hover:bg-gray-100 rounded">Routing</a>
            </Link>
          </li>
          <li>
            <Link href="/nextjs/api-routes">
              <a className="block py-2 px-4 hover:bg-gray-100 rounded">API Routes</a>
            </Link>
          </li>
          <li>
            <Link href="/nextjs/ssr">
              <a className="block py-2 px-4 hover:bg-gray-100 rounded">Server-side Rendering</a>
            </Link>
          </li>
          <li>
            <Link href="/nextjs/ssg">
              <a className="block py-2 px-4 hover:bg-gray-100 rounded">Static Site Generation</a>
            </Link>
          </li>
          <li>
            <Link href="/nextjs/middleware">
              <a className="block py-2 px-4 hover:bg-gray-100 rounded">Middleware</a>
            </Link>
          </li>
          <li>
            <Link href="/nextjs/deployment">
              <a className="block py-2 px-4 hover:bg-gray-100 rounded">Deployment</a>
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/5 px-6">
        <nav className="text-gray-500 text-sm mb-4">
          <Link href="/">
            <a className="hover:text-blue-500">Next.js</a>
          </Link> 
          &gt; <span className="text-black">Introduction</span>
        </nav>
        <h1 className="text-3xl font-bold mb-4">Next.js Overview</h1>
        <p className="text-lg text-gray-700">
          Next.js is a React framework that enables server-side rendering, static site generation, and API routes. It simplifies building optimized web applications with minimal configuration.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Key Highlights:</h2>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-lg text-gray-700">
          <li>Built-in server-side rendering and static site generation.</li>
          <li>Automatic code splitting for optimized performance.</li>
          <li>API routes for backend functionality within the same project.</li>
          <li>Seamless integration with React components and hooks.</li>
          <li>Effortless deployment with platforms like Vercel.</li>
        </ul>
      </main>

      {/* Right Sidebar (On This Page) */}
      <aside className="w-full md:w-1/5 border-l px-6 hidden md:block">
        <h2 className="text-lg font-semibold mb-4">On This Page</h2>
        <ul className="space-y-2 text-blue-500">
          <li>
            <Link href="#overview">
              <a className="hover:underline">Next.js Overview</a>
            </Link>
          </li>
          <li>
            <Link href="#highlights">
              <a className="hover:underline">Key Highlights</a>
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default NextJSPage;
