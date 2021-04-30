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
import OtherSurveyCard from "../info/OtherSurveyCard"
import Loading from "../Loading";
const OtherSurvey = () => {
    const { user } = useSelector(state => state.auth.user);
    const [surveys, setSurveys]= useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(
        () => {
            const fetchVideos = async () => {
            await axios
                .get(`${HartAPIPrefix}/other/survey/`)
                .then(res => {
                    setSurveys(res.data.response);
                     setIsLoading(false);
                }).catch(err=> console.log(err))
            };
                fetchVideos();
        },[surveys]);
return (
    <div
        className='container justify-content-center align-items-center h-100'
    >
 {isLoading ? (
                    <Loading/> 
                 ) : (
 <div>
                    <h1><b>Welcome. Here are the other surveys that you may try!</b></h1> 
                    {surveys.map(survey =>{
                            return <div className="m-1"><OtherSurveyCard other={survey}/></div>
                        })}
            </div>
                 ) 
                }
                 
    </div>
);
};

export default OtherSurvey;