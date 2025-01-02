import React, { useState, useEffect } from "react";
import axios from "axios";
const Verify = () => {
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch admin details
    useEffect(() => {
        axios.get("http://localhost:3000/admindetails")
            .then((response) => {
                setDetails(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Error fetching details.");
                console.error(err);
                setLoading(false);
            });
    }, []);

    // Verify a detail
    const verifyDetail = (adhaarNumber) => {
        axios
            .patch(`http://localhost:3000/update-verified/${adhaarNumber}`)
            .then(() => {
                alert("Verified successfully");
                setDetails((prevDetails) =>
                    prevDetails.map((detail) =>
                        detail.adhaarNumber === adhaarNumber
                            ? { ...detail, verified: true }
                            : detail
                    )
                );
            })
            .catch((err) => {
                alert("Error verifying detail");
                console.error(err);
            });
    };

    if (loading) {
        return <p>Loading details...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>Admin Details</h1>
            {details.length === 0 ? (
                <p>No details found.</p>
            ) : (
                <table border="1" style={{ width: "100%", textAlign: "left" }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Age</th>
                            <th>Adhaar Number</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {details.map((detail) => (
                            <tr
                                key={detail.adhaarNumber}
                                style={{
                                    backgroundColor: detail.verified ? "#d4edda" : "transparent",
                                }}
                            >
                                <td>{detail.name}</td>
                                <td>{detail.address}</td>
                                <td>{detail.age}</td>
                                <td>{detail.adhaarNumber}</td>
                                <td>{new Date(detail.date).toLocaleDateString()}</td>
                                <td>
                                    {!detail.verified ? (
                                        <button
                                            onClick={() => verifyDetail(detail.adhaarNumber)}
                                        >
                                            Verify
                                        </button>
                                    ) : (
                                        <span>Verified</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Verify;
