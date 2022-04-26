import react,{useState}from 'react'
import '../css/Card.css'

export default function Card(props){
    return(
        <div className="card">
            <h1>{props.state}</h1>
        </div>
    )
}