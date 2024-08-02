import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the type for the fetched data
interface TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const ApiComponent: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    // Fetch data using Axios
    axios.get<TodoItem[]>('https://jsonplaceholder.typicode.com/todos')
      .then((response) => setTodos(response.data));
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiComponent;
