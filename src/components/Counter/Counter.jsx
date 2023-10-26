import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import { IconSquareRoundedPlusFilled } from '@tabler/icons-react';
import { IconSquareRoundedMinusFilled } from '@tabler/icons-react';
import { IconShoppingCart } from '@tabler/icons-react';

const Counter = ({ onAdd, text = "Agregar al carrito", stock, q = 1 }) => {
  const [count, setCount] = useState(q);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      toast.error('No se pueden agregar mas artículos al carrito. Stock Limitado.', {
        position: 'top-center',
        autoClose: 1500,
      });
    }
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    if (count <= stock) {
      onAdd(count);

      toast.success('Producto agregado al carrito', {
        position: 'top-center',
        autoClose: 1500,
      });
    } else {
      toast.error('No hay más stock disponible.', {
        position: 'top-center',
        autoClose: 1500,
      });
    }
  };

  return (
    <div>
      <div className='botones'>
        <button className='quantity-button' onClick={restar}>Restar&nbsp;&nbsp;<IconSquareRoundedMinusFilled /></button>
        <span>{count}</span>
        <button className='quantity-button' onClick={sumar}>Sumar&nbsp;&nbsp;<IconSquareRoundedPlusFilled /></button>
        <button className="btn btn-primary btnMax counterProd" onClick={addToCart}>COMPRAR AHORA<IconShoppingCart /></button>
      </div>

    </div>

  );
};

export default Counter;