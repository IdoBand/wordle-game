import './style.scss';
import { WordleApp } from './components/WordleApp';


function App() {

  document.addEventListener('keydown', (e) => {
    console.log(e)
    //   if (e.keyCode >= 65 && e.keyCode <= 90) {
    //       addLetter(e.key.toUpperCase());
    //   } else if (e.code === 'Backspace') {
    //       removeLetter();
    //   } else if (e.code === 'Enter') {
    //       enterClickHandler();
    //   }
    });
  return (
    <>
    <WordleApp />
    </>
  )
};

export default App

