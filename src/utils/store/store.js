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
import { persistReducer } from "redux-persist";

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

// Config for redux-persist
const persistConfig = {
  key: "employee",
  storage,
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
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});
