import React from 'react';
import { Route, Redirect} from 'react-router-dom';


const PrivateRoute = ({ component: Component,  ...rest }) => {
    const isAuthenticated = localStorage.getItem("userDetails")
    return (<Route {...rest} component={(props) => {
        return (
            isAuthenticated ? (<Component {...props} />)
            : (<Redirect to="/" />)
        )
    }} />)
}
export default PrivateRoute;