import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../components/Details/ItemDetailContainer'

const Producto = () => {
  const { id } = useParams()
  return (
    <div className='bodyProducto'>
      <ItemDetailContainer id={id} />
    </div>
  )
}

export default Producto
