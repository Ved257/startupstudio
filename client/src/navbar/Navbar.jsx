import { Navbar, Container, Nav , Image } from 'react-bootstrap'
import img1 from './images/New Logo (1).svg'
import ContactUs from '../contactus'
// import Scroll from "react-scroll";
// import { Link } from "react-scroll";
// import Landing from '../landing';
// import { ScrollTo } from 'react-scroll-to'
// import { ScrollToHOC } from "react-scroll-to";
import {HashLink as Link} from 'react-router-hash-link'

export default function NavbarFunc() {
    return (
        <div>

            <Navbar bg="light" variant="light" fixed="top" style={{opacity:"0.95"}}>
                <Container style={{opacity:"1"}} >
                <Navbar.Brand href="#home">
                    <Image src={img1}/>
                </Navbar.Brand>
                <Nav style={{position:"absolute",left:"45%",}}>
                <Link to="/#home"> Home</Link>
                <Link to="/#ourStory">Our Story</Link>
                <Link href="/#ourPartners">Our Partners</Link>
                <Nav.Link href="#contactUs">
                    <ContactUs/>
                </Nav.Link>
                </Nav>
                </Container>
            </Navbar>

        </div>
    )
}
