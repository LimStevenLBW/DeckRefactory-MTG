import React, { useState, useEffect } from 'react';
import './SideBarItem.scss';
import ManaIcons from '../_common/ManaIcons';

interface Props {
    item: any;
    textProperty: string;
    listName: string;
    onLeftSelect: () => void;
    onRightSelect: () => void;
    onShiftClick: () => void;
}


const SideBarItem: React.FC<Props> = ({ item, listName, textProperty, onLeftSelect, onRightSelect, onShiftClick }) => {

    const baseClassList = "w-100 sb-item list-group-item d-flex justify-content-between align-items-center p-1";

    const [ItemState, setItemState] = useState({
        // quantity: this.props.item.quantity,
        isTooltipVisible: false,
        isPlayingAnim: false,
        classList: baseClassList
    });



    //Component Did Mount Replacement and Componetn Did Update Replacement

    //No dependency array: If no dependency array is provided, useEffect runs after every render. 
    //Empty dependency array([]): useEffect runs only once, after the initial render.
    //Dependency array with values: useEffect runs after the initial render and then again whenever any of the values in the dependency array change between renders.
    useEffect(() => {
        playAnimation();
        // The dependency array ensures this effect runs only when 'value' changes
    }, [ItemState]);


    /*
        //Watch for changes to quantity and set the state, triggering component did update
        static getDerivedStateFromProps(nextProps, prevState) {
        //if(nextProps.item.quantity)
        if (prevState.quantity !== nextProps.item.quantity) {
            return {
                quantity: nextProps.item.quantity
            };
        }
        return null;
    }
        */


    /*
    componentDidUpdate(prevProps, prevState) {
        if (this.props.item !== prevProps.item) {
            console.log('hello?')
            this.playAnimation();
        }
    }
    */
    const onMouseOverHandler = () => {
        setItemState(prev => ({ ...prev, ["isTooltipVisible"]: true }));
    }

    const onMouseOutHandler = () => {
        setItemState(prev => ({ ...prev, ["isTooltipVisible"]: false }));
    }

    const playAnimation = () => {
        const classList = [(ItemState.classList)];
        //console.log(classList)

        /*
        if(this.state.isPlayingAnim){
            //Reset the animation
            this.setState({ classList: this.baseClassList }, ()=> {
                classList.push("glow-anim");
            });
        */
        classList.push("glow-anim"); //Play the animation

        setItemState(prev => ({ ...prev, classList: classList.join(' '), isPlayingAnim: true }));
    }

    const onAnimationEndHandler = () => {
        setItemState(prev => ({ ...prev, classList: "w-100 sb-item list-group-item d-flex justify-content-between align-items-center p-1", isPlayingAnim: false }));
    }

    // listname item

    return (
        <li
            className="sb-item-container d-flex align-items-center"
        >
            <div
                className={ItemState.classList}
                onAnimationEnd={onAnimationEndHandler}
                onClick={() => {
                    onLeftSelect(item, listName);
                }}
                onContextMenu={(e) => {
                    onRightSelect(e, item, listName); //e is provided to prevent context menu from opening, listname is needed to know which list to add to
                }}
                onMouseOver={onMouseOverHandler}
                onMouseOut={onMouseOutHandler}
            >
                <span className="badge badge-primary badge-pill mr-1">{item.quantity}</span>
                <div className="text-truncate">
                    {item[textProperty]}
                </div>

                <div className="flex-grow-1 text-right">
                    <ManaIcons mana={item.manaCost} />
                </div>
            </div>

            <span className="sb-item-arrow-container">
                <button
                    className="sb-item-arrow"
                    onClick={(e) => onShiftClick(e, item, listName)}>
                    ▲
                </button>

                <button
                    className="sb-item-arrow"
                    onClick={(e) => onShiftClick(e, item, listName, false)}>
                    ▼
                </button>
            </span>

            {this.state.isTooltipVisible ?
                <span
                    className="sb-tooltip"
                    alt="ERROR"
                >
                    <div className="sb-item-info">
                        <p>{item.name}, Cost: {item.cmc}</p>
                        <p>{item.type}</p>
                        <p>{item.rarity}</p>

                        <p>{item.text}</p>
                        {(item.power && item.toughness) &&
                            <p>Power: {item.power} / Toughness: {item.toughness}</p>
                        }
                    </div>

                    <div className="sb-item-info">
                        Left-Click to Add, Right-Click to Remove
                    </div>
                </span> : <React.Fragment></React.Fragment>
            }
        </li>
    );
}


export default SideBarItem;