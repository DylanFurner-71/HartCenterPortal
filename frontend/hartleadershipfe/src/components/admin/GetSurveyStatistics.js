import {SurveyStatistics} from './SurveyStatistics.js'
import React, { Component } from 'react';

class GetSurveyStatistics extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: "",
            batch: [],
            studyBatch: ["-","Undergraduate", "Graduate", "Ph.D Student"],
            term: "",
            study: "",
            data: []
         }
         this.handleTermChange = this.handleTermChange.bind(this);
         this.handleStudyChange = this.handleStudyChange.bind(this);
    }
    handleTermChange(event) {
        this.setState({term:event.target.value});
    }
    handleStudyChange(event) {
        this.setState({study:event.target.value});
    }
    componentDidMount() {
        this.request();
    } 
    request = async () => {
        this.setState({isLoading: "Fetching..."});
        const response = await fetch("http://localhost:8000/hartBE/v1/getBatch/");
        const json = await response.json();
        let x;
        let temp = ["-"];
        for(x = 0; x < json.length;x++){
            if(json[x].batch != null && json[x].batch != "")
            temp.push(json[x].batch)
        }
        this.setState({batch : temp});
        this.setState({ isLoading: " "});
    }
    handleBatchSubmit = async (event) => {
        this.updateMessage();
        event.preventDefault();
    }
    updateMessage = async () => {
        this.setState({isLoading: "Fetching..."});
        let studyNumber;
        if(this.state.study == "Undergraduate")
            studyNumber = 1;
        if(this.state.study == "Graduate")
            studyNumber = 2;
        if(this.state.study == "Ph.D Student")
            studyNumber = 3;
        const response = await fetch("http://localhost:8000/hartBE/v1/getStats/"+this.state.term+"/"+studyNumber);
        const json = await response.json();
        let x;
        let tempsA = 0;
        let tempiL = 0;
        let tempc = 0;
        let temprD = 0;
        let tempdD = 0;
        let tempeL = 0;
        let tempdL = 0;
        let tempcP = 0;
        let temppS = 0;
        let tempsP = 0;
        let tempeI = 0;
        let tempiS = 0;
        let counter = [0,0,0,0,0,0,0,0,0,0,0,0];
        for(x = 0; x < json.length;x++){
            if(json[x].self_aware != null && json[x].self_aware != 0)
            {
                counter[0]+=1;
                tempsA+=json[x].self_aware;
            }
                
            if(json[x].intentional_learner != null && json[x].intentional_learner != 0)
                {counter[1]+=1;
                tempiL +=json[x].intentional_learner;}
            if(json[x].communication != null && json[x].communication != 0)
                {counter[2]+=1;
                tempc +=json[x].communication;}
            if(json[x].relationship_development != null && json[x].relationship_development != 0)
                {counter[3]+=1;
                temprD +=json[x].relationship_development;}
            if(json[x].diversity_difference != null && json[x].diversity_difference != 0)
                {counter[4]+=1;
                tempdD +=json[x].diversity_difference;}
            if(json[x].engaging_leadership != null && json[x].engaging_leadership != 0)
                {counter[5]+=1;
                tempeL +=json[x].engaging_leadership;}
            if(json[x].directive_leadership != null && json[x].directive_leadership != 0)
                {counter[6]+=1;
                tempdL +=json[x].directive_leadership;}
            if(json[x].champions_processes != null && json[x].champions_processes != 0)
                {counter[7]+=1;
                tempcP +=json[x].champions_processes;}
            if(json[x].problem_solving != null && json[x].problem_solving != 0)
                {counter[8]+=1;
                temppS +=json[x].problem_solving;}
            if(json[x].strategic_perspective != null && json[x].strategic_perspective != 0)
                {counter[9]+=1;
                tempsP +=json[x].strategic_perspective;}
            if(json[x].ethics_Integrity != null && json[x].ethics_Integrity != 0)
                {counter[10]+=1;
                tempeI +=json[x].ethics_Integrity;}
            if(json[x].innovative_spirit != null && json[x].innovative_spirit != 0)
                {counter[11]+=1;
                tempiS +=json[x].innovative_spirit;}
        }
        let tempData = [{name:"Self Aware",Average:tempsA/counter[0]},{name:"Intentional Learner",Average:tempiL/counter[1]},{name:"Communication",Average:tempc/counter[2]},{name:"Relationship Development",Average:temprD/counter[3]},{name:"Diversity Difference",Average:tempdD/counter[4]},{name:"Engaging Leadership",Average:tempeL/counter[5]},{name:"Directive Leadership",Average:tempdL/counter[6]},{name:"Champions Processes",Average:tempcP/counter[7]},{name:"Problem Solving",Average:temppS/counter[8]},{name:"Stategic Perspective",Average:tempsP/counter[9]},{name:"Ethic Integrity",Average:tempeI/counter[10]},{name:"Innovative Spirit",Average:tempiS/counter[11]}]
        console.log(tempData);
        this.setState({data: tempData})

        
    }
    render() { 
        return (
            <div>
                <h1>View Survey Result Statistics</h1>
                <br/>
                <div className='container'>
                    <form onSubmit={this.handleBatchSubmit}>
                        <label>Select Term</label>
                        <select className="debriefStyles" value={this.state.term} onChange={this.handleTermChange}>
                            {this.state.batch.map( b => <option key={b}>{b}</option>)}
                        </select>
                        <select className="debriefStyles" value={this.state.study} onChange={this.handleStudyChange}>
                            {this.state.studyBatch.map( b => <option key={b}>{b}</option>)}
                        </select>
                        <input type="submit" value="Get Data"/>
                    </form>
                </div>
                <br/>
                <SurveyStatistics data={this.state.data}/>
            </div> 
        );
    }
}
 
export default GetSurveyStatistics;