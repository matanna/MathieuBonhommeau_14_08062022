import React from "react";
import PropTypes from "prop-types";
import Style from "./ListEmployee.module.scss";
import { Table } from "../../lib";
import { employeesSelector } from "../../utils/redux/store";
import { useSelector } from "react-redux";

const ListEmployee = (props) => {
  const employees = useSelector(employeesSelector);
  const columns = [
    { data: "firstName", title: "First Name", order: 1 },
    { data: "lastName", title: "Last Name", order: 2 },
    { data: "dateOfBirth", title: "Date Of Birth", order: 5 },
    { data: "startDate", title: "Start Date", order: 3 },
    { data: "street", title: "Street", order: 6 },
    { data: "city", title: "City", order: 7 },
    { data: "state", title: "State", order: 8 },
    { data: "zipcode", title: "Zip Code", order: 9 },
    { data: "department", title: "Department", order: 4 },
  ];

  return (
    <>
      <h2>List Employees</h2>
      <Table elements={employees} columns={columns} />
    </>
  );
};

ListEmployee.propTypes = {};

export default ListEmployee;
