import React from 'react'
import "../css/Footer.css"

import {Navbar,Container,Nav} from 'react-bootstrap'

export default function Footer(){
    return(
    <Container className = 'd-flex flex-column min-vh-100' >
    <Navbar className = 'mt-auto' variant='dark' bg="dark" expand="lg">
    <Navbar.Brand>Contact Me</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
    </Container>
    )
}