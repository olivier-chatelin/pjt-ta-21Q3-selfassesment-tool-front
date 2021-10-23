import React, {useEffect, useState} from 'react'
import {Box} from "@mui/material";
import axios from "axios";
import '../App.scss';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Results(){
    let count = 0;
    for (const id in localStorage) {
        if(localStorage.getItem(id) == "true") {
            count++;
        }
    }
    const bonusRatio = Math.floor(100*(count -15)/15);
    const regularRatio = Math.floor(100*count/15);
    if (regularRatio > 100)
    console.log(regularRatio);
    console.log("count",count);
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
                }
            );
    }

    return(
        <Box sx={{width:"25vw", mx:"auto", my:10}} >

        <CircularProgressbarWithChildren
            // className='graph1'
            value={bonusRatio}
            strokeWidth={8}
            text={`${regularRatio}%`}
            styles={buildStyles({
                pathColor: "#26a69a",
                trailColor: "transparent"
            })}
        >
            <div style={{ width: "84%" }}>
                <CircularProgressbar

                    value={regularRatio}
                    styles={buildStyles({
                        trailColor: "transparent"
                    })}
                />
            </div>
        </CircularProgressbarWithChildren>
        </Box>
    );
}
export default Results