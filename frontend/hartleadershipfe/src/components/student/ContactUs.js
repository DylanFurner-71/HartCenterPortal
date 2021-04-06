import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/authActions.js';
import {HartAPIPrefix} from '../../prefixes/hart';
import { Link } from 'react-router-dom';
import {Card} from "react-bootstrap";
import Kathy from "../../images/coacher.ec7dc45b3a35077c4368145c68a7719b.jpg";
import Assoc from "../../images/contact-2.32b96c2dc3afde4dd53b201c98f828ff.png"
const ContactUs = () => {
    const { user } = useSelector(state => state.auth.user);
    console.log("USER ----->", user);
return (
    <div
        className='container justify-content-center align-items-center h-100'
    >
        <div className='row'>
            <div className='justify-content-center container align-wrapper'>
                <h2>
                Hart Center for Engineering Leadership
                </h2>
                <p>Lyle School of Engineering</p>

<p>Caruth Hall </p>

<p>3145 Dyer Street </p>

<p>Dallas, Texas 75205 </p>

<p>Fax: (214) 768-4482</p>
<a href="mailto:hartleadership@lyle.smu.edu">hartleadership@lyle.smu.edu</a>
            </div>
            </div>
            <div className='row'> 
        <Card style={{width: "44%", margin: "3%", border: "dark", }}>
            <div className="row">
                <div className="col align-items-center border border-dark">
            <Card.Img  src={Kathy} style={{borderRadius: "50%", width: "5rem"}}/>
            </div>
            <div className="col">
            <Card.Body>
                <Card.Text>Kathy Hubbard</Card.Text>
                <Card.Text>Director</Card.Text>
                <Card.Text><a href="mailto:khubbard@smu.edu">khubbard@smu.edu</a></Card.Text>
                <Card.Text>(214)768-3033</Card.Text>
            </Card.Body>
            </div>
            </div>
        </Card>
        <Card style={{width: "44%", margin: "3%", border: "dark", }}>
            <div className="row">
                <div className="col align-items-center border border-dark">
            <Card.Img  src={Assoc} style={{borderRadius: "50%", width: "5rem"}}/>
            </div>
            <div className="col">
            <Card.Body>
                <Card.Text>Katie DeSimone</Card.Text>
                <Card.Text>Assistant Director</Card.Text>
                <Card.Text><a href="mailto:kdesimone@smu.edu">kdesimone@smu.edu</a></Card.Text>
                <Card.Text>(214)768-1842</Card.Text>
            </Card.Body>
            </div>
            </div>
        </Card>
            </div>
    </div>
);
};

export default ContactUs;