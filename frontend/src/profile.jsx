import styles from './profile.module.css'
import React,{useState} from "react"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Profile(){
    const navigate=useNavigate();
    const [firstname,setFirstName]=useState("");
    const [address,setAddress]=useState("");
    const [lastname,setLastName]=useState("");
    const [age,setAge]=useState("");
    const [profile,setProfile]=useState("");
    const [city,setCity]=useState("");
    const [district,setDistrict]=useState("");
    const [contact,setContact]=useState("");
    const [alternatecontact,setAlternateContact]=useState("");
    const [mothername,setMotherName]=useState ("");
    const [fathername,setFatherName]=useState("");
    const [dob,setDob]=useState("");
    const [email,setEmail]=useState("");
    const [gender,setGender]=useState("");
const submitprofile=(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append("email",email);
    formData.append("firstname",firstname);
    formData.append("lastname",lastname);
    formData.append("age",age);
    formData.append("city",city);
    formData.append("address",address);
    formData.append("district",district);
    formData.append("profile",profile);
    formData.append("contact",contact);
    formData.append("alternatecontact",alternatecontact);
    formData.append("mothername",mothername);
    formData.append("fathername",fathername);
    formData.append("dob",dob);
    formData.append("gender",gender);
    const result =  axios.post("http://localhost:3000/profile-update",formData,{
            headers :{ "Content-Type" : "multipart/form-data"}
        });
        navigate("http://localhost:5173/dash")
     
    }
    

    return(<>
    <div className={styles.cont}>
    <form className={styles.container} method="post" onSubmit={submitprofile}>
        <h1 className={styles.head}>Admission Form</h1>
        <span className="sp"><label className={styles.label}>First Name : </label><input  className={styles.input} type="text" name="" id="1" onChange={(e)=>setFirstName(e.target.value)} /></span>
        <span className="sp"><label className={styles.label}>Full Name : </label><input className={styles.input} type="text" name="" id="2" onChange={(e)=>setLastName(e.target.value)} /></span>
        <span className="sp"><label className={styles.label}>Age : </label><input  className={styles.input}type="number" name="" id="3" onChange={(e)=>setAge(e.target.value)} /></span>
        <span className="sp"><label className={styles.label}>contact number: </label><input  className={styles.input}type="number" name="" id="4" onChange={(e)=>setContact(e.target.value)} /></span>
        <span className="sp"><label className={styles.label}>Alternate Contact number: </label><input className={styles.input} type="number" name="" id="1" onChange={(e)=>setAlternateContact(e.target.value)} /></span>
        <span className="sp"><label className={styles.label}>Profile Photo: </label><input className={styles.input} type="file" accept="image/*" name="" id="1" onChange={(e)=>setProfile(e.target.files[0])} /></span>        
        <span className="sp"><label className={styles.label} htmlFor="">Email Address : </label><input className={styles.input} type="email" name="" placeholder="Enter the gmail" onChange={(e)=>setEmail(e.target.value)}/></span>
        <span className="sp"><label className={styles.label} htmlFor="">District : </label><input className={styles.input} type="text" name="" id="6" onChange={(e)=>setDistrict(e.target.value)} /></span>
        <span className="sp"><label className={styles.label} htmlFor="">Address : </label><textarea name="" id="7" onChange={(e)=>setAddress(e.target.value)}></textarea></span>
        <span className="sp"><label className={styles.label} htmlFor="">City : </label><input className={styles.input} type="text" name="" id="8" onChange={(e)=>setCity(e.target.value)} /></span>
        <span className="sp"><label className={styles.label} htmlFor="">Father Name : </label><input className={styles.input} type="text" name="" id="9"onChange={(e)=>setFatherName(e.target.value)} /></span>
        <span className="sp"><label className={styles.label} htmlFor="">Mother Name : </label><input  className={styles.input}type="text" name="" id="10" onChange={(e)=>setMotherName(e.target.value)} /></span>
        <span className="sp"><label className={styles.label} htmlFor="">DOB : </label><input  className={styles.input} type="date" name="" id="11" onChange={(e)=>setDob(e.target.value)} /></span>
        <span className="sp"><label className={styles.label} htmlFor="">Gender: </label><select className={styles.select} name="" id="12" onChange={(e)=>setGender(e.target.value)}>
            <option value="male">male</option>
            <option value="female">female</option>
            </select></span>
    <span><button type="submit" className={styles.btn}>Submit</button></span>
    </form>
    </div>
    </>);
}
export default Profile