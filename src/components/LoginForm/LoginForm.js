// // import { ListItemIcon } from "@material-ui/core";
// import React, { Component} from "react";
// import "./LoginForm";

// class LoginForm extends Component{

//   login(){
//     console.warn("state "+ this.state.email)
//     console.warn("state "+ this.state.password)

//     fetch('api/login', {
//       method:"POST",
//       headers:{
//         "Accept":"application/json",
//         "Content-Type":"application/json"
//       },
//       body: JSON.stringify(this.state)
//     }).then((result) => {
//       result.json().then((resp)=>{
//         console.log(resp.token);
//         localStorage.setItem("auth", JSON.stringify(resp.token));
//       })
//     })
//   }

//   render(){
//   return (
//     <div>

//     <div>
//       <input
//         type="text"
//         placeholder="Enter email"
//         onChange={(e) => {this.setState({email:e.target.value})}}
//       ></input>
//       <br/><br/>

//       <input
//         type="password"
//         placeholder="Enter password"
//         onChange={(e) => {this.setState({password:e.target.value})}}
//       ></input> 
//        <br/><br/>

//       {/* <button>Sign Up</button> */}
//       <button onClick={()=> this.login()}>Log In</button>
//      </div>
//     </div>

//   );
// }
// }


// export default LoginForm;