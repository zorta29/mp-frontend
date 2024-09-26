
import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Home from './Pages/Home'
import WatchHistory from './Pages/WatchHistory'

function App() {

  return (
    <>
     <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watch-history' element={<WatchHistory/>}/>
    </Routes>

     <Footer/>
    </>
  )
}

export default App
