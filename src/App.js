import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, About, Events, Contact } from "./pages";

// https://api.github.com/users/src-needham

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
