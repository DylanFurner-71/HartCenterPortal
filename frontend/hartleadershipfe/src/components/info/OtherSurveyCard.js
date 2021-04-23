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
const OtherSurveyCard = (props) => {
    const [redirect, setRedirect] = useState(false);
    const [survey, setSurvey] = useState(props.other)
    const dispatch = useDispatch();
    const [state, setState] = useState(props.other)
    function onClickButton(){
        // setRedirect(true);
        // dispatch(setCurrentCompetency(props.competency));

     }
return (
  <div>
    <Container className="competency border border-dark rounded" style={{zIndex:'950'}}>
           <Row>
                {/* {renderImage()} */}
    <Col>
    <a href=    {survey.link}> {survey.title}</a>
    {survey.desc}
    {/* {`${props.competency.competency}`}
            <br></br>
            {`${props.competency.quote}`}
            <br></br>
            {`${props.competency.competency_desc}`}
            <br></br>
            <Button onClick={onClickButton} variant="light">
              Edit
              </Button> */}

              </Col>
              </Row>
    </Container>
    </div>
);
};

export default OtherSurveyCard;