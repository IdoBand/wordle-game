import { wordleContext } from "../providers/wordleContext";
import { useContext } from "react";

export default function Keyboard() {
    const firsRow = ['Q','W','E','R','T','Y','U','I','O','P'];
    const secondRow = ['A','S','D','F','G','H','J','K','L'];
    const thirdRow = ['Z','X','C','V','B','N','M'];

    const {
        addLetter,
        removeLetter,
        enterClickHandler,
    } = useContext<any>(wordleContext);

    function HandleClick(event: React.MouseEvent<HTMLButtonElement>) {
        const buttonClicked = event.target.id;
        if (buttonClicked !== 'enter' && buttonClicked !== 'back'){
                addLetter(buttonClicked);
        } else if (buttonClicked === 'back') {
                removeLetter();
        } else {
                enterClickHandler();
        }
    };

    return (
    <main id="keyboard">
        <div id="first-row" className="keyboard-row">
            {firsRow.map(key => 
                <button key={key} onClick={HandleClick} className="key" id={key} type="button">{key}</button>)}
        </div>
        <div id="second-row" className="keyboard-row">
        {secondRow.map(key => 
                <button key={key} onClick={HandleClick} className="key" id={key} type="button">{key}</button>)}
            
        </div>
        <div id="third-row" className="keyboard-row">
            <button onClick={HandleClick} className="key" id="enter" type="button">ENTER ↲</button>
            {thirdRow.map(key => 
                <button key={key} onClick={HandleClick} className="key" id={key} type="button">{key}</button>)}
            <button onClick={HandleClick} className="key" id="back" type="button">← BACK</button>
        </div>
    </main>
    );
  }
