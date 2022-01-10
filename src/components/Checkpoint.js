import React from "react";
import {Card, ThemeProvider, Typography} from "@mui/material";
import {CardContent} from "@mui/material";
import {CardActions} from "@mui/material";
import {Button} from "@mui/material";
import "../App.scss";
import {Link} from "react-router-dom";
import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#F76C6C',
        },
    },
});
function Checkpoint(props) {
    return(
        <Card sx={{maxWidth: 600, margin: 5 }}>
            <CardContent>
                <Typography sx={{fontsize: 14}} color="text.secondary" gutterBottom>
                    {props.cursus}
                </Typography>
                <Typography variant="h5" component="div">
                    Checkpoint {props.index}: {props.title}
                </Typography>
                <Typography variant="body2">
                    Durée: {props.duration}
                </Typography>
                <Typography variant="body2">
                    Compétences globales: {props.globalSkills.map((skill,index)=><span key={index}>{index? ',':''} {skill}</span>)}.
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={'/checkpoints/' + props.id}  >
                    <ThemeProvider theme={theme}>
                        <Button size="small">Compléter</Button>
                    </ThemeProvider>
                </Link>
            </CardActions>
        </Card>

    );
}
export default Checkpoint;
