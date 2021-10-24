import {Box} from "@mui/material";
import '../App.scss';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {getRatiosByCheckpointId, getSkillsByCheckPointId, getDataSkillsByCheckpointId} from "../services/objectiveRepository";
import React from 'react';
import { Radar } from 'react-chartjs-2';


function Results(){
    //circular progress config
    const param =window.location.pathname.split('/');
    const checkpointId = parseInt(param[param.length - 1]);
    const ratio = (getRatiosByCheckpointId(checkpointId));

    //radar chart config
    const skillNames = getSkillsByCheckPointId(checkpointId);
    let topLineData = [];
    for (const skill of skillNames){
        topLineData.push(100);
    }
    const skillData = getDataSkillsByCheckpointId(checkpointId);
    const data = {
        labels: skillNames,
        datasets: [
            {
                label: 'skills',
                data: skillData,
                backgroundColor: 'rgba(62,152,199,0.2)',
                borderColor: 'rgba(62,152,199,1)',
                borderWidth: 1,
            },
            {
                label: 'objective 100%',
                data: topLineData,
                backgroundColor: 'rgba(62,152,199,0.0)',
                borderColor: '#26A69A',
                borderWidth: 2,
                pointStyle: 'line',

            },
        ],
    };
    const options = {
        scale: {
            r:{
                suggestedMin: 0,
                suggestedMax: 100
            },
            ticks: { beginAtZero: true },
        },
    };

    return(
        <Box sx={{display:"flex", alignItems:"center", mt:10}}>
            <Box sx={{width:"30%"}} >
                <Box sx={{width:"50%", ml:"50%"}}>
                      <CircularProgressbarWithChildren
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
            </Box>
            <Box sx={{width:"70%",display:"flex",justifyContent:"center", alignItems:"center"}} >
                <Box sx={{width:"50%"}}>
                    <Radar data={data} options={options} />
                </Box>
            </Box>
        </Box>

    );
}
export default Results