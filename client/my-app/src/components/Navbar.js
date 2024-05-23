import React, { useState } from 'react';
import { Offcanvas, Navbar, Container, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Nav.css';

function NavScrollExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">
            <FontAwesomeIcon icon={faBook} /><span>Book Shop</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/ProductCard">Books</Nav.Link>
            <Nav.Link as={Link} to="/AddBook">Add Books</Nav.Link>
          </Nav>
          <Button as={Link} to="/signup" className="action-button signup">Sign Up</Button>
          <Button as={Link} to="/signin" className="action-button signin">Signin</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavScrollExample;
