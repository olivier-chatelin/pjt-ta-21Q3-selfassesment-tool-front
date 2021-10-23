import React, {useEffect, useState} from "react";
import axios from "axios";
import Checkpoint from "../components/Checkpoint";

function Checkpoints() {
    const user = {
        id: 54,
        cursus: "PHP",

    }
    const [checkpoints, setCheckpoints] = useState([]);

    useEffect(() => {
        getCheckpoints();
    }, []);

    function getCheckpoints() {

            axios.get('http://localhost:8000/checkpoints')
                .then((response) => response.data)
                .then((data) => {
                        // console.log(data);
                        setCheckpoints(data);
                        console.log(checkpoints);
                    }
                );
    }
    return (

        checkpoints.filter(checkpoint => checkpoint.cursus === user.cursus)
            .map(checkpoint =>
                <Checkpoint
                    key={checkpoint.id}
                    id={checkpoint.id }
                    index={checkpoint.index}
                    cursus={checkpoint.cursus}
                    title={checkpoint.title}
                    duration={checkpoint.duration}
                    globalSkills={checkpoint.globalSkills}
                />
            )
    );
}
export default Checkpoints
