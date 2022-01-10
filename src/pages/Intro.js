import React from "react";
import {getStorageValue} from "../hooks/useLocalStorage";
import CssBaseline from "@mui/material/CssBaseline";
import {Container, ThemeProvider} from "@mui/material";
import LetsGo from "../components/LetsGo";
import UpdateButton from "../components/UpdateButton";
import {createTheme} from "@mui/material/styles";
const theme = createTheme({
    palette: {
        primary: {
            main: '#F76C6C',
        },
    },
});
function Intro() {
    return(
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" sx={{py:5}}>
                <h1>👋 Hello {getStorageValue('fullName',null)}</h1>
                <ThemeProvider theme={theme}>
                    <LetsGo/>
                    <span>ou</span>
                    <UpdateButton/>
                </ThemeProvider>

            </Container>
        </React.Fragment>
    )
}
export default Intro