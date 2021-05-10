import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/authActions.js';
import {HartAPIPrefix, HartURL} from '../../prefixes/hart';
import { Link } from 'react-router-dom';
import Loading from "../Loading";
import {Row, Container, Col} from "react-bootstrap/";
import { Button } from 'react-bootstrap';
import { setCurrentCompetency } from '../../actions/authActions.js';
import { Redirect } from 'react-router-dom'

const CompetencyCard = (props) => {

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
           <img src={`${HartURL}/public/images/${props.competency.imageName}`} style={{height:"5rem", width:"5rem"}}></img>
    <Col>
    {`${props.competency.competency}`}
            <br></br>
            {`${props.competency.quote}`}
            <br></br>
            {`${props.competency.competency_desc}`}
            <br></br>
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