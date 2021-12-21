import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Surveys from "./Surveys";
import axios from 'axios';
import {fetchStudentResponses} from "../../actions/surveyActions.js";
import Loading from "../Loading";
const Results = (props) => {
	const { user } = useSelector(state => state.auth.user);
	const [response, setResponse]= useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(
		() => {
			console.log("PROPS: ",props);
			if (props.response == null){
				console.log("qqq");
				fetchStudentResponses(setResponse, user.info.smu_id);   
			} else {
				setResponse(props.response);
			}
			console.log("results: ", response);
			setIsLoading(false); 
		},[])
        return (
					<div>
						 {isLoading ? (
                    <Loading/> 
                 ) : (
 <div>
                    {/* <h1><b>Welcome. Here are the other surveys that you may try!</b></h1> 
                    {surveys.map(survey =>{
                            return <div className="m-1"><OtherSurveyCard other={survey}/></div>
                        })} */}
            </div>
                 ) 
                }
            {/* <div ng-repeat="surveyResponse in surveyResponses"/>
<div ng-controller="LineGraphController as ctrl" ng-init="init(surveyResponse)" >
<div style="text-align: center; fontSize: 18px; fontWeight: bold"> 1/11 </div>
<div style="fontSize: 25px; fontWeight: bold; margin-left: 10px"> Name: Name
<span style="float: right; fontSize: 25px; fontWeight: bold; margin-right: 10px"> SMU ID#: SMU ID </span></div>
<div className="result-page" style="height: 1250px">
<h1 style="text-align:center"><strong> Hart Leadership Assessment (HLA) Overview </strong></h1>
<div style="fontSize: 20px; margin: 20px">
The HLA is designed to help you evaluate your leadership capabilities in comparison to a "Good Leader" and a "Poor Leader" you know.  Because the HLA is a self-assessment, the good/poor leader comparison method helps you better rate your behavior based on your personal experiences with both leaders.
  
The HLA assesses <strong> behavior-based </strong> competencies demonstrated by project and first level managers.   The HLA is not a personality test nor does it claim anything definitive about you.  Your HLA Report result is merely feedback for you to consider in the context of this course or in other areas of your life.
  
As you review your report please keep in mind the rules of feedback.
 
<strong>
<li> Feedback is data </li>
<li> Data is neutral (not good or bad) </li>
<div style="fontSize: 14px; margin-left: 25px"> Two common mistakes
1. <u> Over Acceptance </u> (you accept without question)  
2. <u> Over Dismissive </u> (you reject everything) </div> 
<li> Balance approach to considering data, ask those who know you well to confirm or dispel (remember, you are the expert on you) </li>
<li> Data is static, (this represents your state of mind at the time you took the survey) </li>  
The Lyle Leadership Framework
</strong>
was designed specifically for engineering students. A group of Lyle faculty, staff, and colleagues from the Center for Creative Leadership created the framework to guide leadership development efforts in the Lyle School of Engineering. Leadership is a vast and complex phenomenon.  An arch was selected as a symbol  for leadership.  Like leadership, arches are both simple and complex structures.  Arches symbolize portal in which one may transit from one place to another.
  
This framework  does not intend to cover every aspect of leadership. Instead, it helps define the key elements of leadership relevant  to engineering and related disciplines.

<img data-ng-src="../styles/hartlogo.jpg" style="float: right;" height="300px" width="400px"/>
The leadership arch is divided into four sections, indicative of the Focus Areas of the framework.
  
<b> Personal Leadership </b> forms the foundation, or base of the arch.
  
The left side of the arch symbolizes <b> Relational Leadership </b> and the right  side of the arch represents <b> Functional Leadership. </b>
  
The  keystone, or top of the arch, represents <b> Leading in Context. </b>
</div>

</div>
<div style="text-align: center; fontSize: 18px; fontWeight: bold"> 2/11 </div>

<div className="result-page" style="height: 1300px; fontSize: 18px">
<div className="small-heading">
Personal Leadership  
Self-Awareness, Intentional Learner, and Communicates Effectively  
</div>
<div style="margin-left: 20px; margin-right: 20px">
Effective leadership is built on a solid foundation. Personal leadership encompasses the self-awareness, knowledge, and personal management required of a Lyle Leader. Leadership development begins with self-discovery: acknowledging personal strengths, shortcomings, and developing one's capacity for self-management. Lyle leaders take responsibility for personal and professional development and make a commitment to enrichment regardless of one's career path.
</div>
<div>
<img data-ng-src="../styles/Hart1.png" style="float: left; height: 140px; width: 210px; margin-left: 20px; margin-right: 20px"/>

<div style="margin-bottom: 10px; color: #FF5050 !important;"> Self-Awareness </div>
Exhibits knowledge of personal values, strengths, shortcomings, and   developmental opportunities. Uses self-assessment strategies to inform personal   growth and development.
</div>

  
<div>
<img data-ng-src="../styles/Hart2.png" style="float: left; height: 140px; width: 210px; margin-left: 20px; margin-right: 20px"/>

<div style="margin-bottom: 10px; color: #FF5050 !important;"> Intentional Learner </div>
Has knowledge of personal learning style and leverages this knowledge   to enhance personal performance, knowledge of self, others, and  leadership ability.
</div>
  
<div>
<img data-ng-src="../styles/Hart3.png" style="float: left; height: 140px; width: 210px; margin-left: 20px; margin-right: 20px"/>

<div style="margin-bottom: 10px; color: #FF5050 !important;"> Communicates Effectively </div>
Has the ability to communicate effectively through a variety of   methods, media, and within a range of contexts.
</div>
   

<div className="small-heading">
Relational Leadership  
Develops Relationships, Diversity and Difference, and Engaging Leadership  
</div>
<div style="margin-left: 20px; margin-right: 20px">
We believe success hinges on an ability to work with and through others. Leaders must learn to form and maintain quality relationships built on mutual understanding, respect, compromise, and diligence. This capacity increases as leaders learn to understand differences, value diversity, inspire people, and hold others accountable. Throughout one's leadership journey, well developed relational networks can provide a critical source of support and guidance.
</div>
<div>
<img data-ng-src="../styles/Hart4.png" style="float: left; height: 140px; width: 210px; margin-left: 20px; margin-right: 20px"/>

<div style="margin-bottom: 10px; color: #FF5050 !important;"> Develops Relationships </div>
Creates positive, welcoming environment; able to see issues from multiple   points of view and builds effective inter- and intra-group relationships.
</div>
   
<div>
<img data-ng-src="../styles/Hart5.png" style="float: left; height: 140px; width: 210px; margin-left: 20px; margin-right: 20px"/>

<div style="margin-bottom: 10px; color: #FF5050 !important;"> Diversity and Differences </div>
Recognizes the value of different perspectives, skillsets, and people;   is able to facilitate productive outcomes in diverse groups.
</div>
   
<div>
<img data-ng-src="../styles/Hart6.png" style="float: left; height: 140px; width: 210px; margin-left: 20px; margin-right: 20px"/>

<div style="margin-bottom: 10px; color: #FF5050 !important;"> Engaging Leadership </div>
Enables others to step up and lead; creates conditions for others to shine;   generates collective commitment and learning.
</div>

</div>
<div style="text-align: center; fontSize: 18px; fontWeight: bold"> 3/11 </div>

<div className="result-page" style="height: 1300px; fontSize: 18px">
<div className="small-heading">
Functional Leadership  
Directive Leadership, Champions Effective Processes, and Problem Solving  
</div>
<div style="margin-left: 20px; margin-right: 20px">
Engineering leaders have a responsibility, where possible, to help workgroups and organizations operate more effectively. All Lyle students have the opportunity to learn skills and processes that positively influence group functions, outcomes, and their ability to learn from experience. These practices are equally important for positional leaders as well as for members of self-directed teams.
</div>
<div>
<img data-ng-src="../styles/Hart7.png" style="float: left; height: 140px; width: 210px; margin-left: 20px; margin-right: 20px"/>

<div style="margin-bottom: 10px; color: #FF5050 !important;"> Directive Leadership </div>
Coordinates members and maintains accountability for effective outcomes. Sets   direction, communicates expectations, and   monitors progress.
</div>
  
<div>
<img data-ng-src="../styles/Hart8.png" style="float: left; height: 140px; width: 210px; margin-left: 20px; margin-right: 20px"/>

<div style="margin-bottom: 10px; color: #FF5050 !important;"> Champions Effective  Processes </div>
Establishes  systems and processes  that  facilitate efficient and effective   outcomes.
</div>
   
<div>
<img data-ng-src="../styles/Hart9.png" style="float: left; height: 140px; width: 210px; margin-left: 20px; margin-right: 20px"/>

<div style="margin-bottom: 10px; color: #FF5050 !important;"> Problem Solving </div>
Facilitates effective problem identification and solving strategies; identifies and   cultivates resources; delivers results.
</div>


<div className="small-heading">
Leading in Context  
Strategic Perspective, Ethics and Integrity, and Innovative Spirit  
</div>
<div style="margin-left: 20px; margin-right: 20px">
Leadership is best learned through practice. No leadership theory, model, or media resource conveys the fluid nature of leading in context. Environments are shaped by a dynamic array of situations and circumstances, where conditions change as people engage and disengage.
Experience helps Lyle leaders learn to assess their context and appropriately adapt their style. The Hart Center encourages students to venture into their context, perform leadership, and then absorb the lessons of experience.
</div>
<div>
<img data-ng-src="../styles/Hart10.png" style="float: left; height: 140px; width: 210px; margin-left: 20px; margin-right: 20px"/>

<div style="margin-bottom: 10px; color: #FF5050 !important;"> Strategic Perspective </div>
Able to evaluate issues from multiple perspectives and identify the core problem;   considers options and tradeoffs; makes effective use of resources.
</div>
   
<div>
<img data-ng-src="../styles/Hart11.png" style="float: left; height: 140px; width: 210px; margin-left: 20px; margin-right: 20px"/>

<div style="margin-bottom: 10px; color: #FF5050 !important;"> Ethics and Integrity </div>
Knowledgeable of and committed to a meaningful set of ethical guidelines and   principles. Actions are consistent with personal values.
</div>
   
<div>
<img data-ng-src="../styles/Hart12.png" style="float: left; height: 140px; width: 210px; margin-left: 20px; margin-right: 20px"/>

<div style="margin-bottom: 10px; color: #FF5050 !important;"> Innovative Spirit </div>
Displays the courage to initiate positive change; innovative; will risk failing in   front of peers.
</div>

</div>
<div style="text-align: center; fontSize: 18px; fontWeight: bold"> 4/11 </div>

	<div className="result-text">
		This page represents the comparison of your self-evaluation with your good and poor leaders.
	</div>

<h1 style="text-align:center"><strong> Good-Poor-Self Chart </strong></h1> 
<div  className="result-page" >

<svg width="1000" height="100" style="overflow: hidden;">
	<p x="15" y="25" fontSize="20" fontWeight="bold">Name:</p>
	<p x="120" y="25" fontSize="20" fontWeight="bold" textDecoration="underline">Name</p>
	<p x="688" y="25" fontSize="20" fontWeight="bold">Survey Date:</p>
	<p x="830" y="25" fontSize="20" fontWeight="bold" textDecoration="underline">Survey Date</p>
	<p x="15" y="50" fontSize="20" fontWeight="bold">Major(s):</p>
	<p x="120" y="50" fontSize="20" fontWeight="bold" textDecoration="underline">Majors
	  </p>
	<p x="735" y="50" fontSize="20" fontWeight="bold">SMU ID:</p>
	<p x="830" y="50" fontSize="20" fontWeight="bold" textDecoration="underline">SMU ID</p>
</svg>

<svg width="1000" height="1000" style="overflow: hidden;">
	<p textAnchor="middle" x="210" y="465" fontFamily="Arial" fontSize="16"
		fontWeight="bold" stroke="none" strokeWidth="0" fill="#000000">Personal </p>
	<p textAnchor="middle" x="210" y="485" fontFamily="Arial" fontSize="16"
		fontWeight="bold" stroke="none" strokeWidth="0" fill="#000000"> Leadership</p>
	<p textAnchor="middle" x="390" y="465" fontFamily="Arial" fontSize="16"
		fontWeight="bold" stroke="none" strokeWidth="0" fill="#000000">Relational </p>
	<p textAnchor="middle" x="390" y="485" fontFamily="Arial" fontSize="16"
		fontWeight="bold" stroke="none" strokeWidth="0" fill="#000000"> Leadership</p>
	<p textAnchor="middle" x="570" y="465" fontFamily="Arial" fontSize="16"
		fontWeight="bold" stroke="none" strokeWidth="0" fill="#000000">Functional </p>
	<p textAnchor="middle" x="570" y="485" fontFamily="Arial" fontSize="16"
		fontWeight="bold" stroke="none" strokeWidth="0" fill="#000000"> Leadership</p>
	<p textAnchor="middle" x="750" y="465" fontFamily="Arial" fontSize="16"
		fontWeight="bold" stroke="none" strokeWidth="0" fill="#000000">Leading </p>
	<p textAnchor="middle" x="750" y="485" fontFamily="Arial" fontSize="16"
		fontWeight="bold" stroke="none" strokeWidth="0" fill="#000000"> In Context</p>


	<p textAnchor="start" x="200" y="520" fontFamily="Arial" fontSize="16" fontWeight="Bold"
		stroke="none" strokeWidth="0" fill="#222222"> Good Leader </p>
	<path d="M120,516l50,0" stroke="green" strokeWidth="2" fillOpacity="1" fill="none"></path>
	<p textAnchor="start" x="200" y="550" fontFamily="Arial" fontSize="16" fontWeight="Bold"
		stroke="none" strokeWidth="0" fill="#222222"> Poor Leader </p>
	<path d="M120,546l50,0" stroke="red" strokeWidth="2" fillOpacity="1" fill="none"></path>
	<p textAnchor="start" x="200" y="580" fontFamily="Arial" fontSize="16" fontWeight="Bold"
		stroke="none" strokeWidth="0" fill="#222222"> Self </p>
	<path d="M120,576l50,0" stroke="blue" strokeWidth="2" fillOpacity="1" fill="none"></path>

	<p textAnchor="start" x="100" y="670" textDecoration="underline" fontSize="16" fontWeight="Bold"> Good Leader </p>
	<p textAnchor="start" x="100" y="690" fontSize="16"> Good Leader</p>
	<p textAnchor="start" x="100" y="730" textDecoration="underline" fontSize="16" fontWeight="Bold"> Poor Leader </p>
	<p textAnchor="start" x="100" y="750" fontSize="16"> Bad Leader</p>


	<rect x="120" y="71" width="180" height="367" stroke="none" strokeWidth="0" fillOpacity = "0.3" fill="#619f42"></rect>
	<rect x="300" y="71" width="180" height="367" stroke="none" strokeWidth="0" fillOpacity = "0.3" fill="#354ca1"></rect>
	<rect x="480" y="71" width="180" height="367" stroke="none" strokeWidth="0" fillOpacity = "0.3" fill="#f99b2a"></rect>
	<rect x="660" y="71" width="180" height="367" stroke="none" strokeWidth="0" fillOpacity = "0.3" fill="#cc0000"></rect>

	<rect x="115" y="93" width="725" height="1" stroke="none" strokeWidth="0" fill="Gray"></rect>
	<rect x="115" y="162" width="725" height="1" stroke="none" strokeWidth="0" fill="Gray"></rect>
	<rect x="115" y="231" width="725" height="1" stroke="none" strokeWidth="0" fill="Gray"></rect>
	<rect x="115" y="300" width="725" height="1" stroke="none" strokeWidth="0" fill="Gray"></rect>
	<rect x="115" y="369" width="725" height="1" stroke="none" strokeWidth="0" fill="Gray"></rect>
	<rect x="115" y="438" width="725" height="1" stroke="none" strokeWidth="0" fill="Gray"></rect>
	<rect x="120" y="71" width="1" height="367" stroke="none" strokeWidth="0" fill="Gray"></rect>
	<rect x="180" y="71" width="1" height="367" stroke="none" strokeWidth="0" fill="Gray"></rect>
	<rect x="240" y="71" width="1" height="367" stroke="none" strokeWidth="0" fill="Gray"></rect>
	<rect x="300" y="71" width="1" height="367" stroke="none" strokeWidth="0" fill="Gray"></rect>
	<rect x="360" y="71" width="1" height="367" stroke="none" strokeWidth="0" fill="Gray"></rect>
	<rect x="420" y="71" width="1" height="367" stroke="none" strokeWidth="0" fill="Gray"></rect>
	<rect x="480" y="71" width="1" height="367" stroke="none" strokeWidth="0" fill="Gray"></rect>
	<rect x="540" y="71" width="1" height="367" stroke="none" strokeWidth="0" fill="Gray"></rect>
	<rect x="600" y="71" width="1" height="367" stroke="none" strokeWidth="0" fill="Gray"></rect>
	<rect x="660" y="71" width="1" height="367" stroke="none" strokeWidth="0" fill="Gray"></rect>
	<rect x="720" y="71" width="1" height="367" stroke="none" strokeWidth="0" fill="Gray"></rect>
	<rect x="780" y="71" width="1" height="367" stroke="none" strokeWidth="0" fill="Gray"></rect>
	<rect x="840" y="71" width="1" height="367" stroke="none" strokeWidth="0" fill="Gray"></rect>

	<path ng-attr-d="{{getPath(0)}}" stroke="green" strokeWidth="3" fillOpacity="1" fill="none"></path>
	<path ng-attr-d="{{getPath(2)}}" stroke="blue" strokeWidth="4" fillOpacity="1" fill="none"></path>
	<path ng-attr-d="{{getPath(1)}}" stroke="red" strokeWidth="2" fillOpacity="1" fill="none"></path>

	<p textAnchor="middle" x="150" y="45" fontFamily="Arial Narrow"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Self</p>
	<p textAnchor="middle" x="150" y="60" fontFamily="Arial Narrow"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Aware</p>
	<p textAnchor="middle" x="210" y="45" fontFamily="Arial Narrow"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Intentional</p>
	<p textAnchor="middle" x="210" y="60" fontFamily="Arial Narrow"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Learner</p>
	<p textAnchor="middle" x="270" y="45" fontFamily="Arial Narrow"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Commun-</p>
	<p textAnchor="middle" x="270" y="60" fontFamily="Arial Narrow"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">ication</p>
	<p textAnchor="middle" x="330" y="45" fontFamily="Arial Narrow"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Relationship</p>
	<p textAnchor="middle" x="330" y="60" fontFamily="Arial Narrow"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Development</p>
	<p textAnchor="middle" x="390" y="45" fontFamily="Arial Narrow"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Diversity </p>
	<p textAnchor="middle" x="390" y="60" fontFamily="Arial Narrow"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Difference</p>
	<p textAnchor="middle" x="450" y="45" fontFamily="Arial Narrow"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Engaging </p>
	<p textAnchor="middle" x="450" y="60" fontFamily="Arial Narrow"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Leadership</p>
	<p textAnchor="middle" x="510" y="45" fontFamily="Arial Narrow"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Directive </p>
	<p textAnchor="middle" x="510" y="60" fontFamily="Arial Narrow"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Leadership</p>
	<p textAnchor="middle" x="570" y="35" fontFamily="Arial Narrow"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Champion </p>
	<p textAnchor="middle" x="570" y="51" fontFamily="Arial Narrow"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Effective</p>
	<p textAnchor="middle" x="570" y="67" fontFamily="Arial Narrow"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Processes</p>
	<p textAnchor="middle" x="630" y="45" fontFamily="Arial Narrow"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Problem </p>
	<p textAnchor="middle" x="630" y="60" fontFamily="Arial Narrow"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Solving</p>
	<p textAnchor="middle" x="690" y="45" fontFamily="Arial Narrow"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Strategic </p>
	<p textAnchor="middle" x="690" y="60" fontFamily="Arial Narrow"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Perspective</p>
	<p textAnchor="middle" x="750" y="45" fontFamily="Arial Narrow"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Ethics </p>
	<p textAnchor="middle" x="750" y="60" fontFamily="Arial Narrow"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Integrity</p>
	<p textAnchor="middle" x="810" y="45" fontFamily="Arial Narrow"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Innovative </p>
	<p textAnchor="middle" x="810" y="60" fontFamily="Arial Narrow"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Spirit</p>

	<p textAnchor="end" x="103" y="97" fontFamily="Arial" fontSize="12" fontWeight="Bold"
		stroke="none" strokeWidth="0" fill="#444444">20</p>
	<p textAnchor="end" x="103" y="166" fontFamily="Arial" fontSize="12" fontWeight="Bold"
		stroke="none" strokeWidth="0" fill="#444444">17</p>
	<p textAnchor="end" x="103" y="235" fontFamily="Arial" fontSize="12" fontWeight="Bold"
		stroke="none" strokeWidth="0" fill="#444444">14</p>
	<p textAnchor="end" x="103" y="304" fontFamily="Arial" fontSize="12" fontWeight="Bold"
		stroke="none" strokeWidth="0" fill="#444444">11</p>
	<p textAnchor="end" x="103" y="373" fontFamily="Arial" fontSize="12" fontWeight="Bold"
		stroke="none" strokeWidth="0" fill="#444444">8</p>
	<p textAnchor="end" x="103" y="442" fontFamily="Arial" fontSize="12" fontWeight="Bold"
		stroke="none" strokeWidth="0" fill="#444444">5</p>

	<p textAnchor="middle" x="810" y="585" fontFamily="Arial"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Self</p>
	<p textAnchor="middle" x="720" y="565" fontFamily="Arial"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Poor</p>
	<p textAnchor="middle" x="720" y="585" fontFamily="Arial"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Leader</p>
	<p textAnchor="middle" x="630" y="565" fontFamily="Arial"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Good</p>
	<p textAnchor="middle" x="630" y="585" fontFamily="Arial"
		fontSize="12" fontWeight="Bold" stroke="none" strokeWidth="0"
		fill="#222222">Leader</p>

	<rect x="600" y="598" width="60" height="2" stroke="none" strokeWidth="0"
		fill="black"></rect>
	<rect x="690" y="598" width="60" height="2" stroke="none" strokeWidth="0"
		fill="black"></rect>
	<rect x="780" y="598" width="60" height="2" stroke="none" strokeWidth="0"
		fill="black"></rect>

	<rect x="600" y="600" width="60" height="66" stroke="none" strokeWidth="0" fillOpacity="0.9"
		fill="#619f42"></rect>
	<rect x="690" y="600" width="60" height="66" stroke="none" strokeWidth="0" fillOpacity="0.9"
		fill="#619f42"></rect>
	<rect x="780" y="600" width="60" height="66" stroke="none" strokeWidth="0" fillOpacity="0.9"
		fill="#619f42"></rect>
	<rect x="600" y="666" width="60" height="66" stroke="none" strokeWidth="0" fillOpacity="0.7"
		fill="#354ca1"></rect>
	<rect x="690" y="666" width="60" height="66" stroke="none" strokeWidth="0" fillOpacity="0.7"
		fill="#354ca1"></rect>
	<rect x="780" y="666" width="60" height="66" stroke="none" strokeWidth="0" fillOpacity="0.7"
		fill="#354ca1"></rect>
	<rect x="600" y="732" width="60" height="66" stroke="none" strokeWidth="0" fillOpacity="0.8"
		fill="#f99b2a"></rect>
	<rect x="690" y="732" width="60" height="66" stroke="none" strokeWidth="0" fillOpacity="0.8"
		fill="#f99b2a"></rect>
	<rect x="780" y="732" width="60" height="66" stroke="none" strokeWidth="0" fillOpacity="0.8"
		fill="#f99b2a"></rect>
	<rect x="600" y="798" width="60" height="66" stroke="none" strokeWidth="0" fillOpacity="0.7"
		fill="#cc0000"></rect>
	<rect x="690" y="798" width="60" height="66" stroke="none" strokeWidth="0" fillOpacity="0.7"
		fill="#cc0000"></rect>
	<rect x="780" y="798" width="60" height="66" stroke="none" strokeWidth="0" fillOpacity="0.7"
		fill="#cc0000"></rect>



	

</svg>

</div>
<div style="text-align: center; fontSize: 18px; fontWeight: bold"> 5/11 </div>
<div style="fontSize: 16px; fontWeight: bold; margin-left: 10px"> Name</div>

<h1 style="text-align:center"><strong> Overall Competency Ranking </strong></h1>
<div  className="result-page">
<h2 style="text-align:center"><strong> Your Leadership Competencies </strong></h2>
<h3 style="text-align:center"><strong> Sorted by Strength </strong></h3>

<svg width="1000" height="800" style="overflow: hidden;">

	<rect x="115" y="71" width="1" height="527" stroke="none" strokeWidth="0" fill="#cccccc"></rect>
	<rect x="255" y="71" width="1" height="527" stroke="none" strokeWidth="0" fill="#cccccc"></rect>
	<rect x="395" y="71" width="1" height="527" stroke="none" strokeWidth="0" fill="#cccccc"></rect>
	<rect x="535" y="71" width="1" height="527" stroke="none" strokeWidth="0" fill="#cccccc"></rect>
	<rect x="675" y="71" width="1" height="527" stroke="none" strokeWidth="0" fill="#cccccc"></rect>
	<rect x="815" y="71" width="1" height="527" stroke="none" strokeWidth="0" fill="#cccccc"></rect>
	<rect x="115" y="593" width="700" height="1" stroke="none" strokeWidth="0" fill="#cccccc"></rect>

	<g ng-repeat="ele in bgElements" >
	<rect x="116" ng-attr-y="{{ele.y}}" ng-attr-width="{{ele.width}}" height="33" stroke="none" strokeWidth="0"
		ng-attr-fill="{{ele.color}}"></rect>
	<p textAnchor="start" x="125" ng-attr-y="{{ele.y+20}}" fontFamily="Arial" fontSize="13" fontWeight="bold"
		stroke="none" strokeWidth="0" fill="white">Info</p>
	</g>

	<rect x="253" y="108" width="0" height="1" stroke="none" strokeWidth="0" fill="#999999"></rect>
	<rect x="277" y="170" width="0" height="1" stroke="none" strokeWidth="0" fill="#999999"></rect>
	<rect x="413" y="231" width="0" height="1" stroke="none" strokeWidth="0" fill="#999999"></rect>
	<rect x="446" y="293" width="0" height="1" stroke="none" strokeWidth="0" fill="#999999"></rect>

	<p textAnchor="middle" x="115" y="620" fontFamily="Arial"
		fontSize="13" stroke="none" strokeWidth="0" fill="#444444">5</p>
	<p textAnchor="middle" x="255" y="620" fontFamily="Arial"
		fontSize="13" stroke="none" strokeWidth="0" fill="#444444">8</p>
	<p textAnchor="middle" x="395" y="620" fontFamily="Arial"
		fontSize="13" stroke="none" strokeWidth="0" fill="#444444">11</p>
	<p textAnchor="middle" x="535" y="620" fontFamily="Arial"
		fontSize="13" stroke="none" strokeWidth="0" fill="#444444">14</p>
	<p textAnchor="middle" x="675" y="620" fontFamily="Arial"
		fontSize="13" stroke="none" strokeWidth="0" fill="#444444">17</p>
	<p textAnchor="middle" x="815" y="620" fontFamily="Arial"
		fontSize="13" stroke="none" strokeWidth="0" fill="#444444">20</p>

	<rect x="233" y="101.5" width="16" height="13" stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
	<rect x="258" y="163.5" width="15" height="13" stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
	<rect x="394" y="224.5" width="15" height="13" stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
	<rect x="430" y="286.5" width="12" height="13" stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>

</svg>

</div>
<div style="text-align: center; fontSize: 18px; fontWeight: bold"> 6/11 </div>
<div style="fontSize: 16px; fontWeight: bold; margin-left: 10px"> Info</div>
<div className="result-text">
	This page represents your leadership capabilities in the four major leadership focus areas of Personal, Relational, Functional and Leading
	in Context.
</div>

<h2 style="text-align:center"><strong> Focus Area Charts </strong></h2>
<div  className="result-page">
<div style="text-align:center; fontSize:20px"><strong> Focus Area Averages </strong></div>

<svg width="1000" height="400" style="overflow: hidden;">

	<rect x="130" y="326" width="700" height="1" stroke="none" strokeWidth="0" fill="#cccccc"></rect>

	<g ng-repeat = "i in [5,8,11,14,17,20]">
	<rect ng-attr-x="{{130+(i-5)*700/15}}" y="18" width="1" height="308" stroke="none" strokeWidth="0" fill="#cccccc"></rect>
	<p textAnchor="middle" ng-attr-x="{{130+(i-5)*700/15}}" y="350" fontFamily="Arial"
		fontSize="13" stroke="none" strokeWidth="0" fill="#444444">text</p>
	</g>

	<rect x="130" y="31" ng-attr-width="{{getFaaWidth(0)}}" height="51" stroke="none" strokeWidth="0" fill="#619f42"></rect>
	<rect x="130" y="108" ng-attr-width="{{getFaaWidth(1)}}" height="51" stroke="none" strokeWidth="0" fill="#354ca1"></rect>
	<rect x="130" y="185" ng-attr-width="{{getFaaWidth(2)}}" height="51" stroke="none" strokeWidth="0" fill="#f99b2a"></rect>
	<rect x="130" y="262" ng-attr-width="{{getFaaWidth(3)}}" height="51" stroke="none" strokeWidth="0" fill="#cc0000"></rect>

	<p textAnchor="start" x="146" y="63" fontFamily="Arial" fontWeight="bold"
		fontSize="16" stroke="none" strokeWidth="0" fill="#ffffff">Personal Leadership</p>
	<p textAnchor="start" x="146" y="140" fontFamily="Arial" fontWeight="bold"
		fontSize="16" stroke="none" strokeWidth="0" fill="#ffffff">Relational Leadership</p>
	<p textAnchor="start" x="146" y="217" fontFamily="Arial" fontWeight="bold"
		fontSize="16" stroke="none" strokeWidth="0" fill="#ffffff">Functional Leadership</p>
	<p textAnchor="start" x="146" y="294" fontFamily="Arial" fontWeight="bold"
		fontSize="16" stroke="none" strokeWidth="0" fill="#ffffff">Leading in Context</p>

</svg>

	<div style="text-align: center">
	<span className="result-text"> Strengths within each focus area. </span>  
	<span style="text-align: center; fontWeight: bold; fontSize: 20px"> Your Leadership Competencies </span>  
	<span style="text-align: center; fontWeight: bold; fontSize: 16px"> Grouped by Focus Area </span>
	</div>

<svg width="1000" height="560" style="overflow: hidden;">
	<rect x="130" y="11" width="1" height="527" stroke="none" strokeWidth="0" fill="#cccccc"></rect>
	<rect x="270" y="11" width="1" height="527" stroke="none" strokeWidth="0" fill="#cccccc"></rect>
	<rect x="410" y="11" width="1" height="527" stroke="none" strokeWidth="0" fill="#cccccc"></rect>
	<rect x="550" y="11" width="1" height="527" stroke="none" strokeWidth="0" fill="#cccccc"></rect>
	<rect x="690" y="11" width="1" height="527" stroke="none" strokeWidth="0" fill="#cccccc"></rect>
	<rect x="830" y="11" width="1" height="527" stroke="none" strokeWidth="0" fill="#cccccc"></rect>
	<rect x="130" y="533" width="700" height="1" stroke="none" strokeWidth="0" fill="#cccccc"></rect>

	<g ng-repeat="elem in bgElement" >
	<rect x="131" ng-attr-y="{{elem.y-60}}" ng-attr-width="{{elem.width}}" height="33" stroke="none" strokeWidth="0"
		ng-attr-fill="{{elem.color}}"></rect>
	<p textAnchor="start" x="140" ng-attr-y="{{elem.y-40}}" fontFamily="Arial" fontSize="13" fontWeight="bold" fill="#ffffff"
		stroke="none" strokeWidth="0">Text</p>
	</g>



	<p textAnchor="middle" x="130" y="560" fontFamily="Arial"
		fontSize="13" stroke="none" strokeWidth="0" fill="#444444">5</p>
	<p textAnchor="middle" x="270" y="560" fontFamily="Arial"
		fontSize="13" stroke="none" strokeWidth="0" fill="#444444">8</p>
	<p textAnchor="middle" x="410" y="560" fontFamily="Arial"
		fontSize="13" stroke="none" strokeWidth="0" fill="#444444">11</p>
	<p textAnchor="middle" x="550" y="560" fontFamily="Arial"
		fontSize="13" stroke="none" strokeWidth="0" fill="#444444">14</p>
	<p textAnchor="middle" x="690" y="560" fontFamily="Arial"
		fontSize="13" stroke="none" strokeWidth="0" fill="#444444">17</p>
	<p textAnchor="middle" x="830" y="560" fontFamily="Arial"
		fontSize="13" stroke="none" strokeWidth="0" fill="#444444">20</p>



</svg>

</div>
<div style="text-align: center; fontSize: 18px; fontWeight: bold"> 7/11 </div>
<div style="fontSize: 16px; fontWeight: bold; margin-left: 10px"> Name</div>
<h1 style="text-align:center"><strong> Focus Area Detail </strong></h1>  
<div  className="result-page" style="fontSize: 16px">
<h2 style="text-align:center"><strong> Personal Leadership </strong></h2>
<br/>



	<strong>
		<li className="resp-obj" style="margin-left: 644px; border: none"> Good Leader </li>
		<li className="resp-obj" style="border: none"> Poor Leader </li>
		<li className="resp-obj" style="border: none"> Me as a Leader </li>
	</strong> 

		

</div>
<div style="text-align: center; fontSize: 18px; fontWeight: bold"> 8/11 </div>
<div style="fontSize: 16px; fontWeight: bold; margin-left: 10px"> Name</div>
<h1 style="text-align:center"><strong> Focus Area Detail </strong></h1>  
<div  className="result-page" style="fontSize: 16px">
<h2 style="text-align:center"><strong> Relational Leadership </strong></h2>
<br/>



	<strong>
		<li className="resp-obj" style="margin-left: 644px; border: none"> Good Leader </li>
		<li className="resp-obj" style="border: none"> Poor Leader </li>
		<li className="resp-obj" style="border: none"> Me as a Leader </li>
	</strong> 

		

</div>
<div style="text-align: center; fontSize: 18px; fontWeight: bold"> 9/11 </div>
<div style="fontSize: 16px; fontWeight: bold; margin-left: 10px"> Name</div>
<h1 style="text-align:center"><strong> Focus Area Detail </strong></h1>  
<div  className="result-page" style="fontSize: 16px">
<h2 style="text-align:center"><strong> Functional Leadership </strong></h2>
<br/>



	<strong>
		<li className="resp-obj" style="margin-left: 644px; border: none"> Good Leader </li>
		<li className="resp-obj" style="border: none"> Poor Leader </li>
		<li className="resp-obj" style="border: none"> Me as a Leader </li>
	</strong> 

		

</div>
<div style="text-align: center; fontSize: 18px; fontWeight: bold"> 10/11 </div>
<div style="fontSize: 16px; fontWeight: bold; margin-left: 10px"> Name</div>
<h1 style="text-align:center"><strong> Focus Area Detail </strong></h1>  
<div  className="result-page" style="fontSize: 16px">
<h2 style="text-align:center"><strong> Leading in Context </strong></h2>
<br/>



	<strong>
		<li className="resp-obj" style="margin-left: 644px; border: none"> Good Leader </li>
		<li className="resp-obj" style="border: none"> Poor Leader </li>
		<li className="resp-obj" style="border: none"> Me as a Leader </li>
	</strong> 


</div>
<div style="text-align: center; fontSize: 18px; fontWeight: bold"> 11/11 </div>

<div  className="result-page">

<div style="float: right; fontWeight: bold"> Name </div>
<div style="float: right; fontWeight: bold"> SMU ID </div>
<div style="float: right; fontWeight: bold"> Survey Date </div>
<div style="width: 55%; margin-left: 5%; margin-top:8%; margin-bottom: 5%; fontWeight: bold; fontSize: 16px">
<li style="list-style: none; color:red !important"> Students... </li>
<p>Check two leadership competencies for which you would like to receive information periodically throughout the semester.</p>
</div>
<h3 style="text-align:center"><strong> Your Leadership Competencies </strong></h3>
<svg width="900" height="700" style="overflow: hidden;">

	<rect x="115" y="71" width="1" height="527" stroke="none" strokeWidth="0" fill="#cccccc"></rect>
	<rect x="255" y="71" width="1" height="527" stroke="none" strokeWidth="0" fill="#cccccc"></rect>
	<rect x="395" y="71" width="1" height="527" stroke="none" strokeWidth="0" fill="#cccccc"></rect>
	<rect x="535" y="71" width="1" height="527" stroke="none" strokeWidth="0" fill="#cccccc"></rect>
	<rect x="675" y="71" width="1" height="527" stroke="none" strokeWidth="0" fill="#cccccc"></rect>
	<rect x="815" y="71" width="1" height="527" stroke="none" strokeWidth="0" fill="#cccccc"></rect>
	<rect x="115" y="593" width="700" height="1" stroke="none" strokeWidth="0" fill="#cccccc"></rect>

	<g ng-repeat="ele in bgElements">
	<rect x="70" ng-attr-y="{{ele.y+5}}" width="23" height="23" stroke="black" strokeWidth="1" fill="#ffffff"></rect>
	<rect x="116" ng-attr-y="{{ele.y}}" ng-attr-width="{{ele.width}}" height="33" stroke="none" strokeWidth="0"
		ng-attr-fill="{{ele.color}}"></rect>
	<p textAnchor="start" x="125" ng-attr-y="{{ele.y+20}}" fontFamily="Arial" fontSize="13" fontWeight="bold"
		stroke="none" strokeWidth="0" fill="white">Text</p>
	</g>

	<rect x="253" y="108" width="0" height="1" stroke="none" strokeWidth="0" fill="#999999"></rect>
	<rect x="277" y="170" width="0" height="1" stroke="none" strokeWidth="0" fill="#999999"></rect>
	<rect x="413" y="231" width="0" height="1" stroke="none" strokeWidth="0" fill="#999999"></rect>
	<rect x="446" y="293" width="0" height="1" stroke="none" strokeWidth="0" fill="#999999"></rect>

	<p textAnchor="middle" x="115" y="620" fontFamily="Arial"
		fontSize="13" stroke="none" strokeWidth="0" fill="#444444">5</p>
	<p textAnchor="middle" x="255" y="620" fontFamily="Arial"
		fontSize="13" stroke="none" strokeWidth="0" fill="#444444">8</p>
	<p textAnchor="middle" x="395" y="620" fontFamily="Arial"
		fontSize="13" stroke="none" strokeWidth="0" fill="#444444">11</p>
	<p textAnchor="middle" x="535" y="620" fontFamily="Arial"
		fontSize="13" stroke="none" strokeWidth="0" fill="#444444">14</p>
	<p textAnchor="middle" x="675" y="620" fontFamily="Arial"
		fontSize="13" stroke="none" strokeWidth="0" fill="#444444">17</p>
	<p textAnchor="middle" x="815" y="620" fontFamily="Arial"
		fontSize="13" stroke="none" strokeWidth="0" fill="#444444">20</p>

	<rect x="233" y="101.5" width="16" height="13" stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
	<rect x="258" y="163.5" width="15" height="13" stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
	<rect x="394" y="224.5" width="15" height="13" stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
	<rect x="430" y="286.5" width="12" height="13" stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
</svg>
<div style="width: 55%; margin-left: 5%; fontWeight: bold; fontSize: 16px">
<li style="list-style: none; color:red !important">DON'T FORGET:</li> Remove this page from your report and leave it with your facilitator when you leave.
</div>

</div>
<div className="result-page" style="height: 1300px; text-align: center; fontSize: 24px; fontWeight: bold"> Notes </div>
</div> */}

</div>
        );
    }


export default Results;