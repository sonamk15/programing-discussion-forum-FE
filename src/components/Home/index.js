import React, { Component } from "react";
import forumFetch from '../../utils/forumFetch'
import './index.css';
import Button from 'react-bootstrap/Button';


class Home extends Component {

    componentDidMount() {
        forumFetch('login','POST',  {
            data:{
                email:'pagal@gmail.com',
                password: '123456'
            },
        });
    }

    render() {
        
        return (
            <div className="Home">
                <div className='header'>
                    <h1>Programming Discussion Forum</h1>
                    {/* <input type="text" name="search" placeholder="Search.."></input> */}
                    <input type="text" class="search-box" placeholder="Search ..."></input>

                    <button id="login"><b>Login</b></button>
                    <button id="signup"><b>Sign Up</b></button>

                </div>
                <div className='content'></div>
                <div className='footer'>
                   <span>
                   <h2 id="about">Aabout us</h2>
                    <h2 id="contact">Contact us</h2>
                   </span>
                </div>


            </div>
        );
    }
}
export default Home;