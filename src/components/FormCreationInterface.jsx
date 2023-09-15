import { useState } from "react";
import AddIcon from "./common/icons/AddIcon";
import { allowedTypes } from "../utils/constants";

function FormCreationInterface({ onAddField, onSetTitle }) {
  const [fieldType, setFieldType] = useState("");
  const [fieldName, setFieldName] = useState("");
  const [fieldLabel, setFieldLabel] = useState("");
  const [fieldOptions, setFieldOptions] = useState([]);
  const [fieldValidationRules, setFieldValidationRules] = useState({
    required: false,
  });
  const [radioOptions, setRadioOptions] = useState([]);
  const [checkboxOptions, setCheckboxOptions] = useState([]);

  const handleAddField = () => {
    if (!fieldType || !fieldName || !fieldLabel) {
      alert("Please enter fieldType ,fieldName, fieldLabel all");
      return;
    }

    onAddField({
      type: fieldType,
      name: fieldName,
      label: fieldLabel,
      options: fieldType === "dropdown" ? fieldOptions : undefined,
      radioOptions: fieldType === "radio" ? radioOptions : undefined,
      checkboxOptions: fieldType === "checkbox" ? checkboxOptions : undefined,
      validationRules: fieldValidationRules,
    });
    setFieldType("");
    setFieldName("");
    setFieldLabel("");
    setFieldOptions([]);
    setRadioOptions([]);
    setCheckboxOptions([]);
    setFieldValidationRules({});
  };

  const handleAddOption = () => {
    setFieldOptions([...fieldOptions, ""]);
  };

  const handleOptionChange = (index, value) => {
    const options = [...fieldOptions];
    options[index] = value;
    setFieldOptions(options);
  };

  const handleValidationRuleChange = (rule, value) => {
    setFieldValidationRules((prevState) => ({
      ...prevState,
      [rule]: value,
    }));
  };

  const handleAddRadioOption = () => {
    setRadioOptions([...radioOptions, { label: "", value: "" }]);
  };

  const handleAddCheckboxOption = () => {
    setCheckboxOptions([...checkboxOptions, { label: "", value: "" }]);
  };

  const handleCheckboxOptionChange = (index, field, value) => {
    const options = [...checkboxOptions];
    options[index][field] = value;
    setCheckboxOptions(options);
  };

  const handleRadioOptionChange = (index, field, value) => {
    const options = [...radioOptions];
    options[index][field] = value;
    setRadioOptions(options);
  };

  const handleTitleChange = (event) => {
    const title = event.target.value;
    onSetTitle(title);
  };

  const addCustomfields = (data) => {
    switch (data) {
      case "dropdown":
        return (
          <div>
            <label
              htmlFor="field_name"
              className="block mb-2 text-sm font-medium"
            >
              Dropdown:
            </label>
            <ul>
              {fieldOptions.map((option, index) => (
                <li key={index} className="flex gap-6 mb-6 md:items-end">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Field Name"
                    required
                  />
                  <button onClick={handleAddOption} className="mb-2.5">
                    <AddIcon className="text-blue-700" width={20} height={20} />
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={handleAddOption}
              className={fieldOptions.length > 0 ? "hidden" : ""}
            >
              <AddIcon className="text-blue-700" width={20} height={20} />
            </button>
          </div>
        );

      case "radio":
        return (
          <div>
            <label>Radio Buttons:</label>
            <ul className="mt-2.5">
              {radioOptions.map((option, index) => (
                <li key={index} className="flex gap-6 mb-6 md:items-end">
                  <label>
                    Label:
                    <input
                      type="text"
                      value={option.label}
                      onChange={(e) =>
                        handleRadioOptionChange(index, "label", e.target.value)
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Label"
                      required
                    />
                  </label>
                  <label>
                    Value:
                    <input
                      type="text"
                      value={option.value}
                      onChange={(e) =>
                        handleRadioOptionChange(index, "value", e.target.value)
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Value"
                      required
                    />
                  </label>
                  <button onClick={handleAddRadioOption} className="mb-2.5">
                    <AddIcon className="text-blue-700" width={20} height={20} />
                  </button>
                </li>
              ))}
              <button
                onClick={handleAddRadioOption}
                className={radioOptions.length > 0 ? "hidden" : ""}
              >
                <AddIcon className="text-blue-700" width={20} height={20} />
              </button>
            </ul>
          </div>
        );

      case "checkbox":
        return (
          <div>
            <label>Checkbox:</label>
            <ul className="mt-2.5">
              {checkboxOptions.map((option, index) => (
                <li key={index} className="grid gap-6 mb-6 md:grid-cols-2 mt-4">
                  <label>
                    Label:
                    <input
                      type="text"
                      value={option.label}
                      onChange={(e) =>
                        handleCheckboxOptionChange(
                          index,
                          "label",
                          e.target.value
                        )
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Value"
                      required
                    />
                  </label>
                  <label>
                    Value:
                    <input
                      type="text"
                      value={option.value}
                      onChange={(e) =>
                        handleCheckboxOptionChange(
                          index,
                          "value",
                          e.target.value
                        )
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Value"
                      required
                    />
                  </label>
                </li>
              ))}
            </ul>

            <button
              onClick={handleAddCheckboxOption}
              className={checkboxOptions.length > 0 ? "hidden" : ""}
            >
              <AddIcon className="text-blue-700" width={20} height={20} />
            </button>
          </div>
        );

      default:
        break;
    }
  };

  return (
    <div className="md:w-1/2 max-w-xl px-4 py-14">
      <h1 className="text-center text-3xl">Form Creation Interface</h1>
      <div className="mt-8">
        <label htmlFor="form_title" className="block mb-2 text-sm font-medium">
          Form Title:
        </label>
        <input
          onChange={handleTitleChange}
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Form Title"
          required
        />
      </div>
      <div className="mt-4">
        <label htmlFor="input_type" className="block mb-2 text-sm font-medium">
          Field Type:
        </label>
        <select
          id="input_type"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={fieldType}
          onChange={(e) => setFieldType(e.target.value)}
        >
          <option value="">Select a field type</option>
          {allowedTypes.map((val) => (
            <option value={val} className="capitalize">
              {val}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-6 mb-6 md:grid-cols-2 mt-4">
        <div>
          <label
            htmlFor="field_name"
            className="block mb-2 text-sm font-medium"
          >
            Field Name:
          </label>
          <input
            type="text"
            value={fieldName}
            onChange={(e) => setFieldName(e.target.value)}
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Field Name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="field_label"
            className="block mb-2 text-sm font-medium"
          >
            Field Label:
          </label>
          <input
            type="text"
            value={fieldLabel}
            onChange={(e) => setFieldLabel(e.target.value)}
            id="field_label"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Field Label"
            required
          />
        </div>
      </div>
      {addCustomfields(fieldType)}

      <div className="mt-4">
        <label htmlFor="field_label" className="block mb-2 text-sm font-medium">
          Validations:
        </label>
        <div className="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            checked={fieldValidationRules.required}
            onChange={(e) =>
              handleValidationRuleChange("required", e.target.checked)
            }
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ml-2 text-sm font-medium text-gray-900 cursor-pointer"
          >
            Required
          </label>
        </div>
      </div>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleAddField}
      >
        Add Field
      </button>
    </div>
  );
}

export default FormCreationInterface;
