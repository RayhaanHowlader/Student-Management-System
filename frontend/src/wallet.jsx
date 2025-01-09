import React, { useEffect, useState } from "react";
import axios from "axios";

function Wallet() {
  const [walletDetails, setWalletDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch wallet data from API
    axios.get("http://localhost:3000/wallet") 
      .then((response) => {
        setWalletDetails(response.data);  // Set the wallet data into the state
        setLoading(false);  
      })
      .catch((err) => {
        setError("Error fetching wallet details");
        setLoading(false);  // Set loading to false if there's an error
      });

      console.log(walletDetails);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Wallet Details</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Money</th>
          </tr>
        </thead>
        <tbody>
          {walletDetails.map((wallet, index) => (
            <tr key={index}>
              <td>{wallet.email}</td>
              <td>{wallet.money}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Wallet;
