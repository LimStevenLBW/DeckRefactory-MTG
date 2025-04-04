import commanderPortrait from '../../../images/deckPreviewCard1.jpg';

import './DeckExplorer.css';

const DeckPreviewCard = () => {
    return (
        <div className="container preview-card">
            <div className="row">
                <img className="commanderPortrait" src={commanderPortrait} alt="error"></img>
            </div>
            <div className="row"> Black-Green-Red</div>

            <div className="row">
                <h5>Gyrus, Waker of Corpses</h5>
                <h6>Commander</h6>
                <h6>Mango</h6>
            </div>
        </div>);
}

export default DeckPreviewCard;