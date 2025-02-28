import React from "react";
import { Link } from "react-router-dom";
const MongoDBPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen px-4 md:px-8 py-6">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 border-r md:pr-6">
        <h2 className="text-lg font-semibold mb-4">MongoDB Topics</h2>
        <ul className="space-y-2">
          <li>
            <Link href="#" className="block py-2 px-4 bg-green-100 rounded">
              Introduction to MongoDB
            </Link>
          </li>
          <li>
            <Link href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
              NoSQL vs SQL
            </Link>
          </li>
          <li>
            <Link href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
              Collections & Documents
            </Link>
          </li>
          <li>
            <Link href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
              CRUD Operations
            </Link>
          </li>
          <li>
            <Link href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
              Indexing & Performance
            </Link>
          </li>
          <li>
            <Link href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
              Aggregation Pipeline
            </Link>
          </li>
          <li>
            <Link href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
              MongoDB with Node.js
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/5 px-6">
        <nav className="text-gray-500 text-sm mb-4">
          <Link href="/" className="hover:text-green-500">MongoDB</Link> &gt; <span className="text-black">Introduction</span>
        </nav>
        <h1 className="text-3xl font-bold mb-4">MongoDB Overview</h1>
        <p className="text-lg text-gray-700">
          MongoDB is a NoSQL document database that provides high performance, high availability, and easy scalability.
          It stores data in JSON-like documents, making it flexible and easy to use.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Key Highlights:</h2>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-lg text-gray-700">
          <li>Schema-less database structure for flexible data modeling.</li>
          <li>Uses JSON-like BSON documents for storage.</li>
          <li>Efficient querying with indexing and aggregation.</li>
          <li>Supports horizontal scaling with sharding.</li>
          <li>Seamless integration with Node.js, Express.js, and Next.js.</li>
        </ul>
      </main>

      {/* Right Sidebar (On This Page) */}
      <aside className="w-full md:w-1/5 border-l px-6 hidden md:block">
        <h2 className="text-lg font-semibold mb-4">On This Page</h2>
        <ul className="space-y-2 text-green-500">
          <li><Link href="#overview" className="hover:underline">MongoDB Overview</Link></li>
          <li><Link href="#highlights" className="hover:underline">Key Highlights</Link></li>
        </ul>
      </aside>
    </div>
  );
};

export default MongoDBPage;
