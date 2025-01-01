import styles from  './admin.module.css';
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
    <div className={styles.container}>
        <form method="post" className={styles.admin} onSubmit={handleSubmit}>
            <h1 className='text-2xl'>Admin</h1>
<span><label htmlFor="" className={styles.label}>Username : </label><input onChange={(e)=>setUser(e.target.value)} type="text" name="us" id="us" className={styles.input}/></span>
<span><label htmlFor="" className={styles.label}>Password : </label><input onChange={(e)=>setPass(e.target.value)} type="password" name="pa" id="pa" className={styles.input}/></span>
<button  type="submit" className={`hover:animate-bounce ${styles.btn}`}>Submit</button>  
        </form>
    </div>
    </>)
}
export default Admin