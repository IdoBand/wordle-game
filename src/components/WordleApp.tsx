import Tiles from './Tiles';
import Keyboard from './Keyboard'
import IndicatorsMap from './IndicatorsMap';
import { SharedLogicFunctions } from './SharedLogicFunctions';
import { wordleContext } from '../providers/wordleContext';
import DialogMessage from './DialogMessage';

export function WordleApp() {

  return (
    
      <section id="page-container" >

        <main id="tiles">
          <Tiles />
        </main>

        <DialogMessage />

        <main id="keyboard-map-container">
          <IndicatorsMap />
          <Keyboard />
          <div id="filler" />
        </main>

      </section>

  )
    
}
