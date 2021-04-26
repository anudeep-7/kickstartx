import React, { Component} from 'react'
import {Link } from "react-router-dom";

export class Jobs extends Component {
    componentDidMount=()=>{
        // console.log("hello")
        localStorage.setItem('state',3)
    }
    render() {
        return (
            <div className="container ">
                    <div className="d-flex flex-column  mx-5">
               
               <div className="d-flex flex-row border mt-4 bg-white py-2 px-2 rounded ">
                     <Link  href="/home">
                     <div className=" btn px-3 text-dark " type="button"  style={{}}>
                       <span className="fas fa-bookmark px-2"></span>
                       <span>My Jobs</span>
                    </div>
                     </Link>
                     <Link  href="/home">
                     <div className=" btn px-3 text-dark " type="button"  style={{}}>
                       <span className="fas fa-bell px-2"></span>
                       <span>Job Alerts</span>
                    </div>
                     </Link>
                     <Link  href="/home">
                     <div className=" btn px-3 text-dark " type="button"  style={{}}>
                       <span className="far fa-money-bill-alt px-2"></span>
                       <span>Salary</span>
                    </div>
                     </Link>
                     <Link  href="/home">
                     <button className=" btn px-3 text-dark " type="button"   style={{}}>
                       <span className="far fa-check-square px-2"></span>
                       <span>Skill Assessments</span>
                    </button>
                     </Link>
                     <Link  href="/home">
                     <div class="dropdown">
                       <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span style={{}}>More</span>
                          <span className="px-2 fas fa-chevron-down"></span>
                       </button>
                       <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                           <a class="dropdown-item" href="#">Action</a>
                           <a class="dropdown-item" href="#">Another action</a>
                           <a class="dropdown-item" href="#">Something else here</a>
                       </div>
                       </div>
                     </Link>
                  
                 </div>
             
               <div className="d-flex flex-column align-items-center my-3 justify-content-center p-2 py-4" style={{backgroundColor:"#dce6f2"}}>
                  <h2 className="text-muted py-2" style={{fontWeight:"100"}}>Search for your next Job</h2>
                  <div className="d-flex flex-row justify-content-center">
                
                      <input 
                      className="py-2 px-2 mx-3"
                      type="text"
                      style={{width:"300px",outline:"none",border:"none"}} placeholder="Search by Time, Skill or company"></input>
               
               <input 
                      className="py-2 px-2 mx-3"
                      type="text"
                      style={{width:"300px",outline:"none",border:"none"}} placeholder="City,State or Zip Code"></input>
   
                      <button className="btn btn-primary rounded">
                          Search
                      </button>
               
                  </div>
               </div>
               
               <div className="border my-3 py-2 px-2 rounded bg-white">
                   <h4 className="row mx-3 mt-3">Job Searches</h4>
                   <div className="d-flex flex-row p-2 ">
                       <div className="text-left border rounded px-3 w-25 py-2 m-3">
                           <span>Microsoft</span>
                           <br>
                           </br>
                           <span className="text-muted">India</span>
                       </div>
                       <div className="text-left border rounded px-3 w-25 py-2 m-3">
                           <span>Kickstartx</span>
                           <br>
                           </br>
                           <span className="text-muted">India</span>
                       </div>
                   </div>
               </div>
               
               <div className="border my-3 py-2 px-2 rounded bg-white text-left">
                   <h4 className="row mx-3 mt-3">Recommended for you</h4>
                   <span className="text-muted mx-3">Based on your profile and search history</span>
                   <div className="d-flex flex-row p-2 ">
                       <div className="text-left border rounded px-3 w-25 py-2 m-3 pb-5 pt-3">
                           <span className="fab fa-google my-2 " style={{fontSize:"30px"}}></span>
                           <br></br>
                           <span>Customer Service Account Manager, Hyderabad</span>
                           <br>
                           </br>
                           <span className="text-muted">Google</span>
                           <br></br>
                           <span className="text-muted">India</span>
                       </div>
                       <div className="text-left border rounded px-3 w-25 py-2 m-3 pb-5 pt-3">
                           <span className="fab fa-google my-2 " style={{fontSize:"30px"}}></span>
                           <br></br>
                           <span>Customer Service Account Manager, Hyderabad</span>
                           <br>
                           </br>
                           <span className="text-muted">Google</span>
                           <br></br>
                           <span className="text-muted">India</span>
                       </div>
                       <div className="text-left border rounded px-3 w-25 py-2 m-3 pb-5 pt-3">
                           <span className="fab fa-google my-2 " style={{fontSize:"30px"}}></span>
                           <br></br>
                           <span>Customer Service Account Manager, Hyderabad</span>
                           <br>
                           </br>
                           <span className="text-muted">Google</span>
                           <br></br>
                           <span className="text-muted">India</span>
                       </div>
                   </div>
                   
               </div>
               
             
              </div>
         
            </div>
        
      )
    }
}

export default Jobs
