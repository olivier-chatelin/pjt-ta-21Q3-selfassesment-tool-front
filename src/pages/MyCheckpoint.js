import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Objective from "../components/Objective";
import {Typography} from "@mui/material";

function MyCheckpoint(){
    const [checkpoint, setCheckpoint] = useState(null);
    const param =window.location.pathname.split('/');
    const checkpointId = param[param.length - 1];
    useEffect(()=>{
        getCheckpointById(checkpointId);
    },[]);
    function getCheckpointById(checkpointId){
        axios.get('http://localhost:8000/checkpoints/'+checkpointId)
            .then((response) => response.data)
            .then((data)=>{
                    setCheckpoint(data);
                    console.log("checkpoint", data);
                }
            );
    }
    return (
        <div >
            {checkpoint && (<Typography variant="h3" sx={{margin : 5}}>{checkpoint.title}</Typography>)}
            {checkpoint && (
                checkpoint.objectives.map(objective=><Objective key={objective.id}{...objective} />)
            )}
        </div>

    )
}
export default MyCheckpoint