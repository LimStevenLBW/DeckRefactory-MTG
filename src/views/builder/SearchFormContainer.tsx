import React, { useState } from 'react';
import FormContainer from '../_forms/FormContainer';
import FormSearchBar from '../_forms/FormSearchBar';
import FormSelect from '../_forms/FormSelect';
import ButtonDropDown from '../_common/ButtonDropDown';
import FormMana from '../_forms/FormMana';

//import { search, buildEndpoint } from '../../services/mtgSearch';



// Define type for the inner dictionary object
interface Props {
    updateQueriedCards: (value: string) => void;
    addBasicLand: (value: string) => void;
}

type SearchData = {
    format: string;
    type: string;
    cmc: string;
    query: string;
    manaColors: string[];
}

/**
 * Extends Form Container, renders forms for initiating an advanced search.
 */

const SearchFormContainer: React.FC<Props> = ({ updateQueriedCards, addBasicLand }) => {

    const [searchData, setSearchData] = useState<SearchData>({
        format: "",
        type: "",
        cmc: "",
        query: "",
        manaColors: []
    });

    const [isLoadingData, setIsLoadingData] = useState(false);

    /*
     * Assembles a string to store active search filters
     */
    const GetSearchDescription = () => {
        //Destructures the searchData dictionary, ignoring query
        const { format, type, cmc, manaColors } = searchData
        let description = "";

        if (format) description = `${description}${format},`;
        if (type) description = `${description}${type},`;
        if (cmc) description = `${description} Cost: ${cmc},`;
        if (manaColors) description = `${description}${manaColors}`;

        if (description === "") description += "None selected"
        return description;

    }

    /**
     * @Override Used to switch control from the element to React
     * Joi is not needed for this form, only valid options are presented
     */
    const UpdateSelectElementState = (selectElement: React.ChangeEvent<HTMLSelectElement>) => {
        const form = selectElement.currentTarget

        setSearchData(prev => ({
            ...prev,
            [form.name]: form.value // Dynamically updates the property matching `name`
        }));

    };

    const UpdateInputElementState = (selectElement: React.ChangeEvent<HTMLInputElement>) => {
        const form = selectElement.currentTarget

        setSearchData(prev => ({
            ...prev,
            [form.name]: form.value
        }));

    };


    /*
     * Update color selection for search field
     */
    const UpdateManaColorState = (updatedList: string[]) => {
        setSearchData(prev => ({
            ...prev,
            ["manaColors"]: updatedList
        }));
    }

    /*
    *
   
    extractCardData = (data) => {
        let cards = data.cards;
        console.log("ran")

        for (let i = cards.length - 1; i >= 0; i--) {
            if (cards[i].imageUrl) {
                //Do nothing
            }
            else {
                cards.splice(i, 1);
            }
        }

        return cards;
    }
     */

    /**
     * @Override Submits the query with filter options from props
     */
    const doSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        /*
        try {
            let res;
            setIsLoadingData(true), async () => {
                const endpoint = buildEndpoint(this.state.data, 16);
                res = await search(endpoint)
                const { data, headers } = await res;
                sessionStorage.clear(); //Clear out the session data, removing any stored tables before updating
        
                //let cards = this.extractCardData(data);
                // console.log(cards);
        
                this.props.updateQueriedCards(data.cards, headers, endpoint);
                this.setState({ isLoadingData: false });
            })
        }
        catch (ex) {
            this.setState({ isLoadingData: false });
            console.log(ex);
            console.log("error occurred")
        }
            */
    }

    return (
        <React.Fragment>
            <div className="row justify-content-center">
                <div className="col-2 pt-3">
                    <FormSelect
                        name={"format"} //used to identify form data
                        label={"Select a Format"}
                        handler={UpdateSelectElementState}
                        value={searchData.format}
                        options={
                            ["Casual", "Standard", "Modern", "Vintage", "Commander", "Legacy", "Oathbreaker", "Frontier"]
                        }
                    />
                </div>

                <div className="col-2 pt-3">
                    <FormSelect
                        name={"type"} //used to identify form data
                        label={"Select Card Type"}
                        handler={UpdateSelectElementState}
                        value={searchData.type}
                        options={
                            ["Artifact", "Creature", "Enchantment", "Instant", "Land", "Legendary", "Sorcery"]
                        }
                    />
                </div>

                <div className="col-1 pt-3">
                    <FormSelect
                        name={"cmc"} //used to identify form data
                        label={"Select CMC"}
                        handler={UpdateSelectElementState}
                        value={searchData.cmc} //prev set value
                        options={
                            ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10+']
                        }>
                    </FormSelect>
                </div>

                <div className="col-3">
                    <FormSearchBar
                        name={"query"}
                        onChange={UpdateInputElementState}
                        onSubmit={doSubmit}
                        isLoading={isLoadingData}
                        onClick={() => { }}
                    />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-3">
                    <ButtonDropDown
                        buttonLabel="Basic Lands"
                        labels={["Mountain", "Forest", "Island", "Plains", "Swamp"]}
                        onClickHandler={() => { }}
                    />
                </div>
                <div className="col-6">
                    <FormMana
                        ReturnColorList={UpdateManaColorState}
                    />
                </div>
                <div className="col-3">
                    {GetSearchDescription()}
                </div>
            </div>

        </React.Fragment>
    );



}



export default SearchFormContainer;
