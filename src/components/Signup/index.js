import React from 'react'
import {
    Grid,
    Paper,
    Avatar,
    TextField,
    Button
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const Signup = () => {
    const paperStyle = {
        padding: 20,
        height: '65vh',
        width: '280px',
        margin: '20px auto'

    }
    const avatarStyle = {
        backgroundColor: '#28abe5'
    }
    const btnstyle = {
        margin: '8px 0',
        backgroundColor: '#28abe5',
        borderRadius: 3,
        padding: '20px',
        height: 10,
        width: 150

    }
    const heading = {
        color: 'grey'
    }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h3 style={heading}>Sign Up</h3>
                </Grid>

                <TextField label='Name' placeholder='Name' fullWidth required />

                <TextField label='Email' placeholder='Enter email' fullWidth required />
                {/* <Avatar><LockIcon/></Avatar> */}
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required />

                <br /><br />

                <FormControlLabel align='left'
                    control={
                        <Checkbox
                            name="checkedB"
                            color="blue"
                        />
                    }
                    label="Remember me"
                /><br />
                <Button variant="contained" style={btnstyle} fullWidth>Sign Up</Button>
            </Paper>

        </Grid>
    )
}

export default Signup