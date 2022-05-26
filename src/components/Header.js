import React from 'react'
import '../css/Header.css'
import logo from '../images/covid_image.png'

import {Link} from 'react-router-dom'
import { Navbar,Nav,NavDropdown,Container } from 'react-bootstrap'

export default function Header(){
    return(
    <div className="entireHeader">
            
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand  bg ="light" href="/Data" className = 'text-center'>
        <img
          alt=""
          src={logo}
          width="95"
          height="90"
          className="d-inline-block align-top"
        />{' '}
      US Covid Statistics Map
      </Navbar.Brand>
      <Nav className='navbar-right' >
            <Nav.Item>
                <Nav.Link href = '/Data'>data</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='/home'>homepage</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='/'>Map</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='/lineChartPage'>LineChart</Nav.Link>
            </Nav.Item>
        </Nav>
      </Navbar>


    
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">US Covid Statistics Map</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}