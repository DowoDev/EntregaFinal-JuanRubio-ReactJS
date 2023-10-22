import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import { IconSquareRoundedPlusFilled } from '@tabler/icons-react';
import { IconSquareRoundedMinusFilled } from '@tabler/icons-react';
import { IconInfoSquareRoundedFilled } from '@tabler/icons-react';


const Counter = ({ onAdd, text = "Agregar al carrito", stock, q = 1 }) => {
  const [count, setCount] = useState(q);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      // You can show a toast or message here to inform the user.
      toast.error('No hay más stock disponible.', {
        position: 'top-right',
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
        position: 'top-right',
        autoClose: 1500,
      });
    } else {
      // You can show a toast or message here to inform the user.
      toast.error('No hay más stock disponible.', {
        position: 'top-right',
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
        <button className="btn btn-primary btnMax counterProd" onClick={addToCart}>COMPRAR AHORA<IconInfoSquareRoundedFilled /></button>
      </div>

    </div>

  );
};

export default Counter;