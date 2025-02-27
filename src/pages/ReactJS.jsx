// pages/ReactJS.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

function ReactJS() {
  const [questions] = useState([
    { id: 1, question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { id: 2, question: "What are the key features of React?", answer: "React features include Virtual DOM, JSX, Components, Unidirectional Data Flow, and Hooks." },
    { id: 3, question: "What is JSX?", answer: "JSX is a syntax extension that allows writing HTML in JavaScript." },
    { id: 4, question: "What are React Hooks?", answer: "Hooks are functions that let you use state and lifecycle features in functional components." },
    { id: 5, question: "What is the Virtual DOM?", answer: "The Virtual DOM is a lightweight copy of the actual DOM that helps improve performance." },
    { id: 6, question: "What is the difference between state and props?", answer: "Props are read-only and passed from parent to child, while state is mutable and managed within a component." },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">ReactJS Interview Questions</h1>
      <div className="max-w-3xl mx-auto space-y-4">
        {questions.map((q) => (
          <div key={q.id} className="bg-white p-4 shadow-md rounded-md">
            <h3 className="text-lg font-medium">{q.question}</h3>
            <p className="text-gray-700 mt-2">{q.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReactJS;
