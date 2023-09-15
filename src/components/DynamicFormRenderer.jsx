import { useState } from "react";
import TextField from "./common/TextField";
import Dropdown from "./common/Dropdown";
import Checkbox from "./common/Checkbox";
import RadioButton from "./common/RadioButton";

function DynamicFormRenderer({ formStructure, setJsonData }) {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (name, value) => {
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const renderFormFields = () => {
    return formStructure.fields.map((field, index) => {
      switch (field.type) {
        case "text":
          return (
            <TextField
              key={index}
              label={field.label}
              name={field.name}
              value={formValues[field.name] || ""}
              onChange={handleInputChange}
              validationRules={field.validationRules}
            />
          );
        case "dropdown":
          return (
            <Dropdown
              key={index}
              label={field.label}
              name={field.name}
              value={formValues[field.name] || ""}
              onChange={handleInputChange}
              options={field.options}
              validationRules={field.validationRules}
            />
          );
        case "checkbox":
          return (
            <Checkbox
              key={index}
              label={field.label}
              name={field.name}
              value={formValues[field.name] || ""}
              onChange={handleInputChange}
              options={field.checkboxOptions}
              validationRules={field.validationRules}
            />
          );
        case "radio":
          return (
            <RadioButton
              key={index}
              label={field.label}
              name={field.name}
              value={formValues[field.name] || ""}
              onChange={handleInputChange}
              options={field.radioOptions}
              validationRules={field.validationRules}
            />
          );
        default:
          return null;
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.values(formValues);
    if (formData.length === 0) {
      return;
    }

    setJsonData(formValues);
    setFormValues({});
  };

  return (
    <div className="md:w-1/2 max-w-xl px-12 py-14">
      <h2 className="text-center capitalize text-3xl mb-8">
        {formStructure.title ? formStructure.title : "Created Form shown below"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-5">{renderFormFields()}</div>
        {formStructure.fields?.length > 0 ? (
          <button
            type="submit"
            className="mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        ) : null}
      </form>
    </div>
  );
}

export default DynamicFormRenderer;
