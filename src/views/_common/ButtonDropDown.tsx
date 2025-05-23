import React from 'react';
import 'bootstrap/js/dist/dropdown';
import './ButtonDropDown.css'

interface Props {

    buttonLabel: string;
    labels: string[];
    onClickHandler: (value: string) => void;
    // onClickHandler: (value: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ButtonDropDown: React.FC<Props> = ({ buttonLabel, labels, onClickHandler }) => {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {buttonLabel}
            </button>

            <div className="dropdown-menu">
                {labels.map((option, key) => {
                    return (
                        <div
                            className="dropdown-item" key={key}
                            onClick={() => onClickHandler(option)}
                        >
                            Add {option}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ButtonDropDown;
