/* eslint-disable react/prop-types */
import "./textArea.css";

const TextArea = ({ title, onChange, value }) => {
  return (
    <div className="text-container">
      <p className="text-title">{title}</p>
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
