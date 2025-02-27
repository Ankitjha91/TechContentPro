import React from "react";
import { Link } from "react-router-dom";

const DSA = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen px-4 md:px-8 py-6">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 border-r md:pr-6">
        <h2 className="text-lg font-semibold mb-4">Getting Started</h2>
        <ul className="space-y-2">
          <li>
            <Link to="#" className="block py-2 px-4 bg-blue-100 rounded">
              Getting Started
            </Link>
          </li>
          <li>
            <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
              Array
            </Link>
          </li>
          <li>
            <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
              Linked List
            </Link>
          </li>
          <li>
            <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
              Greedy Algorithm
            </Link>
          </li>
          <li>
            <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
              Recursion
            </Link>
          </li>
          <li>
            <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
              Binary Search
            </Link>
          </li>
          <li>
            <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
              Stack and Queue
            </Link>
          </li>
          <li>
            <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
              String
            </Link>
          </li>
          <li>
            <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
              Binary Tree
            </Link>
          </li>
          <li>
            <Link to="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
              Graph Algorithm
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/5 px-6">
        <nav className="text-gray-500 text-sm mb-4">
          <Link to="/" className="hover:text-blue-500">
            DSA
          </Link>{" "}
          &gt; <span className="text-black">Getting Started</span>
        </nav>
        <h1 className="text-3xl font-bold mb-4">DSA Sheet Overview</h1>
        <p className="text-lg text-gray-700">
          The <strong>DSA Sheet</strong> features carefully selected coding
          interview questions covering diverse topics in Data Structures &
          Algorithms. These questions are commonly encountered in technical
          interviews, providing comprehensive coverage of key concepts.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Key Highlights:</h2>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-lg text-gray-700">
          <li>
            Cover all concepts in limited time that are needed for a DSA
            interview.
          </li>
          <li>
            In-depth video solutions covering brute, better, and optimal
            solutions.
          </li>
          <li>Well-structured notes for quick revision.</li>
          <li>Company Tags associated with each program.</li>
          <li>Content reference from Striver's DSA AtoZ sheet.</li>
        </ul>
      </main>

      {/* Right Sidebar (On This Page) */}
      <aside className="w-full md:w-1/5 border-l px-6 hidden md:block">
        <h2 className="text-lg font-semibold mb-4">On This Page</h2>
        <ul className="space-y-2 text-blue-500">
          <li>
            <a href="#overview" className="hover:underline">
              DSA Sheet Overview
            </a>
          </li>
          <li>
            <a href="#highlights" className="hover:underline">
              Key Highlights
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default DSA;
