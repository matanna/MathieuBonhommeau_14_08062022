import {
  addEmployee,
  employeesReducer,
  emptyForm,
  initialState,
  setField,
  validateDatas,
} from "./store";
import { store } from "./persistStore";
import { waitFor } from "@testing-library/react";

const employee = {
  firstName: "John",
  lastName: "Doe",
  dateOfBirth: "1975-03-10",
  startDate: "2022-06-13",
  street: "main street",
  city: "Chicago",
  state: "OR",
  zipCode: "40330",
  department: "Sales",
};

describe("actions tests", () => {
  it("should create an add employee action", () => {
    expect(addEmployee(employee)).toEqual({
      type: "add/employee",
      payload: employee,
    });
  });

  it("should create a set field action", () => {
    expect(setField({ name: "firstName", value: "John" })).toEqual({
      type: "set/field",
      payload: { name: "firstName", value: "John" },
    });
  });

  it("should create a empty form action", () => {
    expect(emptyForm()).toEqual({
      type: "empty/form",
    });
  });

  it("should create a validate datas", () => {
    expect(validateDatas({ firstName: "Error message" })).toEqual({
      type: "validate/datas",
      payload: { firstName: "Error message" },
    });
  });
});

describe("reducer test", () => {
  it("should add a new employee in the state", async () => {
    await waitFor(() => {
      employeesReducer(initialState, addEmployee(employee));
      expect(
        employeesReducer(initialState, addEmployee(employee)).employees[0]
      ).toEqual(employee);
    });
  });

  it("should set a value in a state formValues", async () => {
    await waitFor(() => {
      expect(
        employeesReducer(
          initialState,
          setField({ name: "firstName", value: "Alice" })
        ).formValues.firstName
      ).toEqual("Alice");
    });
  });

  it("should empty form", async () => {
    await waitFor(() => {
      employeesReducer(
        initialState,
        setField({ name: "firstName", value: "Alice" })
      );

      expect(employeesReducer(initialState, emptyForm()).formValues).toEqual(
        initialState.formValues
      );
    });
  });

  it("should validate datas", async () => {
    await waitFor(() => {
      expect(
        employeesReducer(
          initialState,
          validateDatas({ firstName: "An error message" })
        ).formErrors.firstName
      ).toEqual("An error message");
    });
  });
});
