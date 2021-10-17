import * as React from 'react';
import Checkpoint from "./componennts/Checkpoint";
import axios from "axios";
import {useEffect, useState} from "react";
function App() {
    const [checkpoints, setCheckpoints] = useState([]);
    useEffect(()=>{
        getCheckpoints();
    },[]);
    function getCheckpoints(){
    axios.get('http://localhost:8000/checkpoints')
        .then((response) => response.data)
        .then((data)=>{
            setCheckpoints(data);
            }
        );
    }

    return (
            checkpoints.filter(checkpoint => checkpoint.cursus === "Javascript")
                .map(checkpoint =>
                <Checkpoint key={checkpoint.id} cursus={checkpoint.cursus} title={checkpoint.title} description={checkpoint.description}/>
                )
    );
}

export default App;
