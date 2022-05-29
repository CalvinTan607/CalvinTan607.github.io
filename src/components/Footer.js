import React from 'react'
import "../css/Footer.css"

import {Navbar,Container,Nav} from 'react-bootstrap'

export default function Footer(){
    return(
    <Navbar className = 'mt-auto' variant='dark' bg="dark" expand="lg">
      <Container>
    <Navbar.Brand>Contact Me</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link >calvintan607@gmail.com</Nav.Link>
        <Nav.Link >(415)-939-7787</Nav.Link>
      </Nav>
    </Navbar.Collapse> 
    </Container>
    </Navbar>

    )
}