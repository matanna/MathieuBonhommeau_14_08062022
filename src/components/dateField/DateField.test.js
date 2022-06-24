import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { DateField } from "../index";
import { validateDatas } from "../../utils/store/store";
import { store } from "../../utils/store/persistStore";

describe("date fields", () => {
  it("Should display stratDate input", () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <DateField name="startDate" label="Start Date" />
      </Provider>
    );
    const input = getByLabelText("Start Date");
    expect(input).toBeInTheDocument();
  });

  it("Should display dayOfBirth input", () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <DateField name="dayOfBirth" label="Day of birth" />
      </Provider>
    );
    const input = getByLabelText("Day of birth");
    expect(input).toBeInTheDocument();
  });

  it.each([
    ["startDate", "Start Date"],
    ["dateOfBirth", "Date of Birth"],
  ])("Should display an error message when value is not ok", (name, label) => {
    const { getByText } = render(
      <Provider store={store}>
        <DateField name={name} label={label} />
      </Provider>
    );

    waitFor(async () => {
      await store.dispatch(validateDatas({ [name]: "An error message" }));
      expect(getByText("An error message")).toBeInTheDocument();
    });
  });

  it.each([
    ["startDate", "Start Date"],
    ["dateOfBirth", "Date of Birth"],
  ])("The format displayed in field is YYYY-MM-DD", (name, label) => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <DateField name={name} label={label} />
      </Provider>
    );
    fireEvent.change(getByLabelText(label), {
      target: { value: new Date("2022-05-23").toISOString() },
    });
    expect(getByLabelText(label).value).toBe("2022-05-23");
  });
});
