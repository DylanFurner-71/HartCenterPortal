import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Kathy from "../../images/coacher.ec7dc45b3a35077c4368145c68a7719b.jpg";
import Assoc from "../../images/contact-2.32b96c2dc3afde4dd53b201c98f828ff.png";
import ContactHeader from "../../images/contact-header.87c70e4ae6c286c3f60af60252764a87.png";
import ContactCard from "./ContactCard";
import {Card, Image} from "react-bootstrap";

const Administrator = {
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
    const { user } = useSelector(state => state.auth.user);
    console.log("USER ----->", user);
return (

    <div
        className='container justify-content-center align-items-center h-100'
    >
            {/* <div className="row">
            <div class="col-md-6 col-md-offset-3">
<Image src={ContactHeader} style={{width: "100%"}}></Image>
</div>
    </div> */}
        <div className='row'>
            <div className='justify-content-center container align-wrapper'>
                <h2>
                Hart Center for Engineering Leadership
                </h2>
                <p>Lyle School of Engineering</p>

<p>Caruth Hall </p>

<p>3145 Dyer Street </p>

<p>Dallas, Texas 75205 </p>

<p>Fax: (214) 768-4482</p>
<a href="mailto:hartleadership@lyle.smu.edu">hartleadership@lyle.smu.edu</a>
            </div>
            </div>
            <div className='row'> 
            <ContactCard name={Administrator.name} email={Administrator.email} phoneNumber={Administrator.phoneNumber} image={Administrator.image} jobTitle={Administrator.jobTitle}/>
            <ContactCard name={associate.name} email={associate.email} phoneNumber={associate.phoneNumber} image={associate.image} jobTitle={associate.jobTitle}/>
            </div>
    </div>
);
};

export default ContactUs;