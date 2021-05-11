import React, { Component } from 'react';
import Surveys from "./Surveys";
import axios from 'axios';


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
                    name: "firstName",
                    title: "First Name:",
                    input: "text",
                    auto: "text"
                },
                {
                    type: 0,
                    name: "lastName",
                    title: "Last Name:",
                    input: "text",
                    auto: "text"
                },
                {
                    type: 0,
                    name: "graduationYear",
                    title: "Graduation year:",
                    input: "text",
                    auto: "text"
                },
                {
                    type: 0,
                    name: "smuID",
                    title: "Enter your SMU ID:",
                    input: "text",
                    auto: "name"
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
                    title: "Self Disciplined: Stays on task even under difficult circumstances",
                    type: 1,
                    name: "a",
                    choice: ["GL", "User", "BL"]
                },
                {
                    title: "Candid Self Appraisal: Aware of personal strengths and shortcomings",
                    type: 1,
                    name: "aa",
                    choice: ["GL", "User", "BL"]
                },
                {
                    title: "Self Management: Avoids spreading self too thin",
                    type: 1,
                    name: "aaa",
                    choice: ["GL", "User", "BL"]
                },
                {
                    title: "Candid Self Appraisal: Aware of personal strengths and shortcomings",
                    type: 1,
                    name: "aaaa",
                    choice: ["GL", "User", "BL"]
                },
                {
                    title: "Self Disciplined: Stays on task even under difficult circumstances",
                    type: 1,
                    name: "aaaaa",
                    choice: ["GL", "User", "BL"]
                },
                {
                    title: "Self Management: Avoids spreading self too thin",
                    type: 1,
                    name: "aaaaaa",
                    choice: ["GL", "User", "BL"]
                },
                {
                    title: "Self Disciplined: Stays on task even under difficult circumstances",
                    type: 1,
                    name: "b",
                    choice: ["GL", "User", "BL"]
                },
                {
                    title: "Candid Self Appraisal: Aware of personal strengths and shortcomings",
                    type: 1,
                    name: "bb",
                    choice: ["GL", "User", "BL"]
                },
                {
                    title: "Self Management: Avoids spreading self too thin",
                    type: 1,
                    name: "bbb",
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
    
  

  
    handleResult = () => {
        console.log('Results');
    
    }

   
    getData = async () => {
        await axios
            .get(`hartBE/v1/surveys/`)
            .then(res => {
                var fullSurvey = res.data.response;
                this.setState({info: fullSurvey});
            });
    };
    
   
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
                        No Results
                    </div>
                    : null
                }
                { this.state.showing 
                    ? <Surveys questions= {this.state.info} handleResult = {this.handleResult}/>
                    : null
                }
            </div>  
            
        );
    }
}

export default getSurveys;