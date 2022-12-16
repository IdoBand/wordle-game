
import Tiles from './Tiles';
import Keyboard from './Keyboard'
import IndicatorsMap from './IndicatorsMap';
import { SharedLogicFunctions } from './SharedLogicFunctions';
import { wordleContext } from '../providers/wordleContext';

export function WordleApp() {

  const wordleAPI = SharedLogicFunctions();

  return (
    <wordleContext.Provider value={wordleAPI}>
      <section id="page-container" >

        <main id="tiles">
          <Tiles />
        </main>

        <div id="dialog">
              <div id="dialog-message">
                  <h3>Done!</h3>
              </div>
        </div>

        <Keyboard />

        <IndicatorsMap />

      </section>
    </wordleContext.Provider>

  )
    
}

// // .possibleToAdd is false when row is completed & word hasnt been checked.
// const [gameState, setGameState] = useState({possibleToAdd: true,
//   rowsFirstTile: 1,
//   currentTile: 1,
//                        });

// const [tiles, setTiles] = useState([
// {id:1, content: '', className: 'tile'},
// {id:2, content: '', className: 'tile'},
// {id:3, content: '', className: 'tile'},
// {id:4, content: '', className: 'tile'},
// {id:5, content: '', className: 'tile'},

// {id:6, content: '', className: 'tile'},
// {id:7, content: '', className: 'tile'},
// {id:8, content: '', className: 'tile'},
// {id:9, content: '', className: 'tile'},
// {id:10, content: '', className: 'tile'},

// {id:11, content: '', className: 'tile'},
// {id:12, content: '', className: 'tile'},
// {id:13, content: '', className: 'tile'},
// {id:14, content: '', className: 'tile'},
// {id:15, content: '', className: 'tile'},

// {id:16, content: '', className: 'tile'},
// {id:17, content: '', className: 'tile'},
// {id:18, content: '', className: 'tile'},
// {id:19, content: '', className: 'tile'},
// {id:20, content: '', className: 'tile'},

// {id:21, content: '', className: 'tile'},
// {id:22, content: '', className: 'tile'},
// {id:23, content: '', className: 'tile'},
// {id:24, content: '', className: 'tile'},
// {id:25, content: '', className: 'tile'},

// {id:26, content: '', className: 'tile'},
// {id:27, content: '', className: 'tile'},
// {id:28, content: '', className: 'tile'},
// {id:29, content: '', className: 'tile'},
// {id:30, content: '', className: 'tile'}
//     ]);


// const FindNextEmptyTile = () =>{
// for (let tile of tiles) {
// if (tile.content === '' ) {
// return tile.id;
// };
// };
// return null;
// }

// const addLetter = (letter: string) => {
// const emptyTileID = FindNextEmptyTile();

// if (emptyTileID && gameState.possibleToAdd === true) {
// console.log('hi', emptyTileID)

// const newTiles: {id: number, content: string, className: string}[] = [];

// tiles.forEach(tile => {
// tile.id === emptyTileID ?  tile.content = letter : tile.content = tile.content ;
// newTiles.push(tile)
// });
// setTiles(newTiles);
// gameState.currentTile += 1;
// }
// (gameState.currentTile-1) % 5 === 0 ? gameState.possibleToAdd = false : gameState.possibleToAdd = true ;
// };



// const checkWordValidity = () => {
// const firstTileIndex: number = gameState.rowsFirstTile;

// let WordtoCheck: string;

// tiles.forEach(tile => {
// if (tile.id <= firstTileIndex + 4) WordtoCheck += tile.content;

// })
// // console.log(WordtoCheck)


