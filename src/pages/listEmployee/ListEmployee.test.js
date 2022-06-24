import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { addEmployee, store } from "../../utils/store/store";
import { ListEmployee } from "../index";
import { Table } from "react-table-mb-oc";

describe("add an employee", () => {
  it("Should see the new employee on the list page", async () => {
    const { queryByText } = render(
      <Provider store={store}>
        <ListEmployee />
      </Provider>
    );

    expect(queryByText("John")).not.toBeInTheDocument();

    await waitFor(() => {
      store.dispatch(
        addEmployee({
          firstName: "John",
          lastName: "Doe",
          dateOfBirth: "1971-05-04",
          startDate: "2017-03-06",
          street: "main street",
          city: "Chicago",
          state: "CA",
          zipCode: "745698",
          department: "Engineering",
        })
      );
    });

    const { getByText, debug } = render(
      <Provider store={store}>
        <ListEmployee />
      </Provider>
    );
    debug();
    expect(getByText("John")).toBeInTheDocument();
    expect(getByText("Doe")).toBeInTheDocument();
    expect(getByText("05/04/1971")).toBeInTheDocument();
    expect(getByText("03/06/2017")).toBeInTheDocument();
    expect(getByText("main street")).toBeInTheDocument();
    expect(getByText("Chicago")).toBeInTheDocument();
    expect(getByText("CA")).toBeInTheDocument();
    expect(getByText("745698")).toBeInTheDocument();
    expect(getByText("Engineering")).toBeInTheDocument();
  });
});
