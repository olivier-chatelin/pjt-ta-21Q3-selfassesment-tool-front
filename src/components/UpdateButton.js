import React from "react";
import {Button} from "@mui/material";

function UpdateButton() {
    const handleUpdate = () => {
        localStorage.clear();
        window.location.reload();

    }
    return (
        <Button onClick={handleUpdate} variant="contained" sx={{ m:2,color:'white'}}>
            Continuer avec un autre profil
        </Button>
    )
}

export default UpdateButton