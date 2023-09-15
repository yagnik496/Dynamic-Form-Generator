function TextField({ label, name, value, onChange, validationRules }) {
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
    <div className="">
      <label htmlFor="form_title" className="block mb-2 text-sm font-medium">
        {label}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleInputChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={label}
        required={validationRules.required}
      />
      {showError()}
    </div>
  );
}

export default TextField;
