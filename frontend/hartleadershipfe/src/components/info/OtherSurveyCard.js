import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {HartAPIPrefix, HartURL} from '../../prefixes/hart';
import axios from 'axios';
import {Row, Container, Col} from "react-bootstrap/";

const OtherSurveyCard = (props) => {
  const { user } = useSelector(state => state.auth.user);
  const [isStudent, setIsStudent] = useState(true);
  const [survey, setSurvey] = useState({})
    useEffect(
      () => {
       setSurvey(props.other);
      },[]);
      useEffect(() => {
  if (!user.isStudent === true){
    setIsStudent(false);
  }
})
function deleteSurvey(id, imageName) {
  return new Promise((resolve, reject) => {
      axios.delete(`${HartAPIPrefix}/other/survey/${id}/${imageName}`)
          .then(resp => resolve(resp.data))
          .catch(err => console.log(err.response));
  })
} 
useEffect(() => {
  if (!user.isStudent === true){
    setIsStudent(false);
  }
})
return (
  <div>
    <Container className="competency border border-dark rounded" style={{zIndex:'950'}}>
           <Row>
            <img src={`${HartURL}/public/images/${survey.imageName}`} style={{width: "15rem", height: "15rem"}}/>
    <Col>
    <a href={`${survey.link}`}> {survey.title}</a>
    <p>{survey.description}</p>
    {isStudent ? (
<></>
    ) : (
<div>
      <button onClick={() => deleteSurvey(survey.title, survey.imageName)} className="btn btn-outline-secondary">
      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>
  </button>
  </div>
    )}

              </Col>
              </Row>
    </Container>
    </div>
);
};

export default OtherSurveyCard;