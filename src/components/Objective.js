import React, {useState} from "react";
import {Card, CardContent, Typography, Chip, Box, FormControlLabel, Switch} from "@mui/material";
import {red, pink, purple, teal, blue, cyan, lime, indigo} from "@mui/material/colors";
import {useLocalStorage} from "../hooks/useLocalStorage";
import InsightsIcon from '@mui/icons-material/Insights';


function Objective({name, isBonus,skills, id,checkpointID}) {
    const colors=
        {
            css:purple[500],
            pdo:teal[500],
            mysql:lime[500],
            formulaire:indigo[400],
            poo:blue[500],
            twig:cyan[500]
        };
    let defaultObjective = {
        objectiveId:id,
        checkpointId: checkpointID,
        isBonus: isBonus,
        isChecked:false,
        skills:skills

    }
    const [localObjective, setLocalObjective] = useLocalStorage("objective"+id,defaultObjective)
    const handleCheck = ()=>{
        let objective = {
            objectiveId:id,
            checkpointId: checkpointID,
            isBonus: isBonus,
            isChecked:!localObjective.isChecked,
            skills:skills
        }
        console.log('objective', objective);
        setLocalObjective(objective);
    }
    return(
        <Box sx={{display:'flex'}}>
            <Card sx={{width: '100%', my: 5 }}>
                <CardContent>
                        <Typography sx={{fontSize:18, display:'flex'}}>
                            <Box sx={{flexGrow:1}}>
                                <span>{id} - </span><span>{name}</span>
                            </Box>
                                <Switch onChange={handleCheck} checked={localObjective.isChecked} sx={{alignSelf:"center"}}/>
                        </Typography>
                                {skills.map((skill,index)=><Chip sx={{bgcolor:colors[skill.name], color:"white", mx:1}} key={index} label={skill.name}/> ) }
                                {isBonus && <Chip label="Bonus" sx={{bgcolor:red['A400'], color:"white", ml:1}}/>}
                </CardContent>
            </Card>
        </Box>

    );
}
export default Objective