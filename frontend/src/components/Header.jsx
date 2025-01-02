// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const Header = () => {
  const [MenuOption, setMenuOption] = useState(false);

  const MenuMobile = () => {
    setMenuOption(prevState => !prevState);
  };

  return (
    <header className="p-3 bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-500 ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-3xl font-bold">
          <Link to="/" className="flex items-center">
            <img src="\src\assets\thakur  college img.png" alt="college Logo" className="w-12 h-12 mr-2" />
            Thakur College
          </Link>
        </div>
        <button onClick={MenuMobile} className="md:hidden flex items-center justify-center p-3 space-x-1" aria-label="Menu navigation">
          <i className="fa-solid fa-bars"></i>
          <span>Menu</span>
        </button>

        {/* Menu Items for Desktop */}
        <nav className="hidden md:flex space-x-8 font-semibold ">
          <Link to="/" className="hover:text-sky-200 hover:text-lg">Home</Link>
          <Link to="/about" className="hover:text-sky-200 hover:text-lg">About</Link>
          <Link to="#" className="hover:text-sky-200 hover:text-lg">Admission</Link>
          <Link to="#" className="hover:text-sky-200 hover:text-lg">
            <span>Profile</span> 
            <i className="fa-regular fa-circle-user"></i>
          </Link>
        </nav>

        <div className={`md:hidden absolute top-0 left-0 right-0 bg-blue-800 transition-transform duration-300 ease-in-out transform ${MenuOption ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className='flex justify-end p-4'>
            <button onClick={MenuMobile} className='text-white text-2xl focus:outline-none'>
              <i className="fa-solid fa-rectangle-xmark"></i>
            </button>
          </div>
          <nav className="flex flex-col items-center p-4 space-y-4">
            <Link to="/" className="text-white hover:text-blue-500">Home</Link>
            <Link to="/about" className="text-white hover:text-blue-500">About</Link>
            <Link to="#" className="text-white hover:text-blue-500">Admission</Link>
            <Link to="#" className="text-white hover:text-blue-500">
              <span>Profile</span> 
              <i className="fa-regular fa-circle-user"></i>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
