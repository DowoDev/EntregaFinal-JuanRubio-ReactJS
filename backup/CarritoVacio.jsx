import React from 'react';
import { Link } from 'react-router-dom';

const CarritoVacio = () => {
  return (
    <div className="carritoVacio">
      <h3>Tu carrito se encuentra Vacio</h3>
      <img className='imgCart' src="https://i.postimg.cc/sgb67pz8/KEEP-CALM.jpg" alt="" />
      <p className='fs-6' >Parece que no has agregado ningun producto</p>
      <Link to="/" className="btn btn-outline-success shadow fs-5 fw-medium font-monospace mt-3 ">
        Continuar Comprando
      </Link>
    </div>
  );
};

export default CarritoVacio;