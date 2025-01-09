import './dashboard.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
function Dashboard(){
 

  const navigate=useNavigate();
  const [userProfile, setUserProfile] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const email = localStorage.getItem("LoggedInUser");

  useEffect(()=>{

      const verifyToken = async () => {
          const response = await fetch("http://localhost:3000/dash", {
              headers: {
                  Authorization: localStorage.getItem("token"),
              },
          });
          console.log(response);
          if (response.status === 403) {
              localStorage.removeItem("token");
              navigate("/login");
          }
          
      
      };


      const fetchUserProfile = async () => {
          if (email) {
              try {
                  const response = await fetch(`http://localhost:3000/profile/${email}`);
                  if (response.ok) {
                      const data = await response.json();
                      setUserProfile(data.profileImage);
                  } else {
                      console.error("Failed to fetch profile:", response.status);
                  }
              } catch (error) {
                  console.error("Error fetching profile:", error);
                  navigate("/login");
              }
          }
      };
     
      verifyToken();
      fetchUserProfile();
    

},[]);
console.log(email);
   // State for toggling sidebar
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   // Function to toggle sidebar visibility
   const toggleSidebar = () => {
     setIsSidebarOpen(!isSidebarOpen);
   };
 
  




    return(<>
    <h2 className='text-gray-900 text-3xl font-bold font-serif'>Student's Dashboard</h2>
    <div className="flex flex-col lg:flex-row min-h-screen">

    <aside className={`dashboard-sidebar bg-gray-800 text-white p-6 lg:w-64 w-full ${
          isSidebarOpen ? "block" : "hidden"
        } lg:block`}>
    <h2 className="text-2xl font-bold mb-4 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF" className="mr-2">
    <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/>
    </svg>Student Dashboard
    </h2>
    <hr className="border-gray-600 mb-4"/>
        <ul className="space-y-4">
        <li>
        <a href="#" className="hover:text-gray-300 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor" className="mr-2">
        <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/>
        </svg>
       Student Info</a>
      </li>
    <li>
    <a href="#" className="hover:text-gray-300 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF" className="mr-2">
    <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"/>
    </svg>
    Student Fees</a>
    </li>
    <li>
    <a href='#' className="hover:text-gray-300 flex items-center">
    <i class="fa-solid fa-book">
        </i>Library</a>
    </li>
    <li>
    <a href="#" className="hover:text-gray-300 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF" className="mr-2">
    <path d="M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q32 0 50 15.5t26 38.5l64-26q-11-35-40.5-61T516-710v-50h-70v50q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-33 0-58.5-20.5T390-396l-66 26q14 48 43.5 77.5T444-252v52Zm36 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </svg>
    Fine
    </a>
    </li>
    <li>
    <a href="#" className="hover:text-gray-300 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-400h160v-80H400v80Zm0-120h320v-80H400v80Zm0-120h320v-80H400v80Zm-80 400q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/>
    </svg>
    Syllabus
    </a>
    </li>

    </ul>
</aside>
    
<button
        className="lg:hidden fixed top-4 left-4 bg-gray-800 text-white p-2 rounded"
        onClick={toggleSidebar}
      >
        ☰
      </button>









  <main className=' dashboard-main   flex-grow bg-gray-100 p-6'>
    <div className='flex flex-col md:flex-row justify-between items-center mb-6 gap-4 flex-wrap'>
        <input
         text="text"
         placeholder='Search Students or Events ...'
         className='search-input  w-full md:w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
         />
         <div className='flex items-center'>
         <img src={userProfile} alt=" profile img"
         className=' profile-img  w-10 h-10 rounded-full mr-2' />
         <span className=' text-gray-700'>rahyann@gmail.com</span>
        </div>
     </div>
  
  <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-6'>
    <div className='bg-white shadow-lg rounded-lg p-4 flex items-center'>
        <div className='bg-blue-500 text-white rounded-full p-4 mr-4'>
        <img src="https://i.pinimg.com/originals/51/90/10/519010d9ee8167bfe445e616f260f758.png" alt=" students img"  className='w-12 h-12 rounded-full mr-1'/>

        </div>
        <div>
            <p className='text-gray-600 font-semibold'>Students</p>
            <p className='text-xl text-gray-700 font-bold'>2000</p>
        </div>
     </div>


    <div className='bg-white shadow-lg rounded-lg p-4 flex items-center'>
        <div className='bg-green-500 text-white rounded-full p-4 mr-4'>
        <img src="https://e7.pngegg.com/pngimages/552/861/png-clipart-computer-icons-avatar-avatar-computer-icons-avatar.png" alt=" techer img" className='w-12 h-12 rounded-full mr-2' />
        </div>
        <div>
            <p className='text-gray-600 font-semibold'>Teachers</p>
            <p className='text-xl text-gray-700 font-bold'>250</p>
        </div>
    </div>

    <div className='bg-white shadow-lg rounded-lg p-4 flex items-center'>
        <div className='bg-yellow-500 text-white rounded-full p-4 mr-4'>
        <img src="https://cdn-icons-png.flaticon.com/512/780/780248.png" alt="parents img" className='w-12 h-12 rounded-full mr-2' />
        </div>
        <div>
            <p className='text-gray-600 font-semibold'>Parents</p>
            <p className='text-xl text-gray-700 font-bold'>2250</p>
        </div>
    </div>

    <div className='bg-white shadow-lg rounded-lg p-4 flex items-center'>
        <div className='bg-teal-600 text-white rounded-full p-4 mr-4'>
        <img src="https://cdn-icons-png.flaticon.com/512/3090/3090108.png" alt=" staff" className='w-14 h-14 rounded-full mr-2' />
        </div>
        <div>
            <p className='text-gray-600 font-semibold'>Parents</p>
            <p className='text-xl text-gray-700 font-bold'>2250</p>
        </div>
    </div>
</section>
   
<section className='bg-white shadow-md rounded-lg p-6'>
    <h3 className='text-2xl text-gray-900 font-semibold mb-4'>Welcome to Dashboard</h3>
    <h2 className='text-xl font-bold mb-4 text-gray-900'>DASHBOARD</h2>
    <nav className="navbar bg-gray-100 rounded-lg p-4 shadow-sm mb-6">
    <ul className="flex justify-evenly">
      <li>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          Results
        </a>
      </li>
      <li>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          Fees
        </a>
      </li>
      <li>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          Syllabus
        </a>
      </li>
      <li>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          Admissions
        </a>
      </li>
    </ul>
  </nav>

  <h2 className='text-lg font-semibold mb-4 text-gray-800'>Students Performance</h2>
  <div className='marks grid gap-4'>
    <span className='bg-blue-50 text-gray-700 p-2 rounded shadow-sm '>
        <strong>SEM1 CGPA:<strong> 8.23 </strong>  Grade: </strong> A+
    </span>
    <span className='bg-blue-50 text-gray-700 p-2 rounded shadow-sm '>
        <strong>SEM2 CGPA:<strong> 8.45 </strong>  Grade: </strong> A+
    </span>
    <span className='bg-blue-50 text-gray-700 p-2 rounded shadow-sm '>
        <strong>SEM3 CGPA:<strong> 8.25 </strong>  Grade: </strong> A+
    </span>



  </div>
  







</section>





  </main>


</div>

    </>);
}
export default Dashboard