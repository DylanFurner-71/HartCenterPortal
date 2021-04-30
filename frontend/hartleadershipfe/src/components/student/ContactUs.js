import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/authActions.js';
import {HartAPIPrefix} from '../../prefixes/hart';
import { Link } from 'react-router-dom';
import {Card} from "react-bootstrap";
import Kathy from "../../images/coacher.ec7dc45b3a35077c4368145c68a7719b.jpg";
import Assoc from "../../images/contact-2.32b96c2dc3afde4dd53b201c98f828ff.png";
import ContactHeaderImage from "../../images/contact-header.87c70e4ae6c286c3f60af60252764a87.png";
import ContactCard from "./ContactCard";
import {Card, Image} from "react-bootstrap";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {HartAPIPrefix} from '../../prefixes/hart';
import Loading from "../Loading";

import ContactHeader from "./ContactHeader";
const Administrator2 = {
    name: "Kathy Hubbard",
    email: "khubbard@smu.edu",
    image: Kathy,
    phoneNumber: "(214)768-3033",
    jobTitle: "Director",
}
const associate = { //need to store in api 
    name: "Katie DeSimone",
    email:"kdesimone@smu.edu",
    image: Assoc,
    phoneNumber: "(214)768-1842",
    jobTitle: "Assistant Director",
}
const ContactUs = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth.user);
    const [contactInfo, setContactInfo]= useState({});
    const [contactCardInfo, setContactCardInfo]= useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isStudent, setIsStudent] = useState(true);
    const fetchContactCardInfo = async () => {
        await axios
            .get(`${HartAPIPrefix}/contact/contactCardInfo`)
            .then(res => {
                console.log("Entire response", res)
                const videos = res.data.response;
                setContactCardInfo(videos);
                if (user.isStudent === true){
                    setIsStudent(false);
                  }
                 setIsLoading(false);
            }).catch(err=> console.log(err))
        };
    useEffect(
        () => {
            const fetchContactInfo = async () => {
            await axios
                .get(`${HartAPIPrefix}/contact/contactInfo`)
                .then(res => {
                    const videos = res.data.response;
                    setContactInfo(videos);

                }).catch(err=> console.log(err))
            };
  
            fetchContactInfo();
            fetchContactCardInfo();
        },[]);
return (
    <div
        className='container justify-content-center align-items-center h-100'
    >
          {isLoading ? (
                    <Loading/> 
                 ) : (
                     <div>
        <ContactHeader contactInfo={contactInfo[0]}/>
            <div className='row'> 
            {
                contactCardInfo.map(Administrator => {
                    return (
                        <ContactCard name={Administrator.name} email={Administrator.email} phoneNumber={Administrator.phoneNumber} image={Administrator2.image} jobTitle={Administrator.jobTitle} id={Administrator.id} isStudent={isStudent} updateVar={fetchContactCardInfo}/>
                    )
                })
            }
            </div>
            </div>
                 )}
    </div>
);
};

export default ContactUs;