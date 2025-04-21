import React from 'react';
//import './FormSelect.css'

interface Props {
    name: string;
    label: string;
    value: string;
    handler: (value: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
}

const FormSelect: React.FC<Props> = ({ name, label, handler, value, options }) => {
    //            {error && <div className = "alert alert-danger">{error}</div>}
    return (
        <div className="form-group">
            <select
                name={name}
                value={value}
                onChange={(e) => handler(e)}
                className="form-control">

                <option
                    value="">
                    {label}
                </option>

                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}

            </select>

        </div>
    );
}

export default FormSelect;