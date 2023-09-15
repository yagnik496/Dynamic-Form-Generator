function RadioButton({
  label,
  name,
  value,
  onChange,
  options,
  validationRules,
}) {
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
      <div className="mt-1 flex gap-x-4">
        {options.map((option, index) => (
          <label key={index} className="flex items-center gap-x-2">
            <input
              className={`peer cursor-pointer accent-primary-typography w-4 h-4`}
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={handleInputChange}
              required={validationRules.required}
            />
            <span className="cursor-pointer text-secondary-typography peer-checked:text-primary-typography">
              {option.label}
            </span>
          </label>
        ))}
      </div>
      {showError()}
    </div>
  );
}

export default RadioButton;
