import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import CartContextProvider from './context/cartContext/CartContextProvider'
import Rutas from './routes/Rutas'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='container'>
      <CartContextProvider>
        <NavBar />
        <Rutas />
        <ToastContainer />
      </CartContextProvider>
    </div>
  )
}

export default App
