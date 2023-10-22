import React from 'react'
import { Col } from 'react-bootstrap'
import CardList from '../Cards/CardList'

const ItemList = ({ items }) => {

  return (
    <>
      {
        items.map((item) => (
          <Col md={4} xl={3} sm={12} key={item.id} >
            <CardList item={item} />

          </Col>
        ))
      }

    </>

  )
}

export default ItemList
