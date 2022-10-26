import React from "react";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Grid, Typography } from "@mui/material";

function FinalForm() {
    return(
        <Grid container display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Grid item>
                <CheckCircleRoundedIcon sx={{fontSize:'3rem',color:'#664de5',mt:5,mb:2}} />
                <h1>Congratulations, Eren!</h1>
                <Typography sx={{color:'grey'}}> You have completed onboarding, you can start using the Eden!</Typography>
            </Grid>
        </Grid>
    )

}

export default FinalForm;