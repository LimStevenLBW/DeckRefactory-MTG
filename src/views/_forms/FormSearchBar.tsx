import React from 'react';

interface Props {
    name: string;
    isLoading: boolean;
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (value: React.FormEvent<HTMLFormElement>) => void; // Optional prop
    onClick: (value: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

}

const FormSearchBar: React.FC<Props> = ({ name, isLoading, onChange, onSubmit, onClick }) => {
    return (
        <form onSubmit={(e) => onSubmit(e)}>

            <div className="input-group">
                <input
                    disabled={isLoading}
                    type="text"
                    name={name}
                    className="form-control my-3"
                    placeholder="Search for cards. . ."
                    onChange={(e) => onChange(e)}
                />

                <div className="input-group-append  my-3">
                    <button
                        disabled={isLoading}
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={(e) => onClick(e)}>Search
                    </button>
                </div>
            </div>
        </form>
    );
}

export default FormSearchBar;