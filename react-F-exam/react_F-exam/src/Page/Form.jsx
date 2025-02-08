import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Form() {
  const [pName, setPName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('mens');
  const [imageUrl, setImageUrl] = useState('');
  
  const location = useLocation();
  const navigate = useNavigate();
  const productToUpdate = location.state?.productToUpdate;

  useEffect(() => {
    if (productToUpdate) {
      setPName(productToUpdate.pName);
      setPrice(productToUpdate.price);
      setCategory(productToUpdate.category);
      setImageUrl(productToUpdate.image); // Set the existing image URL if available
    }
  }, [productToUpdate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const productData = { pName, price, category, image: imageUrl };

    if (productToUpdate) {
      // Update existing product
      const response = await fetch(`http://localhost:3000/data/${productToUpdate.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
      if (response.ok) {
        alert("Product updated successfully");
        navigate("/");
      }
    } else {
      // Add new product
      const response = await fetch("http://localhost:3000/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      if (response.ok) {
        alert("Product added successfully");
        navigate("/");
      }
    }
  };

  return (
    <div className="container mt-5">
      <h1>{productToUpdate ? "Update Product" : "Add Product"}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            value={pName}
            onChange={(e) => setPName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="mens">Mens</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>

        {/* Image URL Input */}
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          {imageUrl && (
            <div className="mt-3">
              <img
                src={imageUrl}
                alt="Preview"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            </div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          {productToUpdate ? "Update Product" : "Add Product"}
        </button>
      </form>
    </div>
  );
}
