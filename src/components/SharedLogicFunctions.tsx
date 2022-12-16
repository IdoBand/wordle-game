import { useState } from 'react';

export function SharedLogicFunctions() {

const wordBank = ['POWER', 'WORLD', 'PIZZA', 'BUILD', 'SUSHI', 'WIRED', 'WIERD', 'HELLO', 'REACT', 'ABORT'];

// .possibleToAdd is false when row is completed & word hasnt been checked.
const [gameState, setGameState] = useState({
                                            wordToGuess: 'POWER',
                                            possibleToAdd: true,
                                            possibleToRemove: true,
                                            rowsFirstTile: 1,
                                            nextEmptyTile: 1,
                                            rowsPlayed: [5],
                                            lastWordChecked: '',
                                                                });

const [tiles, setTiles] = useState([
                                    {id:1, content: '', className: 'tile'},
                                    {id:2, content: '', className: 'tile'},
                                    {id:3, content: '', className: 'tile'},
                                    {id:4, content: '', className: 'tile'},
                                    {id:5, content: '', className: 'tile'},

                                    {id:6, content: '', className: 'tile'},
                                    {id:7, content: '', className: 'tile'},
                                    {id:8, content: '', className: 'tile'},
                                    {id:9, content: '', className: 'tile'},
                                    {id:10, content: '', className: 'tile'},

                                    {id:11, content: '', className: 'tile'},
                                    {id:12, content: '', className: 'tile'},
                                    {id:13, content: '', className: 'tile'},
                                    {id:14, content: '', className: 'tile'},
                                    {id:15, content: '', className: 'tile'},

                                    {id:16, content: '', className: 'tile'},
                                    {id:17, content: '', className: 'tile'},
                                    {id:18, content: '', className: 'tile'},
                                    {id:19, content: '', className: 'tile'},
                                    {id:20, content: '', className: 'tile'},

                                    {id:21, content: '', className: 'tile'},
                                    {id:22, content: '', className: 'tile'},
                                    {id:23, content: '', className: 'tile'},
                                    {id:24, content: '', className: 'tile'},
                                    {id:25, content: '', className: 'tile'},

                                    {id:26, content: '', className: 'tile'},
                                    {id:27, content: '', className: 'tile'},
                                    {id:28, content: '', className: 'tile'},
                                    {id:29, content: '', className: 'tile'},
                                    {id:30, content: '', className: 'tile'},
                            ]);

// returns the first tile that its content is an empty string. if there isnt one => return undefined.
const FindNextEmptyTile = () =>{
    for (let tile of tiles) {
        if (tile.content === '' ) return tile.id;;
    };
    return undefined;
}

const addLetter = (letter: string) => {

    const emptyTileID = FindNextEmptyTile();

    if (emptyTileID && gameState.possibleToAdd) {
        
        const newTiles: {id: number, content: string, className: string}[] = [];

        tiles.forEach(tile => {
            if (tile.id === emptyTileID) tile.content = letter;
            newTiles.push(tile)
        });
        setTiles(newTiles);
        
        // setGameState({...gameState,
        // nextEmptyTile: gameState.nextEmptyTile + 1})
        gameState.nextEmptyTile += 1;
        gameState.possibleToRemove = true;
        console.log("next empty tile ADD", gameState.nextEmptyTile)
    }
    // if ((gameState.nextEmptyTile-1) % 5 === 0) gameState.possibleToAdd = false;
    
    if ((gameState.nextEmptyTile-1) % 5 === 0) setGameState({...gameState,
                                                                possibleToAdd:false});

};

// returns the last tile that its content is not an empty string.
const findLastFullTile = () => {
    let tileIdToRemove: number | undefined = undefined;
    for (let tile of tiles) {
            if (tile.content !== '' ) {
                tileIdToRemove = tile.id;
            };
    };
    return tileIdToRemove;
}

const removeLetter = () => {
    if (gameState.possibleToRemove === true) {
        const tileIdToRemove = findLastFullTile();
        if (tileIdToRemove) {

            const newTiles: {id: number, content: string, className: string}[] = [];
            tiles.forEach(tile => {
                if (tile.id === tileIdToRemove) tile.content = '';
                newTiles.push(tile);
            });
            setTiles(newTiles);
            // deletion occured -> update nextEmptyTile.
            gameState.nextEmptyTile -= 1;
            // when addLetter finds that the last tile of the row has been filled it disables possibleToAdd.
            // so in case of entering 5 letters & no ENTER, enabling of addLetter is needed.
            if (gameState.possibleToAdd === false) { gameState.possibleToAdd = true};
        };
    };
    // check if the content of the first tile of the row is ''. if true disable remove.
    if (findLastFullTile() as number % 5 === 0) {gameState.possibleToRemove = false};
};

// when ENTER is clicked
const ExtractWordFromRow = () => {

    if ((findLastFullTile() as number) % 5 === 0){
        let wordToCheck: string = '';

        const firstTileIndex: number = gameState.rowsFirstTile;
        tiles.forEach(tile => {
            if (firstTileIndex <= tile.id && tile.id <= firstTileIndex + 4) wordToCheck += tile.content});

        console.log(wordToCheck)
        
        const x= gameState.rowsPlayed[gameState.rowsPlayed.length-1] + 5
        gameState.rowsPlayed.push(x)
        setGameState({...gameState,
            possibleToAdd: true,
            possibleToRemove: false,
            rowsFirstTile: gameState.rowsFirstTile + 5,
            lastWordChecked: wordToCheck,
            
            })

            // restart word to check
            wordToCheck = '';
            console.log(gameState)
    };
};

// const checkWordValidity = (word: string) => {
//     const tilesToCheck =[];
//     for (let i = gameState.rowsFirstTile;  + gameState.rowsFirstTile + 4; i++) {
//         tilesToCheck.push(i);
//     }
//     console.log(tilesToCheck)
// }


return (
    {
    gameState,
    setGameState,
    tiles,
    setTiles,
    addLetter,
    removeLetter,
    ExtractWordFromRow,

    }
)}