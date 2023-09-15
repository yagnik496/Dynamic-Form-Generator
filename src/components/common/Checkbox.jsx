const Checkbox = ({ label, name, value, onChange, options }) => {
  const handleInputChange = (event) => {
    const value = event.target.checked;
    onChange(name, value);
  };

  return (
    <div>
      <label className="block mb-2 text-sm font-medium">{label}</label>
      <div className="mt-1 flex gap-x-4">
        {options.map((option, index) => (
          <label key={index} className="flex items-center gap-x-2">
            <input
              className={`peer cursor-pointer accent-primary-typography w-4 h-4`}
              type="checkbox"
              checked={value}
              value={option.value}
              onChange={handleInputChange}
              name={name}
            />
            <span className="cursor-pointer">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Checkbox;
