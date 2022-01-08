import React, {useState} from 'react';
import FormControl from '@mui/material/FormControl';
import axios from "axios";

import {getObjectivesBy} from "../services/objectiveRepository";


function ResultForm ({checkpointId}) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const handleFirstname = (event)=>setFirstname(event.target.value);
    const handleLastname = (event)=>setLastname(event.target.value);
    const handleSubmit = (event)=>{
        event.preventDefault();
        let result = {
            firstname: firstname,
            lastname: lastname,
            result_data: getObjectivesBy('checkpointId',checkpointId)
        }
        axios.post('https://localhost:8000/results',JSON.stringify(result))
            .then((response) =>
                (error)=> {
                console.log(error);
            });


    };

    return(
        <form onSubmit={handleSubmit}>
            <input  type="text" id='firstname' name='firstname' onChange={handleFirstname}/>
            <label htmlFor="firstname">Votre prénom</label>
            <input type="text" id='lastname' name='lastname' onChange={handleLastname}/>
            <label htmlFor="lastname">Votre nom</label>
            <div>
                <input type="submit" value="Envoyer résultat" />
            </div>
        </form>

    )
}

export default ResultForm