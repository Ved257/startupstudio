import React from 'react'
import { Jumbotron, Container, Row, Col, Figure} from 'react-bootstrap';
import img1 from './images/Fireside.svg'
import img2 from './images/image 1.svg'

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
                    <Figure style={{backgroundColor:"#393939", padding:"20px",width:"500px",height:"100px" }}>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={img1}
                            style={{top:"10%"}}
                        />

                        </Figure>
                    </Col>
                    <Col>
                    <Figure>
                         <Figure style={{backgroundColor:"#393939", padding:"20px",width:"500px", height:"100px"}}>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={img1}
                        />

                        </Figure>
                        </Figure>
                    </Col>
                </Row>
                <Row style={{position:"absolute", top:"-40%", width:"190vh",textAlign:"center" , fontFamily:"sans-serif"}}>
                    <Col>
                    <Figure style={{backgroundColor:"#393939", padding:"20px",height:"100px",width:"500px"}}>
                        <Figure.Image
                            width={165}
                            height={180}
                            alt="165x180"
                            src={img2}
                        />
                        </Figure>
                    </Col>
                    <Col>
                    <Figure style={{backgroundColor:"#393939", padding:"20px",height:"100px",width:"500px"}}>
                        <Figure.Image
                            width={165}
                            height={180}
                            alt="165x180"
                            src={img2}
                        />
                        </Figure>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
