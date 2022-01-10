import React, {useState} from 'react';
import FormControl from '@mui/material/FormControl';
import axios from "axios";
import {getStorageValue} from "../hooks/useLocalStorage";
import {getObjectivesBy} from "../services/objectiveRepository";
import {Button, ThemeProvider} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {createTheme} from "@mui/material/styles";
import CheckIcon from '@mui/icons-material/Check';
const theme = createTheme({
    palette: {
        primary: {
            main: '#F76C6C',
        },
    },
});
const success = createTheme({
    palette: {
        primary: {
            main: '#26A69A',
        },
    },
});

function SendDataButton ({checkpointId}) {
    const [sent, setSent] = useState('false');
    const handleSend = (event)=>{
        event.preventDefault();
        setSent(!sent);
        let result = {
            instructor:getStorageValue('instructor',null),
            fullName:getStorageValue('fullName',null),
            checkpointId:checkpointId,
            data:getObjectivesBy('checkpointId',checkpointId)}

        axios.post('https://www.self-assesment.mezzaburo.fr/results',JSON.stringify(result))
            .then((response) =>
                (error)=> {
                console.log(error);
            });


    };

    return(
        <>
        <ThemeProvider theme={theme}>
            {sent && <Button
                onClick={handleSend}
                endIcon={<SendIcon/>}
                variant="contained"
                sx={{color: 'white',width:400}}
            >
                Envoyer à {getStorageValue('instructor', null)}
            </Button>}
        </ThemeProvider >
        <ThemeProvider theme={success}>

        {!sent && <Button
            endIcon={<CheckIcon/>}
            variant="contained"
            sx={{color: 'white',width:400}}
        >
           Résultats envoyés
        </Button>}
        </ThemeProvider>
        </>

    )
}

export default SendDataButton