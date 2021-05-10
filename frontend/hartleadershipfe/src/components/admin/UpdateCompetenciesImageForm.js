import React, { useEffect, useState, useRef } from 'react';
import { useInput } from '../hooks/InputHook';
import {editQuote} from "../../actions/authActions";
import axios from 'axios';

export function UpdateCompetenciesImageForm(props) {
    const { value:newQuote, bind:bindNewQuote, reset:resetNewQuote } = useInput('');  
    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };  
    const handleSubmit = (evt) => {
        evt.preventDefault();
        let data = new FormData();
        data.append('file', selectedFile);
        data.append('name', selectedFile.name);
           axios.post('/image/write/', data)
            .then(response => console.log(response))
            .catch(error => console.log(error))

        alert(`Submitting Image ${selectedFile.name}`);
        try {
          const req = {
            imageName: selectedFile.name,
            competency_id: props.competency_id
          }
axios.put('/competency/edit/image', req).then(resp => console.log(resp))
        }  catch (e){
          console.log(e);
      }
      resetNewQuote();
      props.updateVar(newQuote);

    }
    return (
        
      <form onSubmit={handleSubmit}>
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
        <input type="submit" value="Submit" />
      </form>
    );
  }