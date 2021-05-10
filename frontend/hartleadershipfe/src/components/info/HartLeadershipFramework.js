import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import HartArch from "../../images/HartLeadership.png"
import FrameworkTextCard from "./FrameworkTextCard";
import {Row, Container, Col} from "react-bootstrap/";

const HartLeadershipFramework = () => {
    const { user } = useSelector(state => state.auth.user);
    console.log("USER ----->", user);
return (

    <div
        className='container justify-content-center align-items-center h-100'
    >
       <h1>
           Hart Leadership Framework
       </h1>
       <img src={HartArch}></img>
        <div className='row'>
            <div className='justify-content-center container align-wrapper border border-dark'>
                <h2>
                <p>The Hart Leadership Framework </p>
                <p> - our guide to leadership and professional development - </p>
                <p>emphasizes these key elements of leadership growth:</p>
                <ul>
                    <li>
                    Personal
                    </li>
                    <li>
                    Relational
                    </li>
                    <li>
                    Functional
                    </li>
                    <li>
                    Contextual
                    </li>
                </ul>
                </h2>
                <p>
                    Personal Leadership forms the foundation, or base of the arch.The left side of the arch symbolizes Relational Leadership and the right side of the arch represents Functional Leadership. The keystone, or top of the arch, represents Leading in Context.
</p>


            </div>
            </div>
            <div className="container" >
                    <Row>
                    <Col>        <FrameworkTextCard title ="Personal Leadership - Self-Awareness, Intentional Learner, and Communicates Effectively" gl1="Is Self-Aware: Exhibits knowledge of personal values, strengths, shortcomings, and developmental opportunities. Uses self-assessment strategies to inform personal growth and development." gl2="Learns Intentionally: Has knowledge of personal learning style and leverages this knowledge to enhance personal performance, knowledge of self, others, and leadership ability." gl3="Communicates Effectively: Has the ability to communicate effectively through a variety of methods and media and within a range of contexts." type="Personal"/></Col>
                    <Col>        <FrameworkTextCard title ="Relational Leadership - Develops Relationships, Diversity and Difference, and Engaging Leadership" gl1="Develops Relationships: Creates a positive, welcoming environment; sees issues from multiple points of view; and builds effective inter- and intra-group relationships." gl2="Embraces Diversity & Differences: Recognizes the value of different perspectives, skillsets, and people; is able to facilitate productive outcomes in diverse groups."
 gl3="Engages Others: Enables others to step up and lead; creates conditions for others to shine; generates collective commitment and learning." type="Relational" /></Col>
                    </Row>
                    <Row>
                    <Col>        <FrameworkTextCard title ="Functional Leadership - Directive Leadership, Champions Effective Processes, and Problem Solving
" gl1="Sets Direction: Coordinates members and maintains accountability for effective outcomes. Sets direction, communicates expectations, and monitors progress.
" gl2="Champions Effective Processes: Establishes systems and processes that facilitate efficient and effective outcomes.
" gl3="Solves Problems: Facilitates effective problem identification and solving strategies; identifies and cultivates resources; delivers results.
" type="Functional"/></Col>
                    <Col>        <FrameworkTextCard title ="Leading in Context - Strategic Perspective, Ethics and Integrity, and Innovative Spirit
" gl1="Seeks Innovative Solutions: Displays the courage to initiate positive change, is innovative, and will risk failing in front of peers.
" gl2="Upholds Ethics & Integrity: Knowledgeable of and committed to a meaningful set of ethical guidelines and principles. Actions are consistent with personal values.
" gl3="Keeps Strategic Perspective: Able to evaluate issues from multiple perspectives and identify the core problem; considers options and trade-offs; makes effective use of resources
" type="Functional"/></Col>
                    </Row>
                </div>
    </div>
);
};

export default HartLeadershipFramework;