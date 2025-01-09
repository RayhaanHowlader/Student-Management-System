//import styles from  './admin.module.css';
import { useNavigate } from 'react-router-dom';
import React,{useState} from "react"
import axios from "axios"
function Admin(){
    const navigate=useNavigate();
    const [user,setUser]=useState();
    const [pass,setPass]=useState();
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/checkadmin',{user,pass}).then(result=>{
        console.log(result.data); 
        if(result.data=="success"){
            navigate("/results");
        }
        })}
    
    return(<>
    <div className='flex  min-h-screen justify-center items-center bg-gray-900 p-4'>
        <form method="post" 
         className='w-full max-w-md bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-6 sm:p-8' 
         onSubmit={handleSubmit}>
       <h1 className='text-2xl sm:text-3xl text-white font-bold text-center mb-6'>
        Admin Login</h1>
        <div  className='mb-4'>
        <label htmlFor="AdminName" className='block text-gray-300 mb-2'>Admin Name : </label>

       <input 
       onChange={(e)=>setUser(e.target.value)} 
       type="text" name="us" id="us" 
     className='w-full p-3 text-gray-300 bg-gray-700  rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-500'
     placeholder='Enter Admin Name'/>
    </div>
      
      <div className='mb-6'>
      <label htmlFor="passwordadmin" 
      className='block text-gray-300 mb-2' >Password : </label>
      <input 
      onChange={(e)=>setPass(e.target.value)} 
      type="password" 
      name="pa" 
      id="pa" 
      placeholder='enter your password'
      className='w-full p-3 text-gray-300 bg-gray-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-cyan-500'/>
    </div>
    
    <button  
    type="submit" 
    className='w-full bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-700 transition'>
    Submit</button>  
        </form>




        </div>
        
        
        
       
    
    </>)
}
export default Admin