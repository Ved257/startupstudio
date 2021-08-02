import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import './JoinUs.css'

export default function JoinUs() {
    return (
        <div>
            <Container>
            <Row>
                <Col>
                <Jumbotron style={{position:"absolute", top:"145%", textAlign:"center", fontFamily:"sans-serif",width:"190vh"}}>
                <h1 className="display-4">Join Our Community</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="mx-0" />
                <p><div className="button1_slide slide_right" href="#contactus" style={{textAlign:"center"}}>Build your startup with us</div></p>
                </Jumbotron>
                </Col>
            </Row>
            </Container>
        </div>
    )
}
