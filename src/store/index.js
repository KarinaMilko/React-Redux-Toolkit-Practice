import { configureStore } from "@reduxjs/toolkit";
// import userCardReducer from "./slices/userCardSlice";
import todoReducer from "./slices/todoSlice";
import usersReducer from "./slices/usersSlice";

const store = configureStore({
  reducer: {
    // cardUser: userCardReducer,
    todo: todoReducer,
    user: usersReducer,
  },
});

export default store;
