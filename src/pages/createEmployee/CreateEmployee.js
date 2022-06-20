import Style from "./CreateEmployee.module.scss";
import { DateField, TextField, DropdownField } from "../../components";
import { states, sales } from "../../utils/dropdownOptions";
import { ModalContext } from "../../utils/context/ModalContext";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addEmployee,
  emptyForm,
  formValuesSelector,
  validateDatas,
} from "../../utils/store/store";
import { validate } from "../../utils/validation/validate";

/**
 * It's a form that allows you to create an employee
 * @returns A form with a submit button.
 */
const CreateEmployee = () => {
  const { displayModal, setDisplayModal } = useContext(ModalContext);
  const dispatch = useDispatch();
  const formValues = useSelector(formValuesSelector);

  const handleSubmit = (e) => {
    e.preventDefault();

    // First, build a datas object with the form values
    const datas = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      dateOfBirth: formValues.dateOfBirth,
      startDate: formValues.startDate,
      street: formValues.street,
      city: formValues.city,
      state: states.find((e) => e.name === formValues.state)?.abbreviation,
      zipCode: formValues.zipCode,
      department: formValues.department,
    };

    // Then, validate the form datas
    const errors = validate(datas);

    // Finally, If erros exists, we save errors in redux for display its on the form, else, we save the new employee
    if (Object.keys(errors).length > 0) {
      dispatch(validateDatas(errors));
    } else {
      setDisplayModal(!displayModal);
      dispatch(addEmployee(datas));
      dispatch(emptyForm());
    }
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

export default CreateEmployee;
