import React, { Component } from 'react';
import Surveys from "./Surveys";
import PDFshow from './PDFshow';
import image1 from './results/results01.jpg';
import image2 from './results/results02.jpg';
import image3 from './results/results03.jpg';
import image4 from './results/results04.jpg';
import image5 from './results/results04.jpg';
import image6 from './results/results06.jpg';
import image7 from './results/results07.jpg';
import image8 from './results/results08.jpg';
import image9 from './results/results09.jpg';
import image10 from './results/results10.jpg';


class getSurveys extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showing: false,
            resultShowing: false,
            buttonShowing: true,
            
            info: [
                {
                    type: 0,
                    name: "birthdate",
                    title: "Your birthdate:",
                    input: "date",
                    auto: "bdate"
                },
                {
                    type: 0,
                    name: "smuID",
                    title: "Enter your SMU ID:",
                    input: "text",
                    auto: "name"
                },
                {
                    title: "question 3",
                    type: 0,
                    name: "name",
                    title: "Please enter your name:",
                    input: "name",
                    auto: "name"
                },
                {
                    title: "question 4",
                    type: 2,
                    name: "test112",
                    title: "What school do you go to?",
                    choices: [
                        "None",
                        "Cox",
                        "Lyle",
                        "Other"
                    ]
                },
                {
                    title: "Is this your first time taking the exam?",
                    type: 3,
                    name: "test115"
                },
                {
                    title: "Candid Self Appraisal: Aware of personal strengths and shortcomings",
                    type: 1,
                    name: "Candid Self Appraisal",
                    choice: ["GL", "User", "BL"]
                },
                {
                    title: "Self Management: Avoids spreading self too thin",
                    type: 1,
                    name: "Self Management",
                    choice: ["GL", "User", "BL"]
                },
                {
                    title: "Self Disciplined: Stays on task even under difficult circumstances",
                    type: 1,
                    name: "Self Disciplined",
                    choice: ["GL", "User", "BL"]
                },
                {
                    title: "Optimistic: Believes most problems can be solved",
                    type: 1,
                    name: "Optomistic",
                    choice: ["GL", "User", "BL"]
                },
                {
                    title: "Open to Feedback: Willing to receive constructive criticism",
                    type: 1,
                    name: "Open to Feedback",
                    choice: ["GL", "User", "BL"]
                },
                {
                    title: "Is this your first time taking the exam?",
                    type: 3,
                    name: "test115"
                },
                {
                    title: "Candid Self Appraisal: Aware of personal strengths and shortcomings",
                    type: 1,
                    name: "Candid Self Appraisal",
                    choice: ["GL", "User", "BL"]
                },
                {
                    title: "Self Management: Avoids spreading self too thin",
                    type: 1,
                    name: "Self Management",
                    choice: ["GL", "User", "BL"]
                },
                {
                    title: "Is this your first time taking the exam?",
                    type: 3,
                    name: "test115"
                },
                {
                    title: "Candid Self Appraisal: Aware of personal strengths and shortcomings",
                    type: 1,
                    name: "Candid Self Appraisal",
                    choice: ["GL", "User", "BL"]
                },
                {
                    title: "Self Management: Avoids spreading self too thin",
                    type: 1,
                    name: "Self Management",
                    choice: ["GL", "User", "BL"]
                },
                {
                    title: "Is this your first time taking the exam?",
                    type: 3,
                    name: "test115"
                },
                {
                    title: "Candid Self Appraisal: Aware of personal strengths and shortcomings",
                    type: 1,
                    name: "Candid Self Appraisal",
                    choice: ["GL", "User", "BL"]
                },
                {
                    title: "Self Management: Avoids spreading self too thin",
                    type: 1,
                    name: "Self Management",
                    choice: ["GL", "User", "BL"]
                }
            ],
        }
    }
    /*
    componentDidMount() {
        this.getActiveSurvey();
    }
    getStudentData = () => {
        fetch("http://localhost:8000/hartBE/v1/surveys/").then((response) => 
            response.json().then((data) => {
                this.setState({questions : data});
            })
        );
    };
    */
   
    render() {
        //console.log(this.state.questions)
        return (
            <div>
                { this.state.buttonShowing 
                    ? <div>
                    <button onClick={() => {this.setState({ showing: true }); this.setState({ buttonShowing: false });}}>Take Survey</button>
                    <button onClick={() => {this.setState({ resultShowing: true }); this.setState({ buttonShowing: false });}}>See Results</button>
                    </div>
                    : null
                }
                
                { this.state.resultShowing 
                    ? <div>
                    <img src={image1} />
                    <img src={image2} />
                    <img src={image3} />
                    <img src={image4} />
                    <img src={image5} />
                    <img src={image6} />
                    <img src={image7} />
                    <img src={image8} />
                    <img src={image9} />
                    <img src={image10} />
                    </div>
                    : null
                }
                { this.state.showing 
                    ? <Surveys questions= {this.state.info}/>
                    : null
                }
            </div>  
            
        );
    }
}

export default getSurveys;