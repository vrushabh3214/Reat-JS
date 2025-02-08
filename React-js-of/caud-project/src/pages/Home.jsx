import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [searchTerm, category, sortOrder, currentPage]);

  const fetchProducts = async () => {
    let url = `http://localhost:5000/products?_page=${currentPage}&_limit=5`;

    if (searchTerm) url += `&q=${searchTerm}`;
    if (category) url += `&category=${category}`;
    if (sortOrder) url += `&_sort=price&_order=${sortOrder}`;

    const response = await axios.get(url);
    setProducts(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    fetchProducts();
  };

  const handleEdit = (id) => {
    // Implement edit functionality
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <input type="text" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Category1">Category1</option>
        <option value="Category2">Category2</option>
      </select>
      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="">Sort by</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
      
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => handleEdit(product.id)}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        ))}
      </div>
      
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
      <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
    </div>
  );
};

export default Home;
