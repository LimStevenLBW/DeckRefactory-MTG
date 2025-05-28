import React from 'react';
import 'bootstrap/js/dist/collapse';
import SideBarItem from './SideBarItem';
import CollapsableLink from '../_common/CollapsableLink';
import { Deck } from '../../models/Deck';

/**
 * Expanded on a reusable wrapper for the Bootstrap Listgroup, 
 * see https://github.com/LimStevenLBW/vidly/blob/master/src/components/common/ListGroup.jsx
 * The BuilderSideBar lists the current state of the user's deck, its data is passed from Deckbuilder
 */

const main = "mainCollapseTarget";
const side = "sideCollapseTarget";
const misc = "miscCollapseTarget";

interface Props {
    deck: Deck;
    textProperty: string;
    onLeftSelect: () => void;
    onRightSelect: () => void;
    onShiftClick: () => void;
}

const BuilderSideBar: React.FC<Props> = ({ deck, textProperty, onLeftSelect, onRightSelect, onShiftClick }) => {

    let deckInfo = deck.info;
    let deckList = deck.list;
    let { mainCnt, sideCnt, miscCnt } = deckInfo;

    return (
        //Note: The index is used as the key property for now, this may introduce bugs
        <div className="mh-100 BuilderSideBar border border-primary rounded">

            <CollapsableLink
                textProperty="Main Deck"
                valueProperty={mainCnt}
                classModifier="btn-primary"
                target={main}
            />

            <div className="collapse collapse-show show" id={main}>
                <ul className="list-group clickable">
                    {deckList.main.map((item, index) => (
                        <SideBarItem
                            item={item}
                            key={index}
                            textProperty={textProperty}
                            onLeftSelect={onLeftSelect}
                            onRightSelect={onRightSelect}
                            onShiftClick={onShiftClick}
                            listName="main"
                        />
                    ))}
                </ul >
            </div>

            <CollapsableLink
                textProperty="Sideboard"
                valueProperty={sideCnt}
                classModifier="btn-secondary"
                target={side}
            />

            <div className="collapse collapse-show" id={side}>
                <ul className="list-group clickable">
                    {deckList.side.map((item, index) => (
                        <SideBarItem
                            item={item}
                            key={index}
                            textProperty={textProperty}
                            onLeftSelect={onLeftSelect}
                            onRightSelect={onRightSelect}
                            onShiftClick={onShiftClick}
                            listName="side"
                        />
                    ))}
                </ul >
            </div>

            <CollapsableLink
                textProperty="Miscellaneous"
                valueProperty={miscCnt}
                classModifier="btn-secondary"
                target={misc}
            />

            <div className="collapse collapse-show show" id={misc}>
                <ul className="list-group clickable">
                    {deckList.misc.map((item, index) => (
                        <SideBarItem
                            item={item}
                            key={index}
                            textProperty={textProperty}
                            onLeftSelect={onLeftSelect}
                            onRightSelect={onRightSelect}
                            onShiftClick={onShiftClick}
                            listName="misc"
                        />
                    ))}
                </ul >
            </div>
        </div>
    );
}

export default BuilderSideBar;
