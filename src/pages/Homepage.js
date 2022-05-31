import React from 'react'

import { Container,Row,Col } from 'react-bootstrap'


export default function Homepage(){

    return(
        <Container className='m-3'>
            <div className='bg-light border'>
            <Row>
                <Col >
                    <Container>
                    <h1  style={{textAlign:'center'}}>
                        About this website
                    </h1>
                    </Container>
                </Col>
                <Col>
                    <p>
                        This is a react application which shows Covid 19 statistics for the US. There are several forms this information can be displayed such 
                        as a Line Chart, Cards, and an Interactive Map. <br></br> Change pages with the navbar above to see more
                    </p>
                </Col>
            </Row>
            </div>
            <div className = 'bg-light border mt-3'>
            <Row>
                <Col>
                
                <Container>
                    <h1 style={{textAlign:'center'}}>
                        About the dataset
                    </h1>
                    </Container>
                </Col>
                <Col>
                    <p>
                        The dataset is managed by the CDC, it is updated twice a day and each state submits a report of their statistics every day.
                        <br></br>
                        Even though this dataset receives daily submissions from each state, this does not mean each state's numbers get updated. 
                        Often many states submit the same number of cases/deaths for several days.
                        (Alaska is a good example, their numbers usually update every 5-7 days)
                        This results in a state's statistics staying the same for several days until a sudden spike occurs. 
                        Hopefully this clears up any confusion when looking at the numbers.
                    </p>
                </Col>
            </Row>
            </div>
        </Container>
    )
}