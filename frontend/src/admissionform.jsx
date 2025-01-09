import styles from './admission.module.css'
import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Admission() {
    const courseFees = {
        "Bsc.cs": 50000, 
        "Bsc.IT": 60000, // Fee for BSc.IT
    };

    const formData = new FormData();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [date, setDate] = useState("");
    const [adhaarnumber, setAdhaarNumber] = useState("");
    const [address, setAddress] = useState("");
    const [adhaar, setAdhaar] = useState("");
    const [twelve, setTwelve] = useState("");
    const [course, setCourse] = useState("");
    const [eleventh, setEleventh] = useState("");

    const submitImage = (e) => {
        e.preventDefault();

        formData.append("course", course);
        formData.append("name", name);
        formData.append("age", age);
        formData.append("adhaarNumber", adhaarnumber);
        formData.append("address", address);
        formData.append("date", date);
        formData.append("adhaar", adhaar);
        formData.append("twelve", twelve);
        formData.append("eleventh", eleventh);

        const fee = courseFees[course];
        formData.append("fee", fee);
        const result =  axios.post("http://localhost:3000/upload-files",formData,{
            headers :{ "Content-Type" : "multipart/form-data"}
        });
        
        console.log(result);
        navigate("/payment")
    }
        
    

    return (
        <>
            <div className={styles.container}>
                <form method="post" onSubmit={submitImage}>
                    <h1 className={styles.head}>Admission form</h1>
                    <span>
                        <label htmlFor="" className={styles.label}>Enter Your Name: </label>
                        <input type="text" className={styles.input}onChange={(e) => setName(e.target.value)} />
                    </span>
                    <span>
                        <label htmlFor=""  className={styles.label}>Enter Your Age:</label>
                        <input type="number"className={styles.input} onChange={(e) => setAge(e.target.value)} />
                    </span>
                    <span>
                        <label htmlFor="" className={styles.label}>Enter Your DOB:</label>
                        <input type="date"className={styles.input} onChange={(e) => setDate(e.target.value)} />
                    </span>
                    <span>
                        <label htmlFor="" className={styles.label}>Enter Your Aadhaar number:</label>
                        <input type="number"className={styles.input} onChange={(e) => setAdhaarNumber(e.target.value)} />
                    </span>
                    <span>
                        <label htmlFor="" className={styles.label}>Enter Your Address:</label>
                        <textarea onChange={(e) => setAddress(e.target.value)}></textarea>
                    </span>
                    <span>
                        <label htmlFor="" className={styles.label}>Upload Your 10th Marksheet</label>
                        <input type="file"className={styles.input} accept="application/pdf" onChange={(e) => setEleventh(e.target.files[0])} />
                    </span>
                    <span>
                        <label htmlFor="" className={styles.label}>Upload Your 12th Marksheet</label>
                        <input type="file"className={styles.input} accept="application/pdf" onChange={(e) => setTwelve(e.target.files[0])} />
                    </span>
                    <span>
                        <label htmlFor="" className={styles.label}>Upload Aadhaar card</label>
                        <input type="file"className={styles.input} accept="application/pdf" onChange={(e) => setAdhaar(e.target.files[0])} />
                    </span>
                    <span>
                        <label htmlFor="" className={styles.label}>Select course</label>
                        <select onChange={(e) => setCourse(e.target.value)}>
                            <option value="Bsc.cs">Bsc.cs</option>
                            <option value="Bsc.IT">Bsc.IT</option>
                        </select>
                    </span>

                    {/* Display course fee if a course is selected */}
                    {course && (
                        <p>
                            Fees for {course}: ₹{courseFees[course]}
                        </p>
                    )}

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Admission;
