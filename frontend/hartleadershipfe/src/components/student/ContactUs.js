import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Kathy from "../../images/coacher.ec7dc45b3a35077c4368145c68a7719b.jpg";
import Assoc from "../../images/Dylanfurner.jpeg";
import ContactHeaderImage from "../../images/contact-header.87c70e4ae6c286c3f60af60252764a87.png";
import ContactCard from "./ContactCard";
import {Card, Image} from "react-bootstrap";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {HartAPIPrefix, HartURL} from '../../prefixes/hart';
import Loading from "../Loading";
import ContactHeader from "./ContactHeader";
const ContactUs = () => {
    const { user } = useSelector(state => state.auth.user);
    const [contactInfo, setContactInfo]= useState({});
    const [contactCardInfo, setContactCardInfo]= useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isStudent, setIsStudent] = useState(true);
    const [imgs, setImgs] = useState([])
    const [currIMG, setImgsCurr] = useState([])

    const fetchContactCardInfo = async () => {
        await axios
            .get(`${HartAPIPrefix}/contact/contactCardInfo`)
            .then(res => {
                const videos = res.data.response;
                setContactCardInfo(videos);
                if (!user.isStudent === true){
                    setIsStudent(false);
                  }
                  setIsLoading(false)
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
                imgs && contactCardInfo.map(Administrator => {
                    return (
                     
                        <ContactCard name={Administrator.name} email={Administrator.email} phoneNumber={Administrator.phoneNumber} image={`${HartURL}/public/images/${Administrator.imageName}`} jobTitle={Administrator.jobTitle} id={Administrator.id} isStudent={isStudent} imageName={Administrator.imageName}updateVar={fetchContactCardInfo}/>
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