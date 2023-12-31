import React from 'react'
import Counter from '../Counter/Counter'
import { IconHeartFilled } from '@tabler/icons-react';
import { IconInfoSquareRoundedFilled } from '@tabler/icons-react';

const ItemDetail = ({ item, onAdd }) => {


  return (
    <div className='cardContainerMax d-flex justify-content-center container'>
      <div className="cardMax card p-3">
        <div className='gifMax'>
          <img src="../src/assets/logos/system-solid-6-shopping.gif" alt="" />
        </div>
        <div className="about-product text-center mt-2">
        {item.stock === 0 && (
          <div className="stock-overlay">
            <p className='sinStock2'>SIN STOCK</p>
          </div>
        )}
        <div className='logos2'>
            <img className='logo' src="/src/assets/logos/cup_logo.png" alt="" />
          </div>
          <div className="imgMax">
            <img src={item.img} alt={item.title} />
          </div>
          <div className='infoMax'>
            <h4 className="mt-0 text-black-50">{item.title} BLEND</h4>
            <h6>Categoría: <span className='sunny upperCase'>{item.category}</span> </h6>
          </div>
        </div>
        <div className="stats mt-2">
          <div className="descriptionMax">
            <p>&nbsp;&nbsp;&nbsp;DESCRIPCION </p>{item.description}
          </div>
          <div className="priceMax">
            <p className='price'> $ {item.price}</p>
          </div>
        </div>
        <div className="">
        <Counter onAdd={onAdd} stock={item.stock} />
      </div>
        {item.stock === 0 ? (<h3 className="boxMax red">SIN STOCK</h3>) : (<h3 className="boxMax">Quedan: {item.stock} Unidades</h3>)}
      </div>
      
      <hr className="divider " />


    </div>
  )
}

export default ItemDetail
