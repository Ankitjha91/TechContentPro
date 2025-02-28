import React from "react";
import { motion } from "framer-motion";


const HomePage = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-extrabold text-center"
      >
        Level Up Your Interview Skills
      </motion.h1>

      <p className="mt-4 text-gray-700 text-center max-w-2xl dark:text-white">
      TechContentPro offers expert-curated content to help you excel in Problem Solving, JavaScript, ReactJS, Node.js, Next.js, and MongoDB. Prepare for your technical interviews with confidence and efficiency.
      </p>

      {/* Card Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4  ">
        {[
          { title: "Problem Solving", desc: "Master essential Data Structures and Algorithms to solve complex problems efficiently, a must-have for coding interviews.", link: "/DSA" },
          { title: "JavaScript", desc: "Explore core JavaScript concepts and patterns to tackle the most common challenges in technical interviews.", link: "/javascript" },
          { title: "ReactJS", desc: "Understand ReactJS fundamentals and hooks, frequently asked in frontend interviews.", link: "/reactjs" },
          { title: "NextJs", desc: "Get familiar with Next.js features like server-side rendering, a frequent topic in full-stack interviews.", link: "/nextjs" },
          { title: "NodeJs", desc: "Enhance your Node.js knowledge for handling server-side logic, a critical topic in backend interviews.", link: "/nodejs" },
          { title: "MongoDB", desc: "Learn key MongoDB concepts for designing scalable databases, often asked in backend and full-stack interviews.", link: "/mongodb" }
        ].map((section, index) => (
          <a
            key={index}
            href={section.link}
            className="group relative block rounded-2xl p-6 overflow-hidden bg-white/20 backdrop-blur-lg shadow-lg border-2 border-gray-300 dark:border-gray-700 transition-transform transform hover:scale-105 hover:shadow-2xl "
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/20 dark:from-gray-700 dark:to-gray-900 opacity-20 "></div>

            {/* Card Content */}
            <div className="relative">
              {/* Title with Border */}
              <div className="border-2 border-blue-500 dark:border-blue-400 rounded-lg p-3 inline-block">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition">
                  {section.title}
                </h3>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mt-3">{section.desc}</p>

              {/* CTA Button */}
              <button className="mt-4 px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-md transition duration-300 hover:from-blue-600 hover:to-indigo-700">
                Get Started
              </button>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
