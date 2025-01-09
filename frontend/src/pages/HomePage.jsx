import React from "react";
import Header from "../components/Header";
import MainSec from "../components/MainSec";
import Footer from "../components/Footer";


const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main className="flex-grow">
      <MainSec />
      </main>
    
      <Footer />
    </div>
  );
};




export default HomePage;