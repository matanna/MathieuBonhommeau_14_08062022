import PropTypes from "prop-types";
import Style from "./CreateEmployee.module.scss";
import { DateField, TextField, DropdownField, Modal } from "../../components";
import { states, sales } from "../../utils/dropdownOptions";
import { ModalContext } from "../../utils/context/ModalContext";
import { useContext } from "react";

const CreateEmployee = (props) => {
  const { displayModal, setDisplayModal } = useContext(ModalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayModal(!displayModal);
  };

  return (
    <>
      <h2>Create Employee</h2>
      <form action="#" className={Style.form}>
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
            name="State"
            options={states.map((e) => e.name)}
          />
          <TextField label="Zip Code" name="zipCode" type="number" />
        </fieldset>
        <div className={Style.group}>
          <DropdownField label="Department" name="department" options={sales} />
          <div className={Style.btnSubmit}>
            <button type="submit" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

CreateEmployee.propTypes = {};

export default CreateEmployee;
