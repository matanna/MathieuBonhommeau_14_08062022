import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { validateDatas } from "../../utils/store/store";
import { TextField } from "../index";
import { store } from "../../utils/store/persistStore";

describe("text fields", () => {
  it("Should display firstName input", () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <TextField name="lastName" label="First Name" type="text" />
      </Provider>
    );
    const input = getByLabelText("First Name");
    expect(input).toBeInTheDocument();
  });

  it("Should display lastName input", () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <TextField name="lastName" label="Last Name" type="text" />
      </Provider>
    );
    const input = getByLabelText("Last Name");
    expect(input).toBeInTheDocument();
  });

  it("Should display street input", () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <TextField name="street" label="Street" type="text" />
      </Provider>
    );
    const input = getByLabelText("Street");
    expect(input).toBeInTheDocument();
  });

  it("Should display city input", () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <TextField name="city" label="City" type="text" />
      </Provider>
    );
    const input = getByLabelText("City");
    expect(input).toBeInTheDocument();
  });

  it("Should display zip code input", () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <TextField name="zipCode" label="Zip Code" type="number" />
      </Provider>
    );
    const input = getByLabelText("Zip Code");
    expect(input).toBeInTheDocument();
  });

  it.each([
    ["firstName", "First Name", "text"],
    ["lastName", "Last Name", "text"],
    ["street", "Street", "text"],
    ["city", "City", "text"],
    ["zipCode", "Zip Code", "number"],
  ])(
    "Should display an error message when value is not correct",
    async (name, label, type) => {
      const { getByText } = render(
        <Provider store={store}>
          <TextField name={name} label={label} type={type} />
        </Provider>
      );
      await waitFor(() => {
        store.dispatch(validateDatas({ [name]: "An error message" }));
        expect(getByText("An error message")).toBeInTheDocument();
      });
    }
  );
});
