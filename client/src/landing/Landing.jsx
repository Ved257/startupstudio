import React from 'react'
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap'
import Fade from '../transition'
import img1 from './images/Hero section photo (1).svg'
import FeatherIcon from 'feather-icons-react'

export default function Landing() {
    return (
        <div id="home" style={{fontFamily:"sans-serif"}}>
            <Container>
            <Row>
                <Col>
                <Jumbotron style={{position:"relative",top:"80%", width:"120vh"}}>
                    <h1 className="display-3">
                        <Fade/>
                    </h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                </Jumbotron>
                </Col>
                <Col>
                <Image src={img1} style={{position:"absolute",height:"100vh", width:"100vh", left:"56%"}}/>
                </Col>
            </Row>
            <Row>
                <Col style={{position:"absolute", top:"65%", left:"4.5%", width:"150px",height:"150px"}}><FeatherIcon icon="play-circle" size="24" />{' '}
                  Watch video</Col>
            </Row>
            </Container>
        </div>
    )
}
