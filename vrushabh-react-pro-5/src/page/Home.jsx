// import React from 'react';

import { useEffect, useState } from "react";

export default function Home() {

  const [loginUser, setloginUser] = useState([]);



  // get


  const fetchedData = () => {

    fetch("http://localhost:5000/login-users")
      .then((res) => res.json())
      .then((loginUser) => {
        // console.log(loginUser)
        setloginUser(loginUser)
      })
      .catch((err) => { console.log("data not found", err) })

  }


  useEffect(() => {
    fetchedData()
  }, [])




  const handleDelete = (id) => {
    // console.log(id)
    fetch(`http://localhost:5000/login-users/${id}`, {
      method: "DELETE"
    }).then((res) => {
      alert("data is deleted")
      console.log("data deleted successfully", res)
      fetchedData()
    })


  };
  // <div>
  return <div>
    {
      loginUser.map((item) => {
        return <div key={item.id} className="user">
          <h3>Email: {item.email}</h3>
          <p>Password :{item.password}</p>
          
          <button onClick={() => handleDelete(item.id)} >Delete</button>
     
        </div>
      })
    }

  </div>
}

