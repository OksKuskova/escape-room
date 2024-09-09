import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createApi } from '../services/api';
import questsSlice from './quests/quests';

const api = createApi();

const reducer = combineReducers({
  [questsSlice.name]: questsSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
