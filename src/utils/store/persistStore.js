// Transformer for rehydrate datas from local Storage but limit number of lines. We have always 10 entries when reload the application
import { createTransform, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./store";

const transform = createTransform(
  (state, key) => {
    return {
      ...state,
    };
  },
  (state, key) => {
    return {
      ...state,
      employees: state.employees?.slice(0, 9),
    };
  },
  { employees: ["employeesReducer"] }
);

// Config for redux-persist
const persistConfig = {
  key: "employee",
  storage,
  transforms: [transform],
};

// Adapt reducer for redux-persist
const persistedReducer = persistReducer(persistConfig, reducer);

// Store with final reducer and config for adapt it in terms of environment
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});
