import React from 'react'
import { Jumbotron, Row, Col, Container } from 'react-bootstrap'
import Carousel from './Carousel'

export default function Insights() {
    return (
        <div>
            <Container>
                <Row>
                <Col style={{position:"absolute",top:"-7%", fontFamily:"sans-serif"}}>
                    <Jumbotron >
                        <h1 className="display-3">
                            Insights
                        </h1>
                    </Jumbotron>
                </Col>
                    <Carousel/>
                </Row>
            </Container>
        </div>
    )
}
