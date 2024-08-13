import { configureStore } from "@reduxjs/toolkit";
import userCardReducer from "./slices/userCardSlice";

const store = configureStore({
  reducer: {
    cardUser: userCardReducer,
  },
});

export default store;
