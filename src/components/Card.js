import react,{useState}from 'react'
import '../css/Card.css'

export default function Card(props){
    return(
        <div className="card">
            <h3 className="stateName">{props.state}</h3> 
                <div className='infoSection'>
                    <p className='date'>{props.date_submitted}</p>
                    <p className='statistics'>Total Cases: {props.tot_cases}</p>
                    <p className='statistics'>Total Deaths: {props.tot_death}</p>
                    <p className='statistics'>Death rate: {props.death_rate}</p>
                </div>
        </div>
    )
}