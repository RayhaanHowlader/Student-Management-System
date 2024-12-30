import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import Register from "./Register.jsx"; // Make sure this matches the case of your file name
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define routes for Register and Login components */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
