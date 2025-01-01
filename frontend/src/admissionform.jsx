import styles from './admission.module.css'
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
<div className={styles.container}>
    <form method="post" onSubmit={submitImage}>
<span><label htmlFor="">Enter Your Name : </label><input type="text" name="" id="1" onChange={(e)=>setName(e.target.value)}/></span>
<span><label htmlFor="">Enter Your Age :</label><input type="number" name="" id="2" onChange={(e)=>setAge(e.target.value)} /></span>
<span><label htmlFor="">Enter Your DOB :</label><input type="date" name="" id="3"  onChange={(e)=>setDate(e.target.value)}  /></span>
<span><label htmlFor="">Enter Your adhaar number :</label><input type="number" name="" id="4" onChange={(e)=>setAdhaarNumber(e.target.value)} /></span>
<span><label htmlFor="">Enter Your Address :</label><textarea name="" id="" onChange={(e)=>setAddress(e.target.value)}></textarea></span>
<span><label htmlFor="">Upload Your 10th Marksheet</label><input type="file" accept="application/pdf" name="" id="6" onChange={(e)=>setEleventh(e.target.files[0])}  /></span>
<span><label htmlFor="">Upload Your 12th Marksheet</label><input type="file" accept="application/pdf" name="" id="5" onChange={(e)=>setTwelve(e.target.files[0])} /></span>
<span><label htmlFor="">Upload adhar card</label><input type="file" name="" id="7" accept="application/pdf" onChange={(e)=>setadhaar(e.target.files[0])} /></span>
<button type="submit">Submit</button>
</form>    
</div>
</>);
}
export default Admission
