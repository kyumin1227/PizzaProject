// access token 저장소

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const TOKEN_TIME_OUT = 600 * 1000; // 토큰 유효 시간 10분

interface IAuthState {
  accessToken: string | null;
  expireTime: number | null;
  isLogin: boolean;
}

type SetAccessTokenType = {
  accessToken: string;
};

export const tokenSlice = createSlice({
  name: "authToken",
  initialState: {
    accessToken: null,
    expireTime: null,
    isLogin: false,
  } as IAuthState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<SetAccessTokenType>) => {
      state.accessToken = action.payload.accessToken;
      state.expireTime = new Date().getTime() + TOKEN_TIME_OUT;
      state.isLogin = true;
    },
    deleteAccessToken: (state) => {
      state.accessToken = null;
      state.expireTime = null;
      state.isLogin = false;
    },
  },
});

export const { setAccessToken, deleteAccessToken } = tokenSlice.actions;

export default tokenSlice.reducer;
