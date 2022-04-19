import React from 'react'
import '../css/Header.css'
import logo from '../images/covid_image.png'


export default function Header(){
    return(
        <div className="header">
            <img className = "logo" src={logo}/>
            <p className='headerText'>United States Covid Statistics Map</p>
        </div>
    )
}