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
import {UpdateCompetenciesQuoteForm} from "./UpdateCompetenciesQuoteForm"
import {UpdateCompetenciesTitleForm} from "./UpdateCompetenciesTitleForm";
import {UpdateCompetenciesDescriptionForm} from "./UpdateCompetenciesDescriptionForm";
import CompetencyVideo from "../student/CompetencyVideo"
const EditCompetency = (props) => {
    const { user } = useSelector(state => state.auth.user);
    const { competency } = useSelector(state => state.competency);
    const [videos, setVideos]= useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(
        () => {
            const fetchVideos = async () => {
            await axios
                .get(`${HartAPIPrefix}/competency/get/video/`)
                .then(res => {
                    const videos = res.data.response;
                    console.log(videos[0])
                    const vidf = videos.filter(vid => 
                        vid.competency_id === competency.competency_id
                    )
                    console.log(vidf, "vidf");
                    console.log(competency)
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
                    <h1><b>Competency Title: {competency.competency}</b></h1> 
            <br></br>
            <p>Competency Description: {`${competency.competency_desc}`}</p>                    
            <p> This will someday allow you to update the competency image here</p>
            <UpdateCompetenciesTitleForm init={competency.title} competency_id={competency.competency_id}>
                </UpdateCompetenciesTitleForm>
            <UpdateCompetenciesDescriptionForm init={competency.desc} competency_id={competency.competency_id}>
                </UpdateCompetenciesDescriptionForm>
            <UpdateCompetenciesQuoteForm init={competency.quote} competency_id={competency.competency_id}>

    </UpdateCompetenciesQuoteForm>
    <br></br>
    <p>Quote: {competency.quote} </p>
                    {videos.map(vid =>{
                        return<div className="m-2"> <CompetencyVideo vid_desc={vid.vid_desc} video_link={vid.video_link}/></div>
                    })}
            </div>
                 ) 
                }
                 
    </div>
);
};

export default EditCompetency;