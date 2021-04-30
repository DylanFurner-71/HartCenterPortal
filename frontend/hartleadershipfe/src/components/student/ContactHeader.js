
import React, { useEffect, useState, useRef } from 'react';

const ContactHeader = (props) => {
    return (
         <div className='row'>
            <div className='justify-content-center container align-wrapper'>
                <h2>
                    {props.contactInfo.ContactTitle}
                </h2>
                   <p> {props.contactInfo.schoolName}</p>

<p>{props.contactInfo.buildingName}</p>

<p>{props.contactInfo.addressLine1}</p>

<p>{props.contactInfo.addressLine2} </p>

<p>Fax:{props.contactInfo.fax}</p>
<a href={`mailto:${props.contactInfo.email}`}>{props.contactInfo.email}</a>
            </div>
            </div>
            )
};

export default ContactHeader;
