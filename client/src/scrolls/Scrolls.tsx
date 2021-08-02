import React, { Component } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Landing from '../landing'
import FocusAreas from '../focusareas'
import AreYou from '../areyou'
import Disruptors from '../disruptors'
import OurPartners from '../ourpartners';
import Insights from '../insights';
import JoinUs from '../joinus'
import Footer from '../footer'



export default class Anim1 extends Component {
    render() {
        return (
            <div>
                <Parallax pages={4.6} style={{ top: '0', left: '0' }}>
                <ParallaxLayer
                    offset={0}
                    speed={0.95}
                    
                    >
                    <Landing/>
                    
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={0.75}
                    >
                    <FocusAreas/>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={1.25}
                    >
                     <AreYou/>
                     <Disruptors/>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3}
                    speed={1.75}
                    >
                        <OurPartners/>
                        <Insights/>
                        <JoinUs/>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={4}
                    speed={3}
                    factor={0}
                    >
                        <Footer/>
                </ParallaxLayer>
        </Parallax>
            </div>
        )
    }
}
