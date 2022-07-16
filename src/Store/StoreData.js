import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false, isSignIn: false, user: "" };
const LogInslice = createSlice({
  name: "logInInfo",
  initialState,
  reducers: {
    setLogInfo(state, action) {
      state.isLoggedIn = !state.isLoggedIn;
      state.user = action.payload;
    },
    setLogOut(state) {
      state.isLoggedIn = false;
    },
    setIsSignIn(state) {
      state.isSignIn = !state.isSignIn;
    },
  },
});

const store = configureStore({
  reducer: LogInslice.reducer,
});
export default store;
export const LogInsliceActions = LogInslice.actions;
