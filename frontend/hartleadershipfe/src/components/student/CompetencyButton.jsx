import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, setCurrentCompetency } from '../../actions/authActions.js';
import {HartAPIPrefix} from '../../prefixes/hart';
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
    function renderImage(){
        if (competency.props.competency === "Self Awareness"){
            return <img src={sa} style={{height:"5rem", width:"5rem"}}></img>

        }
        if (competency.props.competency === "Intentional Learning"){
            return <img src={il} style={{height:"5rem", width:"5rem"}}></img>

        }
        if (competency.props.competency === "Effective Communication"){
            return <img src={ec} style={{height:"5rem", width:"5rem"}}></img>

        }
        if (competency.props.competency === "Relational Development"){
            return <img src={rd} style={{height:"5rem", width:"5rem"}}></img>

        }
        if (competency.props.competency === "Embrace Diversity & Difference"){
            return <img src={dd} style={{height:"5rem", width:"5rem"}}></img>

        }
        if (competency.props.competency === "Engaging Leadership"){
            return <img src={el} style={{height:"5rem", width:"5rem"}}></img>

        }
        if (competency.props.competency === "Directive Leadership"){
            return <img src={dl} style={{height:"5rem", width:"5rem"}}></img>
        }
        if (competency.props.competency === "Champions Effective Processes"){
            return <img src={cep} style={{height:"5rem", width:"5rem"}}></img>
        }
        if (competency.props.competency == "Problem Solving"){
            return <img src={ps} style={{height:"5rem", width:"5rem"}}></img>

        }
        if (competency.props.competency == "Strategic Perspective"){
            return <img src={sp} style={{height:"5rem", width:"5rem"}}></img>

        }
        if (competency.props.competency == "Ethics & Integrity"){
            return <img src={eint} style={{height:"5rem", width:"5rem"}}></img>

        }
        if (competency.props.competency == "Innovative Spirit"){
            return <img src={is} style={{height:"5rem", width:"5rem"}}></img>

        }
        return <></>
        }
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
        {redirect ? <Redirect to={{pathname: `/competency/library/${competency.props.competency}`}}/>: null}
    {isLoading ? (
        <Loading/> 
     ) : (
    <span className="competency" width="w-5">
        <Button onClick={onClickButton} variant="light">
            <Col className="justify-content-center align-items-center">
            <Row>            {renderImage()}
            </Row>

            {`${competency.props.competency}`}
             </Col></Button>
             
    </span>
     )}
    </div>
);
};

export default CompetencyButton;