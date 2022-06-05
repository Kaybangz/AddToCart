import React, { useState, useEffect } from "react";
import "./styles.css";
import PaystackPop from "@paystack/inline-js";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Paystack = () => {
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(location.state.totalAmount);
  }, [location]);

  const PayWithPaystack = (e) => {
    e.preventDefault();
    const paystackPayment = new PaystackPop();

    paystackPayment.newTransaction({
      key: "pk_test_f8d511667955b1deb976e4e9780dcb84d740dfb5",
      amount: amount * 100,
      email,
      firstName,
      lastName,
      onSuccess(transaction){
          let successMsg = `Payment Successful! Reference number: ${transaction.reference}`
          toast(successMsg);
      },
      onCancel(){
          toast("Transaction canceled");
      }
    });
  };

  return (
    <form className="paystack_form" onSubmit={PayWithPaystack}>
      <div>
        <input
          type="text"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input type="number" value={amount} disabled readOnly />
        <button type="submit">Pay with Paystack</button>
      </div>
    </form>
  );
};

export default Paystack;
