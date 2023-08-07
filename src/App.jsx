import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './common/Header/Header'
import Home from './pages/Home/Home'
import Footer from './common/Footer/Footer'
import Detail from './pages/Detail/Detail'
import { Body } from './pages/Body/Body'

function App() {

  return (
    <>
      <div>
          <Header/>
          <Body/>
          <Footer/>
      </div>
    </>
  )
}

export default App
