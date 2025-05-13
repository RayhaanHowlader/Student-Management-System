import React from 'react'
const AboutPage = () => {
  return (
    <>
      <div className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-semibold text-blue-700 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-8">
          Welcome to Thakur College, a place of knowledge, culture, and excellence in education. 
          We aim to empower students with the tools and opportunities to shape their futures and contribute to society.
        </p>
        
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our mission is to provide a comprehensive, inclusive, and transformative education to students. We foster innovation, critical thinking, and a commitment to lifelong learning.
        </p>
        
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our Vision</h2>
        <p className="text-lg text-gray-700 mb-6">
          We envision being a leading institution in shaping the minds of future leaders and professionals, dedicated to academic excellence and societal impact.
        </p>
        
        <div className="mt-8">
          <button 
            onClick={() => window.scrollTo(0, 0)} 
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Back to Top
          </button>
        </div>
      </div>
    </div>
    
    
    
    
    </>
  )
}

export default AboutPage
