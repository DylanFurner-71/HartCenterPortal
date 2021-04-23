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
    </Container>
);
};

export default CompetencyVideo;