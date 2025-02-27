import React from "react";
import Sidebar from "../components/Sidebar";

const DSA = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold">DSA Sheet Overview</h1>
        <p className="mt-4 text-gray-700">
          Carefully selected coding interview questions covering various topics.
        </p>
      </main>
    </div>
  );
};

export default DSA;
