import React from 'react'
import '../css/Header.css'
import logo from '../images/covid_image.png'


export default function Header(){
    return(
        <div className="header">
            <img className = "logo" src={logo}/>
            <h1 className='headerText'>United States Covid Statistics Map</h1>
        </div>
    )
}