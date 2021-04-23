import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/authActions.js';
import {HartAPIPrefix} from '../../prefixes/hart';
import { Link } from 'react-router-dom';
import Loading from "../Loading";
import {Row, Container, Col} from "react-bootstrap/";
import { Button } from 'react-bootstrap';
import { setCurrentCompetency } from '../../actions/authActions.js';
import { Redirect } from 'react-router-dom'

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
const CompetencyCard = (props) => {
  function renderImage(){
    if (props.competency.competency === "Self Awareness"){
        return <img src={sa} style={{height:"5rem", width:"5rem"}}></img>

    }
    if (props.competency.competency === "Intentional Learning"){
        return <img src={il} style={{height:"5rem", width:"5rem"}}></img>

    }
    if (props.competency.competency === "Effective Communication"){
        return <img src={ec} style={{height:"5rem", width:"5rem"}}></img>

    }
    if (props.competency.competency === "Relational Development"){
        return <img src={rd} style={{height:"5rem", width:"5rem"}}></img>

    }
    if (props.competency.competency === "Embrace Diversity & Difference"){
        return <img src={dd} style={{height:"5rem", width:"5rem"}}></img>

    }
    if (props.competency.competency === "Engaging Leadership"){
        return <img src={el} style={{height:"5rem", width:"5rem"}}></img>

    }
    if (props.competency.competency === "Directive Leadership"){
        return <img src={dl} style={{height:"5rem", width:"5rem"}}></img>
    }
    if (props.competency.competency === "Champions Effective Processes"){
        return <img src={cep} style={{height:"5rem", width:"5rem"}}></img>
    }
    if (props.competency.competency == "Problem Solving"){
        return <img src={ps} style={{height:"5rem", width:"5rem"}}></img>

    }
    if (props.competency.competency == "Strategic Perspective"){
        return <img src={sp} style={{height:"5rem", width:"5rem"}}></img>

    }
    if (props.competency.competency == "Ethics & Integrity"){
        return <img src={eint} style={{height:"5rem", width:"5rem"}}></img>

    }
    if (props.competency.competency == "Innovative Spirit"){
        return <img src={is} style={{height:"5rem", width:"5rem"}}></img>

    }
    return <></>
    }
    const [redirect, setRedirect] = useState(false);
    const dispatch = useDispatch();
    function onClickButton(){
        setRedirect(true);
        dispatch(setCurrentCompetency(props.competency));

     }
return (
  <div>
  {redirect ? <Redirect to={{pathname: `/competency/edit/competency`}}/>: null}
    <Container className="competency border border-dark rounded" style={{zIndex:'950'}}>
           <Row>
              {/* <iframe
                  width="400px"
                  height="200px"
                  src={props.video_link}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                  style={{display: "block"}}
                />          */}
                {renderImage()}
    <Col>
    {`${props.competency.competency}`}
            <br></br>
            {`${props.competency.quote}`}
            <br></br>
            {`${props.competency.competency_desc}`}
            <Button onClick={onClickButton} variant="light">
              Edit
              </Button>
              </Col>
              </Row>
    </Container>
    </div>
);
};

export default CompetencyCard;