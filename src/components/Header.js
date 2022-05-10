import React from 'react'
import '../css/Header.css'
import logo from '../images/covid_image.png'


export default function Header(){
    return(
        <div className="entireHeader">
            <div className="header">
                <img className = "logo" src={logo}/>
                <h1 className='headerText'>US Covid Statistics Map</h1> 
            </div>
            <p className="headerNote">
                This thing is purely for educational and informative purposes, I am not involved with the CDC
            </p>  
        </div>
    )
}