
import React, { useEffect, useState, useRef } from 'react';
import {HartAPIPrefix, HartURL} from '../../prefixes/hart';
import axios from 'axios';
import {Row, Container, Col} from "react-bootstrap/";
import {fetchQuestions, fetchStudentResponses, fetchSurveys} from "../../actions/surveyActions.js";
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Loading from "../Loading";
import { Redirect } from 'react-router-dom'
import { Component } from 'react';
import {connect} from 'react-redux';
import Surveys from "./Surveys.js"
import AboutUs from "../info/AboutUs";
import { Modal} from 'react-bootstrap'
import HartLeadershipInfo from '../info/HartLeadershipInfo.js';
const SurveyInstrPopUP = (props) => {
    console.log("PIP:,", props);
    const {show, closeModal} = props;
    return ( 
 <Modal
 show={show}
centered onHide={closeModal}>
<Modal.Header closeButton>
<Modal.Title>
<HartLeadershipInfo></HartLeadershipInfo>
</Modal.Title>
</Modal.Header>
<Modal.Body className ="mx-auto">
<AboutUs/>
<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.closeModal}> Close </button>
</Modal.Body>
</Modal> 
)
}
export default SurveyInstrPopUP;