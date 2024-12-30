import {Button } from "./components/ui/button.jsx"
import styles from './login.module.css'
import {useState} from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){
   const [name,setName] = useState();
   const [email,setEmail] = useState();
   const [password,setPassword] = useState();
   const navigate=useNavigate();
   const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/login',{email,password}).then(result=>{
    console.log(result); 
    navigate("/dashboard");
    })
    .catch(err=>console.log(err))
}
    return(
        <div id={styles.container}>
    <form method="post" id={styles.cont} onSubmit={handleSubmit}>
        <h1 className={styles.heading}><svg xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 -960 960 960" width="45px" fill="#FFFFFF"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/></svg>Student Login</h1>
        <span><label className={styles.label} htmlFor="email"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>Enter Your Email : </label><input className={styles.input} type="email" id="email" name="email"  placeholder="Enter Your email address" onChange={(e)=>setEmail(e.target.value)}/></span>
        <span><label className={styles.label} htmlFor="password"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>Enter Your Password</label><input className={styles.input} type="password"  placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)}/></span>
        <input className={styles.submit} type="submit" value="Submit" />
    </form>
    </div>);
}
export default Login