import { sales, states } from "../dropdownOptions";

/**
 * Function for validate form datas
 * It loops through the keys of the object passed as argument, and for each key, it checks if the value of the key is
 * valid. If it's not, it adds an error message to the errors array
 * @param datas - the datas to validate
 * @returns An object with the errors
 */
export const validate = (datas) => {
  let errors = [];

  Object.keys(datas).forEach((e) => {
    switch (e) {
      case "firstName":
        if (datas.firstName.length < 2) {
          errors.firstName = "This field must contains at least 3 characters";
        }
        break;
      case "lastName":
        if (datas.lastName.length < 2) {
          errors.lastName = "This field must contains at least 3 characters";
        }
        break;
      case "dateOfBirth":
        if (datas.dateOfBirth === "") {
          errors.dateOfBirth = "This field cannot be empty";
        }
        break;
      case "startDate":
        if (datas.startDate === "") {
          errors.startDate = "This field cannot be empty";
        }
        break;
      case "street":
        if (datas.street.length < 10) {
          errors.street = "This field must contains at least 10 characters";
        }
        break;
      case "city":
        if (datas.city.length < 3) {
          errors.city = "This field must contains at least 3 characters";
        }
        break;
      case "state":
        if (datas.state === "") {
          errors.state = "You must choose a state";
        } else if (!states.map((e) => e.abbreviation).includes(datas.state)) {
          errors.state = "This state doesn't exist";
        }
        break;
      case "zipCode":
        if (!new RegExp(/^\d+$/).test(datas.zipCode)) {
          errors.zipCode = "This field must contains only numeric values";
        } else if (parseInt(datas.zipCode) <= 0) {
          errors.zipCode = "This field must be bigger than 0";
        }
        break;
      case "department":
        if (datas.department === "") {
          errors.department = "You must choose a department";
        } else if (!sales.includes(datas.department)) {
          errors.department = "This department doesn't exist";
        }
        break;
      default:
        return;
    }
  });
  return errors;
};
