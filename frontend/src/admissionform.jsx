import React,{useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
function Admission(){
const navigate=useNavigate();
const [name,setName]=useState("");
const [age,setAge]=useState("");
const [date,setDate]=useState("");
const [adhaarnumber,setAdhaarNumber]=useState("");
const [address,setAddress]=useState("");
const [adhaar,setadhaar]=useState("");
const [twelve,setTwelve]=useState("");
const [eleventh,setEleventh]=useState("");
const submitImage=(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append("name",name);
    formData.append("age",age);
    formData.append("adhaarNumber",adhaarnumber);
    formData.append("address",address);
    formData.append("date",date);
    formData.append("adhaar",adhaar);
    formData.append("twelve",twelve);
    formData.append("eleventh",eleventh);
    console.log(name,address);
    const result =  axios.post("http://localhost:3000/upload-files",formData,{
        headers :{ "Content-Type" : "multipart/form-data"}
    });
    
    console.log(result);
    navigate("/adminverify")
}
return(<>
<div className='container mx-auto p-4 sm:p-6 md:p-8 bg-blue-50 rounded-lg shadow-lg font-serif items-center'>
<form method="post" 
onSubmit={submitImage}
className='flex flex-col gap-6 sm:gap-4'
>
<h1 className=' text-lg sm:text-xl md:text-2xl  font-bold  text-blue-700 text-center  '>Admission Form</h1>
<div className='flex flex-col '>
    <label htmlFor="name" className=' text-sm sm:text-base text-gray-700 font-medium' >
        Enter Your Name : </label>
    <input type="text" name="" id="1" 
    onChange={(e)=>setName(e.target.value)}
    className='mt-1 p-2 border border-gray-400 rounded-md focus:ring-2 focus:outline-none focus:ring-blue-500 text-gray-800'
    />
</div>

<div className='flex flex-col'>
    <label htmlFor="age" className='text-gray-700 font-medium text-sm sm:text-base'>
        Enter Your Age :</label>
    <input type="number" name="" id="2" 
    onChange={(e)=>setAge(e.target.value)}
    className='mt-1 p-2 border border-gray-400 rounded-md focus:ring-2 focus:outline-none focus:ring-blue-500 text-gray-800'
    />
</div>
<div className='flex flex-col'>
    <label htmlFor="dob" className='text-gray-700 font-medium text-sm sm:text-base '>
        Enter Your DOB :</label>
    <input type="date" name="" id="3"  
    onChange={(e)=>setDate(e.target.value)} 
    className='mt-1 p-2 border border-gray-400 rounded-md focus:ring-2 focus:outline-none focus:ring-blue-500 text-gray-800'
    />
</div>
<div className='flex flex-col'>
    <label htmlFor="adharnum" className='text-gray-700 font-medium text-sm sm:text-base'>
        Enter Your Adhaar Number :</label>
    <input type="number" name="" id="4" 
    onChange={(e)=>setAdhaarNumber(e.target.value)} 
    className='mt-1 p-2 border border-gray-400 rounded-md focus:ring-2 focus:outline-none focus:ring-blue-500 text-gray-800'
    />
</div>
<div className='flex flex-col'>
    <label htmlFor="address" 
    className='text-gray-700 font-medium text-sm sm:text-base'>
        Enter Your Address :</label>
    <textarea name="" id="" 
    onChange={(e)=>setAddress(e.target.value)}
    className='mt-1 p-2 border border-gray-400 rounded-md focus:ring-2 focus:outline-none focus:ring-blue-500 text-gray-800'
    ></textarea>
</div>
<div className='flex'>
    <label htmlFor="tenthmarksheet"
        className='text-gray-700 font-medium text-sm sm:text-base'
    >Upload Your 10th Marksheet :</label>
    <input type="file" accept="application/pdf" name="" id="6"
     onChange={(e)=>setEleventh(e.target.files[0])} 
     className='pr-3 pl-6 text-gray-600'
    />
</div>
<div className='flex '>
    <label htmlFor="twelvemarksheet" className='text-gray-700 font-medium text-sm sm:text-base'>
        Upload Your 12th Marksheet:</label>
    <input type="file" accept="application/pdf" name="" id="5" 
    onChange={(e)=>setTwelve(e.target.files[0])}
    className=' pr-3 pl-6 text-gray-600'
    />
    
</div>
<div className='flex'>
    <label htmlFor="adharcard" className='text-gray-700 font-medium text-sm sm:text-base'>
        Upload adhar card:</label>
    <input type="file" name="" id="7" accept="application/pdf" 
    onChange={(e)=>setadhaar(e.target.files[0])} 
    className=' pr-3 pl-6  text-gray-600'
    />
</div>
<button type="submit"
 className='bg-blue-500 text-white py-2 px-4 w-full sm:w-auto  rounded-md hover:bg-blue-700'
>Submit</button>
</form>    
</div>
</>);
}
export default Admission
