import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/authActions.js';
import {HartAPIPrefix} from '../../prefixes/hart';
import { Link } from 'react-router-dom';
import CompetencyButton from "./CompetencyButton";
import Loading from "../Loading";
import {Row, Container, Col} from "react-bootstrap/";

const CompetencyVideo = (props) => {
    function deleteVideo(id){
        return new Promise((resolve, reject) => {
            axios.delete(`${HartAPIPrefix}/competency/video/${id}`)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }
return (
    <Container className="competency border border-dark rounded" style={{zIndex:'950'}}>
           <Row>
              <iframe
                  width="400px"
                  height="200px"
                  src={props.video_link}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                  style={{display: "block"}}
                />         
    <Col>
              {props.vid_desc}
              <br/>
              <br></br>
              <br></br>
              <button type="button" data-toggle="modal" data-target="#quiz2mod">Take Quiz</button>
              </Col>
              </Row>
              {props.isAdmin === true &&  
<div>
      <button onClick={() => deleteVideo(props.vid_desc)} className="btn btn-outline-secondary">
      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>
  </button>
  </div>

              }
    </Container>
);
};

export default CompetencyVideo;