// import React from 'react'
import { Link } from "react-router-dom";

export default function Navbae() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
