/* eslint-disable react-refresh/only-export-components */
import {
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "firebase/auth";
import { app } from "../Firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const fireAuth = getAuth(app);

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  // TrafficLight
  const handleLogInUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(fireAuth, email, password);
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Failed to log in. Please check your credentials.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogInUser(email, password);
    // console.log(email, password);
    alert("log in successfully..");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    onAuthStateChanged(fireAuth, (user) => {
      if (user) {
        navigate("/");
      }
      // console.log(user);
    });
  }, [navigate]);

  const loginWithGoogie = () => {
    signInWithPopup(fireAuth, googleProvider);
    alert("log in successfully..");
  };

  return (
    <div className="container text-center">
      <h1 className="my-5">LogIn</h1>

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
          Log In
        </button>
        <br />
        <button
          type="button"  // Change this to avoid form submission
          className="btn btn-danger my-4"
          onClick={loginWithGoogie}
        >
          Log In with Google
        </button>
      </form>
    </div>
  );
}

