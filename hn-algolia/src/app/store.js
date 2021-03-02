import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import searchReducer from '../features/search/searchSlice';

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

export default configureStore({
  reducer: {
    search: searchReducer,
  },
});
