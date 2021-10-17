import React, {useEffect, useState} from "react";
import axios from "axios";
import Checkpoint from "../components/Checkpoint";

function Home(){
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
export default Home