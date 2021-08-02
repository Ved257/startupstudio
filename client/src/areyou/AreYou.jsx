import React from 'react'
import { useState } from "react";
import { Jumbotron , Row, Col, Container } from 'react-bootstrap'
import './AreYou.css'



export default function AreYou() {
    
    const [toggleState, setToggleState] = useState(1);


    const toggleTab = (index) => {
      setToggleState(index);
  
    };


    return (
        <div>
            <Container>
                <Row>
                    <Col style={{position:"absolute", top:"-80%", textAlign:"center", fontFamily:"sans-serif", width:"190vh", color:"black"}}>
                    <Jumbotron>
                            <h1 className="display-3">
                                Are you a...
                            </h1>
                    </Jumbotron>
                    </Col>
                    <Col style={{position:"absolute", top:"-60%", textAlign:"left", fontFamily:"sans-serif", width:"190vh", color:"black"}}>
                            <div >
                            <div className="bloc-tabs">
                                <button
                                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                                onClick={() => {toggleTab(1)}}
                                >
                                    <h2>
                                        Wannaprenuers
                                    </h2>
                                 
                                </button>
                                <button
                                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(2)}
                                >
                                
                                <h2>
                                     Technologists
                                </h2>
                                </button>
                                <button
                                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(3)}
                                >
                                
                                <h2>
                                    Deep Domain Experts
                                </h2>
                                </button>
                            </div>

                            <div className="content-tabs" onTransition="fade">
                                <div
                                className={toggleState === 1 ? "content  active-content" : "content"}
                                >
                                <h2>Content 1</h2>
                                <hr />
                                <Container>
                                    <Row>
                                        <Col>
                                        <p className="c1">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                                            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                                            Accusamus in quia odit aspernatur provident et ad vel distinctio
                                            recusandae totam quidem repudiandae omnis veritatis nostrum
                                            laboriosam architecto optio rem, dignissimos voluptatum beatae
                                            aperiam voluptatem atque. Beatae rerum dolores sunt.
                                        </p>
                                        </Col>
                                        
                                        <Col style={{textAlign:"center"}}>
                                        <div class="button_slide slide_right">Build your startup with us</div>
                                        </Col>
                                        
                                    </Row>
                                    </Container>
                                </div>

                                <div
                                className={toggleState === 2 ? "content  active-content" : "content"}
                                >
                                <h2>Content 2</h2>
                                <hr />
                                <Container>
                                    <Row>
                                        <Col>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                                            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                                            Accusamus in quia odit aspernatur provident et ad vel distinctio
                                            recusandae totam quidem repudiandae omnis veritatis nostrum
                                            laboriosam architecto optio rem, dignissimos voluptatum beatae
                                            aperiam voluptatem atque. Beatae rerum dolores sunt.
                                        </p>
                                        </Col>
                                        <Col style={{textAlign:"center"}}>
                                        <div class="button_slide slide_right">Build your startup with us</div>
                                        </Col>
                                    </Row>
                                    </Container>
                                </div>

                                <div
                                className={toggleState === 3 ? "content  active-content" : "content"}
                                >
                                <h2>Content 3</h2>
                                <hr />
                                <Container>
                                    <Row>
                                        <Col>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                                            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                                            Accusamus in quia odit aspernatur provident et ad vel distinctio
                                            recusandae totam quidem repudiandae omnis veritatis nostrum
                                            laboriosam architecto optio rem, dignissimos voluptatum beatae
                                            aperiam voluptatem atque. Beatae rerum dolores sunt.
                                        </p>
                                        </Col>
                                        <Col style={{textAlign:"center"}}>
                                        <div className="button_slide slide_right">Build your startup with us</div>
                                        </Col>
                                    </Row>
                                    </Container>
                                </div>
                            </div>
                            </div>


                    </Col>
                </Row>
            </Container>
        </div>
    )
}
