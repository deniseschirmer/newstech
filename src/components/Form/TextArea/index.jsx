/* eslint-disable react/prop-types */
import "./textArea.css";

const TextArea = ({ title, onChange, value }) => {
  return (
    <div className="text-container">
      <label htmlFor={title} className="text-title">{title}</label>
      <textarea
        placeholder="Mensagem"
        className="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
