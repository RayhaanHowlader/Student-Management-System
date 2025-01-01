import React from "react";
import Verify from "./adminverify.jsx"
import Admission from "./admissionform.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import Register from "./Register.jsx"; 
import './App.css';
import Dashboard from "./dashboard.jsx";
import Admin from './admin.jsx'
import Results from './resultsform.jsx'
import ResultsPage from './resultpage.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define routes for Register and Login components */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dash" element={<Dashboard/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/results" element={<Results/>}/>
        <Route path="/resultpage" element={<ResultsPage/>}/>
        <Route path="/admissionform" element={<Admission/>}/>
        <Route path="/adminverify" element={<Verify/>}/>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
