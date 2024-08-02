import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setTodos(response.data))

  }, [])

  return (
    <div className="App">
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </div>
  );
}

export default App;


