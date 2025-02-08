import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <h2>count is {count}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Add
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
         Mines
        </button>
      </div>
     
    </>
  )
}

export default App
