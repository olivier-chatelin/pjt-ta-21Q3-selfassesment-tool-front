import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Objective from "../components/Objective";

function MyCheckpoint(){
    const [checkpoint, setCheckpoint] = useState(null);
    const param =window.location.pathname.split('/');
    const checkpointId = param[param.length - 1];
    useEffect(()=>{
        getCheckpoint();
    },[]);
    function getCheckpoint(){
        axios.get('http://localhost:8000/checkpoints/'+checkpointId)
            .then((response) => response.data)
            .then((data)=>{
                    // console.log(data);
                    setCheckpoint(data);
                    console.log("checkpoint", data);
                }
            );
    }
    return (
        <div>
            <h2>L'id du checkpoint choisi est id= {useParams().id}</h2>
            {checkpoint && (
                <Objective {...checkpoint.objectives[0]}/>
            )}
        </div>

    )
}
export default MyCheckpoint