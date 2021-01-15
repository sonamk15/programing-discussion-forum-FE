import React, {useState} from 'react'
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
import forumFetch from "../../utils/forumFetch";
import './styles.scss'

const Signup = (props) => {
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

    const [initialState, setInitialState] = useState({
        name: "",
        email:"",
        password: ""
    });

    const handelChange = (event) => {
        const {name, value} = event.target;

        setInitialState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    };

    const handelSubmit = () => {
        const {name, email, password} = initialState;
        if(name && email && password) {
            forumFetch('api/user/signup', 'POST', {
                data: {
                    name,
                    email,
                    password
                }
            }).then((res) => {
                if(res.data) {
                    console.log(props)
                }
            })
        } else {
            alert("All feilds are required!")
        }
    };

    return (
        <Grid className="signup-form">
            <div className="sub-class">

            </div>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h3 style={heading}>Sign Up</h3>
                </Grid>

                <TextField label='Name' value={initialState.name} name="name" placeholder='Name' fullWidth required onChange={handelChange} />

                <TextField label='Email' value={initialState.email} name="email" placeholder='Enter email' fullWidth required onChange={handelChange}/>
                {/* <Avatar><LockIcon/></Avatar> */}
                <TextField label='Password' value={initialState.password} name="password" placeholder='Enter password' type='password' fullWidth required onChange={handelChange} />

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
                <Button variant="contained" onClick={handelSubmit} style={btnstyle} fullWidth>Sign Up</Button>
            </Paper>

        </Grid>
    )
}

export default Signup