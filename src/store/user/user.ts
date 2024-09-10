import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestStatus, SliceName } from '../const';
import { AuthorizationStatus } from '../../const';
import { State } from '../type';
import { User } from '../../type/user';
import { checkAuth, login, logout } from './user-thunk';

export type UserState = {
  info: null | User;
  status: AuthorizationStatus;
  requestStatus: RequestStatus;
};

const initialState: UserState = {
  info: null,
  status: AuthorizationStatus.Unknown,
  requestStatus: RequestStatus.Idle,
};

const userSlice = createSlice({
  name: SliceName.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuth.pending, (state: UserState) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(checkAuth.fulfilled, (state: UserState, action: PayloadAction<User>) => {
        state.requestStatus = RequestStatus.Success;
        state.info = action.payload;
        state.status = AuthorizationStatus.Auth;
      })
      .addCase(checkAuth.rejected, (state: UserState) => {
        state.requestStatus = RequestStatus.Failed;
        state.status = AuthorizationStatus.NoAuth;
      })

      .addCase(login.pending, (state: UserState) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(login.fulfilled, (state: UserState, action: PayloadAction<User>) => {
        state.requestStatus = RequestStatus.Success;
        state.info = action.payload;
        state.status = AuthorizationStatus.Auth;
      })
      .addCase(login.rejected, (state: UserState) => {
        state.requestStatus = RequestStatus.Failed;
        state.status = AuthorizationStatus.NoAuth;
      })

      .addCase(logout.fulfilled, (state) => {
        state.status = AuthorizationStatus.NoAuth;
      });
  },
  // selectors: {
  //   userInfo: (state: UserState) => state.info,
  //   authorizationStatus: (state: UserState) => state.status,
  //   requestStatus: (state: UserState) => state.requestStatus,
  // }
});

export const getUserInfo = (state: State) => state[SliceName.User].info;
export const getAuthorizationStatus = (state: State) => state[SliceName.User].status;
// export const { userInfo, authorizationStatus, requestStatus } = userSlice.selectors;
export default userSlice;
