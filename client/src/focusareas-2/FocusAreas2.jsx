import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import './FocusAreas2.css'

export default function FocusAreas2() {
    return (
        <div>
            <Container>
                <Row>
                    <Col style={{position:"absolute", top:"10%", width:"190vh"}}>
                        <div>
                        <div className="card shadow1">
                        <div className="row">
                            <h2 className="mx-0">
                                Accelerating Online
                            </h2>
                        </div>
                        <div className="row" style={{position:"absolute", top:"14%", left:"50%"}}>
                            <Container style={{padding:"10px", paddingRight:"20px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus velit semper felis sed amet, suspendisse nibh. Blandit enim aliquam mauris maecenas felis.
                            </Container>

                        </div>
                        </div>
                        <h1 className="display-1" style={{ fontFamily:"sans-serif",position:"absolute", left:"10px",top:"0", fontSize:"130px", opacity:"0.1" }}>
                            01
                        </h1>
                        </div>
                        <div>
                        <div className="card shadow1">
                        <div className="row">
                            <h2>
                                Digitizing Supply Chain
                            </h2>
                        </div>
                        <div className="row" style={{position:"absolute",  top:"12%",left:"50%"}}>
                        <Container style={{padding:"10px", paddingRight:"20px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus velit semper felis sed amet, suspendisse nibh. Blandit enim aliquam mauris maecenas felis.
                            </Container>

                        </div>
                        </div>
                        <h1 className="display-1" style={{ fontFamily:"sans-serif",position:"absolute", left:"10px",top:"23%", fontSize:"130px",opacity:"0.1" }}>
                            02
                        </h1>
                        </div>
                        <div>
                        <div className="card shadow1">
                        <div className="row">
                            <h2>
                                Democratizing Offline
                            </h2>
                        </div>
                        <div className="row" style={{position:"absolute", top:"12%",left:"50%"}}>
                        <Container style={{padding:"10px", paddingRight:"20px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus velit semper felis sed amet, suspendisse nibh. Blandit enim aliquam mauris maecenas felis.
                            </Container>

                        </div>
                        </div>
                        <h1 className="display-1" style={{fontFamily:"sans-serif",position:"absolute", left:"10px",top:"46%", fontSize:"130px",opacity:"0.1"  }}>
                            03
                        </h1>
                        </div>
                        <div>
                        <div className="card shadow1">
                        <div className="row">
                            <h2>
                                Democratizing D2C
                            </h2>
                        </div>
                        <div className="row" style={{position:"absolute", left:"50%",top:"12%"}}>
                        <Container style={{padding:"10px", paddingRight:"20px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus velit semper felis sed amet, suspendisse nibh. Blandit enim aliquam mauris maecenas felis.
                            </Container>

                        </div>
                        </div>
                        <h1 className="display-1" style={{ fontFamily:"sans-serif",position:"absolute", left:"10px",top:"69%", fontSize:"130px",opacity:"0.1"  }}>
                            04
                        </h1>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
