export interface Deck {
    info: {
        name: string;
        format: string;
        playstyle: string;
        description: string;
        author: string;
        lastUpdated: string;
        updated: string;
        colorIdentity: string;
        colors: string[];
        cmc: number;
        mainCnt: number;
        sideCnt: number;
        miscCnt: number;
    },
    list: {
        main: [],
        side: [],
        misc: [],
    }
};

export function GetEmptyDeck() {
    let myDeck: Deck = {
        info: {
            name: "",
            format: "",
            playstyle: "",
            description: "",
            author: "",
            lastUpdated: "",
            updated: "",
            colorIdentity: "",
            colors: [],
            cmc: 0,
            mainCnt: 0,
            sideCnt: 0,
            miscCnt: 0,
        },
        list: {
            main: [],
            side: [],
            misc: [],
        }
    }
    return myDeck;
}