import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DSA from "./pages/DSA";
import JavaScriptPage from "./pages/JavaScriptPage";
import ReactJS from "./pages/ReactJS";
import "./styles.css";
import NextJs from "./pages/NextJS";
import NodeJS from "./pages/NodeJS";
import MongoDB from "./pages/MongoDB";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dsa" element={<DSA />} />
            <Route path="/javascript" element={<JavaScriptPage />} />
            <Route path="/reactjs" element={<ReactJS />} />
            <Route path="/nextjs" element={<NextJs />} />
            <Route path="/nodejs" element={<NodeJS />} />
            <Route path="/mongodb" element={<MongoDB />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
