/* eslint-disable react/prop-types */
import "./input.css";


const Input = ({title, setState, value}) => {
    return (
        <div className="input-container">
            <p className="input-title">
                {title}
            </p>
            <input
                className="input"
                placeholder={title}
                value={value}
                onChange={(e) => setState(e.target.value)}
            />
        </div>
    )
}

export default Input;