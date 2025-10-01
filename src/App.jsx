import { Outlet } from 'react-router'
import './App.css'
import Books from './Components/Books'
import Hero from './Components/Hero'
import Nabvar from './Components/Nabvar'

function App() {


  return (
    <>
      <Nabvar></Nabvar>
      <Outlet></Outlet>
      {/* <Hero></Hero>
      <Books></Books> */}
      
    </>
  )
}

export default App
