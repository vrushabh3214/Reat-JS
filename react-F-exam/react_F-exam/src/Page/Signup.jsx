// import React from 'react'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../Firebase";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fireAuth = getAuth(app);
  const handleSignupUser = (email, password) => {
    createUserWithEmailAndPassword(fireAuth, email, password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  
    await handleSignupUser(email, password);
    console.log(email, password);
    alert("Sign Up successfully.."); 
    setEmail("");
    setPassword("")
  };
  return (
    <div className="container text-center">
      <h1 className="my-5">Sign Up</h1>

      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>


        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}
