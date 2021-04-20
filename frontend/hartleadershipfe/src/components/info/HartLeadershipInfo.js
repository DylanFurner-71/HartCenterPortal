import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const HartLeadershipInfo = () => {
    const { user } = useSelector(state => state.auth.user);
    console.log("USER ----->", user);
return (

    <div
        className='container justify-content-center align-items-center h-100'
    >
        <div className='row'>
            <div className='justify-content-center container align-wrapper'>
                <h2>
                The Hart Leadership Assessment 
                </h2>
                <p>The Hart Leadership Assessment (HLA) is a self-assessment developed exclusively for the Hart Center for Engineering Leadership, and is based on the Hart Leadership Framework.
It can be taken at the beginning of a student's first year and reveals baseline leadership strengths and areas for growth. We help students review and analyze results, then customize a Personal Development Plan.

The HLA contains 60 adjectives or descriptive phrases, each focused on a specific leadership characteristic. The 60 phrases have been grouped into 12 attributes that describe critical aspects of engineering leadership. These attributes are further organized into four major focus areas: personal leadership, relational leadership, functional leadership, and contextual leadership.

While taking the HLA, students are first asked to identify a specific "good leader" and a specific "poor leader" they know. Students then rate themselves on each leadership attribute in comparison to the "good leader" and "poor leader." Afterwards, students are able to compare their self-ratings to those of the "good leader" and "poor leader." This process helps students identify personal leadership strengths and shortcomings and provides insight into areas for growth.

To take the Hart Leadership Assessment, click on Hart Leadership Survey in the navigation bar above.
</p>
            </div>
            </div>
    </div>
);
};

export default HartLeadershipInfo;