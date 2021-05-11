import { useInput } from '../hooks/InputHook';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import {Row, Container, Col} from "react-bootstrap/";

export function AddSurveyButton(props) {
    const { value:newTitle, bind:bindNewTitle, reset:resetNewTitle } = useInput('');   
    const { value:newDesc, bind:bindNewDesc, reset:resetNewDesc } = useInput('');    
    const { value:newLink, bind:bindNewLink, reset:resetNewLink } = useInput('');    
    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };
    function resetNewQuote(){
        resetNewTitle();
        resetNewDesc();
        resetNewLink();
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting New Survey ${newTitle}`);
        let data = new FormData();
        data.append('file', selectedFile);
        data.append('name', selectedFile.name);
           axios.post('/image/write/', data)
            .then(response => console.log(response))
            .catch(error => console.log(error))
        try {
          const req = {
            title: newTitle,
            description: newDesc,
            link: newLink,
            imageName: selectedFile.name,
            
          }
  
axios.post('/other/survey', req).then(resp => {
    console.log(resp)
})

        }  catch (e){
          console.log(e);
      }
      resetNewQuote();
    }
    return (
      <Col>
            <form onSubmit={handleSubmit}>
              <Row>
               <label>
          New Title:
          <input type="text" {...bindNewTitle}
          placeholder={`Survey Title`}/>
        </label>
        </Row>
        <Row>
        <label>
          New Description:
          <input type="text" {...bindNewDesc}
          placeholder={'an optional short description of the survey'}/>
        </label>
        </Row>
        <Row>
                  <label>
          New URL to Website:
          <input type="text" {...bindNewLink}
          placeholder={'The url to the website containing the other survey'}/>
        </label>
        </Row>
        <Row>
        <input type="file" name="file" onChange={changeHandler} />
			{isSelected ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
          </div>
			) : (
				<p>Select a file to show to be the thumbnail for this survey</p>
			)}
      </Row>
        <input type="submit" value="Submit" />
      </form>
      </Col>
    );
  }