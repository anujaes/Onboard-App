import '../../../css/common.css'
import React from "react";
import { Grid, TextField, Typography } from "@mui/material";

function FormOne() {
    return (
        <Grid item display="flex" flexDirection="column">
            <h2>Welcome! First things first...</h2>
            <Typography sx={{mb:5,color:'grey',mt:0,pt:0}}>You can always change them better.</Typography>
            <TextField color='secondary' className="form-elements" id="outlined-basic" label="Full Name" variant="outlined" />
            <TextField color='secondary' className="form-elements" id="outlined-basic" label="Display Name" variant="outlined" />
        </Grid>
    )
}

export default FormOne;