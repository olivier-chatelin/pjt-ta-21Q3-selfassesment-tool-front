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
import {getObjectivesBy, getRatiosByCheckpointId} from "../services/objectiveRepository";

function Results(){
   const ratio = (getRatiosByCheckpointId(1));

    return(
        <Box sx={{width:"25vw", mx:"auto", my:10}} >

        <CircularProgressbarWithChildren
            // className='graph1'
            value={ratio.bonusRatio}
            strokeWidth={8}
            text={`${ratio.bonusRatio + ratio.regularRatio}%`}
            styles={buildStyles({
                pathColor: "#26a69a",
                trailColor: "transparent"
            })}
        >
            <div style={{ width: "84%" }}>
                <CircularProgressbar

                    value={ratio.regularRatio}
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