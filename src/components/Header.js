import React from 'react'
import '../css/Header.css'
import logo from '../images/covid_image.png'

import {Link} from 'react-router-dom'
import { Navbar,Nav,NavDropdown,Container } from 'react-bootstrap'

export default function Header(){
    return(
    <div className="entireHeader">
    
<Navbar variant= 'dark' bg="dark" expand="lg">
  <Container>
    <Navbar.Brand href="/">US Covid Statistics Map</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav" >
      <Nav className="me-auto">
        <Nav.Link href='/'>Homepage</Nav.Link>
        <Nav.Link href="/map">Map</Nav.Link>
        <Nav.Link href="/cards">Cards</Nav.Link>
        <Nav.Link href='/lineChartPage'>LineChart</Nav.Link>
        <Nav.Link href='https://data.cdc.gov/Case-Surveillance/United-States-COVID-19-Cases-and-Deaths-by-State-o/9mfq-cb36' target='_blank'>CDC DataSet</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}