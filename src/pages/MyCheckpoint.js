import React, {useEffect, useState} from "react";
import axios from "axios";
import Objective from "../components/Objective";
import {Typography, Container, AppBar, Toolbar, IconButton} from "@mui/material";
import {grey} from "@mui/material/colors";
import InsightsIcon from "@mui/icons-material/Insights";

function MyCheckpoint(){
    const [checkpoint, setCheckpoint] = useState(null);
    const param =window.location.pathname.split('/');
    const checkpointId = param[param.length - 1];
    useEffect(()=>{
        getCheckpointById(checkpointId);
    },[]);
    function getCheckpointById(checkpointId){
        axios.get('https://localhost:8000/checkpoints/'+checkpointId)
            .then((response) => response.data)
            .then((data)=>{
                    setCheckpoint(data);
                    console.log("checkpoint", data);
                }
            );
    }
    return (
        <Container >
            {checkpoint && (<AppBar position="sticky" >
                                <Toolbar>
                                    <Typography variant="h4" sx={{mt:1,flexGrow:1}}>{checkpoint.curriculum} Checkpoint {checkpoint.number}: {checkpoint.name} </Typography>
                                    <IconButton sx={{color:"white", bgcolor:grey[500]}} href={'/results/' + checkpoint.id}>
                                        <InsightsIcon  fontSize="large"/>
                                    </IconButton>
                                </Toolbar>
                            </AppBar>)}
            {checkpoint && (
                checkpoint.objectives.map(objective=><Objective key={objective.id}{...objective} checkpointID={checkpoint.id} />)
            )}
            {checkpoint && (
                <IconButton sx={{color:"white", bgcolor:grey[500], mb:5}} href={'/results/' + checkpoint.id}>
                    <InsightsIcon  fontSize="large"/>
                </IconButton>
            )}
        </Container>

    )
}
export default MyCheckpoint