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
const AddOtherSurvey = (props) => {
    const { user } = useSelector(state => state.auth.user);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(
        () => {
            const fetchVideos = async () => {
            await axios
            .get(`${HartAPIPrefix}/other/survey/`)
            .then(res => {
                    const videos = res.data.response;
                    const vidf = videos.filter(vid => 
                        vid.competency_id === competency.competency_id
                    )
                     setVideos(vidf);
                     setIsLoading(false);
                }).catch(err=> console.log(err))
            };
                fetchVideos();
        },[]);
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
                    <OtherSurvey></OtherSurvey>
           
            </div>
                 ) 
                }
                 
    </div>
);
};

export default AddOtherSurvey;