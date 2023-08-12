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

    updateUser:(state,{payload})=>{
      state.user=payload
    }
  },
});

export const { setUser, clearUser,updateUser } = AuthSlice.actions;
export default AuthSlice.reducer;
