import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/authActions.js';
import {HartAPIPrefix} from '../../prefixes/hart';import { useInput } from '../hooks/InputHook';
import {Row, Container, Col} from "react-bootstrap/";
import Loading from "../Loading";
import CompetencyCard from "../info/CompetencyCard";

const UpdateCompetenciesForm = () => {
    const [competencies, setCompetencies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // const { value:newQuote, bind:bindNewQuote, reset:resetNewQuote } = useInput('');    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        // alert(`Submitting Quote ${newQuote}`);
        //call a post to submit the new quote through the API!
        // resetNewQuote();
    }
    useEffect(() => {
   
        const getCompetencies = async () => {
            await axios
                .get(`${HartAPIPrefix}/competency/`)
                .then(res => {
                    const competencies = res.data.response;
                    setCompetencies(competencies);
                    setIsLoading(false);
                });
        };
        getCompetencies();
    }, []);

    return (
        <Container>
             {isLoading ? (
                    <Loading/> 
                 ) : (
                     <div>
<h2>
    Welcome to the update competencies page.
    </h2>    
    <p>
        To get started, please select which competency to edit. 
        </p> 
        <br>
        </br>
        <p>
            This is what the student sees throughout the website.
        </p>
        {competencies.map( competency =>{
                        return<div className="m-2">
                            <CompetencyCard competency={competency}/>
                        </div>
                    })}   

        </div> )}
    </Container>
    );
  }

  export default UpdateCompetenciesForm;