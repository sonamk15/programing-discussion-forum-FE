// // import { ListItemIcon } from "@material-ui/core";
// import React, { Component } from "react";
// import "./Signup.css";

// class Signup extends Component {

//   signup() {
//     console.warn("state " + this.state.name)
//     console.warn("state " + this.state.email)
//     console.warn("state " + this.state.password)

//     fetch('api/signup', {
//       method: "POST",
//       headers: {
        
//         "Accept": "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(this.state)
//     })
//     .then((result) => {
//       result.json().then((resp)=>{
//         console.log(resp);
//       })
//     })
//   }

//   render() {
//     return (
//       <div>
//         <div>
//           <input
//             type="text"
//             placeholder="Name"
//             onChange={(e) => { this.setState({ name: e.target.value }) }}
//           ></input>
//           <br /><br />

//           <input
//             type="text"
//             placeholder="Enter email"
//             onChange={(e) => { this.setState({ email: e.target.value }) }}
//           ></input>
//           <br /><br />

//           <input
//             type="password"
//             placeholder="Enter password"
//             onChange={(e) => { this.setState({ password: e.target.value }) }}
//           ></input>
//           <br /><br />

//           {/* <button>Sign Up</button> */}
//           <button onClick={() => this.signup()}>Signup</button>
//         </div>
//       </div>
//     );
//   }
// }
// export default Signup;