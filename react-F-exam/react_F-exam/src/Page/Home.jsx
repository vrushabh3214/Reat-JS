import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [product, setProduct] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const itemsPerPage = 5;

  const navigate = useNavigate();

  // Fetch data from server
  const fetchedData = () => {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((Product) => {
        setProduct(Product);
      })
      .catch((err) => {
        console.log("Data not found", err);
      });
  };

  useEffect(() => {
    fetchedData();
  }, []);

  // Filter, search, and sort logic
  useEffect(() => {
    let filtered = product.filter(
      (item) =>
        item.pName.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedCategory ? item.category === selectedCategory : true)
    );

    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredData(filtered);
  }, [product, searchQuery, selectedCategory, sortOrder]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Delete Product Function
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      await fetch(`http://localhost:3000/data/${id}`, {
        method: "DELETE",
      });
      // After deletion, fetch data again
      fetchedData();
    }
  };

  // Navigate to Update Form
  const handleUpdate = (item) => {
    navigate("/form", { state: { productToUpdate: item } });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Home Page</h1>

      <div className="row">
        {/* Search Input */}
        <div className=" col-md-4 mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <div className=" col-md-4 mb-4">
          <select
            className="form-select"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="mens">Mens</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>

        {/* Sort by Price */}
        <div className="col-md-4 mb-4">
          <select
            className="form-select "
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort by Price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Display */}
      <div className="row">
        {currentItems.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={item.image}
                alt={item.pName}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.pName}</h5>
                <p className="card-text">
                  Price: ₹{item.price}
                  <br />
                  Category: {item.category}
                </p>
                {/* Update and Delete Buttons */}
                <button
                  className="btn btn-primary me-2"
                  onClick={() => handleUpdate(item)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav>
        <ul className="pagination justify-content-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index + 1}
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
