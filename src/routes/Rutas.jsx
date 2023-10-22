import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Nosotros from '../pages/Nosotros'
import Producto from '../pages/Producto'
import Categoria from '../pages/Categoria'
import Carrito from '../pages/Carrito'
import Compra from '../pages/Compra'


const Rutas = () => {
  return (
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='/About' element={<Nosotros />} />
      <Route path='/category/:categoryid' element={<Categoria />} />
      <Route path='/detalle/:id' element={<Producto />} />
      <Route path='/cart' element={<Carrito />} />
      <Route path='/checkout/:orderId' element={<Compra />} />
    </Routes>
  )
}

export default Rutas