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
import SurveyInfoPopUp from "./SurveyInfoPopUp"
import SurveyInstrPopUP from './SurveyInstrPopUp';
const SurveyModal = () => {
    const [surveys, setSurveys]= useState([]);
    const [questions, setQuestions]= useState([]);
    const [show, setModalShow] = useState(false)
    const [showInstructions, setInstrModal] = useState(false)
    const [showSurvey, setShowSurvey] = useState(false);
    const [gl, setGL] = useState([]);
    const [bl, setBL] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const closeInstrModal = () => {
        setInstrModal(false);
        setModalShow(true);
    }
    const closeModal = () =>{ 
        setModalShow(false); 
        console.log(gl);
        setShowSurvey(true);  
    };
    const handleClick=()=>{
        setInstrModal(true);
    }
useEffect(() => {
    fetchSurveys(setSurveys);
    fetchQuestions(setQuestions);
    setIsLoading(false); 
}, []);
return (
    <div className="container justify-content-center align-items-center h-100">
        {isLoading ? (
                    <Loading/> 
                 ) : (
                     <div>
    {!show && !showSurvey && !showInstructions && <div>
        <button className="btn btn-primary" type="button" onClick={handleClick}> Begin Hart Leadership Assessment </button>
        </div>}
        <SurveyInstrPopUP closeModal={closeInstrModal} show={showInstructions}  good={setGL} bad={setBL}> </SurveyInstrPopUP>
<SurveyInfoPopUp closemodal={closeModal} show={show}  good={setGL} bad={setBL}> </SurveyInfoPopUp>
{!show && showSurvey &&    <Surveys questions={questions.splice(0, 2)} showing={false} resultShowing={false} buttonShowing={true}  competencyQuiz={false} title={surveys.title} survey_id = {surveys.survey_id} gl={gl} bl={bl}/>
}
</div>
                 )}
    </div>
);
};

export default SurveyModal;