/**
 * This file contains all the logic for use redux store
 */

import {
  combineReducers,
  configureStore,
  createAction,
  createReducer,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { createTransform, persistReducer } from "redux-persist";
import { REHYDRATE } from "redux-persist/es/constants";

// Initial state when the application start
const initialState = {
  employees: [],
  formValues: {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: 0,
    department: "",
  },
  formErrors: [],
};

// Actions creators
export const addEmployee = createAction("add/employee");
export const setField = createAction("set/field");
export const emptyForm = createAction("empty/form");
export const validateDatas = createAction("validate/datas");

// Reducer
export const employeesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addEmployee, (state, action) => {
      state.employees.push(action.payload);
    })
    .addCase(setField, (state, action) => {
      state.formValues[action.payload.name] = action.payload.value;
    })
    .addCase(emptyForm, (state) => {
      state.formValues = initialState.formValues;
      state.formErrors = [];
    })
    .addCase(validateDatas, (state, action) => {
      state.formErrors = action.payload;
    });
});

// Selectors
export const formValuesSelector = (state) => state.employee.formValues;
export const employeesSelector = (state) => state.employee.employees;
export const errorsSelector = (state) => state.employee.formErrors;

// Final reducer
export const reducer = combineReducers({
  employee: employeesReducer,
});

// Transformer for rehydrate datas from local Storage but limit number of lines. We have always 10 entries when reload the application
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
