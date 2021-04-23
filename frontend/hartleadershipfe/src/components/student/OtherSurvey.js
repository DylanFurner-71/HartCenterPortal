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
const OtherSurvey = (props) => {
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
    function renderQuote(){
        if (competency.competency === "Self Awareness"){
            return <p className="text-secondary"> "Your visions will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes" - C.G. Jung
            </p>

        }
        if (competency.competency === "Intentional Learning"){
            return <p className="text-secondary">"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do" - Pele</p>
        }
        if (competency.competency === "Effective Communication"){
            return <p className="text-secondary">"The art of communication is the language of leadership" - James Humes

            </p>

        }
        if (competency.competency === "Relational Development"){
            return <p className="text-secondary">“Be genuinely interested in everyone you meet and everyone you meet will be genuinely interested in you” ― Rasheed Ogunlaru
            </p>

        }
        if (competency.competency === "Embrace Diversity & Difference"){
            return <p className="text-secondary">“Strength lies in differences, not in similarities” - Stephen Covey
            </p>

        }
        if (competency.competency === "Engaging Leadership"){
            return <p className="text-secondary">“Good leadership is not about advancing yourself, It is about advancing your team” - John C. Maxwell
            </p>

        }
        if (competency.competency === "Directive Leadership"){
            return <p className="text-secondary">“The most important role of a leader is to set clear direction, be transparent about how to get there and stay the course” - Irene Rosenfeld
            </p>
        }
        if (competency.competency === "Champions Effective Processes"){
            return <p className="text-secondary">“We should work on our processes and not the outcome of our processes” - W.Edwards Deming
            </p>
        }
        if (competency.competency == "Problem Solving"){
            return <p className="text-secondary">“We can not solve our problems with the same level of thinking that created them” ― Albert Einstein
            </p>

        }
        if (competency.competency == "Strategic Perspective"){
            return <p className="text-secondary">“Leaders establish the vision for the future and set strategy for getting there” - John P. Kotter
            </p>

        }
        if (competency.competency == "Ethics & Integrity"){
            return <p className="text-secondary">“Real integrity is doing the right thing, knowing that nobody's going to know whether you did it or not”. Oprah Winfrey
            </p>
        }
        if (competency.competency == "Innovative Spirit"){
            return <p className="text-secondary">“There’s a way to do it better - find it!” - Thomas Edison
            </p>
        }
        return <></>
        }
return (
    <div
        className='container justify-content-center align-items-center h-100'
    >
 {isLoading ? (
                    <Loading/> 
                 ) : (
 <div>
                    <h1><b>{competency.competency}</b></h1> 
                    {renderQuote()}
                    {videos.map(vid =>{
                        return<div className="m-2"> <CompetencyVideo vid_desc={vid.vid_desc} video_link={vid.video_link}/></div>
                    })}
            </div>
                 ) 
                }
                 
    </div>
);
};

export default OtherSurvey;