import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createApi } from '../services/api';
import questsSlice from './quests/quests';
import fullQuestSlice from './full-quest/full-quest';
import userSlice from './user/user';

const api = createApi();

const reducer = combineReducers({
  [questsSlice.name]: questsSlice.reducer,
  [fullQuestSlice.name]: fullQuestSlice.reducer,
  [userSlice.name]: userSlice.reducer,
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
