import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/authActions.js';
import {HartAPIPrefix} from '../prefixes/hart';
import { Link } from 'react-router-dom';
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Button } from 'react-bootstrap';
import Loading from "./Loading";
import { Redirect } from 'react-router-dom'
import { Component } from 'react';
import {connect} from 'react-redux';
import Surveys from "./Surveys.js"
import AboutUs from "./info/AboutUs";
import { Modal} from 'react-bootstrap'
import HartLeadershipInfo from './info/HartLeadershipInfo.js';
import ReportOrSurveyCard from "./student/ReportOrSurveyCard"
import SurveyPopUp from './student/SurveyPopUp.js';
const GetSurveys = (props) => {
const { user } = useSelector(state => state.auth.user);
const [surveys, setSurveys]= useState([]);
// const [categories, setCategories]= useState([]);
const [questions, setQuestions]= useState([]);
const [competencies, setCompetencies] = useState([]);
const [gl, setGL]= useState([]);
const [bl, setBL]= useState([]);
const prevProps = useRef(props);
const [modalShow, setModalShow] = useState(false)
const [showSurvey, setShowSurvey] = useState(false)
const closeModal = () => { 
    setModalShow(false);
    setShowSurvey(true);
}
const openModal = () => setModalShow(true)
const [isLoading, setIsLoading] = useState(true);
function handleResult() {
    console.log('Results');

}  

useEffect(
    () => {
        fetchSurveys();
        fetchCompetencies();
        fetchQuestions();  
        setIsLoading(false); 
        // console.log("MODAL SHOW:::", show)
        openModal(); 
        // console.log("Modal Show:::", show)
    },[]);
    useEffect(
        () => {
    
        },[]);
   const fetchQuestions = async () => {
       await axios
           .get(`${HartAPIPrefix}/survey/1`)
           .then(res => {
               const videos = res.data.response;
               setQuestions(videos);
               return videos;
           }).catch(err=> console.log(err))
       };
       const fetchSurveys = async () => {
        await axios
            .get(`${HartAPIPrefix}/survey/title/1`)
            .then(res => {
            const surveys = res.data.response;
            setSurveys(surveys);
            return surveys
            }).catch(err=> console.log(err))
        };
        const fetchCompetencies = async () => {
                    await axios
                        .get(`${HartAPIPrefix}/competency/cc`)
                        .then(res => {
                            const competencies = res.data.response;
                            setCompetencies(competencies);
                        });
                };
return (
    <>
   <div
       className='container justify-content-center align-items-center h-100'
   >
                   <h1><b>The Hart Leadership Assessment</b></h1>
                     <div>
                     {!modalShow && !showSurvey && <button className="btn btn-primary" type="button" onClick={openModal}>Take Hart Leadership Assessment</button>}
                     <SurveyPopUp closeModal={closeModal} show={modalShow} good={setGL} bad={setBL}/>
                     {showSurvey && <Surveys questions={questions.slice(0, 5).sort((e, l) => {return e.question_id < l.question_id})} competencies={competencies}showing={false} resultShowing={false} buttonShowing={true} handleResult = {handleResult} competencyQuiz={false} title={surveys.title} gl={gl} bl={bl}/>}

                        </div>
               
   </div>
   
               
   </>
);
};
 
export default GetSurveys;

