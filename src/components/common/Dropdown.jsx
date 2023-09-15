function Dropdown({ label, name, value, onChange, options, validationRules }) {
  const handleInputChange = (event) => {
    const value = event.target.value;
    onChange(name, value);
  };

  const showError = () => {
    if (validationRules?.required && !value) {
      return (
        <span className="text-xs text-red-700">This field is required</span>
      );
    }
  };

  return (
    <div>
      <label className="block mb-2 text-sm font-medium">{label}</label>
      <select
        name={name}
        value={value}
        onChange={handleInputChange}
        required={validationRules.required}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {showError()}
    </div>
  );
}

export default Dropdown;
