import PropTypes from "prop-types";
import Style from "./CreateEmployee.module.scss";
import { DateField, TextField, DropdownField, Modal } from "../../components";
import { states, sales } from "../../utils/dropdownOptions";
import { ModalContext } from "../../utils/context/ModalContext";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addEmployee,
  emptyForm,
  formValuesSelector,
  initialState,
} from "../../utils/redux/store";

const CreateEmployee = (props) => {
  const { displayModal, setDisplayModal } = useContext(ModalContext);
  const dispatch = useDispatch();
  const formValues = useSelector(formValuesSelector);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayModal(!displayModal);
    // @todo Pensez a faire la validation du formulaire
    dispatch(
      addEmployee({
        /*id: new Date.now(),*/
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        dateOfBirth: formValues.dateOfBirth,
        startDate: formValues.startDate,
        street: formValues.street,
        city: formValues.city,
        state: formValues.state,
        zipCode: formValues.zipCode,
        department: formValues.department,
      })
    );
    dispatch(emptyForm());
  };

  return (
    <>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit} className={Style.form}>
        <div className={Style.group}>
          <TextField label="First Name" name="firstName" type="text" />
          <TextField label="Last Name" name="lastName" type="text" />
          <DateField label="Date of Birth" name="dateOfBirth" />
          <DateField label="Start Date" name="startDate" />
        </div>
        <fieldset className={`${Style.group} ${Style.address}`}>
          <legend>Address</legend>
          <TextField label="Street" name="street" type="text" />
          <TextField label="City" name="city" type="text" />
          <DropdownField
            label="State"
            name="state"
            options={states.map((e) => e.name)}
          />
          <TextField label="Zip Code" name="zipCode" type="number" />
        </fieldset>
        <div className={Style.group}>
          <DropdownField label="Department" name="department" options={sales} />
          <div className={Style.btnSubmit}>
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </>
  );
};

CreateEmployee.propTypes = {};

export default CreateEmployee;
