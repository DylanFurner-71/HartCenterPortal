import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/authActions.js';
import {HartAPIPrefix} from '../../prefixes/hart';
import { Link } from 'react-router-dom';
import CompetencyBar from "./CompetencyBar";
import {Row, Container} from "react-bootstrap/"

const CompetencyLibrary = () => {
    const { user } = useSelector(state => state.auth);
    console.log("USER ----->", user);
    const [competencies, setCompetencies] = useState([]);
    let competencies1, competencies2, competencies3, competencies4;
    useEffect(() => {
        const getCompetencies = async () => {
            await axios
                .get(`${HartAPIPrefix}/competency/`)
                .then(res => {
                    const competencies = res;
                    console.log("Competencies", competencies);
             
                    setCompetencies(competencies);
                });
        };
        getCompetencies();
    }, [competencies]);
    competencies1 = [competencies[0], competencies[1], competencies[2]];
    competencies2 = [competencies[3], competencies[4], competencies[5]];
    competencies3 = [competencies[6], competencies[7], competencies[8]];
    competencies4 = [competencies[9], competencies[10], competencies[11]];
return (
    <Container fluid>
        <h1 className="TBD">Competency Library</h1>
        <Row>
        <CompetencyBar competencyArea ="Personal Leadership" competencies={competencies1}/>
        </Row>
       <Row>
        <CompetencyBar competencyArea = "Relational Leadership" competencies={competencies2}/>
       </Row>
        <Row>
        <CompetencyBar competencyArea = "Functional Leadership" competencies={competencies3}/>
        </Row>
        <Row>
        <CompetencyBar competencyArea = "Leading In Context" competencies={competencies4}/>
        </Row>
    </Container>
);
};

export default CompetencyLibrary;