import React from 'react'
import { useEffect, useState, useRef} from 'react'
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from "three"
import './BG_Effects.css'
// import FocusAreas from '../focusareas'



export default function BG_Effects() {
    const [vantaEffect, setVantaEffect]=useState(0);
    const vantaRef=useRef(null)
    useEffect(()=>{
        if(!vantaEffect){
            setVantaEffect(
                NET({
                    el:vantaRef.current,
                    THREE,
                    touchControls: true,
                    gyroControls: false,
                    color: 0xf1f1f1,
                    backgroundColor: 0x0
                    
                })
            )
        }
        return()=>{
            if(vantaEffect)
            {
                vantaEffect.destroy()
            }
        }
    },[vantaEffect])
    return (
        <div>
            <main className="test" ref={vantaRef}/>

        </div>
    )
}
