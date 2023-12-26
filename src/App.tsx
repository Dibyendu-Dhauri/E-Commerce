import React from "react";
import './App.scss';
import Nav from "./components/Navbar/Nav";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/search" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
