import React, { useState } from "react";

function ATKT() {
  // State to store the subject names
  const [subjects, setSubjects] = useState([]);
  const [subjectInput, setSubjectInput] = useState("");

  // Handle the form submission
  const handleAddSubject = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (subjectInput.trim() !== "") {
      setSubjects([...subjects, subjectInput.trim()]); // Add the new subject to the array
      setSubjectInput(""); // Clear the input field
    }
  };

  return (
    <div>
      <h1>Subject Entry Form</h1>
      <form onSubmit={handleAddSubject}>
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
        <button type="submit">Add Subject</button>
      </form>

      <h2>Subjects List</h2>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  );
}

export default ATKT;