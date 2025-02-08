import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setTodos(response.data));
  }, []);

  return (
    <div className="App">
      {todos.map((todo) => (
        <>
          <h3 key={todo.id}>{todo.title}</h3>
          <img src={todo.image} height="150px" />
          <p>{todo.description}</p>
          <p>{todo.category}</p>
          <h4>{todo.price}</h4>

        </>
      ))}
    </div>
  );
}

export default App;
