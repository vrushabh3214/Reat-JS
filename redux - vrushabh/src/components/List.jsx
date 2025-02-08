import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../redux/Reducer';

const List = ({ onEdit }) => {
  const items = useSelector((state) => state.crud.items);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <button onClick={() => onEdit(item)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default List;
