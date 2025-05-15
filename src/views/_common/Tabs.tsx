import React from 'react';

interface Props {
    onViewSelect: (value: string) => void;
    selectedView: string;
    view1: string;
    view2: string;
}

/*
 * The selected view will be disabled so that it can't be clicked again
 */
const Tabs: React.FC<Props> = ({ onViewSelect, selectedView, view1, view2 }) => {
    return (
        <div className="row text-center">
            <div className="col-6">
                <button
                    disabled={selectedView === view1}
                    type="button"
                    className="btn btn-primary w-100"
                    onClick={() => onViewSelect(view1)}> {view1}
                </button>
            </div>

            <div className="col-6">
                <button
                    disabled={selectedView === view2}
                    type="button"
                    className="btn btn-primary w-100"
                    onClick={() => onViewSelect(view2)}> {view2}
                </button>
            </div>
        </div>
    );
}

export default Tabs;
