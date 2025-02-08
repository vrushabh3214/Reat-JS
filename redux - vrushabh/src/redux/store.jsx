import { configureStore } from '@reduxjs/toolkit';
import crudReducer from './Reducer';

const store = configureStore({
  reducer: {
    crud: crudReducer,
  },
});

export default store;
