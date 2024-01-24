import React from "react";
import Nav from "./Components/Nav";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";

import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;