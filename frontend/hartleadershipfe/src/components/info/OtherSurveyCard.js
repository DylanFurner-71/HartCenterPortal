import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {HartAPIPrefix} from '../../prefixes/hart';

import {Row, Container, Col} from "react-bootstrap/";

const OtherSurveyCard = (props) => {
  const { user } = useSelector(state => state.auth.user);
  const [isStudent, setIsStudent] = useState(true);
  const [survey, setSurvey] = useState(props.other)
    const [state, setState] = useState(props.other)
useEffect(() => {
  if (user.isStudent === true){
    setIsStudent(false);
  }
})
return (
  <div>
    <Container className="competency border border-dark rounded" style={{zIndex:'950'}}>
           <Row>
                {/* {renderImage()} */}
    <Col>
    <a href={survey.link}> {survey.title}</a>
    <p>{survey.description}</p>
    {isStudent ? (
<></>
    ) : (
      <p> Display a trash can logo here</p>
    )}

              </Col>
              </Row>
    </Container>
    </div>
);
};

export default OtherSurveyCard;