import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Register(){
    const navigate=useNavigate();
    const [repass,setRepass] = useState();
    const [email,setEmail] =useState();
    const [password,setPassword]=useState();
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/reg',{repass,email,password}).then(result=>{
        console.log(result); 
        navigate("/login");
        })
        .catch(err=>console.log(err))
    }
    return(<>
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
    <form  onSubmit={handleSubmit} 
     className=" w-full max-w-md shadow-lg border-2 border-white p-6 sm:p-10 flex flex-col justify-center items-center bg-gray-800 rounded-lg"
  >
  <h1 className="text-white text-2xl sm:text-3xl flex items-center mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF" className="mr-3">
    <path d="M479-120 189-279v-240L40-600l439-240 441 240v317h-60v-282l-91 46v240L479-120Zm0-308 315-172-315-169-313 169 313 172Zm0 240 230-127v-168L479-360 249-485v170l230 127Zm1-240Zm-1 74Zm0 0Z"/>
    </svg>Registration</h1>


    <h3 className="text-white text-lg mb-6">Student Registration</h3>

    <span className="flex flex-col mb-4 w-full">
      <label  htmlFor="email" className="text-white mb-2 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF" className="mr-2">
        <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
        </svg> Enter Your Email : </label>
        
    <input className="w-full p-3 text-blue-600 bg-gray-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-cyan-500" type="email"
     name="email" id="email" placeholder="Enter Your Username" onChange={(e)=>setEmail(e.target.value)}/>
    </span>


    <span className="flex flex-col mb-4 w-full">
      <label  htmlFor="password" className="text-white mb-2 flex items-center" >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF" className="mr-2">
        <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/>
        </svg> Enter the password : </label>
        
      <input className="w-full p-3 text-blue-600 bg-gray-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-cyan-500"  type="password" name="password" id=""  placeholder='Enter the Password' onChange={(e)=>setPassword(e.target.value)}/>
      </span>

    <span className="flex flex-col mb-4 w-full">
      <label  htmlFor="password" className="text-white mb-2 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF" className="mr-2">
        <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/>
        </svg> Retype the Password : </label>
        <input className="w-full p-3 text-blue-600 bg-gray-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-cyan-500" type="password" name="repassword" id="repassword" placeholder="Retype the entered Password" onChange={(e)=>setRepass(e.target.value)} /></span>

    <button type="submit" className="flex items-center justify-center bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">
      Submit <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg></button>
  </form>
  </div>
    </>);
}
export default Register