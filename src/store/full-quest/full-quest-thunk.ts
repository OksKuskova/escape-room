import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../const';
import { Quest } from '../../type/quest';

export const fetchFullQuest = createAsyncThunk<Quest, Quest['id'], {extra: AxiosInstance}>(
  'full-quest/fetchFullQuest',
  async (questId, { extra: api }) => {
    const { data } = await api.get<Quest>(`${ApiRoute.Quest}/${questId}`);
    return data;
  },
);
