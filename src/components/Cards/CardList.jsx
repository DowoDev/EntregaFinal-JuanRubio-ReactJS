import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { IconInfoSquareRoundedFilled } from '@tabler/icons-react';


const CardList = ({ item }) => {
  return (
    <Card className='card align-items-center mt-3 cardList'>
      <div className='img-container'>
        <Card.Img variant="top" className='card-img-top' src={item.img} />
      </div>
      <Card.Body>
        <Card.Title> {item.title}</Card.Title>
        <Card.Text>
          $ {item.price}
        </Card.Text>
        <Link to={`/detalle/${item.id}`} >
          <Button variant="primary">Ver Producto&nbsp;&nbsp;<IconInfoSquareRoundedFilled /></Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default CardList
