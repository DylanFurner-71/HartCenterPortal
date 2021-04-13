import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/authActions.js';
import {HartAPIPrefix} from '../../prefixes/hart';
import { Link } from 'react-router-dom';
import {Card, Image} from "react-bootstrap";


const ContactCard = (props) => {
    return (
    <Card style={{width: "44%", margin: "3%", }}>
    <div className="row align-items-center">
        <div className="col d-flex flex-col justify-content-center">
    <Image src={props.image} style={{ borderRadius: "50%", width: "10rem", height: "10rem"}}/>
    </div>
    <div className="col">
    <Card.Body>
        <Card.Text>{`${props.name}`}</Card.Text>
        <Card.Text>{`${props.jobTitle}`}</Card.Text>
<Card.Text><a href={`mailto:${props.email}`}> {`${props.email}`}</a></Card.Text>
<Card.Text>{`${props.phoneNumber}`}</Card.Text>
    </Card.Body>
    </div>
    </div>
</Card>
    )
};

export default ContactCard;