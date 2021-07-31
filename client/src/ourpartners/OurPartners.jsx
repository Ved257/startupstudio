import React from 'react'
import { Jumbotron, Container, Row, Col, Figure} from 'react-bootstrap';

export default function OurPartners() {
    return (
        <div id ="ourPartners">
            <Container>
                <Row>
                    <Col>

                        <Jumbotron style={{position:"absolute", top:"-80%" , fontFamily:"sans-serif"}}>
                            <Container>
                            <h1 className="display-3" style={{left:0}}>Our Partners</h1>
                            </Container>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row style={{position:"absolute", top:"-60%", width:"190vh",textAlign:"center" , fontFamily:"sans-serif"}}>
                    <Col>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src="holder.js/171x180"
                        />
                        <Figure.Caption>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src="holder.js/171x180"
                        />
                        <Figure.Caption>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </Figure.Caption>
                        </Figure>
                    </Col>
                </Row>
                <Row style={{position:"absolute", top:"-40%", width:"190vh",textAlign:"center" , fontFamily:"sans-serif"}}>
                    <Col>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src="holder.js/171x180"
                        />
                        <Figure.Caption>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src="holder.js/171x180"
                        />
                        <Figure.Caption>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </Figure.Caption>
                        </Figure>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
