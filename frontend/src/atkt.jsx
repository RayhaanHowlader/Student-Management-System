 import React, { useState } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";
import styles from "./atkt.module.css"

function ATKT() {
  const [subjects, setSubjects] = useState([]);
  const [subjectInput, setSubjectInput] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [totalCost, setTotalCost] = useState(0);
  const [showReceipt, setShowReceipt] = useState(false);

  const handleAddSubject = (e) => {
    e.preventDefault();
    if (subjectInput.trim() !== "") {
      setSubjects([...subjects, subjectInput.trim()]);
      setSubjectInput("");
    }
  };

  const handleSubmitToDatabase = async (e) => {
    e.preventDefault();
    const cost = subjects.length * 300;
    setTotalCost(cost);

    if (!rollNumber.trim()) {
      alert("Please enter your Roll Number!");
      return;
    }

    const payload = {
      rollNumber,
      subjects,
      totalCost: cost,
    };

    try {
      const result = await axios.post("http://localhost:3000/kt", payload);
      console.log(result.data);
      alert("Data submitted successfully!");
      setShowReceipt(true);
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting data.");
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("ATKT Receipt", 20, 20);
    doc.setFontSize(12);
    doc.text(`Roll Number: ${rollNumber}`, 20, 30);
    doc.text("Subjects:", 20, 40);
    subjects.forEach((subject, index) => {
      doc.text(`${index + 1}. ${subject}`, 20, 50 + index * 10);
    });
    doc.text(`Total Cost: ₹${totalCost}`, 20, 60 + subjects.length * 10);
    doc.save("receipt.pdf");
  };





  return (
    <div className={styles.container}>
      <h1 className={styles.head}>ATKT Form</h1>
      <form className={styles.form} onSubmit={handleAddSubject}>
        <div className={styles.item}>
          <label htmlFor="rollNumber">Enter your Roll Number: </label>
          <input
            type="text"
            id="rollNumber"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            placeholder="Enter your Roll Number"
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="subjectInput">Enter the subject name: </label>
          <input
            type="text"
            id="subjectInput"
            value={subjectInput}
            onChange={(e) => setSubjectInput(e.target.value)}
            placeholder="Enter the subject"
          />
        </div>
        <button className={styles.add} type="submit">Add Subject</button>
      </form>

      <h2 className={styles.h}>Subjects List</h2>
      <ul className={styles.subs}>
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>

      <button className={styles.submit} type="button" onClick={handleSubmitToDatabase}>
        Submit
      </button>

      {showReceipt && (
        <div className="receipt">
          <h2 className={styles.h}>ATKT Receipt</h2>
          <p><strong>Roll Number:</strong> {rollNumber}</p>
          <p><strong>Subjects:</strong></p>
          <ul className={styles.subs}>
            {subjects.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
          <p><strong>Total Cost:</strong> ₹{totalCost}</p>
          <button className={styles.pdf} onClick={generatePDF}>Download Receipt as PDF</button>
        </div>
      )}
    </div>
  );
}

export default ATKT;
