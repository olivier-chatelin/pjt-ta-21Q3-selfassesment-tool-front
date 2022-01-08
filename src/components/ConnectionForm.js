import React, {useEffect, useState} from "react";
import {Box, TextField, Button,Input, FormHelperText} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';


function ConnectionForm(){
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [curriculum, setCurriculum] = useState('PHP');
    const [instructor, setInstructor] = useState('Guillaume Harari');
    const handleFirstname = (event) => {
        setFirstname(event.target.value);
    }
    const handleLastname = (event) => {
        setLastname(event.target.value);
    }
    const handleCurriculum = (event) => {
        setCurriculum(event.target.value);
    }
    return(
        <Box sx={{ minWidth: 120 }}>
                <Box component="form" noValidate autoComplete="off" sx={{display: 'flex', flexDirection: 'column'}}>
                    <TextField  label="Prénom" variant="outlined" onChange={handleFirstname}  sx={{my:2}}/>
                    <TextField  label="Nom" variant="outlined" onChange={handleLastname} sx={{my:2}}/>
                    <FormControl fullWidth sx={{my:2}}>
                    <InputLabel id="curriculum-label">Curriculum</InputLabel>
                        <Select
                            labelId="curriculum-label"
                            id="curriculum"
                            label="Curriculum"
                            value={curriculum}
                            onChange={handleCurriculum}
                        >
                            <MenuItem value={'PHP'}>PHP</MenuItem>
                            <MenuItem value={'JS'}>JS</MenuItem>
                            <MenuItem value={'DATA'}>DATA</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                    <InputLabel id="instructor-label">Formateur</InputLabel>
                        <Select
                            labelId="instructor-label"
                            id="instructor"
                            label="Formateur"
                            value={instructor}
                            onChange={handleCurriculum}
                        >
                            <MenuItem value={'Guillaume Harari'}>Guillaume Harari</MenuItem>
                            <MenuItem value={'Vincent Vaur'}>Vincent Vaur</MenuItem>
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