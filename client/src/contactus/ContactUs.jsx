import React from 'react'
import { Modal , Row } from 'react-bootstrap';
import { useState } from 'react'
import FeatherIcon from "feather-icons-react"
import { Col , Container, Image } from 'react-bootstrap';
import img1 from "./images/Wannapreneur.svg"
import img2 from "./images/Technologist.svg"
import img3 from "./images/Deep domain expert.svg"
import './ContactUs.css'

export default function JoinForm() {
    const [show, setShow] = useState(false);
    return (
        <div id="contactUs">
          <div onClick={() => setShow(true)}>
            Contact Us
          </div>
            
      <Modal
        show={show}
        size="xl"
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        // style={{width:"60%"}}
      >
        {/* <Modal.Header  closeLabel="">
          <div style={{size:"100px"}}>
          <FeatherIcon onClick={() => setShow(false)} icon="x" size="70px" strokeWidth="0.5px"/>
          </div>
        </Modal.Header> */}
        <Modal.Body className="show-grid">
            <Col>
            <div style={{textAlign:"end"}}>
          <FeatherIcon onClick={() => setShow(false)} icon="x" size="70px" strokeWidth="0.5px"/>
            </div>
            </Col>
        <Container>
          <Row>
          {/* <div style={{position:"absoulte", left:"90%"}}>
          </div> */}
            <Col >
            <br/>
            <Image src={img1}/>
            <br/>
            <h2>
              Wannapreneurs
            </h2>
              .Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
              .Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
          <br/>
          <br/>
          <br/>
          <div className="button1_slide slide_right" style={{textAlign:"center"}}>Launch with us</div>
          <br/>
            </Col>
            <Col >
            <Image src={img2}/>
            <br/>
            <h2>
             Technologists
            </h2>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
            
          <br/>
          <br/>
          <br/>
          <div className="button1_slide slide_right" style={{textAlign:"center"}}>Grow with us</div>
          <br/>
            </Col>
            <Col>
            <Image src={img3}/>
            <br/>
            <h2>
              Deep Domain Experts
            </h2>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
            
          <br/>
          <br/>
          <br/>
          <div className="button1_slide slide_right" style={{textAlign:"center", position:"relative", top:"1%"}}>Join us</div>
          <br/>
          <br/>
          <br/>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      </Modal>
        </div>
    )
}
