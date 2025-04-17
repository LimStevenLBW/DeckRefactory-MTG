import React, { useState } from 'react';
import manaC from '../../images/mana/C.svg';
import manaB from '../../images/mana/B.svg';
import manaU from '../../images/mana/U.svg';
import manaR from '../../images/mana/R.svg';
import manaG from '../../images/mana/G.svg';
import manaW from '../../images/mana/W.svg';
import './FormColors.css'

interface Color {
    queryName: string;
    imageSrc: string;
    active: boolean;
}

const FormColors: React.FC = () => {
    const [colors, setColors] = useState<Color[]>([
        { queryName: 'colorless', imageSrc: manaC, active: false },
        { queryName: 'white', imageSrc: manaW, active: false },
        { queryName: 'black', imageSrc: manaB, active: false },
        { queryName: 'green', imageSrc: manaG, active: false },
        { queryName: 'red', imageSrc: manaR, active: false },
        { queryName: 'blue', imageSrc: manaU, active: false }
    ]);

    /**
     * Disables or Enables a color, 
     * Updates the state and returns a colorlist to SearchFormContainer
     */
    const toggleColor = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const name = (e.currentTarget.name);
        let color = this.state[name];
        color.active = !color.active; //Toggle color active state

        let colorList = [];
        this.srcList.forEach((element) => { //Fills an array with colors from the srcList
            if (element.active) colorList.push(element.queryName);
        });

        this.setState({ [name]: color }, () => {
            this.props.handleColors(colorList); //Callback to handleColors
        });
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

    render() {
        return (
            <React.Fragment>
                {this.srcList.map(color => {
                    return (
                        <button
                            key={color.queryName}
                            name={color.queryName}
                            onClick={(e) => toggleColor(e)}>

                            <img
                                className={color.active ? "mana-color-select" : "mana-color-select-disabled"}
                                src={color.image}
                                alt="test">
                            </img>
                        </button>
                    );
                })}
            </React.Fragment>
        );
    }
}

export default FormColors;