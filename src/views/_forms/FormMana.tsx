import React, { useState } from 'react';
import manaC from '../../../images/mana/C.svg';
import manaB from '../../../images/mana/B.svg';
import manaU from '../../../images/mana/U.svg';
import manaR from '../../../images/mana/R.svg';
import manaG from '../../../images/mana/G.svg';
import manaW from '../../../images/mana/W.svg';
import './FormMana.css'
import { getColorIdentity } from './../../utils/mtgDeck';

interface Props {
    ReturnColorList: (value: string[]) => void;
}

// Define type for the inner dictionary object
interface ManaSymbol {
    queryName: string;
    imageSrc: string;
    isActive: boolean;
}

// Define type for the outer dictionary (record)
type ManaSymbolsDict = Record<string, ManaSymbol>;

const FormMana: React.FC<Props> = ({ ReturnColorList }) => {

    const [manaSymbols, setManaSymbols] = useState<ManaSymbolsDict>({
        colorless: { queryName: 'colorless', imageSrc: manaC, isActive: false },
        white: { queryName: 'white', imageSrc: manaW, isActive: false },
        black: { queryName: 'black', imageSrc: manaB, isActive: false },
        green: { queryName: 'green', imageSrc: manaG, isActive: false },
        red: { queryName: 'red', imageSrc: manaR, isActive: false },
        blue: { queryName: 'blue', imageSrc: manaU, isActive: false }
    });


    /**
     * Disables or Enables a mana color, 
     * Updates the state and returns a colorlist to SearchFormContainer
     */
    const toggleColor = (color: string) => {
        //e.preventDefault();
        //const name = (e.currentTarget.name);
        // const manaColor = manaSymbols[color];
        //manaColor.isActive = !manaColor.isActive; //Toggle color active state

        setManaSymbols(prev => ({
            ...prev,
            [color]: { ...prev[color], isActive: !prev[color].isActive },
        }));

        //Update list of selected mana colors
        let colorList: string[] = [];

        Object.values(manaSymbols).forEach((value) => {
            if (value.isActive) colorList.push(value.queryName);
        });

        ReturnColorList(colorList);

    }


    /*
        srcList = [];
     
        componentDidMount() {
            this.srcList = [];
     
            for (let key of Object.keys(this.state)) {
                this.srcList.push(this.state[key])
            }
        }
            */
    return (
        <React.Fragment>

            {Object.entries(manaSymbols).map(([key, symbol]) => (
                <button
                    key={key}
                    onClick={() => toggleColor(key)}
                    className={`mana-button ${symbol.isActive ? 'active' : ''}`}
                >
                    <img
                        className={symbol.isActive ? "mana-color-select" : "mana-color-select-disabled"}
                        src={symbol.imageSrc}
                        alt={symbol.queryName}
                        title={symbol.queryName}
                    />
                </button>
            ))}

        </React.Fragment>
    );

}

export default FormMana;