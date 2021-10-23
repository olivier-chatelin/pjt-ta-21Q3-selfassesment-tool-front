import React from "react";
import {Card, CardContent, Typography, Chip} from "@mui/material";



function Objective({name, isBonus,skills}) {
    const colors=
        {
            css:'primary',
            pdo:'secondary',
            mysql:'error',
            formulaire:'warning',
            poo:'info',
            twig:'success'
        };
    return(
        <Card sx={{maxWidth: 1000, margin: 5 }}>
            <CardContent>
                    <Typography sx={{fontSize:18}}>
                        {name}
                    </Typography>
                    {skills.map((skill,index)=><Chip key={index} label={skill.name} color={colors[skill.name]}/> ) }
                    <Typography sx={{fontSize:18, color:"darkred"}}>
                        {isBonus? "Bonus": ""}
                    </Typography>
            </CardContent>
        </Card>
    );
}
export default Objective