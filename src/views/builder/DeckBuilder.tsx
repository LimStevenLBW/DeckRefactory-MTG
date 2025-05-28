import React, { useState } from 'react';

import SearchFormContainer from './SearchFormContainer';
//import CardBrowser from './CardBrowser';
//import ChartBrowser from './ChartBrowser';
import BuilderSideBar from './BuilderSideBar';
import SortButtons from './SortButtons';
//import Footer from './Footer';

import Tabs from '../_common/Tabs';


//import * as compare from '../../utils/compare';
//import { getDate } from '../../utils/date';
//import { calcManaAvg, calcDeckColors } from '../../utils/mtgDeck';
//import getSum from '../../utils/sum';

//import { getCards } from '../../services/falseApi';
//import { getLands } from '../../services/basicLands';
//import dataApi from '../../services/dataApi';

import './DeckBuilder.css';
import { Deck, GetEmptyDeck } from '../../models/deck';


type BuilderState = {
    deck: Deck;
    selectedGame: string;
    selectedView: string;
    endpoint: string;
    queriedCards: {};
    queriedHeaders: {};
}

const DeckBuilder: React.FC = () => {

    const [builderState, setBuilderState] = useState<BuilderState>({
        deck: GetEmptyDeck(),
        selectedGame: "mtg",
        selectedView: "View Card Explorer",
        endpoint: "",
        queriedCards: {},
        queriedHeaders: {}
    });

    /*
          //COMPONENT DID MOUNT
           if (!sessionStorage.length) {
               //If storage is empty, use defaults
               const { cards: queriedCards } = getCards();
               this.setState({ queriedCards });
           }
           else {
               //Get the cardbrowser gallery state from session storage
               const currentPageNum = parseInt(sessionStorage.getItem("page"));
               const tableString = sessionStorage.getItem(`table#${currentPageNum}`)
               const queriedCards = JSON.parse(tableString);
               this.setState({ queriedCards });
           }
   
           try {
               //Load a saved deck from local storage
               const data = localStorage.getItem('deck');
               const endpoint = sessionStorage.getItem('baseQuery'); //Page URL for pagination if it exists
               const deck = JSON.parse(data);
               if (deck) this.setState({ deck, endpoint });
           }
           catch (ex) { }
           */

    /**
     * Updates the current card browser list and update state
     
    updateQueriedCards = (queriedCards, queriedHeaders, endpoint) => {
        if (endpoint !== null) this.setState({ queriedCards, queriedHeaders, endpoint });
        else this.setState({ queriedCards, queriedHeaders })
    }
    */

    const updateCounts = (deck: any) => {
        /*
        //Calculate deck count values
        deck.info.mainCnt = getSum(deck.list.main);
        deck.info.sideCnt = getSum(deck.list.side);
        deck.info.miscCnt = getSum(deck.list.misc);
        return deck;
        */
    }

    /**
     * Add a new card into a named section of the decklist, defaulting to main
     * If a duplicate exists, quantity is updated instead, Deck state is updated to trigger a re-render
     */
    const addNewCard = () => {
        /*
        (newCard, listName = 'main')
        let deck = this.state.deck;
        const workingList = deck.list[listName];
    
        //Check if the card already exists
        const duplicate = this.checkForDuplicate(newCard, workingList)
        if (duplicate !== false) {
            workingList[duplicate].quantity++;
        }
        else {
            newCard["quantity"] = 1;
            workingList.push(newCard);
        }
    
        deck.list[listName] = workingList;
    
        deck = this.updateCounts(deck);
        this.setState({ deck });
        */
    }

    /**
     * Removes a card from a named section of the decklist, but if the card has
     * a quantity value above 1, its quantity value is only decremented
     */
    const removeCard = () => {
        /*
       (event, selectedCard, listName)
      
       if (event) event.preventDefault();
       let deck = this.state.deck;
       const workingList = deck.list[listName];
    
       //Check if more than one copy exists, if so, just decrement the counter instead of removing
       const duplicate = this.checkForDuplicate(selectedCard, workingList);
       if (duplicate !== false) {
           const duplicateAmount = workingList[duplicate].quantity;
    
           if (duplicateAmount > 1) workingList[duplicate].quantity--;
           else if (duplicateAmount === 1) workingList.splice(workingList.indexOf(selectedCard), 1);
           else console.log("an error has occurred with removeCard")
       }
    
       deck.list[listName] = workingList;
    
       deck = this.updateCounts(deck);
       this.setState({ deck });
       */
    }

    /**
     * 
     */
    const shiftCardHandler = () => {
        /*
        (event, selectedCard, listName, shiftUp = true)
        let deck = this.state.deck;
        let nextListName;
        switch (listName) {
            case 'main':
                if (shiftUp) nextListName = 'misc';
                else nextListName = 'side';
                break;
            case 'side':
                if (shiftUp) nextListName = 'main';
                else nextListName = 'misc';
                break;
            case 'misc':
                if (shiftUp) nextListName = 'side';
                else nextListName = 'main';
                break;
            default:
                nextListName = listName; //Don't move it
                console.error("Error occurred while editing deck list");
        }
    
        const workingList = deck.list[nextListName];
        const prevList = deck.list[listName];
    
        if (event.shiftKey) { //If key shift is held, remove card regardless of quantity
            const duplicate = this.checkForDuplicate(selectedCard, workingList);
    
            if (duplicate !== false) {
                workingList[duplicate].quantity += selectedCard.quantity; //Add the quantities together 
            }
            else {
                workingList.push(selectedCard); //Move the card into the list
            }
    
            prevList.splice(prevList.indexOf(selectedCard), 1); //Remove it from the previous list
            deck.list[nextListName] = workingList;
            deck = this.updateCounts(deck);
            this.setState({ deck });
        }
        else { //Otherwise, use standard evaluation for removal, only move one at a time
            this.removeCard(event, selectedCard, listName);
            this.addNewCard(selectedCard, nextListName);
        }
        */
    }

    /**
     * Examine each card in a provided list and returns the index of the duplicate if it exists
     * Currently only examines based on name
    */
    const checkForDuplicate = () => {
        /*
        (newCard, list)
            for (let i = 0; i < list.length; i++) {
                if (list[i].name === newCard.name) {
                    return i;
                }
            }
            return false;
            */
    }

    /**
     * Calculates certain deck properties and sets them
     * Calls save api function
     */
    const onSaveDeck = () => {
        /*
        const deck = this.state.deck;
        const user = this.props.user;
        const colorObj = calcDeckColors(deck); //Get color information
     
        deck.info.cmc = calcManaAvg(deck); //Get average mana cost
        deck.info.colors = colorObj.colors; //Get List of colors
        deck.info.colorIdentity = colorObj.colorIdentity //Get color scheme name
        deck.info.lastUpdated = getDate(); //Get date of update
     
        //Update the state of the deck
        this.setState({ deck }, () => {
            dataApi.save(deck, user);
        });
        */
    }

    /**
     * Sort the current decklist based on the listed names
     */
    const onSortAZ = () => {
        /*
        const { deck } = this.state;
        deck.list.main.sort(compare.alpha);
        deck.list.side.sort(compare.alpha);
        deck.list.misc.sort(compare.alpha);
        this.setState({ deck });
        */
    }

    /**
     * Sort the current decklist based on the converted mana costs
     */
    const onSortMana = () => {
        /*
        const { deck } = this.state;
        deck.list.main.sort(compare.cmc);
        deck.list.side.sort(compare.cmc);
        deck.list.misc.sort(compare.cmc);
        this.setState({ deck });
        */
    }

    const addBasicLand = (land: any) => {
        /*
        let deck = this.state.deck;
        const workingList = deck.list['main'];
        const lands = getLands().cards;
     
        const newCard = lands.filter(cardObj => cardObj.name === land)[0];
     
        //Check if the card already exists
        const duplicate = this.checkForDuplicate(newCard, workingList);
        if (duplicate !== false) {
            deck.list.main[duplicate].quantity++;
        }
        else {
            newCard["quantity"] = 1;
            deck.list.main.push(newCard);
        }
     
        deck = this.updateCounts(deck);
        this.setState({ deck });
        */
    }

    const onViewSelect = (viewName: string) => {
        if (viewName === "Deck Analysis") {
            setBuilderState(prev => ({
                ...prev,
                ["selectedView"]: viewName // Dynamically updates the property matching `name`
            }));
        }
        else {
            // this.setState({ selectedView: viewName })
        }
    }

    /**
     * Temporarily persist search results, settings, etc for convenience
     */
    const cacheSessionData = () => {

    }

    //const { selectedGame, queriedCards, queriedHeaders, deck, selectedView, endpoint } = this.state;
    const { list: deckList } = builderState.deck;
    const { info: deckInfo } = builderState.deck;


    return (
        <>
            <div className="container-fluid game-header mb-2">
                <SearchFormContainer
                    updateQueriedCards={() => { }}
                    addBasicLand={() => { }}
                />
            </div>

            <div className="container-fluid cf-spacing mb-2">
                <div className="row mb-2">
                    <div className="col-4">
                        <SortButtons
                            onSaveDeck={() => { }}
                            onSortAZ={() => { }}
                            onSortMana={() => { }}
                        />
                    </div>

                    <div className="col-8">
                        <Tabs
                            onViewSelect={onViewSelect}
                            selectedView={builderState.selectedView}
                            view1={"Deck Analysis"}
                            view2={"View Card Explorer"}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        <BuilderSideBar
                            deck={builderState.deck}
                            textProperty="name"
                            onLeftSelect={addNewCard}
                            onRightSelect={removeCard}
                            onShiftClick={shiftCardHandler}
                        />
                    </div>
                </div>

            </div>
        </>
    );
}



export default DeckBuilder;