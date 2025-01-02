import './results.css';
import React,{useState} from "react"
import { useNavigate } from 'react-router-dom';
import styles from "./resultpage.module.css"
import axios from 'axios';
function Results(){
const navigate=useNavigate();
const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/result',{rollno,sub1,sub2}).then(result=>{
        console.log(result); 
        navigate("/resultpage");
        })
        .catch(err=>console.log(err))
    }
const [rollno,setRollno]=useState();
const [sub1,setSub1]=useState();
const [sub2,setSub2]=useState();
    return(<>
    <div className={styles.container}>
        <form method="post" onSubmit={handleSubmit} className={`${styles.form}` }>
            <h1 className="text-2xl">Student Marks</h1>
            <span><label className={styles.label}htmlFor="">Rollno:</label><input type="number" id="rollno" onChange={(e)=>setRollno(e.target.value)} className={styles.input}  /></span>
            <span><label className={styles.label} htmlFor="">Subject 1 Marks</label><input type="number" id="sub1" onChange={(e)=>setSub1(e.target.value)} className={styles.input} /></span>
            <span><label className={styles.label}htmlFor="">Subject 2 Marks</label><input type="number" id="sub2" onChange={(e)=>setSub2(e.target.value)} className={styles.input} /></span>
            <button className={`${styles.btn} hover:animate-bounce`}  type="submit" >Submit</button>
        </form>
    </div>
    </>)
}
export default Results