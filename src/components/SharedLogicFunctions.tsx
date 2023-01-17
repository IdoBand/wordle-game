import { useState, useEffect, useContext, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Tile } from '../interface/interface';
import { EncryptedObject } from '../interface/interface';
import { serverReqContext } from '../providers/serverReqContext';
export function SharedLogicFunctions() {



// a message to interact with the user
const [dialogMessage, setDialogMessage ] = useState({
                                                    message: 'Good Luck!',
                                                    className: 'basic'
                                                                            });

const [gameState, setGameState] = useState({
                                            currentRowFirstTile: 0,
                                            currentTile: 0,
                                            guessAttempts: 0
                                                                });

const [encryptedObject, setEncryptedObject] = useState(null)
async function getWordFromServer() {

    const response = await fetch('http://localhost:3333/getWord');
    const encryptedObject = await response.json();
    setEncryptedObject(encryptedObject);
};


async function checkWordAtServer (guess: string, requestObject: EncryptedObject = encryptedObject!) {
    if (requestObject) {
        const attempt = {guess: guess,
                        encryptedWord: requestObject.encrypted,
                        iv: requestObject.iv.data
                        }
        const response = await fetch(`http://localhost:3333/guessWord`, {method: 'post',
                                                                        headers: {'Content-Type': 'application/json'},
                                                                        body: JSON.stringify(attempt)});
                        
        const resultArray = await response.json();
        return resultArray;
    };
};



const userInfo = {
    name: 'user',
    email: '',
};


// let location =useLocation()

// useEffect(()=> {
//     console.log(location)
//     if (location.pathname === '/App') {
//         window.addEventListener("keyup", (handleKeyPressed));
//         console.log('added event listener')
//     } else {
//         window.removeEventListener("keyup", handleKeyPressed);
//         console.log('removed event listener')
//     }
// },[])

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
    if (gameState.currentTile !== 999) {
        const newTiles: Tile[] = [];

        tiles.forEach(tile => {
            if (tile.id === gameState.currentTile) tile.content = letter;
            newTiles.push(tile)
        });
        setTiles(newTiles);

    if (!( (gameState.currentTile+1) % 5 === 0)) {
        gameState.currentTile += 1;
    } 
    }
};

const resetGame = () => {
    const newTiles: Tile[] = [];
    tiles.forEach(tile => {
        if (tile.content !== '') tile.content = '';
        newTiles.push(tile)
    });
    setTiles(newTiles);

    setGameState({
        currentRowFirstTile: 0,
        currentTile: 0,
        guessAttempts: 0
                            });

    setDialogMessage({
        message: 'Good Luck!',
        className: 'basic'
                                });
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
    if (gameState.currentTile !== 999) {
        const tileIdToRemove = findLastFullTile();
        const currentRowFirstTile = gameState.currentRowFirstTile;
    
        if (tileIdToRemove !== undefined && ( (currentRowFirstTile <= tileIdToRemove && tileIdToRemove <= currentRowFirstTile + 4))) {

            const newTiles: Tile[] = [];
            tiles.forEach(tile => {
                if (tile.id === tileIdToRemove ) tile.content = '';
                newTiles.push(tile);
            });
            setTiles(newTiles);
            // deletion occured -> update current tile.
            gameState.currentTile = tileIdToRemove;
        };
    };                            
};

const enterClickHandler = () => {

    if (gameState.guessAttempts < 6 && tiles[gameState.currentRowFirstTile +4].content !== '' ){
    
        let wordToCheck: string = '';
        // extract the word from relevant row
        const firstTileIndex: number = gameState.currentRowFirstTile;
        for (let i = firstTileIndex; i <= firstTileIndex+4 ; i++) {wordToCheck += tiles[i].content;}

        checkWordAtServer(wordToCheck)
            .then(res => {
                if (res) {checkWordValidity(res)}
            });
            
        // restart word to check
        wordToCheck = '';
    };
};

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

useEffect(() => {
    window.addEventListener("keyup", (handleKeyPressed));
    // console.log('added event listener');
    return () => {
        window.removeEventListener("keyup", handleKeyPressed);
        // console.log('removed event listener');
    }
}, [handleKeyPressed]);



const checkWordValidity = (resultArray: string[]) => {

    const newTiles: Tile[] = [];
    
    let letterIndex = 0;
    let bullLetters = 0;
    let cowLetters = 0;

    tiles.forEach(tile => {
        if ( gameState.currentRowFirstTile <= tile.id && tile.id <= gameState.currentRowFirstTile + 4) {
            tile.className = resultArray[letterIndex][1];

            switch (tile.className) {
                case 'tile-bull': bullLetters += 1;
                case 'tile-cow': cowLetters +=1;
                }
            letterIndex += 1;
        }
        newTiles.push(tile)});
    setTiles(newTiles);

    determineWinOrNot(bullLetters, cowLetters);
    
    letterIndex = 0;
    bullLetters = 0;
    cowLetters = 0;
};

const failMessages = [  'Nice Try!',
                        'So Close!',
                        'Don\'t Give Up Yet!',
                        'You\'re Getting There!',
                        'Almost!',
                        'Keep Trying!'];
const determineWinOrNot = (bullLetters: number, cowLetters: number) =>{
    let newMessage: string = dialogMessage.message;
    let newClassName: string = dialogMessage.className;
    let updatedCurrentTile: number;


    if ( bullLetters === 5 ) {
        newMessage = 'Well Done!';
        newClassName = 'victory';
        updatedCurrentTile = 998;
    } else if (cowLetters > 0 ) {
        newMessage = failMessages[Math.floor(Math.random() * failMessages.length)];
        updatedCurrentTile = gameState.currentTile + 1;
    } else {updatedCurrentTile = gameState.currentTile + 1; }
    const newDialogMessage = {
        message: newMessage,
        className: newClassName,
    }

    setDialogMessage(newDialogMessage);
    setGameState({...gameState,
        currentTile: updatedCurrentTile!,
        currentRowFirstTile: gameState.currentRowFirstTile+5,
        guessAttempts: gameState.guessAttempts + 1});
};

return (
    {
    userInfo,
    dialogMessage,
    gameState,
    setGameState,
    tiles,
    setTiles,
    resetGame,
    addLetter,
    removeLetter,
    enterClickHandler,
    getWordFromServer,
    encryptedObject,
    checkWordAtServer,
    }
)}