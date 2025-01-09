import React, { useState } from "react";
import axios from "axios";

function Refill() {
  const [email, setEmail] = useState("");
  const [money, setMoney] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/refillwallet", { email, money })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-6"
        method="post"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-blue-700 text-center">Refill Wallet</h2>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter email address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter the amount"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setMoney(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Refill;