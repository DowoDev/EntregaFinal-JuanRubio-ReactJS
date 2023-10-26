import React from 'react';
import { Link } from 'react-router-dom';

const CarritoVacio = () => {
  return (
    <div className="carritoVacio">
      <h3>Tu carrito se encuentra Vacio</h3>
      <Link to="/" className="btn btn-primary mt-3 ">
        Continuar Comprando
      </Link>
    </div>
  );
};

export default CarritoVacio;