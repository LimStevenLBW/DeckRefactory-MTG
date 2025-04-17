import React from 'react';
import './FormSelect.scss'

interface Props {
    name: string;
    label: string;
    value: string;
    onChange: (value: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
}

const FormSelect: React.FC<Props> = ({ name, label, onChange, value, options }) => {
    //            {error && <div className = "alert alert-danger">{error}</div>}
    return (
        <div className="form-group">
            <select
                name={name}
                value={value}
                onChange={(e) => onChange(e)}
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