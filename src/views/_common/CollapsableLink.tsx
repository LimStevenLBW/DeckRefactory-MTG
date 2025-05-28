import React from 'react';


interface Props {
    textProperty: string;
    valueProperty: number;
    classModifier: string;
    target: string;
}

const CollapsableLink: React.FC<Props> = ({ textProperty, valueProperty, classModifier, target }) => {
    return (
        <a
            className={"btn w-100 " + classModifier}
            data-toggle="collapse" href={`#${target}`}
            role="button" aria-expanded="false" aria-controls="collapseExample">
            {textProperty}: {valueProperty} Cards
        </a>
    );
}

export default CollapsableLink;
