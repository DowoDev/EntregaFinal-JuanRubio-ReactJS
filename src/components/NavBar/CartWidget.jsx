import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cartContext/CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const totalQuantity = cart ? cart.reduce((total, item) => total + item.quantity, 0) : 0;

  return (
    <div className="carritoContainer">
      <Link className="nav-link active fs-5" to="/cart">
        <img
            src='../src/assets/logos/coffee-togo-regular-60.png'
            width='50px'
            height='55.12px'
            alt='Carrito'
          />
      </Link>
      <Link className="nav-link active fs-5" to="/cart">
        {totalQuantity > 0 && (
          <span className="pill show-animation">{totalQuantity}</span>
        )}
        <p className='carritoP'>TU CARRITO</p>
      </Link>

    </div>
  );
};

export default CartWidget;
