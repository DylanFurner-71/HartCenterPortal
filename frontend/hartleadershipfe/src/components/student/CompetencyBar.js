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

const CompetencyBar = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [competencies, setCompetencies]= useState([]);
    const prevProps = useRef(props);
    useEffect(
        () => {
            if (prevProps !== props) {            
              setCompetencies(props);
              setIsLoading(false);
            }
        },[props]);
return (
    <Container className="competency border border-dark rounded mb-0 mx-sm my-sm" style={{zIndex:'950', margin: "1rem"}}>
         {isLoading ? (
                    <Loading/> 
                 ) : (
                     <div>
        <h2>{props.competencyArea}</h2>
                <Row>
        {props.competencies.map(x=> {
                return <Col><CompetencyButton props={x} key={`${x}`}></CompetencyButton></Col>
        })}
        </Row>
        </div>
                 )}
    </Container>
);
};

export default CompetencyBar;