import React from 'react';
import "./styles/debrief.css"
const Print = (value) => {
    if(value)
        return ( <p className='fakePrint' style={{color:'blue'}}>Print</p> );
}
 
export default Print;
