import {configureStore} from '@reduxjs/toolkit';
import signInDataslice from './reducers/signInDataSlice';

const store = configureStore({
  reducer: signInDataslice.reducer,
});

export default store;
