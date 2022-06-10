import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

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
};

export const addEmployee = createAction("add/employee");
export const setField = createAction("set/field");

export const employeesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addEmployee, (state, action) => {
      state.employees.push(action.payload);
    })
    .addCase(setField, (state, action) => {
      state.formValues[action.payload.name] = action.payload.value;
    });
});

export const store = configureStore({
  reducer: {
    employee: employeesReducer,
  },
});
