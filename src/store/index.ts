import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contact from "./contact";

const reducers = combineReducers({
  contact,
});

const store = configureStore({
  reducer: reducers,
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
