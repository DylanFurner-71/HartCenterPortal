import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/authActions.js';
import {HartAPIPrefix} from '../../prefixes/hart';
import { Link } from 'react-router-dom';
import {Row, Container, Col} from "react-bootstrap/";

const FrameworkTextCard = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(
        () => {
            
        },[]);
return (
    <Container className="competency border border-dark rounded mb-0 mx-sm my-sm" style={{zIndex:'950', margin: "1rem", height:"25em"}}>
         <h3>{props.title}</h3>
         <p> <b>A Good {props.type} Leader: </b></p>
         <ul>
            <li>
                {props.gl1}
            </li>
            <li>
                {props.gl2}
            </li>
            <li>
                {props.gl3}
            </li>
         </ul>
    </Container>
);
};

export default FrameworkTextCard;