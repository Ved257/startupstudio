import React from 'react'
import { Jumbotron , Row, Col, Container, Image} from 'react-bootstrap'
import './Disruptors.css'
import FeatherIcon from 'feather-icons-react';


export default function Disruptors() {
    return (
        <div>

            <Container>
                <Row>
                <Col style={{position:"absolute", top:"20%", textAlign:"left", fontFamily:"sans-serif", width:"190vh", color:"black"}}>
                    <Jumbotron>
                            <h1 className="display-3">
                                Meet Our Disruptors
                            </h1>
                            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr className="my-2" />
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    </Jumbotron>
                    </Col>
                </Row>
                <div style={{position:"absolute", top:"60%", width:"190vh", textAlign:"center"}}>
                <Row>
                    <Col>
                    <figure className="hover-img">
                    <Image src='https://www.istockphoto.com/resources/images/PhotoFTLP/P2-JUNE_Architecture%20interiors%20and%20exteriors_174799786.jpg'/>
                    <figcaption>
                        <h3>
                        <FeatherIcon color="white" size="40px" icon="linkedin" />
                        <br/>
                        <br/>
                        <FeatherIcon color="white" size="40px" icon="twitter" />
                        </h3>
                    </figcaption>
                    </figure>
                    <div style={{textAlign:"left" , position:"relative", left:"5%"}}>
                    <h4>
                        Dhiraj Jain
                    </h4>

                    <p1>
                        Co-Founder and CEO
                    </p1>
                    </div>
                    </Col>
                    <Col>
                    <figure className="hover-img">
                    <Image src={'https://www.istockphoto.com/resources/images/PhotoFTLP/P2-JUNE_Architecture%20interiors%20and%20exteriors_174799786.jpg'}/>
                    <figcaption>
                    <h3>
                        <FeatherIcon color="white" size="40px" icon="linkedin" />
                        <br/>
                        <br/>
                        <FeatherIcon color="white" size="40px" icon="twitter" />
                        </h3>
                    </figcaption>
                    </figure>
                    <div style={{textAlign:"left" , position:"relative", left:"5%"}}>
                    <h4>
                        Chandan Mahajan
                    </h4>

                    <p1>
                        Co-Founder and Chief Growth Officer
                    </p1>
                    </div>
                    </Col>
                    <Col>
                    <figure className="hover-img">
                    <Image src='https://www.istockphoto.com/resources/images/PhotoFTLP/P2-JUNE_Architecture%20interiors%20and%20exteriors_174799786.jpg'/>
                    <figcaption>
                    <h3>
                        <FeatherIcon color="white" size="40px" icon="linkedin" />
                        <br/>
                        <br/>
                        <FeatherIcon color="white" size="40px" icon="twitter" />
                        </h3>
                    </figcaption>
                    </figure>
                    <div style={{textAlign:"left" , position:"relative", left:"5%"}}>
                    <h4>
                        Dhiraj Jain
                    </h4>
                    <p1>
                        Co-Founder and CEO
                    </p1>
                    </div>
                    </Col>
                </Row>
                <br/>
               <br/>
               <br/>
               <br/>
                </div>

            </Container>
               <br/>
               <br/>
               <br/>
               <br/>
        </div>
    )
}
