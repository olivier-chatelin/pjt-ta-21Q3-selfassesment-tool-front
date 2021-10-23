import React from "react";
import {Card, CardContent, Typography, Chip, Box, FormControlLabel, Switch} from "@mui/material";
import {red, pink, purple, teal, blue, cyan, lime, indigo} from "@mui/material/colors";



function Objective({name, isBonus,skills}) {
    const colors=
        {
            css:purple[500],
            pdo:teal[500],
            mysql:lime[500],
            formulaire:indigo[400],
            poo:blue[500],
            twig:cyan[500]
        };
    return(
        <Box sx={{display:'flex'}}>
            <Card sx={{minWidth: 1000, m: 5 }}>
                <CardContent>
                        <Typography sx={{fontSize:18, display:'flex'}}>
                            <Box sx={{flexGrow:1}}>
                                {name}
                            </Box>
                                {isBonus && <Chip label="Bonus" sx={{bgcolor:red['A400'], color:"white", ml:1}}/>}
                        </Typography>
                                {skills.map((skill,index)=><Chip sx={{bgcolor:colors[skill.name], color:"white", mx:1}} key={index} label={skill.name}/> ) }
                </CardContent>
            </Card>
            <Switch  defaultChecked sx={{alignSelf:"center"}}/>
        </Box>

    );
}
export default Objective