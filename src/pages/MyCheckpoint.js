import React, {useEffect, useState} from "react";
import axios from "axios";
import Objective from "../components/Objective";
import {Typography, Container, AppBar, Toolbar, IconButton, Button} from "@mui/material";
import {grey} from "@mui/material/colors";
import InsightsIcon from "@mui/icons-material/Insights";
import CssBaseline from "@mui/material/CssBaseline";
import ConnectionForm from "../components/ConnectionForm";
import {createTheme ,ThemeProvider} from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";

const theme = createTheme({
    palette: {
        primary: {
            main: '#F76C6C',
        },
    },
});

function MyCheckpoint(){
    const [checkpoint, setCheckpoint] = useState(null);
    const param =window.location.pathname.split('/');
    const checkpointId = param[param.length - 1];
    useEffect(()=>{
        getCheckpointById(checkpointId);
    },[]);
    function getCheckpointById(checkpointId){
        axios.get('https://www.self-assesment.mezzaburo.fr/checkpoints/'+checkpointId)
            .then((response) => response.data)
            .then((data)=>{
                    setCheckpoint(data);
                    console.log("checkpoint", data);
                }
            );
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" >
                {checkpoint && (
                    <ThemeProvider theme={theme}>
                        <AppBar position="sticky" >
                            <Toolbar>
                                <Typography variant="h4" textAlign='center' sx={{mt:1,flexGrow:1, color:'white'}}>{checkpoint.curriculum} Checkpoint {checkpoint.number}: {checkpoint.name} </Typography>
                                <ThemeProvider theme={theme}>
                                    <Button
                                        endIcon={<InsightsIcon/>}
                                        variant="contained"
                                        sx={{color: 'white', my:5}}
                                        href={'/results/' + checkpoint.id}
                                    >
                                    </Button>
                                </ThemeProvider>
                            </Toolbar>
                        </AppBar>
                    </ThemeProvider>
                        )}
                {checkpoint && (
                    checkpoint.objectives.map(objective=><Objective key={objective.id}{...objective} checkpointID={checkpoint.id} />)
                )}
                {checkpoint && (
                    <ThemeProvider theme={theme}>
                        <Button
                            endIcon={<InsightsIcon/>}
                            variant="contained"
                            sx={{color: 'white', my:5}}
                            href={'/results/' + checkpoint.id}
                        >
                            Voir tes résultats
                        </Button>
                    </ThemeProvider>
                )}
            </Container>
        </React.Fragment>

    )
}
export default MyCheckpoint