import { useState, useEffect } from "react";

function WalletUser() {
  const email = localStorage.getItem("LoggedInUser");
  const [walletBalance, setWalletBalance] = useState(null);
  const [error, setError] = useState("");

  const fetchUserProfile = async () => {
    if (email) {
      try {
        const response = await fetch(`http://localhost:3000/wallet/${email}`);
        if (response.ok) {
          const data = await response.json();
          setWalletBalance(data.money); // Assuming money contains the wallet balance
        } else {
          setError("Failed to fetch wallet information.");
          console.error("Failed to fetch wallet:", response.status);
        }
      } catch (err) {
        setError("Error fetching wallet data.");
        console.error("Error fetching wallet:", err);
      }
    } else {
      setError("No user email found in localStorage.");
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white px-4">
      <div className="bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Wallet Information
        </h1>

        {error ? (
          <div className="text-red-500 text-center mb-4">{error}</div>
        ) : walletBalance !== null ? (
          <div className="text-center">
            <p className="text-xl font-semibold mb-2">
              Hello, <span className="text-yellow-500">{email}</span>
            </p>
            <p className="text-lg">
              Your current wallet balance is:
              <span className="text-green-500 font-bold"> ${walletBalance}</span>
            </p>
          </div>
        ) : (
          <div className="text-center text-gray-400">Loading wallet data...</div>
        )}
      </div>
    </div>
  );
}

export default WalletUser;