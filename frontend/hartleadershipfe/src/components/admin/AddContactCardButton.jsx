import { useInput } from '../hooks/InputHook';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import {Row, Container, Col} from "react-bootstrap/";

export function uploadSuccess({ data }) {
  return {
    type: 'UPLOAD_DOCUMENT_SUCCESS',
    data,
  };
}

export function uploadFail(error) {
  return {
    type: 'UPLOAD_DOCUMENT_FAIL',
    error,
  };
}

export function uploadDocumentRequest({ file, name }) {  
  let data = new FormData();
  data.append('file', document);
  data.append('name', name);

  return (dispatch) => {
    // axios.post('/image/write/', data)
 
  };
}
export function AddContactCardButton(props) {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
const changeHandler = (event) => {
  setSelectedFile(event.target.files[0]);
  setIsSelected(true);
};

// const handleSubmission = () => {
// };
    const { value:newName, bind:bindNewName, reset:resetNewName } = useInput('');   
    const { value:newEmail, bind:bindNewEmail, reset:resetNewEmail } = useInput('');    
    const { value:newjobTitle, bind:bindNewJobTitle, reset:resetNewJobTitle } = useInput('');  
    const { value:newPhoneNumber, bind: bindNewPhoneNumber, reset: resetNewPhoneNumber} = useInput('');
    function resetNewQuote(){
        resetNewName();
        resetNewEmail();
        resetNewPhoneNumber();
        resetNewJobTitle();
        setSelectedFile();
        setIsSelected(false);
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        let data = new FormData();
        data.append('file', selectedFile);
        data.append('name', selectedFile.name);
           axios.post('/image/write/', data)
            .then(response => console.log(response))
            .catch(error => console.log(error))

        alert(`Submitting New Contact card for job role: ${newjobTitle}`);
        try {
          const req = {
            name: newName,
            email: newEmail,
            phoneNumber: newPhoneNumber,
            jobTitle: newjobTitle,
            imageName: selectedFile.name,
          }
axios.post('/contact/contactCard/add/', req).then(resp => {
    console.log(resp)
})
        }  catch (e){
          console.log(e);
      }
      resetNewQuote();
    }
    return (
      <Container className="competency border border-dark rounded mb-0 mx-sm my-sm" style={{zIndex:'950', margin: "1rem"}}>
      <Col >
      <form onSubmit={handleSubmit}>
        <Row>
               <label className="w-100">
          Contact Name:
          <input type="text" {...bindNewName}
          placeholder={`The name of this new contact`}/>
        </label>
        </Row>
        <Row>
        <label className="w-100">
        Email:
          <input type="text" {...bindNewEmail}
          placeholder={"The email of this contact"}/>
        </label>
        </Row>
        <Row>
        <label className="w-100">
        Job Title:
          <input type="text" {...bindNewJobTitle}
          placeholder={'The job title of this person'}/>
        </label>
        </Row>
        <Row>
        <label className="w-100">
        Phone number:
          <input type="text" {...bindNewPhoneNumber}
          placeholder={'This person\'s phone number'}/>
        </label>
        </Row>
        <Row>
        <input type="file" name="file" onChange={changeHandler} className="w-100"/>
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
				<p className="w-100">Select a file to show details</p>
			)}
      </Row>
			<div>
			</div>
        <input type="submit" value="Submit" />
      </form>
      </Col>
      </Container>
    );
  }