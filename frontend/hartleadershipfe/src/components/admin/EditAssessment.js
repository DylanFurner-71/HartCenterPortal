import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/authActions.js';
import {HartAPIPrefix} from '../../prefixes/hart';
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Button } from 'react-bootstrap';
import Loading from "../Loading";
import { Redirect } from 'react-router-dom'
import { Component } from 'react';
import {connect} from 'react-redux';
import OtherSurvey from "../student/OtherSurvey";
import SurveyCard from "./SurveyCard"
import {AddSurveyButton} from "./AddSurveyButton";
import { type } from 'jquery';
import QuestionAdder from "./questions/QuestionAdder"
const pathname = window.location.pathname
const EditAssessment = () => {
    const { user } = useSelector(state => state.auth.user);
    const [isLoading, setIsLoading] = useState(true);
    const [survey, setSurvey] = useState([]);
    const [title, setTitle] = useState('');
    const {id} = useParams();
    // let id = String(id1)
    const fetchSurveys = async () => {
        await axios
        .get(`${HartAPIPrefix}/survey/${id}`) //check this
        .then(res => {
            console.log(typeof res.data)
            console.log( res.data)
                setSurvey(res.data.response);
            }).catch(err=> console.log(err))
        };
    function updateVar(){
        fetchSurveys();
    }
        useEffect(
            () => {
                const fetchTitle = async () => {
                    await axios 
                    .get(`${HartAPIPrefix}/survey/title/${id}`)
                    .then(res => {
                        setTitle(res.data.response[0].title);
                    }).catch(err=> console.log(err))
                }
                fetchSurveys();
                fetchTitle();  
                setIsLoading(false); 
 
            },[]);
            //set modal show to show the student survey
return (

    <div
        className='container justify-content-center align-items-center h-100'
    >
 {isLoading ? (
                    <Loading/> 
                 ) : (
 <div>
                    <h1><b>Edit/Add/Delete {title} </b></h1> 
                    <p> Here is what the student sees: </p>
                    <div>            
                 {survey.map((s, i) =>{ return <div key={i}>

                 <SurveyCard survey={s} survey_id={id} questionid={i}/>

                 </div>        })}

</div>
<div>
<QuestionAdder survey_id={id} updateVar={updateVar}/>
</div>
    </div>
)}
</div>
);
                 }

export default EditAssessment;