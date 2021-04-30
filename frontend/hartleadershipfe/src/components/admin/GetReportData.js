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
    componentDidMount() {
        this.getStudentData();
    }
    getStudentData = () => {
        this.setState({isLoading: "Fetching..."});
        fetch("http://localhost:8000/hartBE/v1/getAllStudents/").then((response) => 
            response.json().then((data) => {
                this.setState({students : data});
                this.setState({ isLoading: " "});
            })
        );
    };
    render() {
        return (
            <div>
                <h2>View Student Survey Reports {this.state.isLoading}</h2>
                <ViewReportTable students={this.state.students}/>
            </div>
        );
    }
}

export default GetReportData;