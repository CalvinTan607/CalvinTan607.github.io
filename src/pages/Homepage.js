import React from 'react'

import { Container,Row,Col } from 'react-bootstrap'


export default function Homepage(){

    return(
        <Container>
            <div className='bg-light border'>
            <Row>
                <Col>
                    <h1>
                        About this website
                    </h1>
                </Col>
                <Col>
                    <p>
                        heyo
                    </p>
                </Col>
            </Row>
            </div>
            <Row>
                <Col>
                    <h1>
                        About the dataset
                    </h1>
                </Col>
                <Col>
                    <p>
                        heyo
                    </p>
                </Col>
            </Row>
        </Container>
    )
}