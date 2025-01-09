import React, { useEffect, useState } from "react";
import axios from "axios";

function Wallet() {
  const [walletDetails, setWalletDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch wallet data from API
    axios
      .get("http://localhost:3000/wallet")
      .then((response) => {
        setWalletDetails(response.data); // Set the wallet data into the state
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching wallet details");
        setLoading(false); // Set loading to false if there's an error
      });
  }, []);

  if (loading) {
    return <div className="text-center text-lg text-blue-500 mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">Wallet Details</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Money</th>
            </tr>
          </thead>
          <tbody>
            {walletDetails.map((wallet, index) => (
              <tr
                key={index}
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-blue-50`}
              >
                <td className="py-3 px-6">{wallet.email}</td>
                <td className="py-3 px-6">{wallet.money}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Wallet;