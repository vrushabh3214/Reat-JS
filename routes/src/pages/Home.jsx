// import{ useEffect, useState } from 'react'
// import Card from "./Card";

// export default function Home() {

//   const [fuitesData, setFruitesData] = useState([]);

//   // console.log('fruitsdat', fuitesData)

//   useEffect(() => {

//     // get request
//     fetch("http://localhost:8000/vegies")
//       .then((res) => res.json())  // promise res. rej
//       .then((data) => {
//         console.log(data)

//         setFruitesData(data)

//       })
//       .catch((eroor) => {
//         console.log("kuch to gadbad hai",eroor)
//       })

//   }, [])

//   return (
//     <div>

//       <div>
//         {
//           fuitesData.map((item) => <Card {...item} key={item.id} />)
//         }
//       </div>

//     </div>
//   )
// }

import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const itemsPerPage = 5;

  useEffect(() => {
    // Fetch data from JSON server
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    // Filter and sort data based on search, category, and sort criteria
    let filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedCategory ? item.category === selectedCategory : true)
    );

    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredData(filtered);
  }, [data, searchQuery, selectedCategory, sortOrder]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div>
      <h1>Home Page</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Category Filter */}
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        {/* Add more categories */}
      </select>

      {/* Sort by Price */}
      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="">Sort by Price</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>

      {/* Data Display */}
      <ul>
        {currentItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
