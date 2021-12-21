import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/authActions.js';
import {HartAPIPrefix} from '../../prefixes/hart';
import { Link } from 'react-router-dom';
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import { Component } from 'react';
import {connect} from 'react-redux';
import OtherSurvey from "../student/OtherSurvey";
import OtherSurveyCard from "../info/OtherSurveyCard"
import {fetchQuestions, fetchStudentResponses, fetchSurveys} from "../../actions/surveyActions.js";
import PastAssessmentsCard from './pastAssessmentsCard.js';
const PastAssessmentsList = (props) => {
    const responses = props.responses;
return (
    <div
        className='container justify-content-center align-items-center h-100'
    >
 <div>
                    <h1><b>Previously Taken Hart Leadership Assessments</b></h1> 
                    {responses.map((survey, i) =>{
                            return <div key={i} className="m-1"><PastAssessmentsCard response={survey} attempt={i}/></div>
                        })
                    }
            </div>
                 
                
                 
    </div>
);
};

export default PastAssessmentsList;