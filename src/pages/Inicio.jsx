import React from 'react'
import ItemListContainer from '../components/Items/ItemListContainer'
import Bienvenida from '../components/Items/Bienvenida'

const Inicio = () => {
  return (
    <div className='bodyInicio'>
    <Bienvenida/>
      {<ItemListContainer />}

    </div>
  )
}

export default Inicio
