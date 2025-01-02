import React from "react";
import Header from "../components/Header";
import MainSec from "../components/MainSec";
import Footer from "../components/Footer";


const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <MainSec />
      <Footer />
    </div>
  );
};




export default HomePage;