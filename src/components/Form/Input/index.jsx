/* eslint-disable react/prop-types */
import "./input.css";

const Input = ({ title, onChange, value }) => {
  return (
    <div className="input-container">
      <label htmlFor={title} className="input-title">{title}</label>
      <input
        className="input"
        placeholder={title}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
