import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {HartAPIPrefix, HartURL} from '../../prefixes/hart';
import axios from 'axios';
import {Row, Container, Col} from "react-bootstrap/";

const PastAssessmentsCard = (props) => {
  const response = props.response;
return (
  <div>
    <Container className="competency border border-dark rounded" style={{zIndex:'950'}}>
           <Row>
           <Col width={"33%"}>
             <div>Hart leadership Assessment Attempt #{props.attempt+1}</div>
             <div>{response.surveydate}</div>

             </Col>
             <Col width={"33%"}>
             <div>Good Leader: {response.Good_leader}</div>
             <div>Poor Leader: {response.Poor_leader}</div>
             </Col>
             <Col width={"33%"}>
             <div>Soon this will state the strongest competency and weakest competency</div>
             </Col>
              </Row>
              <Row>
                <div>
                  click here to see your results from this session
                </div>
              </Row>
    </Container>
    </div>
);
};

export default PastAssessmentsCard;