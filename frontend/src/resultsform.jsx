import React,{useState} from "react"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Results(){
const navigate=useNavigate();
const [rollno,setRollno]=useState("");
const [sub1,setSub1]=useState("");
const [sub2,setSub2]=useState("");

const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/result',{rollno,sub1,sub2}).then(result=>{
        console.log(result); 
        navigate("/resultpage");
        })
        .catch((err)=>console.log(err))
    }

    return(<>
        <div className='container mx-auto px-4 py-8    min-h-screen '>
            <h1 className="text-3xl font-bold text-center mb-4 font-serif ">Student's Marks</h1>
        <form method="post"
         onSubmit={handleSubmit} 
         className='flex flex-col gap-4'
         >
           <div className="flex items-center">
                <label htmlFor="rollno" 
                className=" w-1/4 text-gray-700 text-right mr-2">Rollno:</label>
                <input 
                type="number" id="rollno" 
                onChange={(e)=>setRollno(e.target.value)} 
                className='w-full text-gray-800 border  border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2  focus:ring-blue-500'  
                required
                />
            </div>

            <div className="flex items-center">
             <label className='w-1/4 text-gray-700 text-right mr-2 ' 
             htmlFor="sub1">Subject 1 Marks</label>
             <input type="number" id="sub1" value={sub1}
              onChange={(e)=>setSub1(e.target.value)} 
              required
             className='w-full text-gray-800  border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />
             </div>

            <div className="flex items-center">
            <label className='w-1/4  text-gray-700 text-right mr-2 ' htmlFor="sub2">
                Subject 2 Marks</label>
            <input type="number" id="sub2" value={sub2}
            onChange={(e)=>setSub2(e.target.value)} 
            required
            className=' w-full text-gray-800 border border-gray-300  rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />
            </div>

       <button 
       className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 ' 
       type="submit" >
        Submit
       </button>
    </form>
    </div>

    </>)
}
export default Results