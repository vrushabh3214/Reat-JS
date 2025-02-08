import React, { useEffect, useState } from 'react';


 TodoItem :{
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
function App() {

  const [todos, setTodos] = useState < TodoItem[] > ([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => (response))
      .then((e) => e.json())
      .then((e)=>setTodos(e as TodoItem[]))
  })

  return (
    <div className="App">
      {todos.map((todo)=>(
        <li key={todo.id}>{todo.title}</li>
      ))}
    </div>
  );
}

export default App;
