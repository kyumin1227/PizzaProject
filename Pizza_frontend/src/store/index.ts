import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./Auth";
import userReducer from "./User";

export default configureStore({
  reducer: {
    token: tokenReducer,
    user: userReducer,
  },
});
