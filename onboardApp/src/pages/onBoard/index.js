import '../../css/onBoard.css'
import '../../css/common.css'
import * as React       from 'react';
import Box              from '@mui/material/Box';
import Stepper          from '@mui/material/Stepper';
import Step             from '@mui/material/Step';
import StepLabel        from '@mui/material/StepLabel';
import Button           from '@mui/material/Button';
import { Grid }         from '@mui/material';
import CookieIcon       from '@mui/icons-material/Cookie';
import FormOne          from './atoms/formOne';
import FormTwo          from './atoms/formTwo';
import FormThree        from './atoms/formThree';
import FinalForm        from './atoms/finalForm';

function OnboardForm() {

    const steps = ['step-1', 'step-2', 'step-3', 'step-4'];

    function getForms(formNumber){

        const forms ={
            1 : <FormOne />,
            2 : <FormTwo />,
            3 : <FormThree />,
            4 : <FinalForm />
        }

        return forms[formNumber]
    }


    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Grid container className='single-page-height flex-center' >
            <Grid item className='inner-container'>
                <Grid item xs={4}>
                    <div className='top-header'><CookieIcon />&nbsp;&nbsp;<h2>EDEN</h2></div>
                    {/* stepper count */}
                    <Stepper activeStep={activeStep}>
                        {
                            steps.map((label) => {
                                return (
                                    <Step className="steppers" key={label}>
                                        <StepLabel></StepLabel>
                                    </Step>
                                );
                            })}
                    </Stepper>
                    {/*================= otional message================ */}
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            {/* inner content */}
                            <h3>All steps completed - you&apos;re finished</h3>
                            <Box className="flex-center">
                                <Button
                                    varient ='contained'
                                    color   ='secondary'
                                    sx      = {{backgroundColor:'#664de5',color:'white'}} 
                                    onClick = {handleReset}
                                >
                                    Reset
                                </Button>
                            </Box>
                        </React.Fragment>
                        // ==============================================
                    ) : (
                        <React.Fragment>
                            {/* inner content */}
                            <Box sx={{ mt: 3, mb: 1 }}>
                                {getForms(activeStep+1)}
                            </Box>
                            {/* control BUttons */}
                            <Box className="flex-center">
                                <Button
                                    variant = 'contained'
                                    color   = 'secondary'
                                    onClick = {handleNext}
                                    sx      = {{
                                        mt              : 3,
                                        backgroundColor : '#664de5',
                                        borderRadius    : '1px',
                                        width : '100%'
                                    }}>
                                    {activeStep === steps.length - 1 ? 'Launch Eden' : 'Create WorkSpace'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
            </Grid>
        </Grid>
        </Grid >
    );
}

export default OnboardForm;