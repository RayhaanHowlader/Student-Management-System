
import React from "react";
import Profile from "./profile.jsx"
import Verify from "./adminverify.jsx"
import ATKT from "./atkt.jsx"
import Refill from "./refillwallet.jsx"
import Payment from './payment.jsx'
import Admission from "./admissionform.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import Register from "./Register.jsx"; 
import Wallet from "./wallet.jsx"
import './App.css';
import WalletUser from './walletuser.jsx'
import Dashboard from "./dashboard.jsx";
import Admin from './admin.jsx'
import HomePage from "./pages/HomePage.jsx"
import Results from './resultsform.jsx'
import AboutPage  from "./pages/AboutPage.jsx";
import ResultsPage from './resultpage.jsx'
import { Navigate } from 'react-router-dom';

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
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/walletadmin" element={<Refill/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/wallet" element={<Wallet></Wallet>}></Route>
        <Route path="/walletuser" element={<WalletUser></WalletUser>}></Route>
        <Route path="/atkt" element={<ATKT></ATKT>}> </Route>
        </Routes>
    </BrowserRouter>
  );

}

export default App;
