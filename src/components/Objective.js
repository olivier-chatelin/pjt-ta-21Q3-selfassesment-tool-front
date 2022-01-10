import React from "react";
import {Card, CardContent, Typography, Chip, Box,  Switch} from "@mui/material";
import {useLocalStorage} from "../hooks/useLocalStorage";
import { green, orange,red } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InsightsIcon from '@mui/icons-material/Insights';
const theme = createTheme({
    palette: {
        primary: {
            main: '#F76C6C',
        },
    },
});



function Objective({name, isBonus,skills, id,checkpointID, number}) {


    let defaultObjective = {
        objectiveId:id,
        number:number,
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
        setLocalObjective(objective);

    }
    return(
        <Box component="div" sx={{display:'flex'}}>
            <Card sx={{width: '100%' }}>
                <CardContent>
                        <Typography sx={{fontSize:18, display:'flex'}}>
                            <Box sx={{flexGrow:1}}>
                                <span>{number} - </span><span>{name}</span>
                            </Box>
                            <ThemeProvider theme={theme}>
                                <Switch onChange={handleCheck} checked={localObjective.isChecked} sx={{alignSelf:"center"}}/>
                            </ThemeProvider>
                        </Typography>
                                {skills.map((skill,index)=><Chip sx={{bgcolor:skill.color, color:"black", mx:1}} key={index} label={skill.name}/> ) }
                                {isBonus && <Chip label="Bonus" sx={{bgcolor:red['A400'], color:"white", ml:1}}
                                />}
                </CardContent>
            </Card>
        </Box>

    );
}
export default Objective