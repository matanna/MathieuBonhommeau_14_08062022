import { validate } from "./validate";

describe("validate form datas", () => {
  let datas = {};

  beforeEach(() => {
    datas = {
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: "1971-05-17",
      startDate: "2017-03-16",
      street: "main street",
      city: "Chicago",
      state: "CA",
      zipCode: "745698",
      department: "Engineering",
    };
  });

  it("should return no errors", () => {
    expect(validate(datas).length).toBe(0);
  });

  it.each([["J"], [""]])(
    "Should return an error with this value : '%s' on firstName field",
    (a) => {
      datas.firstName = a;
      const errors = validate(datas);
      expect(Object.keys(errors).length).toBe(1);
      expect(errors.firstName).toBe(
        "This field must contains at least 3 characters"
      );
    }
  );

  it.each([["D"], [""]])(
    "Should return an error with this value '%s' on lastName field",
    (a) => {
      datas.lastName = a;
      const errors = validate(datas);
      expect(Object.keys(errors).length).toBe(1);
      expect(errors.lastName).toBe(
        "This field must contains at least 3 characters"
      );
    }
  );

  it("Should return an error with when dateOfBirth is empty", () => {
    datas.dateOfBirth = "";
    const errors = validate(datas);
    expect(Object.keys(errors).length).toBe(1);
    expect(errors.dateOfBirth).toBe("This field cannot be empty");
  });

  it("Should return an error with when startDate is empty", () => {
    datas.startDate = "";
    const errors = validate(datas);
    expect(Object.keys(errors).length).toBe(1);
    expect(errors.startDate).toBe("This field cannot be empty");
  });

  it.each([["Street"], [""]])(
    "Should return an error with this value : '%s' on street field",
    (a) => {
      datas.street = a;
      const errors = validate(datas);
      expect(Object.keys(errors).length).toBe(1);
      expect(errors.street).toBe(
        "This field must contains at least 10 characters"
      );
    }
  );

  it.each([["C"], [""]])(
    "Should return an error with this value : '%s' on city field",
    (a) => {
      datas.city = a;
      const errors = validate(datas);
      expect(Object.keys(errors).length).toBe(1);
      expect(errors.city).toBe(
        "This field must contains at least 3 characters"
      );
    }
  );

  it("Should return an error when state field is null", () => {
    datas.state = "";
    const errors = validate(datas);
    expect(Object.keys(errors).length).toBe(1);
    expect(errors.state).toBe("You must choose a state");
  });

  it("Should return an error when state doesn't exist", () => {
    datas.state = "ZQ";
    const errors = validate(datas);
    expect(Object.keys(errors).length).toBe(1);
    expect(errors.state).toBe("This state doesn't exist");
  });

  it("Should return an error when zipCode field is empty", () => {
    datas.zipCode = 0;
    const errors = validate(datas);
    expect(Object.keys(errors).length).toBe(1);
    expect(errors.zipCode).toBe("This field must be bigger than 0");
  });

  it("Should return an error when zipCode field is not a number", () => {
    datas.zipCode = "not a number";
    const errors = validate(datas);
    expect(Object.keys(errors).length).toBe(1);
    expect(errors.zipCode).toBe("This field must contains only numeric values");
  });

  it("Should return an error when department field is null", () => {
    datas.department = "";
    const errors = validate(datas);
    expect(Object.keys(errors).length).toBe(1);
    expect(errors.department).toBe("You must choose a department");
  });

  it("Should return an error when department doesn't exist", () => {
    datas.department = "NoExisting";
    const errors = validate(datas);
    expect(Object.keys(errors).length).toBe(1);
    expect(errors.department).toBe("This department doesn't exist");
  });
});
