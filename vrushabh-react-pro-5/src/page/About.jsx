// import React from 'react';

import { useEffect, useState } from "react";

export default function About() {

  const [signupUser, setsignupUser] = useState([]);



  // get


  const fetchedData = () => {

    fetch("http://localhost:5000/signup-users")
      .then((res) => res.json())
      .then((signupUser) => {
        setsignupUser(signupUser)
      })
      .catch((err) => { console.log("data not found", err) })

  }


  useEffect(() => {
    fetchedData()
  }, [])




  const handleDelete = (id) => {
    fetch(`http://localhost:5000/signup-users/${id}`, {
      method: "DELETE"
    }).then((res) => {
      alert("data is deleted")
      console.log("data deleted successfully", res)
      fetchedData()
    })


  };


  return <div>
    {
      signupUser.map((item) => {
        return <div key={item.id} className="user">
          <h3>Email: {item.email}</h3>
          <p>Password :{item.password}</p>
          <br />
          <button onClick={() => handleDelete(item.id)} >Delete</button>



        </div>
      })
    }

  </div>
}

