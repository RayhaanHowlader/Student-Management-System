import {useState} from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){
    const [isInvalid, setIsInvalid] = useState(false); // State to track invalid credentials

   const [name,setName] = useState();
   const [email,setEmail] = useState();
   const [password,setPassword] = useState();
   const navigate=useNavigate();
 

   const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/login',{email,password}).then(result=>{
        console.log(result.data);
        const { success,message,email,jwttoken }=result.data; 
        if(success){

            localStorage.setItem("token",jwttoken);
            localStorage.setItem("LoggedInUser",email); 
            navigate("/dash")         
        }
        else{
            setIsInvalid(true);
        }
       
     
    })
    .catch(err=>console.log(err))

   
}



    return(
        <div className="flex  items-center justify-center min-h-screen  bg-gray-950 px-4">
     <form method="post" onSubmit={handleSubmit} className="bg-gradient-to-b from-gray-800 to-gray-700 p-6 sm:p-8 rounded-lg shadow-md w-full max-w-sm sm:max-w-md space-y-6">
        <h1 className="flex items-center text-white text-xl sm:text-2xl  font-bold mb-4 ">
        <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="white" className="mr-2">
        <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/>
        </svg>
        Student Login
        </h1>
        <div className="text-white "
                       style={{ display: isInvalid ? "block" : "none" }}
                   >Invalid username or password</div>
            <div className="space-y-2">
            <label htmlFor="email" className="flex items-center text-white font-medium"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white" className="mr-2"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
            </svg>Enter Your Email : </label>
            <input type="email" id="email" className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500" name="email"  placeholder="Enter Your email address" onChange={(e)=>setEmail(e.target.value)}/>
            </div>



            <div className="space-y-2">
            <label htmlFor="password" className="flex items-center text-white font-medium"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white" className="mr-2"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/>
            </svg>Enter Your Password :</label>
            <input type="password" id="password" className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"  placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
        
        <button type="submit" value="Submit"
        className="w-full py-2 bg-green-500 text-white text-xl font-bold rounded-lg hover:bg-green-600 transition">
            Log In   
        </button>
    
    </form>
    </div>);
}
export default Login