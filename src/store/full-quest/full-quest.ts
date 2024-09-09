import { createSlice } from '@reduxjs/toolkit';
import { Quest } from '../../type/quest';
import { RequestStatus, SliceName } from '../const';
import { fetchFullQuest } from './full-quest-thunk';
import { State } from '../type';

type FullQuestState = {
 fullQuest: Quest | null;
 requestStatus: RequestStatus;
}

const initialState: FullQuestState = {
  fullQuest: null,
  requestStatus: RequestStatus.Idle,
};

const fullQuestSlice = createSlice({
  name: SliceName.FullQuest,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFullQuest.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchFullQuest.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Success;
        state.fullQuest = action.payload;
      })
      .addCase(fetchFullQuest.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      });
  },
  // selectors: {
  //   fullQuests: (state: FullQuestState) => state.fullQuest,
  //   status: (state: FullQuestState) => state.requestStatus,
  // }
});

export const getQuest = (state: State) => state[SliceName.FullQuest].fullQuest;
export const getStatus = (state: State) => state[SliceName.FullQuest].requestStatus;

// export const { fullQuests, status } = fullQuestSlice.selectors;
export default fullQuestSlice;
