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
import CompetencyVideo from "./CompetencyVideo"
const Competency = (props) => {
    const { user } = useSelector(state => state.auth.user);
    const { competency } = useSelector(state => state.competency);
    const [videos, setVideos]= useState([]);
    const [questions, setQuestions]= useState([]);
    const prevProps = useRef(props);
    const [isLoading, setIsLoading] = useState(true);
    const fetchQuestions = async () => {
        await axios
            .get(`${HartAPIPrefix}/competency/get/video/quiz`)
            .then(res => {
                const videos = res.data.response;
                videos.forEach(item => item.choices = [item.correctAnswer, item.choice2, item.choice3, item.choice4])
                console.log(videos)
                setQuestions(videos);
                 setIsLoading(false);
            }).catch(err=> console.log(err))
        };
    useEffect(
        () => {
            const fetchVideos = async () => {
            await axios
                .get(`${HartAPIPrefix}/competency/get/video/`)
                .then(res => {
                    const videos = res.data.response;
                    const vidf = videos.filter(vid => 
                        vid.competency_id === competency.competency_id
                    )
                    console.log(vidf)
                     setVideos(vidf);
                }).catch(err=> console.log(err))
            };
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
                    <h1><b>{competency.competency}</b></h1> 
                   <p className="text-secondary">{competency.quote}
            </p>
                    {videos.map(vid =>{
                        return<div className="m-2"> <CompetencyVideo vid_desc={vid.vid_desc} video_link={vid.video_link} question_id={vid.id} title={vid.title} questions={questions}/></div>
                    })}
            </div>
                 ) 
                }
                 
    </div>
);
};

export default Competency;