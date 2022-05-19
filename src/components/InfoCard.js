import react,{useState}from 'react'

import '../css/Card.css'

import Card from "react-bootstrap/Card"
import { ListGroup } from 'react-bootstrap'

export default function InfoCard(props){
    return(
        <div>
            <Card className = 'card mb-2' bg='info' >
            <Card.Header> {props.date_submitted}</Card.Header>
            <ListGroup bg ='info' variant='flush'>
                <ListGroup.Item>Total Cases: {props.tot_cases}</ListGroup.Item>
                <ListGroup.Item>Total Deaths: {props.tot_death}</ListGroup.Item>
                <ListGroup.Item>New Cases: {props.new_case}</ListGroup.Item>
                <ListGroup.Item>New Deaths: {props.new_death}</ListGroup.Item>
            </ListGroup>
            </Card>
        </div>
    )
}