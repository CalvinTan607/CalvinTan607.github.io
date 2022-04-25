import React from 'react'
import '../css/Header.css'
import logo from '../images/covid_image.png'


export default function Header(){
    return(
        <div >
            <div className="header">
                <img className = "logo" src={logo}/>
                <h1 className='headerText'>United States Covid Statistics Map</h1> 
                <p>This thing is purely for educational purposes</p>  
            </div>
            
        </div>
    )
}