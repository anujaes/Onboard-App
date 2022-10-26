import '../../../css/common.css'
import React from "react";
import { Grid, TextField, Typography, InputAdornment } from "@mui/material";

function FormTwo() {
    return (
        <Grid item display="flex" flexDirection="column">
            <h2>Let's set up a home for all your work</h2>
            <Typography sx={{ mb: 5, color: 'grey', mt: 0, pt: 0 }}>You can always change them better.</Typography>
            <TextField color='secondary' className="form-elements" id="outlined-basic" label="Workspace Name" variant="outlined" />
            <TextField
                className       = "form-elements"
                id              = "outlined-basic"
                label           = "Workspace URL (optional)"
                variant         = "outlined"
                color           = 'secondary'
                InputProps      = { {
                    startAdornment: <InputAdornment position="start">www.eden.com/</InputAdornment>,
                }}
            />
        </Grid>
    )
}

export default FormTwo;