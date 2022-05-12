import React from 'react'
import "../css/Footer.css"

export default function Footer(){
    return(
        <div className="footer-container">
            Footer
        <div className = "column">
            <h4 className='column-title'>CDC Stuff</h4>
            <ul className='footer-list'>
                <ul>Heu</ul>
                <ul>yuou</ul>
                <a 
                    href='https://data.cdc.gov/Case-Surveillance/United-States-COVID-19-Cases-and-Deaths-by-State-o/9mfq-cb36'
                    target="_blank"
                    >
                    CDC Data Set
                </a>
            </ul>
        </div>
        <div className = "column">
            <h4 className='column-title'>Contact Info</h4>
            <ul className='footer-list'>
                <ul>Heu</ul>
                <ul>yuou</ul>
            </ul>
        </div>
        <div>
            <hr style={{width:'100%'}}></hr>
            hwy
        </div>
        </div>
    )
}