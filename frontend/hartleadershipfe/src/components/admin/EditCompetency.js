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
import {UpdateCompetenciesImageForm} from "./UpdateCompetenciesImageForm"
import CompetencyVideo from "../student/CompetencyVideo"
import {AddVideosForm} from "./AddVideosForm";
import {DeleteQuestionForm} from "./DeleteQuestionForm"
const EditCompetency = (props) => {
    const { user } = useSelector(state => state.auth.user);
    const { competency } = useSelector(state => state.competency);
    const [videos, setVideos]= useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [title, setTitle] = useState(competency.competency)
    const [desc, setDesc] = useState(competency.competency_desc);
    const [quote, setQuote] = useState(competency.quote);
    const [imageName, setImageName] = useState(competency.imageName)
    const [questions, setQuestions]= useState([]);
    const fetchQuestions = async () => {
        await axios
            .get(`${HartAPIPrefix}/competency/get/video/quiz`)
            .then(res => {
                const videos = res.data.response;
                videos.forEach(item => item.choices = [item.correctAnswer, item.choice2, item.choice3, item.choice4])
                setQuestions(videos);
                setIsLoading(false);
            }).catch(err=> console.log(err))
        };
    const fetchVideos = async () => {
        await axios
            .get(`${HartAPIPrefix}/competency/get/video/`)
            .then(res => {
                const videos = res.data.response;
                console.log(videos)
                const vidf = videos.filter(vid => 
                    vid.competency_id === competency.competency_id
                )

                 setVideos(vidf);
                //  setIsLoading(false);
            }).catch(err=> console.log(err))
        };
    useEffect(
        () => {
                fetchVideos();
                fetchQuestions();
        },[]);

return (
    <div
        className='container justify-content-center align-items-center h-100'
    >
 {isLoading ? (
                    <Loading/> 
                 ) : (
 <div>
                    <h1><b>Competency Title: {title}</b></h1> 
            <br></br>
            <p> <b>Description:</b> {desc} </p>                    
            <p> This will someday allow you to update the competency image here</p>
                 <p>Quote: {quote}</p>
            <div
        className='container justify-content-center align-items-center h-100 border border-dark'
    >
            <UpdateCompetenciesTitleForm init={competency.competency} competency_id={competency.competency_id} updateVar={setTitle}>
                </UpdateCompetenciesTitleForm>
            <UpdateCompetenciesDescriptionForm init={competency.competency_desc} competency_id={competency.competency_id} updateVar={setDesc}>
                </UpdateCompetenciesDescriptionForm>
            <UpdateCompetenciesQuoteForm init={competency.quote} competency_id={competency.competency_id} updateVar={setQuote}>
    </UpdateCompetenciesQuoteForm>
    <UpdateCompetenciesImageForm init={competency.quote} competency_id={competency.competency_id} updateVar={setImageName}>
    </UpdateCompetenciesImageForm>
    </div>
    <div>
        To add more videos and quizzes, use the features below
        <h3><b>Add new video and quiz</b></h3>
        <AddVideosForm updateVar={fetchVideos} competency_id={competency.competency_id}>

        </AddVideosForm>
    </div>
    <br></br>
                    {videos.map(vid =>{
                        return<div className="m-2"> <CompetencyVideo vid_desc={vid.vid_desc} video_link={vid.video_link} id={vid.id} title={vid.title} isAdmin={true} questions={questions}/></div>
                    })}
            </div>
                 ) 
                }
                <DeleteQuestionForm questions={questions}/>

    </div>
);
};

export default EditCompetency;