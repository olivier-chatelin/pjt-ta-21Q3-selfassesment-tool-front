import React from "react";
import {getStorageValue} from "../hooks/useLocalStorage";
import CssBaseline from "@mui/material/CssBaseline";
import {Container} from "@mui/material";
import LetsGo from "../components/LetsGo";
import UpdateButton from "../components/UpdateButton";
function Intro() {
    return(
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" sx={{py:5}}>
                <h1>👋 Hello {getStorageValue('fullName',null)}</h1>
                <LetsGo/>
                <span>ou</span>
                <UpdateButton/>

            </Container>
        </React.Fragment>
    )
}
export default Intro