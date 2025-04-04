import DeckPreviewCard from "./DeckPreviewCard";

const DeckExplorer = () => {
    return (
        <div className="container deck-explorer">
            <div className="row">
                <div className="col-3"><DeckPreviewCard /></div>
                <div className="col-3"><DeckPreviewCard /></div>
                <div className="col-3"><DeckPreviewCard /></div>
                <div className="col-3"><DeckPreviewCard /></div>
            </div>

            <div className="row">
                <div className="col-3"><DeckPreviewCard /></div>
                <div className="col-3"><DeckPreviewCard /></div>
                <div className="col-3"><DeckPreviewCard /></div>
                <div className="col-3"><DeckPreviewCard /></div>
            </div>
        </div>);
}

export default DeckExplorer;