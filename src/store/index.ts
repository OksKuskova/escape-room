import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createApi } from '../services/api';

const api = createApi();

// const reducer = combineReducers({
//   [offersSlice.name]: offersSlice.reducer,
//   [fullOfferSlice.name]: fullOfferSlice.reducer,
//   [reviewSlice.name]: reviewSlice.reducer,
//   [userSlice.name]: userSlice.reducer,
//   [favoritesSlice.name]: favoritesSlice.reducer,
//   [errorSlice.name]: errorSlice.reducer,
// });

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
