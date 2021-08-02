import React from 'react'
import './Footer.css'
import {Form }from 'react-bootstrap'

export default function Footer() {
    return (
        <div style={{position:"absolute", top:"-20%"}}>
            <div className="footer">
                <h4 style={{position:"absolute",top:20 ,left:"48%"}}>
                    Subscribe to our insights
                    <br/>
                    <>
                    <br/>
                    <Form.Control type="text" placeholder="email" variant="dark" />
                    <br />
                    </>
                </h4>
                
            </div>
        </div>
    )
}
