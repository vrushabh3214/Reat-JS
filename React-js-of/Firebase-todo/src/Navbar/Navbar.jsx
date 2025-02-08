// import React from 'react'

import { Link} from "react-router-dom";
import { fireAuth } from "../Page/LogIn";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
  // const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [handleDisabled, setHandleDisabled] = useState(true);
  useEffect(() => {
    onAuthStateChanged(fireAuth, (user) => {
      const isLogin = user ? true : false;
      if (isLogin) {
        setUser(user.displayName);
        setEmail(user.email);
        setHandleDisabled(false);
      }
    });
  }, []);
  const handlesignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        window.location.reload(false)
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
      
  };
  // const disable =
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {handleDisabled && (
                  <Link className="nav-link" to="/login">
                    Log In
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {handleDisabled && (
                  <Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>
                )}
              </li>
            </ul>
            <div>{user ? user : email}</div>
            <button
              type="submit"
              disabled={handleDisabled}
              onClick={handlesignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
