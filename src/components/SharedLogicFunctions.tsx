import { useState, useEffect, useCallback } from 'react';
import DialogMessage from './DialogMessage';

export function SharedLogicFunctions() {

const wordBank = ['POWER', 'WORLD', 'PIZZA', 'BUILD', 'SUSHI', 'WIRED', 'WIERD', 'HELLO', 'REACT', 'ABORT', 'GLOVE'];

// a message to interact with the user
const [dialogMessage, setDialogMessage ] = useState({
                                                    message: 'Good Luck!',
                                                    className: 'basic'
                                                                            });


const [gameState, setGameState] = useState({
                                            wordToGuess: 'REACT',
                                            possibleToAdd: true,
                                            possibleToRemove: true,
                                            possibleToEnter: false,
                                            rowsFirstTile: 1,
                                            nextEmptyTile: 1,
                                            lastWordChecked: '',
                                                                });

/// fix hebrew letters bug
const handleKeyPressed = (event: KeyboardEvent) => {
    const { key, 
            keyCode} = event;

    if (keyCode >= 65 && keyCode <= 90) {
        addLetter(event.key.toUpperCase());
    } else if (key === 'Backspace') {
        removeLetter();
    } else if (key === 'Enter') {
        enterClickHandler();
    }
};

const userInfo = {
    name: 'user',
    email: '',
};

useEffect(() => {
    window.addEventListener("keyup", (handleKeyPressed));
    return () => 
        window.removeEventListener("keyup", handleKeyPressed);
}, [handleKeyPressed]);

// game board
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
        gameState.nextEmptyTile += 1;
        gameState.possibleToRemove = true;
        // console.log("next empty tile ADD", gameState.nextEmptyTile)
    }
    if ((gameState.nextEmptyTile-1) % 5 === 0) {setGameState({...gameState,
                                                                possibleToAdd:false,
                                                                possibleToEnter: true})
                                                                console.log('done')};
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
};

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
    if (findLastFullTile() as number % 5 === 0) {gameState.possibleToRemove = false
                                                 gameState.possibleToEnter = false};
};

const enterClickHandler = () => {

    if (gameState.possibleToEnter === true){
        let wordToCheck: string = '';

        // extract the word from relevant row
        // relevant to the gameState only!!!!
        const firstTileIndex: number = gameState.rowsFirstTile;
        tiles.forEach(tile => {
            if (firstTileIndex <= tile.id && tile.id <= firstTileIndex + 4) wordToCheck += tile.content});

        checkWordValidity();

        setGameState({...gameState,
                        possibleToAdd: true,
                        possibleToRemove: false,
                        possibleToEnter: false,
                        rowsFirstTile: gameState.rowsFirstTile + 5,
                        lastWordChecked: wordToCheck,
            });
            // restart word to check
            wordToCheck = '';
    };
};

const checkWordValidity = () => {
    // dinamically create an array of id's to decide which tiles to check
    const tilesIdsToCheck: number[] =[];
    for (let i = gameState.rowsFirstTile; i < gameState.rowsFirstTile+5; i++) {
        tilesIdsToCheck.push(i)};

    const newTiles: {id: number, content: string, className: string}[] = [];
    
    let letterIndex = 0;
    let bullLetters = 0;
    let cowLetters = 0;

    tiles.forEach(tile => {
        if (tilesIdsToCheck.includes(tile.id)) {
            tile.className = lettersHeadToHead(tile.content, letterIndex);

            switch (tile.className) {
                case 'tile-bull': bullLetters += 1;
                case 'tile-cow': cowLetters +=1;
                }
            letterIndex += 1;
        }
        newTiles.push(tile)});
    setTiles(newTiles);
    
    determineDialogMessage(bullLetters, cowLetters);
    
    letterIndex = 0;
    bullLetters = 0;
    cowLetters = 0;
};

// compares letters from guess to letters of word the user need to guess.
const lettersHeadToHead = (tileContent: string, index: number) => {
    const wordToGuess = gameState.wordToGuess;
    if (tileContent === wordToGuess[index]) {
        return 'tile-bull'
    } else if (wordToGuess.includes(tileContent)) {
        return 'tile-cow'
    } else {
        return 'tile'
    }
};

const failMessages = [  'Nice Try!',
                        'So Close!',
                        'Don\'t Give Up Yet!',
                        'You\'re Getting There!']
const determineDialogMessage = (bullLetters: number, cowLetters: number) =>{
    let newMessage: string = dialogMessage.message;
    let newClassName: string = dialogMessage.className;
    if ( bullLetters === 5 ) {
        newMessage = 'Well Done!';
        newClassName = 'victory';

        const newGameState = {...gameState,
                                possibleToAdd: false};
        setGameState(newGameState);

        console.log(gameState)
    } else if (cowLetters > 0 ) {

        newMessage = failMessages[Math.floor(Math.random() * failMessages.length)];
    }

    const newDialogMessage = {
        message: newMessage,
        className: newClassName,
    }
    setDialogMessage(newDialogMessage);

};



return (
    {
    userInfo,
    dialogMessage,
    gameState,
    setGameState,
    tiles,
    setTiles,
    addLetter,
    removeLetter,
    enterClickHandler,
    }
)}