import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../context/cartContext/CartContext'
import styles from './style.module.css'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import CarritoVacio from '../Cards/CarritoVacio'


const CartDetail = () => {
  const [buyer, setBuyer] = useState({
    name: '',
    adress: '',
    phone: '',
    email: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    adress: '',
    phone: '',
    email: ''
  })

  const [orderId,] = useState("")
  const { cart, removeItem, clear } = useContext(CartContext)
  const [isCartEmpty, setIsCartEmpty] = useState(false);


  useEffect(() => {

    setIsCartEmpty(cart.length === 0);
  }, [cart]);

  const handleRemoveItem = (id, nombre) => {
    Swal.fire({
      title: `Deseas eliminar ${nombre} BLEND del carrito`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7fff00',
      cancelButtonColor: '#dc143c',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',

    }).then((result) => {
      if (result.isConfirmed) {

        removeItem(id);

        Swal.fire('Eliminado', `${nombre} BLEND SE ELIMINÓ DEL CARRITO`, 'success');
      }
    });
  };

  const navigate = useNavigate()

  const addToCart = () => {
    const precioTotal = cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    const purchase = {
      buyer,
      items: cart,
      date: new Date(),
      total: precioTotal,
    };

    console.log(purchase);


    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, purchase)
      .then((res) => {
        navigate(`/checkout/${res.id}`, {
          state: { orderId: res.id, items: purchase.items, total: purchase.total },
        });
      })
      .catch((err) => console.log(err));
    clear();
  };

  const handleChange = (e) => {
    const { target } = e;
    setBuyer({
      ...buyer,
      [target.name]: target.value
    })
  }

  const onSubmit = (e) => {

    e.preventDefault()
    const errorLocal = {};
    if (!buyer.name) {
      errorLocal.name = "Nombre completo Obligatorio"
    };
    if (!buyer.adress) {
      errorLocal.adress = "Dirección Obligatoria"
    };
    if (!buyer.phone) {
      errorLocal.phone = "Teléfono Obligatorio"
    };
    if (!buyer.email) {
      errorLocal.email = "El email es obligatorio"
    };
    //  []
    if (Object.keys(errorLocal).length === 0) {

      addToCart();
    } else {

      setErrors(errorLocal);
    }
  }

  return (

    <div className='carrito'>


      {isCartEmpty ? (
        <CarritoVacio />
      ) : (
        cart.map((el) => (
          <div className={styles.container} key={el.id}>
            {el && (
              <div className={styles.cardBody}>
                <p>Articulo: {el.title}</p>
                <p>Cantidad: {el.quantity}</p>
              </div>
            )}
            <img src={el.img} className={styles.image} />
            <p className={styles.cardPrice}>Precio: $ {el.price}</p>
            <button onClick={() => handleRemoveItem(el.id, el.title)} className={styles.cartButton}>
              X
            </button>
          </div>
        ))
      )}

      <div className='datos'>
        <h1>INGRESE SUS DATOS</h1>
        <div>
          <label htmlFor="name">Nombre </label>
          <input className={errors.name ? "error" : ""} onChange={handleChange} type="text" name="name" id="name" value={buyer.name} />
          {errors.name && <span> {errors.name}</span>}
        </div>
        <div>
          <label htmlFor="adress">Dirección </label>
          <input className={errors.adress ? "error" : ""} onChange={handleChange} type="text" name="adress" id="adress" value={buyer.adress} />
          {errors.adress && <span> {errors.adress}</span>}
        </div>
        <div>
          <label htmlFor="phone">Teléfono </label>
          <input className={errors.phone ? "error" : ""} onChange={handleChange} type="text" name="phone" id="phone" value={buyer.phone} />
          {errors.phone && <span> {errors.phone}</span>}
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input className={errors.email ? "error" : ""} onChange={handleChange} type="text" name="email" id="email" value={buyer.email} />
          {errors.email && <span> {errors.email}</span>}
        </div>

      </div>

      {
        cart.length > 0 &&
        <div>

          <button className='btn btn-primary' onClick={onSubmit}>TERMINA TU COMPRA </button>

        </div>
      }
      {
        orderId && <span>Order created: {orderId}</span>
      }
    </div>
  )
}

export default CartDetail
