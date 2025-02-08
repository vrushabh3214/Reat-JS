import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css'

function App() {
  const [currentItem, setCurrentItem] = useState(null);

  const handleEdit = (item) => {
    setCurrentItem(item);
  };

  return (
    <>
       <h1>CRUD App with Redux</h1>
      <Form currentItem={currentItem} setCurrentItem={setCurrentItem} />
      <List onEdit={handleEdit} />
    </>
  )
}

export default App


