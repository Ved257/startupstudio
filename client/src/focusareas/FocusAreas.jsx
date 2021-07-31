// import React from 'react'
// import { Jumbotron , Container, Row, Col  } from 'react-bootstrap'
// import A1 from './A1'
// import A2 from './A2'
// import A3 from './A3'
// import A4 from './A4'


// export default function FocusAreas() {
//     return (
//         <div>
//             <Container>
//             <Row>
//                 <Col style={{position:"absolute", top:"-60%", textAlign:"center", fontFamily:"sans-serif", width:"190vh", color:"black"}}>
//                 <Jumbotron>
//                     <h1 className="display-3">How we help</h1>
//                     <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
//                     <hr className="my-2" />
//                     <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
//                 </Jumbotron>
//                 </Col>
//                 <Col style={{position:"absolute", top:"-20%", textAlign:"left", fontFamily:"sans-serif", width:"190vh"}}>
//                     <div>

//                         <h1 className="display-1" style={{position:"absolute", left:"0",top:"-7%", opacity:"0.15" }}>
//                             01
//                         </h1>

//                             <h1 className="display-7">
//                                 Accelerating Online
//                             </h1>
//                         <A1/>

//                     </div>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <div>
//                     <h1 className="display-1" style={{position:"absolute", left:"0",top:"21%", opacity:"0.15"}}>
//                         02
//                     </h1>

//                         <h1 className="display-7">
//                             Accelerating Online
//                         </h1>
//                     <A2/>

//                     </div>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <div>
//                     <h1 className="display-1" style={{position:"absolute", left:"0",top:"49%", opacity:"0.15"}}>
//                         03
//                     </h1>

//                         <h1 className="display-7">
//                             Accelerating Online
//                         </h1>
//                     <A3/>

//                     </div>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <div>
//                     <h1 className="display-1" style={{position:"absolute", left:"0",top:"78%", opacity:"0.15"}}>
//                         04
//                     </h1>
//                         <h1 className="display-7">
//                             Accelerating Online
//                         </h1>
//                     <A4/>

//                     </div>
//                 </Col>
//             </Row>
//             </Container>
//         </div>
//     )
// }

import React from 'react'
import { Jumbotron , Container, Row, Col  } from 'react-bootstrap'
// import A1 from './A1'
// import A2 from './A2'
// import A3 from './A3'
// import A4 from './A4'
import FocusAreas2 from '../focusareas-2'


export default function FocusAreas() {
    return (
        <div>
            <Container>
            <Row>
                <Col style={{position:"absolute", top:"-60%", textAlign:"center", fontFamily:"sans-serif", width:"190vh", color:"black"}}>
                <Jumbotron>
                    <h1 className="display-3">How we help</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                </Jumbotron>
                </Col>
                <Col style={{position:"absolute", top:"-20%", textAlign:"left", fontFamily:"sans-serif", width:"190vh"}}>
                    <div>
                        <FocusAreas2/>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}
