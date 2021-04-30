import React, { Component } from 'react';
import { ViewReportTable} from "./ViewReportTable";

class GetReportData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: [],
            isLoading: "Fetching..."
        }
    }
    gender(value){
        if(value==null)
            return 'N/A';
        return value;
    }
    class(value){
        switch(parseInt(value)){
            case 1:
                return 'First Year';
            case 2:
                return 'Sophmore';
            case 3:
                return 'Junior';
            case 4:
                return 'Senior';
            case 5:
                return 'Graduate Student (First Year)';
            case 6:
                return 'Graduate Student (Second Year)';
            case 7:
                return 'Ph.D Student';
            default:
                return 'N/A'
        }
    }
    study(value){
        switch(parseInt(value)){
            case 1:
                return 'Undergraduate'; 
            case 2:
                return 'Graduate';  
            case 3: 
                return 'Ph.D Student';  
            default:
                return 'N/A';
        }
    }
    completionStatus(value){
        switch(parseInt(value)){
            case 1:
                return 'Never Started';
            case 2:
                return 'Started or Incomplete';
            case 3:
                return 'Completed';
            default:
                return 'N/A';
        }
    }
    competency(value){
        if(value=="Self Awareness")
                return "Self Awareness"
            else if(value=="Intentional Learner")
                return "Intentional Learner";
            else if(value=="Communication")
                return "Communication";
            else if(value=="Relationship Development")
                return "Relationship Development";
            else if(value=="Diversity and Difference")
                return "Diversity and Difference";
            else if(value=="Engaging Leadership")
                return "Engaging Leadership";
            else if(value=="Directive Leadership")
                return "Directive Leadership";
            else if(value=="Champions Effective Processes")
                return "Champions Effective Processes";
            else if(value=="Problem Solving")
                return "Problem Solving";
            else if(value=="Strategic Perspective")
                return "Strategic Perspective";
            else if(value=="Ethics and Integrity")
                return "Ethics and Integrity";
            else if(value=="Innovative Spirit")
                return "Innovative Spirit";
            else 
                return "N/A";
    }
    batch(value){
        if(value == "" || value == null)
            return 'N/A';
        return value;
    }
    fixValues() {
        let students = [...this.state.students];
        let x;
        for(x = 0; x < students.length; x++){
            let student = students[x];
            //correct gender
            student.gender = this.gender(student.gender);
            //correct class
            student.class = this.class(student.class);
            //correct study
            student.study = this.study(student.study);
            //correct completion status
            student.surv_status = this.completionStatus(student.surv_status);
            //correct competency
            student.competency1 = this.competency(student.competency1);
            student.competency2 = this.competency(student.competency2);
            //correct batch
            student.batch = this.batch(student.batch);

            students[x] = student;
        }
        this.setState({students : students})
    }
    componentDidMount() {
        this.request();
    }
    request = async () => {
        this.setState({isLoading: "Fetching..."});
        const response = await fetch("http://localhost:8000/hartBE/v1/getAllStudents/");
        const json = await response.json();
        this.setState({students : json});
        this.setState({ isLoading: " "});
        this.fixValues();
    }
    render() {
        return (
            <div>
                <h2>View Student Survey Reports {this.state.isLoading}</h2>
                <ViewReportTable students={this.state.students} style={{width:'50%'}}/>
            </div>
        );
    }
}

export default GetReportData;