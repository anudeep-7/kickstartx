import React, { Component } from 'react'

export class Signup extends Component {
    render() {
        return (
            <div class="d-flex flex-column align-items-center justify-content-center text-align-center " style={{minHeight:"100vh"}}>
                      <div className="w-50 d-flex flex-column align-items-center justify-content-center text-align-center border py-5">
                      <h3 className="my-2 mb-4 text-muted font-weight-bold">Create New Account</h3>
                      <div>
                      <input type="text" className="rounded mx-2 px-2 my-2 py-2 border border-dark" placeholder="First Name"></input>
                     <input type="text" className="rounded mx-2  px-2 my-2 py-2 border border-dark" placeholder="Last Name"></input>
                      </div>
                   
                     <input type="text" className="rounded w-50 px-2 my-2 py-2 border border-dark" placeholder="Email ID"></input>
                     <input type="text" className="rounded w-50 px-2 my-2 py-2 border border-dark" placeholder="Password"></input>
                     <input type="text" className="rounded w-50  px-2 my-2 py-2 border border-dark" placeholder="Confirm Password"></input>
          
                     <button className="btn btn-dark w-50 my-3">Sign Up</button>
                     <a href="/login">
                     <span className="text-muted"><u>Already Account Exists ? Login</u></span>
                     </a>
                      </div>
         
         </div>
      
        )
    }
}

export default Signup
