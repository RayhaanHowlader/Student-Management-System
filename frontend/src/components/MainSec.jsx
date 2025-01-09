import React from 'react';
import { useState, useEffect} from 'react';
import campusImg4 from '../assets/campus_img4.png'
import campusImg3 from '../assets/campus_img3.png'
import campusImg2 from '../assets/campus_img2.png'
import campusImg1 from '../assets/campus_img1.png'
import { useNavigate } from 'react-router-dom';


const MainSec = () => {
 const navigate=useNavigate();




    const [current,setCurrent]=useState(0);
    const images=[
      campusImg1,
      campusImg2,
      campusImg3,
      campusImg4
    ];


  const handleprev=()=>{
    setCurrent(current===0?images.length-1:current-1)
  };

  const handleNext=()=>{
    setCurrent(current===images.length-1?0:current+1)
  }

  useEffect(()=>{
    const interval=setInterval(()=>{
      setCurrent((prev)=>(prev === images.length-1?0:prev+1));
    },5000);
    return()=>clearInterval(interval);
  },[images.length]);





  return (
    <>
      <div className="bg-gray-100 p-5 text-center">
        <h2 className="text-3xl font-bold text-blue-700">About Thakur College</h2>
        <p className="mt-4 text-gray-700">
          Thakur College is dedicated to excellence in education, innovation, and overall student growth.
          Explore our vibrant campus, talented faculty, and opportunities to build your future.
        </p>
        <button 
        onClick={()=>navigate('/about')}
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
          
          Learn More
        </button>
      </div>
      

    <div className="p-6 bg-gradient-to-b from-gray-100 via-white to-blue-50 ">
        <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-8 underline underline-offset-8 decoration-blue-300">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 rounded-lg ">
            <h3 className="font-bold text-lg">Cultural Fest 2025</h3>
            <p className="text-sm text-gray-600">Join us for a day of fun, food, and festivities on 15th Jan!!</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
        Learn More
      </button>
          </div>
          <div className="bg-white shadow-lg  hover:shadow-2xl transition-shadow duration-300 p-6 rounded-lg ">
            <h3 className="font-bold text-lg">Placement Drive</h3>
            <p className="text-sm text-gray-600">Top companies are coming to campus. Don't miss out!</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
        Learn More
      </button>
          </div>
          <div className="bg-white shadow-lg  hover:shadow-2xl transition-shadow duration-300 p-6 rounded-lg  ">
            <h3 className="font-bold text-lg">Science Exhibition</h3>
            <p className="text-sm text-gray-600">Discover innovations and creativity at the annual exhibit.</p>
            <button  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
        Learn More
      </button>
          </div>
          <div className="bg-white shadow-lg  hover:shadow-2xl transition-shadow duration-300 p-6 rounded-lg  ">
            <h3 className="font-bold text-lg">Green Day</h3>
            <p className="text-sm text-gray-600">Discover green innovations and attend the plantation event.</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
        Learn More
      </button>
          </div>
          <div className="bg-white shadow-lg  hover:shadow-2xl transition-shadow duration-300 p-6 rounded-lg  ">
            <h3 className="font-bold text-lg">TARANGAN</h3>
            <p className="text-sm text-gray-600">
              Come and enjoy Thakur College's biggest fest in Mumbai with DJ NIGHT and much more.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
        Learn More
      </button>
          </div>
        </div>
      </div>
    
      <div className='bg-gray-100 p-4 '>
        <h2 className='text-2xl font-bold text-center text-blue-700 mb-6'>
        Campus Life
        </h2>
        <div className=" relative w-full max-w-8xl mx-auto">
          <button onClick={handleprev} className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white  px-3 py-2 rounded z-10'>
          <i class="fa-solid fa-arrow-left-long"></i>
        </button>
        <img src={images[current]} alt="campus life images " className='w-full h-80 object-cover rounded'/>
        <button onClick={handleNext} className='absolute right-0 top-1/2 transform -translate-y-1/2  bg-blue-500 text-white  px-3 py-2 rounded'>
        <i class="fa-solid fa-arrow-right-long"></i>
         </button>
    </div>
   </div>

  <div className='bg-gray-100 p-8 text-center'>
    <h2 className='text-2xl font-bold'>
      What Our Students Say
    </h2>
    <div className='mt-4 flex flex-col sm:flex-row gap-4'>
      <div className='bg-white shadow p-4 rounded flex-1'>
        <p className='text-sm text-gray-600'>
          "Thakur College has been a wonderful experience.Greatfaculty and facilities!"
           </p><h4 className='mt-2 font-bold'>- Yash Parab</h4>
         </div>
        <div className='bg-white shadow p-4 rounded flex-1'>
          <p className='text-sm text-gray-600'>"The campus is vibrant, and the opportunities are endless!"
      </p><h4 className='mt-2 font-bold'>- Ashish Yadav</h4>
      </div>


    </div>






  </div>
  <div>
    
  </div>
 







     
    </>
  );
};

export default MainSec;
