import React, { Component } from 'react';
import { render } from 'react-dom';
import {getSurvey} from "../actions/authActions";

import * as Survey from 'survey-react';
import 'survey-react/survey.css';

import 'bootstrap/dist/css/bootstrap.css'
import './style.css';
import { conditionalExpression } from '@babel/types';

class Surveys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: this.props.questions,
            showing: false,
            
              
        };
    }
  componentWillMount() {    
     
    Survey.Survey.cssType = "bootstrap";
    Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
    
    
  }
  componentDidMount(){
      
  }
  
  getData(){

  }

  render() {
    if(this.state.info == 'a'){
        console.log("here");
        return null;
    }
    else{
        var json = { title: "Leader Comparision", showProgressBar: "top", pages: []};    
    var pageHolder = {questions:[]};
    for(const [index,value] of this.state.info.entries()){
        console.log(value);
        if(value['type'] == 0){
            var questionTest =
                {
                    name: value['name'],
                    type: "text",
                    title: value['title'],
                    inputType: value['input'],
                    isRequired: true,
                    autoComplete: value['auto']
                };
            pageHolder.questions.push(questionTest);
        }
        else if(value['type'] == 1){
            var questionTest =
                { type: "matrix", name: value['name'], title: value['title'],
                    columns: [{ value: 1, text: "1" },
                        { value: 2, text: "2" },
                        { value: 3, text: "3" },
                        { value: 4, text: "4" }],
                    rows: [
                        { value: value['choice'][0], text: "Good Leader" },
                        { value: value['choice'][1], text: "You" },
                        { value: value['choice'][2], text: "Bad Leader" }]
                };
            
            pageHolder.questions.push(questionTest);
        }
        else if(value['type'] == 2){
            var questionTest =
                {
                    type: "radiogroup",
                    name: value['name'],
                    title: value['title'],
                    isRequired: true,
                    colCount: 4,
                    choices: []
                };
            for(const [indexInner,valueInner] of this.state.info[index]['choices'].entries()){
                questionTest.choices.push(valueInner);
            }
            pageHolder.questions.push(questionTest);
        }
        else if(value['type'] == 3){
            var questionTest =
                {
                    "type": "boolean",
                    "name": value['name'],
                    "title": "Please answer the question",
                    "label": value['title'],
                    "isRequired": true
                };
            pageHolder.questions.push(questionTest);
        }
        if(((index + 1) % 5) == 0){
            json.pages.push(pageHolder);
            pageHolder = {questions:[]};
        }
        
    }
    
    


    
    json.pages.push(pageHolder);
    var model = new Survey.Model(json);

    model
    .onValueChanged
    .add(function (sender, options) {
        var mySurvey = sender;
        var questionName = options.name;
        var newValue = options.value;
    });
    model
    .onComplete
    .add(function (sender) {
        var mySurvey = sender;
        var surveyData = sender.data;
        console.log(mySurvey);
        console.log(surveyData);
        this.handleResults();
        
    });  
    return (
        <div>
      <Survey.Survey model={model}/>

      
    </div>
    );
    }
  }
  
}
Surveys.defaultProps = {
    questions: 'a'
  };
render(<Surveys />, document.getElementById('root'));
export default
(Surveys);





