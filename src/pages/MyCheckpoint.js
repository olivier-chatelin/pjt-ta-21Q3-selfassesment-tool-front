import React from "react";
import {useParams} from "react-router-dom";
function MyCheckpoint(){
    return (
        <h1>Voici l'id du checkpoint choisi {useParams().id}</h1>
    )
}
export default MyCheckpoint