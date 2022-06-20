import React from "react";
import { employeesSelector } from "../../utils/store/store";
import { useSelector } from "react-redux";
import { Table } from "react-table-mb-oc";

const ListEmployee = () => {
  const employees = useSelector(employeesSelector);

  // Define columns and style for the table (See the library "react-table-mb-oc" description
  const columns = [
    { data: "firstName", title: "First Name", order: 1, typeData: "string" },
    { data: "lastName", title: "Last Name", order: 2, typeData: "string" },
    { data: "dateOfBirth", title: "Date Of Birth", order: 5, typeData: "date" },
    { data: "startDate", title: "Start Date", order: 3, typeData: "date" },
    { data: "street", title: "Street", order: 6, typeData: "string" },
    { data: "city", title: "City", order: 7, typeData: "string" },
    { data: "state", title: "State", order: 8, typeData: "string" },
    { data: "zipCode", title: "Zip Code", order: 9, typeData: "number" },
    { data: "department", title: "Department", order: 4, typeData: "string" },
  ];

  const style = {
    border: "#6C840D",
    active: "#93AD1844",
  };

  return (
    <>
      <h2>List Employees</h2>
      <Table elements={employees} columns={columns} style={style} />
    </>
  );
};

export default ListEmployee;
