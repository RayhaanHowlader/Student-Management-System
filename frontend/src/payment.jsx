
import React, { useState } from "react";
import jsPDF from "jspdf";
import styles from "./payment.module.css";

function Payment() {
    const [paymentMethod, setPaymentMethod] = useState("");
    const [upi, setUpi] = useState("");
    const [upiPin, setUpiPin] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cvv, setCvv] = useState("");
    const email = localStorage.getItem("LoggedInUser");

    const handlePayment = () => {
        // Basic validation
        if (
            (paymentMethod === "UPI" && (!upi || !upiPin)) ||
            (paymentMethod === "Card" && (!cardNumber || !cvv))
        ) {
            alert("Please fill in all payment details.");
            return;
        }

        // Generate PDF receipt
        const doc = new jsPDF();
        doc.text("Payment Receipt", 20, 20);
        doc.text(`Email: ${email}`, 20, 40);
        doc.text(`Payment Method: ${paymentMethod}`, 20, 50);
        doc.text(
            paymentMethod === "UPI"
                ? `UPI ID: ${upi}`
                : `Card Number: **** **** **** ${cardNumber.slice(-4)}`,
            20,
            60
        );
        doc.text("Status: Payment Successful", 20, 80);
        doc.save("Payment_Receipt.pdf");

        alert("Payment successful! Receipt has been downloaded.");
    };

    return (
        <>
            <div className={styles.container}>
                
                <div className={styles.payimg}>
                <h1 className={styles.head}>Payment Methods</h1>
                <img src="data:image/png;base64,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" alt="" />
                <img src="data:image/png;base64,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" alt="" />
                
                </div>
                <h2 className="text-white">Payment Page</h2>
                <select className={styles.select}
                    name="paymentMethod"
                    id="paymentMethod"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                >
                    <option value="">Select Payment Method</option>
                    <option value="UPI">UPI</option>
                    <option value="Card">Debit Card</option>
                </select>

                {/* Conditional rendering for UPI */}
                {paymentMethod === "UPI" && (
                    <div className={styles.upi}> 

                    <span>
                        <label htmlFor="upi" className={styles.label}>Enter UPI ID:</label>
                        <input
                         className={styles.input}
                            type="text"
                            id="upi"
                            value={upi}
                            onChange={(e) => setUpi(e.target.value)}
                        />
                        </span>
                        <span>
                        <label htmlFor="upiPin"  className={styles.label}>Enter UPI PIN:</label>
                        <input className={styles.input}
                            type="password"
                            id="upiPin"
                            value={upiPin}
                            onChange={(e) => setUpiPin(e.target.value)}
                        />
                        </span>
                    </div>
                )}

                {/* Conditional rendering for Card */}
                {paymentMethod === "Card" && (
                    <div className={styles.upi}>
                        <label htmlFor="cardNumber">Enter Card Number:</label>
                        <input
                        className={styles.input}
                            type="text"
                            id="cardNumber"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                        />
                        <label htmlFor="cvv" className={styles.label}>Enter CVV:</label>
                        <input
                        className={styles.input}
                            type="password"
                            id="cvv"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                        />
                    </div>
                )}

                <button
                    type="button"
                    className={styles.button}
                    onClick={handlePayment}
                >
                    Pay Now
                </button>
            </div>
        </>
    );
}

export default Payment;
