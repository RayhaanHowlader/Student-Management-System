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
        return <p className="text-center text-xl font-bold ">Loading details...</p>;
    }

    if (error) {
        return <p className="text-center text-xl font-bold text-red-500">{error}</p>;
    }

    return (
        <div className="container mx-auto px-4 py-8 font-serif">
            <h1 className="text-3xl font-bold text-center mb-4">Admin Details</h1>
            <h3 className="text-2xl font-bold text-center mb-0">Admission's Verification</h3>
            {details.length === 0 ? (
                <p className="text-center text-xl font-bold">No details found.</p>
            ) : (
                <div className="overflow-x-auto">
                <table  className="w-full shadow-md rounded-lg border border-collapse border-gray-300 overflow-hidden ">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="text-left px-4 py-3">Name</th>
                            <th className="text-left px-4 py-3">Address</th>
                            <th className="text-left px-4 py-3">Age</th>
                            <th className="text-left px-4 py-3">Adhaar Number</th>
                            <th className="text-left px-4 py-3">Date</th>
                            <th className="text-left px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {details.map((detail) => (
                            <tr
                                key={detail.adhaarNumber}
                                className={` border-b border-gray-200 text-sm sm:text-base ${
                                    detail.verified ? "bg-blue-100" : "bg-white"
                                  }`}
                            >
                                <td className="px-4 py-3">{detail.name}</td>
                                <td className="px-4 py-3">{detail.address}</td>
                                <td className="px-4 py-3">{detail.age}</td>
                                <td className="px-4 py-3">{detail.adhaarNumber}</td>
                                <td className="px-4 py-3">{new Date(detail.date).toLocaleDateString()}</td>
                                <td className="px-4 py-3">
                                    {!detail.verified ? (
                                        <button
                                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 focus:outline-none"
                                            onClick={() => verifyDetail(detail.adhaarNumber)}
                                        >
                                            Verify
                                        </button>
                                    ) : (
                                        <span className="text-green-500 font-bold">Verified</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            )}
        </div>
    );
};

export default Verify;
