import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const Reducer = createSlice({
  name: 'crud',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index >= 0) {
        state.items[index] = action.payload;
      }
    },
  },
});

export const { addItem, deleteItem, updateItem } = Reducer.actions;
export default Reducer.reducer;
