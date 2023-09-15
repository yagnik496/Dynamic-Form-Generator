export const Validation = {
  validateTextField: (value, validationRules) => {
    if (validationRules?.required && !value) {
      return "This field is required";
    }
    return "";
  },
  validateDropdown: (value, validationRules) => {
    if (validationRules?.required && !value) {
      return "This field is required";
    }
    return "";
  },
  validateCheckbox: (value, validationRules) => {
    if (validationRules?.required && !value) {
      return "This field is required";
    }
    return "";
  },
  validateRadioButton: (value, validationRules) => {
    if (validationRules?.required && !value) {
      return "This field is required";
    }
    return "";
  },
};

export default Validation;
