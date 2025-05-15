import React from 'react';

// Define type for the inner dictionary object
interface Props {
    onSaveDeck: () => void
    onSortAZ: () => void
    onSortMana: () => void
}

/**
 * 
 */
const SortButtons: React.FC<Props> = ({ onSaveDeck, onSortAZ, onSortMana }) => {
    return (
        <div className="row text-center">
            <div className="col-4">
                <button
                    type="button"
                    className="btn btn-primary w-75"
                    onClick={onSaveDeck}>
                    Save
                </button>
            </div>

            <div className="col-4">
                <button
                    type="button"
                    className="btn btn-primary w-75"
                    onClick={onSortAZ}>
                    A-Z
                </button>
            </div>

            <div className="col-4">
                <button
                    type="button"
                    className="btn btn-primary w-75"
                    onClick={onSortMana}>
                    Mana
                </button>
            </div>
        </div>
    );
}

export default SortButtons;