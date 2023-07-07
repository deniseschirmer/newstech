/* eslint-disable react/prop-types */
import "./input.css";

const Input = ({ title, onChange, value }) => {
  return (
    <div className="input-container">
      <p className="input-title">{title}</p>
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
