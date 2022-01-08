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
            axios.get('https://localhost:8000/checkpoints')
                .then((response) => response.data)
                .then((data) => {
                        // console.log(data);
                        setCheckpoints(data);
                        console.log('checkpoints',checkpoints);
                    }
                );
    }
    return (
        checkpoints.filter(checkpoint => checkpoint.curriculum === user.cursus)
            .map(checkpoint =>
                <Checkpoint
                    key={checkpoint.id}
                    id={checkpoint.id }
                    index={checkpoint.number}
                    cursus={checkpoint.curriculum}
                    title={checkpoint.name}
                    duration={checkpoint.duration}
                    globalSkills={checkpoint.globalSkills}
                />
            )
    );
}
export default Checkpoints
