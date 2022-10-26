import '../../../css/common.css'
import '../../../css/formThree.css'
import React from "react";
import { Grid, Typography } from '@mui/material';
import Avatar from '@mui/joy/Avatar';
import FormLabel from '@mui/joy/FormLabel';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import GroupsIcon from '@mui/icons-material/Groups';

function FormThree() {

    const edenFor = ['For myself', 'With my team']

    const icons = {
        0 : <Avatar variant="soft" size="sm" />,
        1 : <GroupsIcon variant="soft" size="sm"/>,
    }

    const labelStatement = {
        0: 'Write Think more clearly. Stay organized.',
        1: 'Wikis, docs, tasks & projects, all in one place.'
    }

    return (
        <Grid item display="flex" flexDirection="column">
            <h2>How are you planning to use Eden?</h2>
            <Typography sx={{ mb: 5, color: 'grey', mt: 0, pt: 0 }}>We'll streamline your setup experience accordingly.</Typography>

            <RadioGroup
                aria-label="platform"
                overlay
                name="platform"
                sx={{
                    flexDirection: 'row',
                    gap: 2,
                    [`& .${radioClasses.checked}`]: {
                        [`& .${radioClasses.action}`]: {
                            inset: -1,
                            border: '3px solid',
                            borderColor: '#664de5',
                        },
                    },
                    [`& .${radioClasses.radio}`]: {
                        display         : 'contents'
                    },
                }}
            >
                {edenFor.map((value,index) => (
                    <Sheet
                        key={value}
                        variant="outlined"
                        sx = { {
                            borderRadius    : 'sm',
                            bgcolor         : 'background.level1',
                            display         : 'flex',
                            flexDirection   : 'column',
                            alignItems      : 'center',
                            justifyContent  :'center',
                            gap             : 1,
                            p               : 1,
                        }}
                    >
                        <Radio color="secondary"  id={value} value={value} />
                        {icons[index]}
                        <FormLabel htmlFor={value}>{value}</FormLabel>
                        <Typography sx = {{fontSize:'0.75rem',color:"grey"}}>{labelStatement[index]}</Typography>
                    </Sheet>
                ))}
            </RadioGroup>

        </Grid>
    )
}

export default FormThree;