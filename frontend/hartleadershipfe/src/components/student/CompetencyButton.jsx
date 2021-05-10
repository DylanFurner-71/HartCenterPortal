import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, setCurrentCompetency } from '../../actions/authActions.js';
import {HartAPIPrefix, HartURL} from '../../prefixes/hart';
import { Link } from 'react-router-dom';
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import { Button } from 'react-bootstrap';
import Loading from "../Loading";
import { Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import sa from "../../images/library/sa.jpg";
import il from "../../images/library/il.jpg";
import ec from "../../images/library/ec.jpg";
import cep from "../../images/library/cep.png";
import ps from "../../images/library/ps.jpg";
import rd from "../../images/library/rd.jpg";
import sp from "../../images/library/sp.jpg";
import dd from "../../images/library/dd.jpg";
import el from "../../images/library/el.jpg";
import dl from "../../images/library/dl.png";
import eint from "../../images/library/ei.jpg";
import is from "../../images/library/is.jpg";
// import {setCurrentCompetency} from "../../actions/authActions";
const CompetencyButton = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [competency, setCompetency]= useState([]);
    const prevProps = useRef(props);
    const [redirect, setRedirect] = useState(false);
    const dispatch = useDispatch();
    function onClickButton(){
        setRedirect(true);
        dispatch(setCurrentCompetency(competency.props));
     }
    useEffect(
        () => {
            if (prevProps !== props) {            
                setCompetency(props);
              setIsLoading(false);
            }
        },[props]);
return (
    <div style={{zIndex:'950', marginBottom: "1rem", height: "10rem"}}>
        {redirect ? <Redirect to={{pathname: `/competency/library/competency`}}/>: null}
    {isLoading ? (
        <Loading/> 
     ) : (
    <span className="competency" width="w-5">
        <Button onClick={onClickButton} variant="light">
            <Col className="justify-content-center align-items-center">
            <Row className="justify-content-center align-items-center">   
            <img src={`${HartURL}/public/images/${competency.props.imageName}`} style={{height:"5rem", width:"5rem"}}></img>
                        </Row>
            {`${competency.props.competency}`}
             </Col>
             </Button>
             
    </span>
     )}
    </div>
);
};

export default CompetencyButton;