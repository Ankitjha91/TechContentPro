import React from "react";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold">Welcome to InterviewPro</h1>
        <p className="mt-4 text-gray-700">Learn DSA, JavaScript, React, and more.</p>
      </main>
    </div>
  );
};

export default Home;
