import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../const';
import { ShortQuest } from '../../type/quest';

export const fetchQuests = createAsyncThunk<ShortQuest[], undefined, {extra: AxiosInstance}>(
  'quests/fetchQuests',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<ShortQuest[]>(ApiRoute.Quest);
    return data;
  },
);
