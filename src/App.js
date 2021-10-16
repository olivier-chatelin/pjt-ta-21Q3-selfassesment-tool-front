import * as React from 'react';
import Checkpoint from "./componennts/Checkpoint";
import {dividerClasses} from "@mui/material";
function App() {
    const checkpoints = [
        {
            cursus : "Javascript",
            title : "Checkpoint 1",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque dicta doloremque ea expedita facilis non numquam porro possimus tempora?",
        },
        {
            cursus : "Javascript",
            title : "Checkpoint 2",
            description : "Lorem ipsum ea expedita facilis non numquam porro possimus tempora?",
        },
        {
            cursus : "Javascript",
            title : "Checkpoint 3",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque dicta doloremque ea expeipsum dolor sit amet, consectetur adipisicing elit. Ab cumque dicta doloremque ea expedita facilis non numquam porro possimus tempora?",
        },
        {
            cursus : "PHP",
            title : "Checkpoint 1",
            description : "Lorem ipsum dolor sit amet, consectetur mque dicta doloremque ea expedita facilis non numquam porro possimus tempora?",
        },
        {
            cursus : "PHP",
            title : "Checkpoint 2",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque dicta doloremque ea expedita facilis non numquam porro possimus tempora?",
        },

    ];

    return (
        checkpoints.filter(checkpoint => checkpoint.cursus === "Javascript")
            .map(checkpoint =>
            <Checkpoint cursus={checkpoint.cursus} title={checkpoint.title} description={checkpoint.description}/>
        )
    );
}

export default App;
