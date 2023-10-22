import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget'


const NavBar = () => {
  const categories = ['Strong', 'Sweetest', 'Green', 'Coolest'];

  return (
    <Navbar collapseOnSelect expand="lg" className="navBarStyle">

        <Navbar.Brand href="/">
          <img width="40" src="../src/assets/logos/cup_logo.png" alt="" /> <span className='marca'>Q I N Q E L A</span> <span className='pink'>| CoffeeShop</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavLink className={({ isActive }) => isActive ? "activo" : ""} to="/">INICIO</NavLink>
          <NavLink className={({ isActive }) => isActive ? "activo" : ""} to="/nosotros">SOBRE NOSOTROS</NavLink>
          <NavDropdown title="CATEGORIAS" id="collapsible-nav-dropdown">
              {categories.map((category, index) => (
                <NavDropdown.Item key={index} href={`/category/${category}`}>
                  <span className='categoria'>{category}</span>
                </NavDropdown.Item>
                ))}
          </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />

    </Navbar>

  )
}

export default NavBar

