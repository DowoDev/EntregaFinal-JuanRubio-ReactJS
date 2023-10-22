import React from 'react'
import './style.pages.css'
import { useLocation } from 'react-router-dom';

const Compra = () => {

    const location = useLocation();
    const state = location.state || {};
    const { orderId, items, total } = state;


    return (
        <div className= "checkout" >
            <h1>GRACIAS POR ELEGIRNOS</h1>
            <h2 className=""> Orden de Compra </h2>
            <div className="">
            <p> <span>ID DE SU ORDEN:</span> {orderId}</p>
            <p>
            UD. COMPRÓ:
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>
        </p>
        <p>EL TOTAL DE SU COMPRA ES: ${total}</p>
            </div>
        </div>
    )
}

export default Compra
