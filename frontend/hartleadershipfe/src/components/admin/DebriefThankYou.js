import React, { Component } from 'react';
import axios from 'axios'
import './styles/debrief.css'
class DebriefThankYou extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: "",
            batch: [],
            note: 'Thank you for taking the Hart Leadership Assessment.  You will receive your leadership profile during the new student orientation on ',
            term: '',
            date: '',
            doesNoteExist: '',
         };
        this.handleNoteChange = this.handleNoteChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    handleNoteChange(event) {
        this.setState({note:event.target.value});
    }
    handleTermChange(event) {
        this.setState({term:event.target.value});
    }
    
    handleDateChange(event) {
        this.setState({date:event.target.value});
    }
    handleSubmit(event) {
        let today = new Date();
        const params = {
            date: this.state.date,
            note: this.state.note,
            newDate: today,
            term: this.state.term,             
        }
        axios.post('http://localhost:8000/hartBE/v1/insertMessage/',params)
        alert('De-Brief Session updated');
        event.preventDefault();
    }

    handleBatchSubmit = async (event) => {
        this.updateMessage();
        event.preventDefault();
    }
    updateMessage = async () => {
        this.setState({isLoading: "Fetching..."});
        const response = await fetch("http://localhost:8000/hartBE/v1/getMessage/"+this.state.term);
        const json = await response.json();
        console.log(json);
        if(json.length == 0){
            this.setState({note:"Thank you for taking the Hart Leadership Assessment.  You will receive your leadership profile during the new student orientation on "})
            this.setState({doesNoteExist:"Thank you note does not exist"})
            this.setState({date:""})
        }
        else{
            this.setState({note:json[0].thankyounote})
            this.setState({date:String(json[0].session_date).substr(0,10)})
            this.setState({doesNoteExist:""})
        }
        
        this.setState({ isLoading: " "});
    }

    render() { 
        return ( 
            <div style={{padding: "1em"}}>
                <h1>View/Update De-Brief Session Date and Thank You Note {this.state.isLoading}</h1>
                <br/>
                <div className='container'>
                    <form onSubmit={this.handleBatchSubmit}>
                        <label>Select Term</label>
                        <select className="debriefStyles" value={this.state.term} onChange={this.handleTermChange}>
                            {this.state.batch.map( b => <option key={b}>{b}</option>)}
                        </select>
                        <input type="submit" value="Get Data"/>
                    </form>
                </div>
                <br/>
                <p>{this.state.doesNoteExist}</p>
                <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <label>Debrief Date</label>
                    <input className="debriefStyles" type='text' placeholder='YYYY-MM-DD' value={this.state.date} onChange={this.handleDateChange}/>
                    <label>Message</label>
                    <textarea className="debriefStyles" value={this.state.note} onChange={this.handleNoteChange} rows="4" cols="50"></textarea>
                    <input type="submit" value="Submit"/>
                </form>
                </div>
            </div>
         );
    }
}
 
export default DebriefThankYou;