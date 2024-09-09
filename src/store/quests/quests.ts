import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShortQuest } from '../../type/quest';
import { RequestStatus, SliceName } from '../const';
import { fetchQuests } from './quests-thunk';
import { State } from '../type';
import { GENRE_FILTER_DEFAULT, LEVEL_FILTER_DEFAULT } from '../../const';

type QuestsState = {
	quests: ShortQuest[];
	genreFilter: string;
	levelFilter: string;
	requestStatus: RequestStatus;
}

const initialState: QuestsState = {
	quests: [],
	genreFilter: GENRE_FILTER_DEFAULT,
	levelFilter: LEVEL_FILTER_DEFAULT,
	requestStatus: RequestStatus.Idle,
};

const questsSlice = createSlice({
	name: SliceName.Quests,
	initialState,
	reducers: {
		setGenreFilter(state, action: PayloadAction<string>) {
			state.genreFilter = action.payload;
		},
		setLevelFilter(state, action: PayloadAction<string>) {
			state.levelFilter = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchQuests.pending, (state) => {
				state.requestStatus = RequestStatus.Loading;
			})
			.addCase(fetchQuests.fulfilled, (state, action) => {
				state.requestStatus = RequestStatus.Success;
				state.quests = action.payload;
			})
			.addCase(fetchQuests.rejected, (state) => {
				state.requestStatus = RequestStatus.Failed;
			});
	},
	// selectors: {
	//   allQuests: (state: QuestsState) => state.quests,
	//   status: (state: QuestsState) => state.requestStatus,
	// }
});

export const { setGenreFilter, setLevelFilter } = questsSlice.actions;

export const getQuests = (state: State) => state[SliceName.Quests].quests;
export const getGenreFilter = (state: State) => state[SliceName.Quests].genreFilter;
export const getLevelFilter = (state: State) => state[SliceName.Quests].levelFilter;
export const getStatus = (state: State) => state[SliceName.Quests].requestStatus;

// export const { allQuests } = questsSlice.selectors;
export default questsSlice;
