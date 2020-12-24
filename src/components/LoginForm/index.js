import React, {useState} from 'react'
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
import {VisibilityIcon} from '@material-ui/icons/Visibility';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';


const Login = () => {
    const paperStyle = {
        padding: 20,
        height: '70vh',
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
//    const handleClickShowPassword = () => setShowPassword(!showPassword);
//    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')


    const login = ()=> {
        // console.warn("state ",+ email)
        // console.warn("state "+ password)
        const data={
            email:email,
            password:password
          }
        axios.post('login',data)
        .then(res=>{
          alert(res.data.message)
          console.log(res.data);
          if(res.data.message === "Your Account is Created"){
          }
          
        })
        .catch(err=>console.log(err))
      }
   
    return (
        <Grid>
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
                    onChange={(e)=>setemail(e.target.value)}
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
                    onChange={(e)=>setpassword(e.target.value)}
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
                                // onClick={handleClickShowPassword}
                                // onMouseDown={handleMouseDownPassword}
                              >
                                {/* {showPassword ? <Visibility /> : <VisibilityOff />} */}
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
                <Button variant="contained" style={btnstyle} fullWidth onClick={login}>Sign In</Button>
                <Typography align='right'> <Link href="#">Forgot Password</Link></Typography>
                {/* <p>Don't have an account?</p> */}
                {/* <Typography align='right'>Don't have an account?<Link href="#" >Sign Up</Link></Typography> */}

            </Paper>

        </Grid>
    )
}

export default Login