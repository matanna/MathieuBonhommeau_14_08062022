import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store, validateDatas } from "../../utils/store/store";
import { DropdownField } from "../index";
import { sales, states } from "../../utils/dropdownOptions";

describe("dropdown fields", () => {
  it("Should display state dropdown", () => {
    const { getByText } = render(
      <Provider store={store}>
        <DropdownField name="state" label="State" options={states} />
      </Provider>
    );

    const input = getByText(`Select a state`);
    expect(input).toBeInTheDocument();
  });

  it("Should display department dropdown", () => {
    const { getByText, debug } = render(
      <Provider store={store}>
        <DropdownField name="department" label="Department" options={sales} />
      </Provider>
    );

    const input = getByText(`Select a department`);
    expect(input).toBeInTheDocument();
  });

  it.each([
    ["state", "State"],
    ["department", "Department"],
  ])(
    "should display an error message when option choosed is not correct",
    async (name, label) => {
      const { getByText } = render(
        <Provider store={store}>
          <DropdownField
            name={name}
            label={label}
            options={name === "state" ? states : sales}
          />
        </Provider>
      );
      await waitFor(() => {
        store.dispatch(validateDatas({ [name]: "An error message" }));
        expect(getByText("An error message")).toBeInTheDocument();
      });
    }
  );
});
