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
const pathname = window.location.pathname
const EditAssessment = () => {
    const { user } = useSelector(state => state.auth.user);
    const [isLoading, setIsLoading] = useState(true);
    const [survey, setSurvey] = useState([]);
    const [title, setTitle] = useState('');
    const {id} = useParams();
    console.log("IDALKJSFL 1234: ", id)
    // let id = String(id1)
    const fetchSurveys = async () => {
        await axios
        .get(`${HartAPIPrefix}/survey/1`) //check this
        .then(res => {
            console.log(typeof res.data)
            console.log( res.data)
                // console.log('response;', res)
                setSurvey(res.data.response);
                // setIsLoading(false);
            }).catch(err=> console.log(err))
        };
        useEffect(
            () => {
                const fetchTitle = async () => {
                    await axios 
                    .get(`${HartAPIPrefix}/survey/title/1`)
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
                    //select tab function, default to =       
                    <div>            
                 {survey.map((s, i) =>{ return <div key={i}>

                 <SurveyCard question={s} survey_id={id} questionid={s.question_id}/>

                 </div>        })}

</div>

                        {/* this will be the function that returns our edit questions table*/}
                        {/* <div className="m-1"><DisplaySurvey survey={survey} updateVar={setSurvey} /></div> */}
                    {/* <AddSurveyButton/> */}

                 
    </div>
)}
</div>
);
                 }

export default EditAssessment;