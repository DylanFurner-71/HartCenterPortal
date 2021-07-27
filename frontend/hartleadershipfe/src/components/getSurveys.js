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

const GetSurveys = (props) => {
const { user } = useSelector(state => state.auth.user);
const [surveys, setSurveys]= useState([]);
const [questions, setQuestions]= useState([]);
const [prevResults, setPrevResults]= useState([]);
const prevProps = useRef(props);
const [show, setModalShow] = useState(true)
const closeModal = () => setModalShow(false);
const openModal = () => setModalShow(true)
const [isLoading, setIsLoading] = useState(true);
function handleResult() {
    console.log('Results');

}  

useEffect(
    () => {
        fetchSurveys();
        fetchStudentResponses();   
        fetchQuestions();  
        setIsLoading(false); 
        setModalShow(true); 
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
                   const fetchStudentResponses = async () => {
            await axios
            .get(`${HartAPIPrefix}/response/${user.info.smu_id}`)
            .then(res => {
                const students = res.data;
                console.log("prev results", students)
                console.log(students.response.length == 0)
                setPrevResults(students.response);
                return students.response
            }).catch(err=> console.log(err))
           };

return (
    <>
   <div
       className='container justify-content-center align-items-center h-100'
   >
                   <h1><b>The Hart Leadership Assessment</b></h1>
         {prevResults.length != 0 ? <div> 
                    You have taken the survey before.
                    Someday your results will be displayed here
                    If you would like to take the survey again, please click here.
                    </div> : (   <div>
                        {show ?   <div>      <Modal
            centered onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <HartLeadershipInfo></HartLeadershipInfo>
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body className ="mx-auto">
                <AboutUs/>

                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={closeModal}> Close </button>
                        </Modal.Body>
            </Modal> </div>: null }
                        <Surveys questions={questions} showing={false} resultShowing={false} buttonShowing={true} handleResult = {handleResult} competencyQuiz={false} title={surveys.title}/>
                        </div>)}
               
   </div>
   
               
   </>
);
};
 
export default GetSurveys;

