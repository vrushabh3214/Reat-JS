// import React from 'react';

import { useEffect, useState } from "react";

export default function Home() {

  const [studentData, setStudentData] = useState([]);
  


  // get


  const fetchedData = () => {

    fetch("http://localhost:5000/login-users")
      .then((res) => res.json())
      .then((studentData) => {
        console.log(studentData)
        setStudentData(studentData)
      })
      .catch((err) => { console.log("data not found",err) })

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
    {
      studentData.map((item) => {
        return <div key={item.id}>
          {/* <p>id:{item.id}</p> */}
          <h3>Email: {item.email}</h3>
          <p>Password :{item.password}</p>
          {/* <p>Marrid: {item.isMarried ? "Married" : "Unmarried"}</p> */}
          <br />
          <button onClick={() => handleDelete(item.id)} >Delete</button>



        </div>
      })
    }
  // </div>
}

