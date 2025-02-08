import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, updateItem } from '../redux/Reducer';

const Form = ({ currentItem, setCurrentItem }) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentItem) {
      setName(currentItem.name);
    }
  }, [currentItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentItem) {
      dispatch(updateItem({ id: currentItem.id, name }));
      setCurrentItem(null);
    } else {
      dispatch(addItem({ id: Date.now(), name }));
    }
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button type="submit">{currentItem ? 'Update' : 'Add'} Item</button>
    </form>
  );
};

export default Form;
