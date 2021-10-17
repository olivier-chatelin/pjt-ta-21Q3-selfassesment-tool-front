import React from "react";
import {Card, Typography} from "@mui/material";
import {CardContent} from "@mui/material";
import {CardActions} from "@mui/material";
import {Button} from "@mui/material";
import "../App.scss";
import {Link} from "react-router-dom";


function Checkpoint(props) {
    return(
        <Card sx={{maxWidth: 400, margin: 5}}>
            <CardContent>
                <Typography sx={{fontsize: 14}} color="text.secondary" gutterBottom>
                    {props.cursus}
                </Typography>
                <Typography variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={'/checkpoints/' + props.id}  >
                    <Button size="small">Compléter</Button>
                </Link>
            </CardActions>
        </Card>

    );
}
export default Checkpoint;
