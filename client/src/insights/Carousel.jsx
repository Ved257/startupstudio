import React from 'react'
import { Carousel, Card } from 'react-bootstrap'

export default function Insights() {
    return (
        <div style={{position:"absolute", top:"-7%", width:"190vh"}}>
            <span aria-hidden="true" className="carousel-control-next-icon" />
            <Carousel variant="dark" slide="false" indicators="false" nextLabel="" prevLabel="" style={{height:"100%", width:"100%"}}>
                <Carousel.Item>
                <Card>
                    <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg" />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>

            
                    <Carousel.Caption>
                    {/* <h5 style={{color:"black"}}>First slide label</h5> */}
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <Card>
                    <Card.Img variant="top" src="https://wowslider.com/sliders/demo-93/data1/images/lake.jpg" />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                    <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <Card>
                    <Card.Img variant="top" src="https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg" />
                    <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                    <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    )
}


