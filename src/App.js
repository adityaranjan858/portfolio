import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/layout/Admin/Admin";
import Home from "./components/layout/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/*" element={<Admin/>} />
    </Routes>
  );
}

export default App;
