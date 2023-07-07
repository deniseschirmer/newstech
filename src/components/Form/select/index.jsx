/* eslint-disable react/prop-types */
import "./select.css";

const Select = ({ title, value, onChange, options }) => {
  return (
    <div className="select-container">
      <p className="select-title">{title}</p>
      <select
        placeholder="Selecione:"
        className="select"
        value={value}
        name="teste"
        onChange={onChange}
      >
        <>
          {options?.map((option, index) => (
            <option key={`${option.value}_${index}`} value={option.value}>
              {option.label}
            </option>
          ))}
        </>
      </select>
    </div>
  );
};

export default Select;
