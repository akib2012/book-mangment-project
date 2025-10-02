import { createContext, useState } from 'react'
import { Outlet, useNavigation } from 'react-router' // <-- react-router-dom
import './App.css'
import Books from './Components/Books'
import Hero from './Components/Hero'

import LoadingSpinner from './Components/LoadingSpinner'
import Nabvar from './Components/Nabvar'


export const Cartcontest = createContext({})

function App() {
  const navigation = useNavigation() //  by this i can set the loader ... 
  const [list, setList] = useState([])

  return (
    <Cartcontest.Provider value={{ list, setList }}>
      <Nabvar></Nabvar>
      {navigation?.state === 'loading' ? (  // inner navigation .state e data pawa jai !!!
        <LoadingSpinner />
      ) : (
        <Outlet />
      )}
    </Cartcontest.Provider>
  )
}

export default App
