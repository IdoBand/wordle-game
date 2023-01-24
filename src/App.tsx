import { useState, useMemo } from 'react';
import { userContext } from './providers/userContext';
import Header from './components/Header/Header';
import { SharedLogicFunctions } from './components/gameLogic';
import { wordleContext } from './providers/wordleContext';


function App() {

  const [user, setUser] = useState(null)

  const providerValue = useMemo(() => ({user, setUser}), [user, setUser])

  const wordleAPI = SharedLogicFunctions();
  

  return (
    <>
      <userContext.Provider value={providerValue}>
        <wordleContext.Provider value={wordleAPI}>
          <Header />
        </wordleContext.Provider>
      </userContext.Provider>
    </>
    
  )
};

export default App



    // 