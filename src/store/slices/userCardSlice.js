import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    firstName: "Test",
    lastName: "Testovych",
    isFavourite: true,
  },
};

const SLICE_NAME = "card";

const userCardSlice = createSlice({
  initialState,
  name: SLICE_NAME,
  reducers: {
    toggleFavourite: (state) => {
      state.user.isFavourite = !state.user.isFavourite;
    },
  },
});

const { reducer, actions } = userCardSlice;
export const { toggleFavourite } = actions;
export default reducer;
