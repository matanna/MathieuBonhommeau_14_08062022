import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../utils/store/persistStore";
import CreateEmployee from "./CreateEmployee";
import { ModalProvider } from "../../utils/context/ModalContext";
import userEvent from "@testing-library/user-event";

describe("add a new employee", () => {
  let screen;

  const employee = {
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1975-03-10",
    startDate: "2022-06-13",
    street: "main street",
    city: "Chicago",
    state: "OR",
    zipCode: "40330",
    department: "Engineering",
  };

  beforeEach(() => {
    screen = render(
      <Provider store={store}>
        <ModalProvider>
          <CreateEmployee />
        </ModalProvider>
      </Provider>
    );
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Street/i), {
      target: { value: "main street" },
    });
    fireEvent.change(screen.getByLabelText(/City/i), {
      target: { value: "Chicago" },
    });
    fireEvent.change(screen.getByLabelText(/Zip Code/i), {
      target: { value: "40330" },
    });
    fireEvent.change(screen.getByLabelText(/Date of Birth/i), {
      target: { value: "1975-03-10" },
    });
    fireEvent.change(screen.getByLabelText(/Start Date/i), {
      target: { value: "2022-06-13" },
    });
    userEvent.click(screen.getByText(/Select a state/i));
    userEvent.click(screen.getByText(/Oregon/i));
    userEvent.click(screen.getByText(/Select a department/i));
    userEvent.click(screen.getByText(/Engineering/i));
  });

  afterEach(() => {
    if (screen.queryByText(/Employee Created/i)) {
      fireEvent.click(screen.getByTestId("close"));
    }
  });

  it("should save the new employee in the store", async () => {
    fireEvent.click(screen.getByText(/Save/i));
    await waitFor(() => {
      expect(store.getState().employee.employees[0]).toEqual(employee);
    });
  });

  it("should display a modal with the text 'Employee created' when form datas are ok", () => {
    fireEvent.click(screen.getByText(/Save/i));
    expect(screen.getByText(/Employee Created/i)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("close"));
    expect(screen.queryByText(/Employee Created/i)).not.toBeInTheDocument();
  });

  it("should display an error message when a data is not ok", () => {
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: "D" },
    });
    fireEvent.click(screen.getByText(/Save/i));
    expect(
      screen.getByText("This field must contains at least 3 characters")
    ).toBeInTheDocument();
    // Check if the modal not displayed
    expect(screen.queryByText(/Employee Created/i)).not.toBeInTheDocument();
  });
});
