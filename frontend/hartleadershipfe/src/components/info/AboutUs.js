import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import smallOne from "../../images/small3.d017de130d175530635f58c2cd53c8c7.jpg"
import small2 from "../../images/small1.343fa45e51f20106fbbd2092171d5fa0.jpg"
import small3 from "../../images/small2.43bc0e5b0b448fa6312e3856809da2a4.jpg"
import small4 from "../../images/small5.c8a59c9a2220857a9db838cc7c62710b.jpg"
import {Row, Container, Col} from "react-bootstrap/";
import HartArch from "../../images/HartLeadership.png"
import small5 from "../../images/image5.jpeg"
import approach from "../../images/approach.png"

const AboutUs = () => {
    const { user } = useSelector(state => state.auth.user);
return (

    <div
        className='container justify-content-center align-items-center h-100'
    >

        <div className='row bg-info text-black'>
            <div className='justify-content-center container align-wrapper'>
                <div className="table justify-content-center" style={{display : 'flex', flexDirection: "row"}}>
                        <img src={smallOne} style={{margin: "0.5rem"}}></img>
                        <img src={small2} style={{margin: "0.5rem"}}></img>
                        <img src={small3} style={{margin: "0.5rem"}}></img>
                        <img src={small4} style={{margin: "0.5rem"}}></img>
                        <img src={small5} style={{margin: "0.5rem"}}></img>
                </div>
                </div>
                <div className='row'>
            <div className='justify-content-center container align-wrapper'>
            <Row>
    <Col sm={8} style={{display: "inline-block"}}>   <h2>
                Welcome to The Hart Leadership Assessment Portal 
                </h2>
                <p>
                The Hart Center for Engineering Leadership strives to shape you into exceptionally successful engineers. The Hart Center's assessment, challenge, and support approach to leadership development helps prepare you for the real business of engineering, by giving you the tools you need for the college to career transition and encouraging lifelong personal and professional growth. The Hart Leadership and Career Development Portal serves as your personal learning and action plan platform. The portal includes your assessment, leadership development action plan and progress as well as career planning tools.
</p>
                </Col>
    <Col sm={4}><img className="bg-white" style={{minWidth: "200px", width: "90%", display: "inline-block", verticalAlign: "initial"}}src={HartArch}></img></Col>
  </Row>
         
               
                </div>
           


            </div>
            </div>
            <Row>
    <Col sm={3}>
        <div className="border-bottom border-dark">
  
            <b>
            Leadership Framework
        </b>
        <p>
        The Hart Leadership Framework emphasizes these key elements of leadership growth:
        </p>
        <b>
        Personal, Relational, Functional & Contextual
        </b>
        <p>
            <a href="/about/fmwk">Click here</a> to learn more
        </p>
        </div>
        <p className="text-secondary">
        "A Leader is someone people choose to follow" - Minch Hart, Founder, Hart Center
        </p>
    </Col>
    <Col sm={6} >
    <b>
    Our Approach
        </b>
        <div style={{display: "flex", flexDirection: "row"}}>
        <p>
        After a two-year partnership with the Center for Creative Leadership, the Hart Center adopted a Leadership and Professional Development Model that is interconnected and is a continuous cycle for improvement. It is process and outcome oriented, focuses on the environment, and applies to individuals and teams. It includes three key elements: Assessment, Challenge, and Support.
        </p>
        <img src={approach}></img>
        </div>
    </Col>
    <Col sm={3}>
    <b>
            Leadership Assessment
        </b>
        <p>
        The Hart Leadership Assessment is a self-assessment that should be taken at the beginning of a student's first year and reveals a student's baseline leadership strengths and areas for growth. We help students review and analyze results, then customize a Personal Development Plan.        </p>
        <p>
            <a href="/about/surveyinfo">Click here</a> to learn more
        </p>
    </Col>
  </Row>
    </div>
);
};

export default AboutUs;