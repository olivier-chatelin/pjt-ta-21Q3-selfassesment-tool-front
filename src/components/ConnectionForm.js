import React, {useEffect, useState} from "react";
import {Box, TextField, Button,Input, FormHelperText} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import axios from "axios";
import {useLocalStorage} from "../hooks/useLocalStorage";


function ConnectionForm(){
    const [localFirstName, setLocalFirstname] = useLocalStorage("firstname","")
    const [localLastName, setLocalLastname] = useLocalStorage("lastname","")
    const [localFullName, setLocalFullName] = useLocalStorage("fullName","")
    const [localCurriculum, setLocalCurriculum] = useLocalStorage("curriculum","");
    const [localInstructor, setLocalInstructor] = useLocalStorage("instructor","");
    const [curricula, setCurricula] = useState([]);
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        getInstructors();
    }, []);
    useEffect(() => {
        getCurricula();
    }, []);
    const handleFirstname = (event) => {
        setLocalFirstname(event.target.value);
        setLocalFullName(event.target.value + " " + localLastName);
    }
    const handleLastname = (event) => {
        setLocalLastname(event.target.value);
        setLocalFullName(localFirstName + " " + event.target.value);
    }
    const handleCurriculum = (event) => {
        setLocalCurriculum(event.target.value);

    }
    const handleInstructor = (event) => {
        setLocalInstructor(event.target.value);
    }
    function getInstructors() {
        axios.get('https://localhost:8000/instructors')
            .then((response) => response.data)
            .then((data) => {
                    setInstructors(data);
                }
            );
    }
    function getCurricula() {
        axios.get('https://localhost:8000/curriculum')
            .then((response) => response.data)
            .then((data) => {
                    setCurricula(data);
                }
            );
    }
        console.log('instructors', instructors);
        console.log('curricula', curricula);
    return(
        <Box sx={{ minWidth: 120 }}>
                <Box component="form" noValidate sx={{display: 'flex', flexDirection: 'column'}}>
                    <TextField  label="Ton prénom" variant="outlined" onChange={handleFirstname}  sx={{my:2}}/>
                    <TextField  label="Ton nom" variant="outlined" onChange={handleLastname} sx={{my:2}}/>
                    <FormControl fullWidth sx={{my:2}}>
                    <InputLabel id="curriculum-label">Cursus</InputLabel>
                        <Select
                            labelId="curriculum-label"
                            id="curriculum"
                            label="Cursus"
                            onChange={handleCurriculum}
                        >
                            {curricula.map((curriculum, index) =>
                            <MenuItem key={index} value={curriculum}>{curriculum}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                    <InputLabel id="instructor-label">Formateur</InputLabel>
                        <Select
                            labelId="instructor-label"
                            id="instructor"
                            label="Formateur"
                            onChange={handleInstructor}
                        >
                            {instructors.map((instructor, index) =>
                                <MenuItem key={index} value={instructor}>{instructor}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <Button variant="contained" sx={{width:1/4, my:2}}>
                        Let's Go
                    </Button>
                </Box>
        </Box>
    )
}
export default ConnectionForm