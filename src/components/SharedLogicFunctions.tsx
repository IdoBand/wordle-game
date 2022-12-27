import { useState, useEffect } from 'react';

export function SharedLogicFunctions() {

const wordBank = ['POWER', 'WORLD', 'PIZZA', 'BUILD', 'SUSHI', 'WIRED', 'WIERD', 'HELLO', 'REACT', 'ABORT', 'GLOVE'];

// a message to interact with the user
const [dialogMessage, setDialogMessage ] = useState({
                                                    message: 'Good Luck!',
                                                    className: 'basic'
                                                                            });

const [gameState, setGameState] = useState({
                                            wordToGuess: 'GLOVE',
                                            currentRowFirstTile: 0,
                                            currentTile: 0,
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
                                    {id:0, content: '', className: 'tile'},
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
                            ]);

const addLetter = (letter: string) => {

        const newTiles: {id: number, content: string, className: string}[] = [];

        tiles.forEach(tile => {
            if (tile.id === gameState.currentTile) tile.content = letter;
            newTiles.push(tile)
        });
        setTiles(newTiles);

    if (!( (gameState.currentTile+1) % 5 === 0)) {
        gameState.currentTile += 1;
    } else {
        console.log('done');
    };
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
    
    const tileIdToRemove = findLastFullTile();
    const currentRowFirstTile = gameState.currentRowFirstTile;
 
    if (tileIdToRemove !== undefined && ( (currentRowFirstTile <= tileIdToRemove && tileIdToRemove <= currentRowFirstTile + 4))) {

        const newTiles: {id: number, content: string, className: string}[] = [];
        tiles.forEach(tile => {
            if (tile.id === tileIdToRemove ) tile.content = '';
            newTiles.push(tile);
        });
        setTiles(newTiles);
        // deletion occured -> update current tile.
        gameState.currentTile = tileIdToRemove;
    };                                   
};

const enterClickHandler = () => {

    if (tiles[gameState.currentRowFirstTile +4].content !== ''){

        let wordToCheck: string = '';
        // extract the word from relevant row
        const firstTileIndex: number = gameState.currentRowFirstTile;
        for (let i = firstTileIndex; i <= firstTileIndex+4 ; i++) {wordToCheck += tiles[i].content;}

        checkWordValidity();
       
        setGameState({...gameState,
                        currentRowFirstTile: gameState.currentRowFirstTile + 5,
                        lastWordChecked: wordToCheck,});
        // restart word to check
        wordToCheck = '';
    };
};

const checkWordValidity = () => {

    const newTiles: {id: number, content: string, className: string}[] = [];
    
    let letterIndex = 0;
    let bullLetters = 0;
    let cowLetters = 0;

    tiles.forEach(tile => {
        if ( gameState.currentRowFirstTile <= tile.id && tile.id <= gameState.currentRowFirstTile + 4) {
            tile.className = lettersHeadToHead(tile.content, letterIndex);

            switch (tile.className) {
                case 'tile-bull': bullLetters += 1;
                case 'tile-cow': cowLetters +=1;
                }
            letterIndex += 1;
        }
        newTiles.push(tile)});
    setTiles(newTiles);

    gameState.currentTile += 1;
    
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
                        'You\'re Getting There!'];
const determineDialogMessage = (bullLetters: number, cowLetters: number) =>{
    let newMessage: string = dialogMessage.message;
    let newClassName: string = dialogMessage.className;
    if ( bullLetters === 5 ) {
        newMessage = 'Well Done!';
        newClassName = 'victory';
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