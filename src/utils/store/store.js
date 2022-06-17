import {
  combineReducers,
  configureStore,
  createAction,
  createReducer,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

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
export const emptyForm = createAction("empty/form");

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
    });
});

export const formValuesSelector = (state) => state.employee.formValues;
export const employeesSelector = (state) => state.employee.employees;

export const reducer = combineReducers({
  employee: employeesReducer,
});

const persistConfig = {
  key: "employee",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

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
