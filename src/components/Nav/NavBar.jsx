import React from 'react';
import './Nav.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
const NavBar = () => {
    return (
<Navbar bg="light" expand="sm">
  <Container className='text-white w-100 bg-light' >
    <Navbar.Brand href="/">Pintabook</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/login">Connectez vous</Nav.Link>
        <Nav.Link href="/signup">Créez votre compte</Nav.Link>
        <Nav.Link href="/profil">Profil</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};
export default NavBar;