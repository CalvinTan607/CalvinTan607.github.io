import React from 'react'
import '../css/Header.css'
import logo from '../images/covid_image.png'

import {Link} from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

export default function Header(){
    return(
        <div className="entireHeader">
            <div className="header">
                <img className = "logo" src={logo}/>
                <h1 className='headerText'>US Covid Statistics Map</h1> 
            <nav className = 'navBar'>
                <Link to ='/Data'>States</Link>
                <Link to = '/'>Map</Link>
            </nav>
            </div>
            <p className="headerNote">
                This thing is purely for educational and informative purposes, I am not involved with the CDC
            </p>  
            <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/Data">
        <img
          alt=""
          src={logo}
          width="95"
          height="90"
          className="d-inline-block align-top"
        />{' '}
      US Covid Statistics Map
      </Navbar.Brand>
      </Navbar>
        </div>
    )
}