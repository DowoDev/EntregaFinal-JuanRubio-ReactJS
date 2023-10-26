import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { IconInfoSquareRoundedFilled } from '@tabler/icons-react';
import Bienvenida from '../Items/Bienvenida';

const CardList = ({ item }) => {
  
  let titleClass = 'card1';

  if (item.title === 'SUNNY') {
    titleClass = 'card1'; 
  } else if (item.title === 'SOFT') {
    titleClass = 'card2'; 
  } else if (item.title === 'BLACK') {
    titleClass = 'card3'; 
  } else if (item.title === 'SWEET TETÉ') {
    titleClass = 'card4'; 
  } else if (item.title === 'NATURAL') {
    titleClass = 'card5'; 
  } else if (item.title === 'BREEZE') {
    titleClass = 'card6'; 
  } else if (item.title === 'STRONG') {
    titleClass = 'card7'; 
  } else if (item.title === 'CHOCKO') {
    titleClass = 'card8'; 
  } else if (item.title === 'COOL') {
    titleClass = 'card9'; 
  } 

  return (
    <div>
      <Card className='card cardList'>
        <div className='logos'>
          <img className='logo' src="./src/assets/logos/cup_logo.png" alt="" />
        </div>
        <div className='img-container'>
          <Card.Img variant="top" className='card-img-top' src={item.img} />
          {item.stock === 0 ? <p className='sinStock'>SIN STOCK</p> : <></>}
        </div>
        <Card.Body>
          {/* Usamos la clase dinámica titleClass */}
          <Card.Title className='flavor'> {item.title} <p className={`cardBlend ${titleClass}`}>&nbsp;BLEND.</p></Card.Title>
          <Card.Text>
            <b className='price'>$ {item.price}</b>
          </Card.Text>
          <Link className='noLink' to={`/producto/${item.id}`}>
            <p className='card-text'>{item.descriptionmini} <button className='info'>+INFO</button></p>
          </Link>
          <Link className='noLink' to={`/producto/${item.id}`}>
            <strong variant="primary" className='botonCompra2'>VER PRODUCTO&nbsp;&nbsp;<IconInfoSquareRoundedFilled /></strong>
          </Link>
          {item.stock === 0 ? <p className='stock red'>SIN STOCK</p> : <p className='stock'>Stock: {item.stock} Unidades</p>}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardList;

