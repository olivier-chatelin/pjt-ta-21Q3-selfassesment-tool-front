import React, {useEffect, useState} from "react";
import axios from "axios";
import Checkpoint from "../components/Checkpoint";
import {getStorageValue} from "../hooks/useLocalStorage";
import {AppBar, Container, IconButton, Toolbar, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import InsightsIcon from "@mui/icons-material/Insights";
import CssBaseline from "@mui/material/CssBaseline";
import ConnectionForm from "../components/ConnectionForm";
import {createTheme,ThemeProvider} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#F76C6C',
        },
    },
});
function Checkpoints() {
    const [checkpoints, setCheckpoints] = useState([]);


    useEffect(() => {
        getCheckpoints();
    }, []);

    function getCheckpoints() {
            axios.get('https://www.self-assesment.mezzaburo.fr/checkpoints')
                .then((response) => response.data)
                .then((data) => {
                        // console.log(data);
                        setCheckpoints(data);
                    }
                );
    }
    return (
        <React.Fragment>
            <CssBaseline />
                <Container maxWidth="lg" sx={{}}>
                    <ThemeProvider theme={theme}>
                    <AppBar position="sticky" >
                        <Toolbar>
                            <Typography variant="h4" align='center' sx={{mt:1,flexGrow:1,color:'white'}}> Les Checkpoints</Typography>
                        </Toolbar>
                    </AppBar>
                    </ThemeProvider>
                    {checkpoints.filter(checkpoint => checkpoint.curriculum === getStorageValue('curriculum',''))
                    .map(checkpoint =>
                    <Checkpoint
                        key={checkpoint.id}
                        id={checkpoint.id }
                        index={checkpoint.number}
                        cursus={checkpoint.curriculum}
                        title={checkpoint.name}
                        duration={checkpoint.duration}
                        globalSkills={checkpoint.globalSkills}
                    />)}
            </Container>
        </React.Fragment>
    );
}
export default Checkpoints
