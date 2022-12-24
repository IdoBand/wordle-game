import './style.scss';
import { useState, useMemo } from 'react';
import { userContext } from './providers/userContext';
import Header from './components/Header';

function App() {

  const [user, setUser] = useState(null)

  const providerValue = useMemo(() => ({user, setUser}), [user, setUser])

  return (
    <>
      <userContext.Provider value={providerValue}>
        <Header />
      </userContext.Provider>
    </>
    
  )
};

export default App

