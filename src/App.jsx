import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './common/Header/Header'
import Home from './pages/Home/Home'
import Footer from './common/Footer/Footer'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
