// import { createSlice } from '@reduxjs/toolkit';
// import { ReservationData } from '../../../type/reservation';
// import { SliceName } from '../../const';
// import { Date } from '../../../const';

// const initialState: ReservationData = {
//   date: Date.today,
//   time: '',
//   contactPerson: '',
//   phone: '',
//   withChildren: false,
//   peopleCount: 0,
//   placeId: '',
// };

// const reservationDataSlice = createSlice({
//   name: SliceName.ReservationData,
//   initialState,
//   reducers: {
//     setData(state, action: PayloadAction<CardOffer['id'] | null>) {
//       state.activeOfferId = action.payload;
//     },
//     resetStatus(state) {
//       state.requestStatus = RequestStatus.Idle;
//     },
//   },
// });

// export const { favoriteOffers, status } = favoritesSlice.selectors;
// export const { resetFavorites, resetStatus } = favoritesSlice.actions;

// export default favoritesSlice;
