import React from 'react'

import { Container,Row,Col } from 'react-bootstrap'


export default function Homepage(){

    return(
        <Container>
            <div className='bg-light border'>
            <Row>
                <Col >
                    <Container>
                    <h1>
                        About this website
                    </h1>
                    </Container>
                </Col>
                <Col>
                    <p>
                        This is a react application which shows Covid 19 statistics for the US. There are several forms this information can be displayed such 
                        as a Line Chart, Cards, and an Interactive Map. 
                    </p>
                </Col>
            </Row>
            </div>

            <Row>
                <Col>
                <Container>
                    <h1>
                        About the dataset
                    </h1>
                    </Container>
                </Col>
                <Col>
                    <p>
                        The dataset is managed by the CDC, it is updated twice a day and statistics are updated by jurisdiction 

                        L
                    </p>
                </Col>
            </Row>
        </Container>
    )
}