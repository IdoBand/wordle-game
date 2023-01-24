import Tiles from './Tiles/Tiles';
import Keyboard from './Keyboard/Keyboard'
import IndicatorsMap from './IndicatorsMap/IndicatorsMap';
import DialogMessage from './DialogMessage/DialogMessage'

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
