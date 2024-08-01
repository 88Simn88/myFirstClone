
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Castle from './pages/Castle'
import Garden from './pages/Garden'
import InsideCastle from './pages/InsideCastle'
import Home from './pages/Home'
import PrincessRoom from "./pages/PrincessRoom"
import Knights from './pages/Knights'
import Ministry from './pages/Ministry'
import Navbar from './components/Navbar'
import Outskirts from './pages/Outskirts'


const App = () => {
  
  const location = useLocation()

  return (
   <>
   {location.pathname !== "/" && <Navbar />}
  <Routes>

    <Route exact path="/" element={<Home />}/>
    <Route exact path="/castle" element={<Castle />}/>
    <Route exact path="/castle/ministry" element={<Ministry />} />
    <Route exact path="/castle/garden" element={<Garden />}/>
    <Route exact path="/castle/insidecastle" element={<InsideCastle />}/>
    <Route exact path="/castle/insidecastle/princessroom" element={<PrincessRoom />}/>
    <Route exact path="/castle/outskirts" element={<Outskirts />} />

    <Route exact path="/castle/insidecastle/knights" element={<Knights />} />

  </Routes>
   </>
  )
}

export default App
