import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = {
  PENDING: "loading",
  FULFILLED: "success",
  REJECTED: "error",
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    status: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setStatus } = userSlice.actions;

// Logged In User
export const loggedInUser = (state) => state.user.user;
export const getUserStatus = (state) => state.user.status;

export default userSlice.reducer;
