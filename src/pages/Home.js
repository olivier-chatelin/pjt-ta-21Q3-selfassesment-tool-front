import React, {useEffect, useState} from "react";
import {Box, Container, Checkbox,Input, FormHelperText} from '@mui/material';
import ConnectionForm from "../components/ConnectionForm";
import CssBaseline from '@mui/material/CssBaseline';

function Home(){

    return(
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" sx={{py:5}}>
                <h1>Pour commencer quelques infos...</h1>
                <ConnectionForm />
            </Container>
        </React.Fragment>
    )
}
export default Home