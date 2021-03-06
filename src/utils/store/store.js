/**
 * This file contains all the logic for use redux store
 */

import { combineReducers, createAction, createReducer } from "@reduxjs/toolkit";

// Initial state when the application start
export const initialState = {
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
