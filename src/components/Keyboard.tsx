import { wordleContext } from "../providers/wordleContext";
import { useContext } from "react";

export default function Keyboard() {

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


    // document.addEventListener('keydown', (e) => {
    //     console.log(e)
    //     //   if (e.keyCode >= 65 && e.keyCode <= 90) {
    //     //       addLetter(e.key.toUpperCase());
    //     //   } else if (e.code === 'Backspace') {
    //     //       removeLetter();
    //     //   } else if (e.code === 'Enter') {
    //     //       enterClickHandler();
    //     //   }
    //     });
 

    return (
    <main id="keyboard">
        <div id="first-row" className="keyboard-row">
            <button onClick={HandleClick} className="key" id="Q" type="button">Q</button>
            <button onClick={HandleClick} className="key" id="W" type="button">W</button>
            <button onClick={HandleClick} className="key" id="E" type="button">E</button>
            <button onClick={HandleClick} className="key" id="R" type="button">R</button>
            <button onClick={HandleClick} className="key" id="T" type="button">T</button>
            <button onClick={HandleClick} className="key" id="Y" type="button">Y</button>
            <button onClick={HandleClick} className="key" id="U" type="button">U</button>
            <button onClick={HandleClick} className="key" id="I" type="button">I</button>
            <button onClick={HandleClick} className="key" id="O" type="button">O</button>
            <button onClick={HandleClick} className="key" id="P" type="button">P</button>
        </div>
        <div id="second-row" className="keyboard-row">
            <button onClick={HandleClick} className="key" id="A" type="button">A</button>
            <button onClick={HandleClick} className="key" id="S" type="button">S</button>
            <button onClick={HandleClick} className="key" id="D" type="button">D</button>
            <button onClick={HandleClick} className="key" id="F" type="button">F</button>
            <button onClick={HandleClick} className="key" id="G" type="button">G</button>
            <button onClick={HandleClick} className="key" id="H" type="button">H</button>
            <button onClick={HandleClick} className="key" id="J" type="button">J</button>
            <button onClick={HandleClick} className="key" id="K" type="button">K</button>
            <button onClick={HandleClick} className="key" id="L" type="button">L</button>
        </div>
        <div id="third-row" className="keyboard-row">
            <button onClick={HandleClick} className="key" id="enter" type="button">ENTER ↲</button>
            <button onClick={HandleClick} className="key" id="Z" type="button">Z</button>
            <button onClick={HandleClick} className="key" id="X" type="button">X</button>
            <button onClick={HandleClick} className="key" id="C" type="button">C</button>
            <button onClick={HandleClick} className="key" id="V" type="button">V</button>
            <button onClick={HandleClick} className="key" id="B" type="button">B</button>
            <button onClick={HandleClick} className="key" id="N" type="button">N</button>
            <button onClick={HandleClick} className="key" id="M" type="button">M</button>
            <button onClick={HandleClick} className="key" id="back" type="button">← BACK</button>
        </div>
    </main>
    );
  }

