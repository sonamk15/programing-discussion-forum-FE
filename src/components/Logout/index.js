import React, { useState } from 'react'
import { Route, Redirect} from 'react-router-dom';

import {
  Link
} from '@material-ui/core'

const Logout = function (){
    const [logout, setLogout] = useState(false)

    const handleLogout = function(){
        localStorage.removeItem('userDetails')
        localStorage.removeItem('token')
        setLogout(true)


    }
    // background-color: lightblue;
    // font-size: small;
    // font-style: oblique;

    return(
        <>
          {localStorage.getItem("token") ? (
              <button
                className="btn btn-outline-primary my-2 my-sm-0"
                style={{ color: "black", float:'right', marginRight:'30px', width:'6%' }}
                type="submit"
                onClick={handleLogout}
              >
                OK
              </button>
            ) : (
              <div>
                <Link to="/">
                  <button
                    type="button"
                    style={{ marginLeft: "10px" }}
                    className="btn btn-primary btn-arrow-right "
                  >
                    Home
                  </button>
                </Link>
              </div>
            )}
            {logout ? <Redirect to="/" /> : null}
        </>

    )
}

export default Logout;