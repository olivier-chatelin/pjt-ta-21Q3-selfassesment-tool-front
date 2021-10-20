import React from "react";
import {useParams} from "react-router-dom";
function MyCheckpoint(){

    return (
        <h2>L'id du checkpoint choisi est id= {useParams().id}</h2>

    )
}
export default MyCheckpoint