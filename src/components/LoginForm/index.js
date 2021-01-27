import React, { useState } from 'react'
import {
    Grid,
    Paper,
    Avatar,
    TextField,
    Button,
    InputAdornment,
    Typography,
    Link,
    IconButton
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import './styles.scss'

const Login = (props) => {
    const paperStyle = {
        padding: 20,
        height: '65vh',
        width: '300px',
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

    const [showPassword, setShowPassword] = useState(false);
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const handelLogin = () => {
        const data = {
            email: email,
            password: password
        }
        axios.post('api/user/login', data)
            .then(res => {
                if (res.data.token !== undefined) {
                    localStorage.setItem("token", res.data.token);
                    axios.post('api/user/token/verify', { token: res.data.token })
                        .then(res => {
                            if (res.data) {
                                localStorage.setItem('userDetails', JSON.stringify(res.data))
                                console.log(props)
                                props.history.push('/query')
                            } else {
                                alert('User not found')
                            }
                        })
                }
            }).catch(err => console.log(err))
    }

    return (
        <Grid className="login-form">
            <div className="sub-class">

            </div>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h3 style={heading}>Sign In</h3>
                </Grid>

                <TextField
                    id="input-with-icon-textfield"
                    label="Email"
                    placeholder='Enter email'
                    type='text'
                    onChange={(e) => setemail(e.target.value)}
                    fullWidth
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        )
                    }}
                />
                <br /><br />

                <TextField
                    id="input-with-icon-textfield"
                    label="Password"
                    placeholder='Enter Password'
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setpassword(e.target.value)}
                    fullWidth
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                          
                                >
                                </IconButton>
                            </InputAdornment>
                        )
                    }}

                />

                <br /><br />

                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="blue"
                        />
                    }
                    label="Remember me"
                /><br />
                <Button variant="contained" style={btnstyle} fullWidth onClick={handelLogin}>Sign In</Button>
                <Typography align='right'> <Link href="#">Forgot Password</Link></Typography>
            </Paper>
        </Grid>
    )
}

export default Login