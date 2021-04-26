import React, { Component } from 'react'
import "./login.css"

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             new:0
        }
    }
    
    render() {
        return (
           
                  <div class="bg-light d-flex flex-row justify-content-around " style={{minHeight:"90vh"}}>
                      {this.state.new==0?
                       <div className="   w-50 d-flex flex-column align-items-center justify-content-center text-align-center py-5">
                       <h3 className="my-2 mb-4 text-muted font-weight-bold">Log in to continue</h3>
                     <input type="text" className="rounded w-50 my-2 py-2 border border-dark" placeholder="UserName/Email"></input>
                      <input type="text" className="rounded w-50  my-2 py-2 border border-dark" placeholder="Password"></input>
           
                      <button className="btn btn-dark w-50 my-3" style={{borderRadius:"50px"}}>LOG IN</button>
                      <span>OR</span>
                      <button className="btn bg-white border w-50 my-3" style={{borderRadius:"50px"}}>
                          {/* <span className="fab fa-google">
 
                          </span> */}
                          <span className="">
                          Continue With Google
                          </span>
                         
                          </button>
                      {/* <a> */}
                     
                      <span className="text-muted">Dont have an account ? Welcome <u>
                          <span className=""  onClick={()=>this.setState({new:1})} style={{cursor:"pointer"}}>
                          SIGNUP
                          {/* {this.state.new} */}
                              </span></u></span>
                      {/* </a> */}
                     
                       </div>
                     :
                     <div className="w-50 d-flex flex-column align-items-center justify-content-center text-align-center py-5">
                     <h3 className="my-2 mb-4 text-muted font-weight-bold">Create New Account</h3>
                     <div>
                     <input type="text" className="rounded mx-2 px-2 my-2 py-2 border border-dark" placeholder="First Name"></input>
                    <input type="text" className="rounded mx-2  px-2 my-2 py-2 border border-dark" placeholder="Last Name"></input>
                     </div>
                  
                    <input type="text" className="rounded w-50 px-2 my-2 py-2 border border-dark" placeholder="Email ID"></input>
                    <input type="text" className="rounded w-50 px-2 my-2 py-2 border border-dark" placeholder="Password"></input>
                    <input type="text" className="rounded w-50  px-2 my-2 py-2 border border-dark" placeholder="Confirm Password"></input>
         
                    <button className="btn btn-dark w-50 my-3">Sign Up</button>
                    {/* <a href="/login"> */}
                    <span className="text-muted">Already Account Exists ? <span style={{cursor:"pointer"}} onClick={()=>this.setState({new:0})}><u>Login</u></span></span>
                    {/* </a> */}
                     </div>
         
                      }
                     
                     
                      <div className="  w-25 d-flex flex-column align-items-start  justify-content-center mt-0 pt-0">
                             <h3 className="font-weight-normal">Your Profile matters</h3>
                             <h3 style={{fontStyle:"italic"}}>You Matter</h3>
                             <button className=" mt-2 btn btn-dark w-75 py-2" style={{borderRadius:"0px"}}>Learn More.</button>
                         </div>
                 </div>
            // <div className="container" id="mainBox">
            //     <div className="loginBox">a</div>
            // </div>
        
        )
    }
}

export default Login


