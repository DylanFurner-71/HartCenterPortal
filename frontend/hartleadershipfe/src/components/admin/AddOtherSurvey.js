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
import Loading from "../Loading";
import { Redirect } from 'react-router-dom'
import { Component } from 'react';
import {connect} from 'react-redux';
import OtherSurvey from "../student/OtherSurvey";
import OtherSurveyCard from "../info/OtherSurveyCard"
import {AddSurveyButton} from "./AddSurveyButton";
const AddOtherSurvey = (props) => {
    const { user } = useSelector(state => state.auth.user);
    const [isLoading, setIsLoading] = useState(true);
    const [surveys, setSurveys] = useState([]);
 
    useEffect(
        () => {
            const fetchSurveys = async () => {
            await axios
            .get(`${HartAPIPrefix}/other/survey/`)
            .then(res => {
                    setSurveys(res.data.response);
                     setIsLoading(false);
                }).catch(err=> console.log(err))
            };
            fetchSurveys();
        },[surveys]);

return (
    <div
        className='container justify-content-center align-items-center h-100'
    >
 {isLoading ? (
                    <Loading/> 
                 ) : (
 <div>
                    <h1><b>Edit/Add/Delete Other Surveys</b></h1> 
                    <p> Here is what the student sees: </p>
                    {surveys.map(survey =>{
                            return <div className="m-1"><OtherSurveyCard other={survey} updateVar={setSurveys}/></div>
                        })
                    }
                    <AddSurveyButton/>

            </div>
                 ) 
                }
                 
    </div>
);
};

export default AddOtherSurvey;