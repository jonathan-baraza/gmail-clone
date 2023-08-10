import { createSlice } from "@reduxjs/toolkit";

const initialState: SetAuthUser = {
  user: null,
  isAuthenticated: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }: { payload: SetAuthUser }) => {
      state.isAuthenticated = payload.isAuthenticated;
      state.user = payload.user;
    },

    clearUser: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
     
    },
  },
});

export const { setUser, clearUser } = AuthSlice.actions;
export default AuthSlice.reducer;
