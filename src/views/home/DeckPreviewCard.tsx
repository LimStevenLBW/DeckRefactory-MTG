import commanderPortrait from '../../../images/deckPreviewCard1.jpg';

import './DeckExplorer.css';

interface DeckPreviewCardProps {
    imgsrc: string;
    colorList: string[];
    name: string;
    lastUpdated: string;
    author: string;
}

const DeckPreviewCard = ({ imgsrc, colorList, name, lastUpdated, author }: DeckPreviewCardProps) => {

    const colorListRender = colorList.map((color, i) =>
        <li key={i} className={"col deckPreviewCard-" + color}></li >);

    return (
        <div className="container preview-card">
            <div className="row">
                <img className="commanderPortrait" src={imgsrc} alt="error"></img>
            </div>
            <div className="row">
                {colorListRender}
            </div>

            <div className="row">
                <h5>{name}</h5>
                <h6>{lastUpdated}</h6>
                <h6>{author}</h6>
            </div>
        </div >);
}

export default DeckPreviewCard;