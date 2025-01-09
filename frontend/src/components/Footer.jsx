import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
  <footer className=" bg-slate-700 text-white py-8">
  <div className="container mx-auto flex flex-col md:flex-row  justify-between items-center px-4">
    
    <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
      <img src="\src\assets\thakur  college img.png" alt="Thakur College Logo" className="w-16 h-16 mb-4"/>
      <h3 className="text-2xl font-semibold">Thakur College</h3>
      <p className="text-sm text-center md:text-left mt-2">
        A place of knowledge, culture, and excellence in education. Empowering minds for a brighter tomorrow.
      </p>
    </div>
    
    <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
      <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="/" className="hover:text-blue-600">Home</a></li>
       <Link to="/about" className="text-white hover:text-blue-500"><li>About</li></Link> 
        <li><a href="/admission" className="hover:text-blue-600">Admission</a></li>
        <li><a href="/contact" className="hover:text-blue-600">Contact Us</a></li>
      </ul>
    </div>
    <div className="flex flex-col items-center md:items-start">
      <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
      <ul className="text-sm space-y-2">
        <li><i className="fa-solid fa-phone"></i> <span>(+91) 123 456 7890</span></li>
        <li><i className="fa-solid fa-envelope"></i> <span>info@thakurcollege.edu</span></li>
        <li><i className="fa-solid fa-location-dot"></i> <span>Thakur College , Mumbai , India</span></li>
      </ul>
    </div>
  </div>
  <div className="bg-slate-900 text-center py-4 mt-6">
    <p className="text-sm">&copy; 2025 Thakur College. All Rights Reserved.</p>
  </div>
</footer>
  </>
  )
}

export default Footer