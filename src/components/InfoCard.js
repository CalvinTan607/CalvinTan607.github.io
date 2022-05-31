import react,{useState}from 'react'

import '../css/Card.css'

import Card from "react-bootstrap/Card"
import { ListGroup } from 'react-bootstrap'

export default function InfoCard(props){
    return(
        <div>
            <Card className = 'card m-2' bg='info' >
            <Card.Header> {props.date_submitted}</Card.Header>
            <ListGroup bg ='info'  >
                <ListGroup.Item variant="info">Total Cases: {props.tot_cases}</ListGroup.Item>
                <ListGroup.Item variant="info">Total Deaths: {props.tot_death}</ListGroup.Item>
                <ListGroup.Item variant="info">New Cases: {props.new_case}</ListGroup.Item>
                <ListGroup.Item variant='info'>New Deaths: {props.new_death}</ListGroup.Item>
            </ListGroup>
            </Card>
        </div>
    )
}