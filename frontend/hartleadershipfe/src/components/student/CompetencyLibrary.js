import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/authActions.js';
import {HartAPIPrefix} from '../../prefixes/hart';
import { Link } from 'react-router-dom';
import CompetencyBar from "./CompetencyBar";
import {Row, Container, Col} from "react-bootstrap/";
import Loading from "../Loading";

const CompetencyLibrary = () => {
    const { user } = useSelector(state => state.auth);
    // console.log("USER ----->22222", user);
    const [competencies, setCompetencies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [competencies1, setCompetencies1]= useState([]);
    const [competencies2, setCompetencies2]= useState([])
    const [competencies3, setCompetencies3]= useState([])
    const [competencies4, setCompetencies4]= useState([]);
    const splitCompetencies = (competencies) => {
        if (competencies && competencies.length && competencies.length > 1){
            let competencies1, competencies2, competencies3, competencies4;
            competencies1 = [competencies[0], competencies[1], competencies[2]];
            competencies2 = [competencies[3], competencies[4], competencies[5]];
            competencies3 = [competencies[6], competencies[7], competencies[8]];
            competencies4 = [competencies[9], competencies[10], competencies[11]];
            setCompetencies1(competencies1);
            setCompetencies2(competencies2);
            setCompetencies3(competencies3);
            setCompetencies4(competencies4);
            setIsLoading(false);

        }
    }
    useEffect(() => {
   
        const getCompetencies = async () => {
            await axios
                .get(`${HartAPIPrefix}/competency/`)
                .then(res => {
                    const competencies = res.data.response;
                    setCompetencies(competencies);
                    splitCompetencies(competencies);
                });
        };
        getCompetencies();
    }, []);

return (
    <Container fluid>
        <h1 className="TBD">Competency Library</h1>
        <div className="h-100 w-100 align-items-center m-sm">
                {isLoading ? (
                    <Loading/> 
                 ) : (
                    <div className="container" >
                    <Row>
                    <Col>        <CompetencyBar competencyArea ="Personal Leadership" competencies={competencies1} /></Col>
                    <Col>        <CompetencyBar competencyArea = "Relational Leadership" competencies={competencies2}/></Col>
                    </Row>
                    <Row>
                    <Col>        <CompetencyBar competencyArea = "Functional Leadership" competencies={competencies3}/>
</Col>
                    <Col>        <CompetencyBar competencyArea = "Leading In Context" competencies={competencies4}/>
</Col>
                    </Row>
                </div>
                 )}

</div>
    </Container>
);
};

export default CompetencyLibrary;