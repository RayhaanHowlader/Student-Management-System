import React, { useState } from "react";
import axios from "axios";

function ATKT() {
  // State to store the subject names, roll number, and total cost
  const [subjects, setSubjects] = useState([]);
  const [subjectInput, setSubjectInput] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [totalCost, setTotalCost] = useState(0);

  // Handle adding a subject
  const handleAddSubject = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (subjectInput.trim() !== "") {
      setSubjects([...subjects, subjectInput.trim()]); // Add the new subject to the array
      setSubjectInput(""); // Clear the input field
    }
  };

  // Handle final form submission to the database
  const handleSubmitToDatabase = async () => {
    // Calculate total cost (300 per subject)
    const cost = subjects.length * 300;
    setTotalCost(cost);

    if (!rollNumber.trim()) {
      alert("Please enter your Roll Number!");
      return;
    }

    // Create data to send to the server
    const payload = {
      rollNumber,
      subjects,
      totalCost: cost,
    };

    try {
      const result = await axios.post("http://localhost:3000/kt", payload);
      console.log(result.data);
      alert("Data submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting data.");
    }
  };

  return (
    <div>
      <h1>Subject Entry Form</h1>
      <form method="post" onSubmit={handleSubmitToDatabase}>
        <div>
          <label htmlFor="rollNumber">Enter your Roll Number: </label>
          <input
            type="text"
            id="rollNumber"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            placeholder="Enter your Roll Number"
          />
        </div>
        <div>
          <label htmlFor="subjectInput">Enter the subject name: </label>
          <input
            type="text"
            id="subjectInput"
            value={subjectInput}
            onChange={(e) => setSubjectInput(e.target.value)}
            placeholder="Enter the subject"
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <h2>Subjects List</h2>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddSubject}>
        add
      </button>

      {totalCost > 0 && (
        <div>
          <h3>Total Cost: ₹{totalCost}</h3>
        </div>
      )}
    </div>
  );
}

export default ATKT;
