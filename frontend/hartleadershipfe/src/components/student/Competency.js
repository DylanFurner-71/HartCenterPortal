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
    const prevProps = useRef(props);
    const [isLoading, setIsLoading] = useState(true);
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
                     setVideos(vidf);
                     setIsLoading(false);
                }).catch(err=> console.log(err))
            };
                fetchVideos();
        },[]);
    //need to update database to have a competencies_items route.
    //competencies each have a competency id, that is how they will relate in the table.
    //competencies video card to extract and display videos? if she wants to add text or something else then that will require another table

return (
    <div
        className='container justify-content-center align-items-center h-100'
    >
 {isLoading ? (
                    <Loading/> 
                 ) : (
 <div>
                    <h1><b>{competency.competency}</b></h1> 
                    {videos.map(vid =>{
                        return<div className="m-1"> <CompetencyVideo vid_desc={vid.vid_desc} video_link={vid.video_link}/></div>
                    })}
            </div>
                 ) 
                }
                 
    </div>
);
};

export default Competency;