/* eslint-disable react/prop-types */
import "./select.css";


const Select = ({title, value, setState, options}) => {
    return (
        <div className="select-container">
            <p className="select-title">
                {title}
            </p>
            <select
                className="select"
                value={value}
                name="teste"
                onChange={(e) => {
                    console.log(e.target.value)
                    setState(e.target.value)
                }}
            >
                <>
                    {options?.map((option, index) => (
                        <option
                            key={`${option.value}_${index}`}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </>
            </select>
        </div>
    )
}

export default Select;