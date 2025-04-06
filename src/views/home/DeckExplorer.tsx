import DeckPreviewCard from "./DeckPreviewCard";
import portrait1 from '../../../images/deckPreviewCard1.jpg';
import portrait2 from '../../../images/deckPreviewCard2.jpg';
import portrait3 from '../../../images/deckPreviewCard3.jpg';
import portrait4 from '../../../images/deckPreviewCard4.jpg';
import portrait5 from '../../../images/deckPreviewCard5.jpg';
import portrait6 from '../../../images/deckPreviewCard6.jpg';
import portrait7 from '../../../images/deckPreviewCard7.jpg';
import portrait8 from '../../../images/deckPreviewCard8.png';

const DeckExplorer = () => {
    return (
        <div className="container deck-explorer">
            <div className="row">
                <div className="col-3"><DeckPreviewCard imgsrc={portrait1} colorList={["black", "red", "green", "white", "blue"]} name="Gyrus, Waker of Corpses" lastUpdated="4/05/2025" author="Mango" /></div>
                <div className="col-3"><DeckPreviewCard imgsrc={portrait2} colorList={["black", "red", "green"]} name="The Ur-Dragon" lastUpdated="4/05/2025" author="Mango" /></div>
                <div className="col-3"><DeckPreviewCard imgsrc={portrait3} colorList={["black", "red", "green"]} name="Yuriko, the Tiger's Shadow" lastUpdated="4/05/2025" author="Mango" /></div>
                <div className="col-3"><DeckPreviewCard imgsrc={portrait4} colorList={["black", "red", "green"]} name="Wilhelt, the Rotcleaver" lastUpdated="4/05/2025" author="Mango" /></div>
            </div>

            <div className="row">
                <div className="col-3"><DeckPreviewCard imgsrc={portrait5} colorList={["black", "red", "green"]} name="Edgar  Markov" lastUpdated="4/05/2025" author="Mango" /></div>
                <div className="col-3"><DeckPreviewCard imgsrc={portrait6} colorList={["black", "red", "green"]} name="Krenko, Mob Boss" lastUpdated="4/05/2025" author="Mango" /></div>
                <div className="col-3"><DeckPreviewCard imgsrc={portrait7} colorList={["black", "red", "green"]} name="Flubs, the Fool" lastUpdated="4/05/2025" author="Mango" /></div>
                <div className="col-3"><DeckPreviewCard imgsrc={portrait8} colorList={["black", "red", "green"]} name="Gluntch, the Bestower" lastUpdated="4/05/2025" author="Mango" /></div>
            </div>
        </div>);
}

export default DeckExplorer;