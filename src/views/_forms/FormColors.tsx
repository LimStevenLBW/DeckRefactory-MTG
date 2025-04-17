import React, { useState } from 'react';
import manaC from '../../images/mana/C.svg';
import manaB from '../../images/mana/B.svg';
import manaU from '../../images/mana/U.svg';
import manaR from '../../images/mana/R.svg';
import manaG from '../../images/mana/G.svg';
import manaW from '../../images/mana/W.svg';
import './FormColors.css'

// Define type for the inner dictionary object
interface ManaSymbol {
    queryName: string;
    imageSrc: string;
    isActive: boolean;
}


// Define type for the outer dictionary (record)
type ManaSymbolsDict = Record<string, ManaSymbol>;

const FormColors: React.FC = () => {

    const [manaSymbols, setManaSymbols] = useState<ManaSymbolsDict>({
        colorless: { queryName: 'colorless', imageSrc: manaC, isActive: false },
        white: { queryName: 'white', imageSrc: manaW, isActive: false },
        black: { queryName: 'black', imageSrc: manaB, isActive: false },
        green: { queryName: 'green', imageSrc: manaG, isActive: false },
        red: { queryName: 'red', imageSrc: manaR, isActive: false },
        blue: { queryName: 'blue', imageSrc: manaU, isActive: false }
    });


    /**
     * Disables or Enables a color, 
     * Updates the state and returns a colorlist to SearchFormContainer
     */
    const toggleColor = (color: string) => {
        //e.preventDefault();
        //const name = (e.currentTarget.name);
        let manaColor = manaSymbols[color];
        manaColor.isActive = !manaColor.isActive; //Toggle color active state

        /*
        let colorList = [];
        this.srcList.forEach((element) => { //Fills an array with colors from the srcList
            if (element.active) colorList.push(element.queryName);
        });
    
        this.setState({ [name]: color }, () => {
            this.props.handleColors(colorList); //Callback to handleColors
        });
        */
    };

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

export default FormColors;