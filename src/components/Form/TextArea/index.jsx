/* eslint-disable react/prop-types */
import "./textArea.css";

const TextArea = ({ title, setState, value }) => {
  return (
    <div className="text-container">
      <p className="text-title">{title}</p>
      <textarea
        placeholder="Mensagem"
        className="text"
        value={value}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
};

export default TextArea;
