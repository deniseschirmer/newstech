/* eslint-disable react/prop-types */
import "./button.css";

const Button = ({children, onClick}) => {
    return (
        <button
        className="button"
            onClick={onClick}
        >
            {children}
        </button>
    )
};

export default Button