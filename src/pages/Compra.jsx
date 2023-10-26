import React from 'react'
import { useLocation } from 'react-router-dom';

const Compra = () => {

  const location = useLocation();
  const state = location.state || {};
  const { orderId, items, total } = state;

  const calcularSubtotal = (item) => {
    return item.price * item.quantity;
  };
  return (
    <div className='bodyCompra'>
      <div className='graciasMain'>
        <h1 className='gracias'>GRACIAS POR <span className='yellow'>ELEGIRNOS</span></h1>
        <br />
        <div className="checkout" >
          <h3 className="tituloOrden"> Orden de Compra </h3>
          <div className="order">
            <p> <span>TU Nº DE ORDEN DE COMPRA ES:</span></p>
            <h2> {orderId}</h2>
            <p>ARTICULOS COMPRADOS:</p>
            <li>
                {items.map((item, index) => (
                  <li className='' key={index}>{item.title} <b className='card1'>&nbsp;BLEND</b> &times; {item.quantity} &nbsp;&nbsp;= &nbsp;&nbsp;&nbsp;$ {calcularSubtotal(item)}</li>
                ))}
              </li>
              <br />
            <p className='total3'>EL TOTAL DE SU COMPRA ES: &nbsp;&nbsp;${total}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Compra
