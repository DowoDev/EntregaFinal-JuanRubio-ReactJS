import React from 'react'
import { Col } from 'react-bootstrap'
import CardList from '../Cards/CardList'

const ItemList = ({ items }) => {

  return (
    <>
      {
        items.map((item, index) => (
          <Col md={4} xl={3} sm={12} key={item.id}>
            <CardList item={item} index={index} />

          </Col>
        ))
      }

    </>

  )
}

export default ItemList
