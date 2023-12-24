import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Navs = () => {
  return (
    <Navbar expand="lg" className="bg-secondary">
      <Container>
        <Navbar.Brand className='text-white'>Shopping Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink className='nav-link' to="/">Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className='nav-link' to="/newproduct">Add New Product</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className='nav-link' to="/productlist">Product List</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className='nav-link' to="/about">About</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;