import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SliceState {
  name: string;
  isLoggedIn: boolean;
  authToken: string;
}

const initialState: SliceState = {
  isLoggedIn: false,
  name: "",
  authToken: "",
};

const slice = createSlice({
  name: "auth.data",
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<SliceState>) {
      console.log(action.payload);
      const { name, isLoggedIn, authToken } = action.payload;
      state.name = name;
      state.isLoggedIn = isLoggedIn;
      state.authToken = authToken;
    },
  },
});

export default slice.reducer;
export const { setAuthData } = slice.actions;
