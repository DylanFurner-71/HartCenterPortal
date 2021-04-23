import React, { Component } from 'react';
import Surveys from "./Surveys";

class getSurveys extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: [
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
                    }
            ]
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
                <Surveys info= {this.state.questions}/>
            </div>
        );
    }
}

export default getSurveys;