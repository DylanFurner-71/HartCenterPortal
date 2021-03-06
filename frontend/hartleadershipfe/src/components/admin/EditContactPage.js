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
import { Redirect } from 'react-router-dom'
import { Component } from 'react';
import {connect} from 'react-redux';
import OtherSurvey from "../student/OtherSurvey";
import OtherSurveyCard from "../info/OtherSurveyCard"
import ContactUs from "../student/ContactUs"
import {AddContactCardButton} from "./AddContactCardButton";
const EditContactPage = (props) => {
    const { user } = useSelector(state => state.auth.user);

return (
 <div>
                    <h1><b>Edit/Add/Delete Features On The Contact Us Page</b></h1> 
                    <p> Here is what the student sees: </p>
                    <ContactUs>
                    </ContactUs>
                To add a new contact card:
                <div className="w-100">
                <AddContactCardButton></AddContactCardButton>
                </div>
                 <div>
		</div>
                 <p> To delete a contact card, simply hit the trash can button.</p>
            </div>
                 ) 
                 
};

export default EditContactPage;