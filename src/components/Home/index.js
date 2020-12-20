import React, { Component } from "react";
import forumFetch from '../../utils/forumFetch'

class Home extends Component {

    componentDidMount() {
        forumFetch('snm',  {
            // data:{
            //     email:'pagal@gmail.com',
            //     password: '123456'
            // },
        });
    }

    render() {
        
        return (
            <div>
                <h1>Programming Discussion Forum</h1>

            </div>
        );
    }
}
export default Home;