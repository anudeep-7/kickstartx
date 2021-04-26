import React, { Component } from 'react'
import style from "./profile.module.css";
import axios from "axios"
import './yourprofile.css';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import Modal from 'react-modal';
import ProfileSocial from './ProfileSocial';
import ProfilePosts from './ProfilePosts';
import ProfileSocialEmployeeHistory from './ProfileSocialEmployeeHistory';
import ProfilePortfolio from './ProfilePortfolio';
Modal.setAppElement('#root');

export default class YourProfile extends Component { 
    // componentDidMount() { 
    //         let data; 
      
    //         axios 
    //             .get("http://localhost:8000/profile?user=sessionStorage.getItem('username')") 
    //             .then((res) => { 
    //                 data = res.data; 
    //                 this.setState({ 
    //                     details: data, 
    //                 }); 
    //             }) 
    //             .catch((err) => {}); 
    //     } 
    
    changeBioInfo=(event)=>
    {
        this.setState({
            bioinfo:event.target.value
        })
    }
    componentDidMount=()=>{
        // console.log("hello")
        localStorage.setItem('state',5)
    }
    editEducationDetails = ()=>{
        this.setState({
            editschool:true
        })
    }
    editEmployeeHistoryDetails = ()=>{
        this.setState({
            editemployeehistory:true
        })
    }
    viewSolvedProblems=()=>{
        this.setState({
        viewSolvedProblems:true
        })
    }

    constructor(props) {
        super(props)
    
        this.state = {


            firstname:"anudeep",
            lastname:"kakkireni",
            location:"Hyderabad, India",
            connections:100,
            about:"  Engineering Graduate with leadership training and experience with academic training in University of Hyderabad.Proven skills in Project Management and research.",
            profilePhoto:"",




            bioinfo:"Engineering Graduate with leadership training and experience with academic training in University of Hyderabad.Proven skills in Project Management and research", 
            education:[["Chaitanya Bharathi Institute Of Technology","Bachelor of Engineering - BE","Information Technology",2017,2021,"Graduation"],["CChaitanya Bharathi Institute Of Technology","Bachelor of Engineering - BE","Information Technology",2017,2021,"HighSchool"]],
            educationEdit:0,
            tabs:1,
            editemployeehistory:false,
            createpage1:1,
            editprofile:false,
            editprofile1:1,
            editschool:false,
            editbio:false,
            createpage:false,
            viewSolvedProblems:false
           
        }
    }
    render() {
       
        
        return (
           
            <div className="container">
                  <div  className="row d-flex flex-row justify-content-center  " id="boxx">
            
            <div className="col-xl-3" id="leftProfile">
            <div className="row d-flex flex-row " >
            <div className="m-2" style={{width:"220px",borderRadius:"50%"}}>
                        <img src="chanti.png" className="px-3 float-left ml-1 rounded-circle" id={style.profile_pic}
                        alt="Avatar"
                        style={{width:"210px",borderRadius:"50%"}}
                        /> 
        
        </div> 
            <div className="col-4 d-flex flex-column align-items-center justify-content-center d-none d-lg-block d-xl-none">

            <div className="row btn btn-group-vertical pl-0">
                    <button type="button" class="btn bg-white border text-secondary">Connect</button>
                    <button type="button" class="btn bg-white border text-secondary">Message</button>
                    <button type="button" class="btn bg-white border text-secondary">Mail</button>
                    </div>
                   <div className="row py-1">
                  
                   <button className="btn btn-circle  bg-white " style={{borderRadius:"50%",border:"1px solid #cccccc"}}>
                         
                         <span className="fas fa-share"></span>
                     </button>
                     <button className="btn btn-circle mx-1 bg-white " style={{borderRadius:"50%",border:"1px solid #cccccc"}}>
                  
                        <span className="fas fa-ellipsis-v px-1" ></span>
                    </button>
                  </div> 
             
                   
             </div>
                  
            </div>
           
            
           
           
            <div className="">
            <div className="row d-none d-lg-flex">
            <div className="pt-1 col-10  ml-3" style={{textAlign:"justify"   }}>
            <span className=" py-1 mt-2 " style={{fontSize:"25px"}}>About   </span>    
            <div style={{lineHeight:"1.2"}}>
            <span className="" style={{fontSize:"14px",opacity:"0.9"}}>
           {this.state.about}
            </span>
            </div>
            </div>
            </div>
           
                </div>
            </div>
        
            <div className="col-xl-7 col-lg-12 text-left  d-flex flex-column  mt-3  " id="rightProfile">
            <span className=" " style={{fontSize:"25px"}}>
                <span style={{textTransform:"capitalize"}}>{this.state.firstname}</span>&nbsp;<span style={{textTransform:"capitalize"}}>{this.state.lastname}</span></span>
            <span className=" " style={{fontSize:"20px",opacity:"0.8"}}>
            Kickstartx - Frontend Developer
            </span>
            <span>{this.state.connections}+ connections</span>
            <span>{this.state.location}</span>
            <div className="row ">
            <div className="pt-1 col-10 ml-xl-5 d-xl-none  " style={{textAlign:"justify"   }}>
            <span className=" py-1 mt-2  " style={{fontSize:"14px",textDecorationLine:"underline "}}>About   </span>    
            <div style={{lineHeight:"1.2"}}>
            <span className="" style={{fontSize:"14px",opacity:"0.9"}}>
            {this.state.about}
            </span>
            </div>
            </div>
            </div>
           <div className="mt-3 d-none d-xl-block d-xl-flex flex-xl-row justify-content-start   align-items-center">
                
                <div className=" my-xl-0 my-2 ml-xl-auto">
                <button className="btn btn-circle mx-2 bg-white " style={{borderRadius:"50%",border:"1px solid #cccccc"}}>
                   
                   <span className="fas fa-share"></span>
               </button>
               <div class=" dropup btn">
                                    <button type="button "
                                    style={{borderRadius:"50%",border:"1px solid #cccccc"}}
                                    class="btn  dropdown-toggle bg-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="fas fa-ellipsis-v px-1" ></span>
                                    </button>
                                    <div class="dropdown-menu rounded">
                                       <span className=" btn px-2 btn" onClick={()=>this.setState({editprofile:true})}>Edit profile
                                      
                                       </span>
                                       <span className=" btn px-2"  onClick={()=>this.setState({createpage:true})}>Create page</span>
                                       <span className=" btn px-2">Delete profile</span>
                                    
                                    </div>
                                  
                                    </div>
                                   
                </div>
               
                </div>
                <div className="d-flex flex-row justify-content-around border-bottom mt-2  align-items-center">
                    {/* <div className="d-flex flex-row  justify-content-center" style={{width:"100%",fontSize:"20px"}}> */}
                        <div className="btn py-2 rounded " id="tabs" onClick={()=>{this.setState({tabs:1})}}  style={this.state.tabs==1?{borderBottom:"1px solid black",  borderBottomWidth:"3px"}:{borderBottom:"1px solid #dddddd"}}>
                            <span className=" px-5 d-none d-xl-block"> Posts</span>
                            <span className="px-2 d-lg-block d-xl-none fas fa-th-large "  style={{fontSize:"24px"}}></span></div>
                        <div className="btn py-2  " onClick={()=>{this.setState({tabs:2})}}   id="tabs" style={this.state.tabs==2?{borderBottom:"1px solid black",  borderBottomWidth:"3px"}:{borderBottom:"1px solid #dddddd"}}>
                        <span className=" px-5 d-none d-xl-block">Portfolio</span>
                            <span className="px-2 d-lg-block d-xl-none far fa-bell "  style={{fontSize:"24px"}}></span>
                        </div>
                        <div className="btn py-2 rounded" onClick={()=>{this.setState({tabs:3})}}   id="tabs" style={this.state.tabs==3?{borderBottom:"1px solid black",  borderBottomWidth:"3px"}:{borderBottom:"1px solid #dddddd"}}>
                        <span className=" px-5 d-none d-xl-block">Social</span>
                            <span className="px-2 d-lg-block d-xl-none far fa-user-circle" style={{fontSize:"24px"}}></span>
                        </div>
                    {/* </div> */}
                       

                 </div>
                 <div className="d-flex flex-row justify-content-center align-items-center  ">
                 {this.state.tabs==1?
                    <ProfilePosts></ProfilePosts>
             :
              this.state.tabs==2?
             <ProfilePortfolio viewSolvedProblems={this.viewSolvedProblems}></ProfilePortfolio>:
               <div className="d-flex flex-column align-items-start  w-100 pl-3  my-2 ">
                   <span className="my-3"  style={{fontWeight:"400",fontSize:"24px"}}>Your Bio</span>
                   <div className="my-1 w-100 p-3 bg-white border py-4  " style={{borderRadius:"15px",fontSize:"15px"}}>
                       <div className="d-flex flex-row " >
                           <span style={{overflowY:"auto"}}>
                           {this.state.bioinfo}
                           </span>
                    <div className="ml-auto ">
                  <span className="fas fa-pen  p-3 " id="edit" onClick={()=>this.setState({editprofile:true,editprofile1:4,editbio:true})} style={{borderRadius:"50%"}}> </span>
                    </div>
                    </div>
                          
                   </div>
                   <span className="my-3"  style={{fontWeight:"400",fontSize:"24px"}}>Education</span>
                 
                 
               <ProfileSocial editEducationDetails={this.editEducationDetails} ></ProfileSocial>
                 
               <span className="my-3"  style={{fontWeight:"400",fontSize:"24px"}}>Employee History</span>
                 
              <ProfileSocialEmployeeHistory editEmployeeHistoryDetails={this.editEmployeeHistoryDetails}></ProfileSocialEmployeeHistory>
                   
                   
                   
                   
                   
                   
                   
                   

               </div>
                 
                 }
                  
                    </div>
            
        
              
      
               
            </div>
           
          
        </div>
       
            <Modal isOpen={this.state.editprofile} 
                                 onRequestClose={()=>this.setState({editprofile:false,editbio:false,editprofile1:1})}
                             style={{
                                overlay: {
                                  position: 'fixed',
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  backdropFilter:"blur(3px)",
                                  backgroundColor: 'rgba(255,255,255,0.2)'
                                },
                                content: {
                                    width:"55vh",
                                height:"400px",
                                  position: 'absolute',
                                  top: '50%',
                                  left: '50%',
                                  transform: "translate(-50%,-50%)",
                                  border: '1px solid #ccc',
                                  background: '#fff',
                                  overflow: 'auto',
                                  WebkitOverflowScrolling: 'touch',
                                  borderRadius: '4px',
                                  outline: 'none',
                                  padding: '20px'
                                }
                              }}
                           
                           >
                                <div className="d-flex flex-column align-items-center justify-content-center h-100" >
                                {
                                this.state.editprofile1==1?
                                <>
                                  <input type="text" className="rounded w-75 py-2 my-2  border border-muted bg-light" placeholder="Phone Number"></input>
                                  <input type="text" className="rounded w-75 py-2 my-2 border border-muted bg-light" placeholder="Email"></input>
                                  <input type="text" className="rounded w-75 py-2  my-2 border border-muted bg-light" placeholder="Current Location"></input>
                                  <button onClick={()=>this.setState({editprofile1:2})}   className="btn btn-dark  mt-5 ml-auto rounded" >NEXT</button>
                                </>
                                 :
                                 this.state.editprofile1==2?
                            <>
                                 <span className="text-muted" style={{fontSize:"24px"}}>Add School</span>
                                 <input type="text" className="rounded w-75 py-1 my-2  border border-muted bg-light" placeholder="Institution Name"></input>
                                
                                <select  className="rounded w-75 py-1 my-2  border border-muted bg-light text-muted">
                                    <option>HighSchool</option>
                                    <option>Graduation</option>
                                    <option>Primary School</option>
                                    <option>Post Graduation</option>
                                </select>
                              
                               <div className=" d-flex flex-column align-items-start w-75">
                               <span className="text-muted"  >From </span>
                                  <input type="date"  className="bg-light text-muted rounded  my-2 border border-mtted" style={{outline:"none",border:"none"}}></input>
                                 
                                 
                                
                            
                                <span className="text-muted" >To </span>
                                  <input type="date" className="bg-light text-muted rounded  my-2 border border-muted"></input>
                               
                               </div>
                                
                                 <input type="number" className="rounded w-75 py-1 my-2  border border-muted bg-light" placeholder="Your Percentage"></input>
                               
                                
                                
                                  <button onClick={()=>this.setState({editprofile1:3})}   className="btn btn-dark  mt-2 ml-auto rounded" >NEXT</button>
                            
                              </>
                                
                                :
                                this.state.editprofile1==3?
                                <>
                               
                <span className="text-muted" style={{fontSize:"24px"}}>
                    Add Organisation</span>
                    <input type="text" className="rounded w-75 py-1 my-2  border border-muted bg-light" 
                    // value= {this.state.education[this.state.educationEdit][0]}
                     placeholder="Company Name">
                       
                    </input>

                    <input type="text" className="rounded w-75 py-1 my-2  border border-muted bg-light" 
                    // value= {this.state.education[this.state.educationEdit][0]}
                     placeholder="Role">
                       
                    </input>
                
                {/* <select  className="rounded w-75 py-1 my-2  border border-muted bg-light text-muted">
                    <option>HighSchool</option>
                    <option>Graduation</option>
                    <option>Primary School</option>
                    <option>Post Graduation</option>
                </select> */}
                
                <div className=" d-flex flex-column align-items-start w-75">
                <span className="text-muted"  >From </span>
                    <input type="date"  className="bg-light text-muted rounded  my-2 border border-mtted" style={{outline:"none",border:"none"}}></input>
                    
                    
                
            
                <span className="text-muted" >To </span>
                    <input type="date" className="bg-light text-muted rounded  my-2 border border-muted"></input>
                
                </div>
                
                    {/* <input type="number" className="rounded w-75 py-1 my-2  border border-muted bg-light" placeholder="Your Percentage"></input> */}
                
                
                
                    <button onClick={()=>this.setState({editprofile1:4})}   className="btn btn-dark  mt-2 ml-auto rounded" >NEXT</button>
            
            
               
                
                
                                </>
                                :
                                this.state.editprofile1==4?
                                <>
                                <span className="text-muted" style={{fontSize:"24px"}}>Add/Edit Bio</span>
                                <textarea type="text"
                                value= {this.state.bioinfo} onChange={this.changeBioInfo}
                                 className="rounded w-75 py-1 my-2  border border-muted bg-light" style={{height:"200px"}} placeholder=" Your Bio">
                                   
                                </textarea>
                                {this.state.editbio==true ? <button onClick={()=>this.setState({editbio:false,editprofile:false,editprofile1:1})}   className="btn btn-dark  mt-2 ml-auto rounded" >SAVE</button>:
                                 <button onClick={()=>this.setState({editprofile1:5})}   className="btn btn-dark  mt-2 ml-auto rounded" >NEXT</button> }
                               
                                </>
                                :
                                <>
                                <span className="text-muted" style={{fontSize:"24px"}}>Add/Edit About</span>
                                <textarea type="text" className="rounded w-75 py-1 my-2  border border-muted bg-light" style={{height:"200px"}} placeholder=" About"></textarea>
                                <button onClick={()=>this.setState({editprofile1:1,editprofile:false})}   className="btn btn-dark  mt-2 ml-auto rounded" >FINISH</button>
                                </>
                              
                             
                             
                          
                            
                               }
                              
                                </div>
                               
                                
                            </Modal>
           
            <Modal isOpen={this.state.createpage} 
                    onRequestClose={()=>this.setState({createpage:false,createpage1:1})}
                style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backdropFilter:"blur(3px)",
                    backgroundColor: 'rgba(255,255,255,0.2)'
                },
                content: {
                    width:"55vh",
                height:"400px",
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: "translate(-50%,-50%)",
                    border: '1px solid #ccc',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px'
                }
                }}
            
            >
                <div className="d-flex flex-column align-items-center justify-content-center h-100" >
                {
                this.state.createpage1==1?
                <>
                    <input type="text" className="rounded w-75 py-2 my-2  border border-muted bg-light" placeholder="Name"></input>
                    <select  className="rounded w-75 py-2 my-2  border border-muted bg-light text-muted">
                    <option>Small Company</option>
                    <option>Medium Company</option>
                    <option>Large Company</option>
                    <option>Digital Brand</option>
                </select>
                    <input type="text" className="rounded w-75 py-2  my-2 border border-muted bg-light" placeholder="Industry"></input>
                    <button onClick={()=>this.setState({createpage1:2})}   className="btn btn-dark  mt-5 ml-auto rounded" >NEXT</button>
                </>
                    :
                    this.state.createpage1==2?
            <>
                   
                    <select  className="rounded w-75 py-2 my-2  border border-muted bg-light text-muted" >
                    <option disabled selected>holdership</option>
                    <option>Sole </option>
                    <option>Group</option>
                   
                </select>
                    <input type="text" className="rounded w-75 py-2  my-2 border border-muted bg-light" placeholder="Location"></input>
                    <button onClick={()=>this.setState({createpage1:3})}   className="btn btn-dark  mt-5 ml-auto rounded" >NEXT</button>
                </>
                
                :
                this.state.createpage1==3?
                <>
                <span className="text-muted mb-auto" style={{fontSize:"24px"}}>Add Logo</span>
               <input type="file"></input>
                <button onClick={()=>this.setState({createpage1:4})}   className="btn btn-dark  mt-2 ml-auto rounded" >NEXT</button>
               
                </>
                :
                <>
                  <span className="text-muted" style={{fontSize:"24px"}}>Add/Edit Bio</span>
                <textarea type="text"
                value= {this.state.bioinfo} onChange={this.changeBioInfo}
                    className="rounded w-75 py-1 my-2  border border-muted bg-light" style={{height:"200px"}} placeholder=" Your Bio">
                    
                </textarea>
                    <a href="/companyprofile">
                    <button onClick={()=>this.setState({createpage1:1,createpage:false})}   className="btn btn-dark  mt-2 ml-auto rounded" >FINISH</button> 
                    </a>
               </>
                
                
                
            
            
                }
                
                </div>
                
                
            </Modal>

            <Modal isOpen={this.state.editschool} 
                    onRequestClose={()=>this.setState({editschool:false})}
                style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backdropFilter:"blur(3px)",
                    backgroundColor: 'rgba(255,255,255,0.2)'
                },
                content: {
                    width:"55vh",
                height:"400px",
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: "translate(-50%,-50%)",
                    border: '1px solid #ccc',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px'
                }
                }}
            
            >
                <div className="d-flex flex-column align-items-center justify-content-center h-100" >
                <span className="text-muted" style={{fontSize:"24px"}}>Edit School</span>
                    <input type="text" className="rounded w-75 py-1 my-2  border border-muted bg-light" value= {this.state.education[this.state.educationEdit][0]} placeholder="Institution Name">
                       
                    </input>
                
                <select  className="rounded w-75 py-1 my-2  border border-muted bg-light text-muted">
                    <option>HighSchool</option>
                    <option>Graduation</option>
                    <option>Primary School</option>
                    <option>Post Graduation</option>
                </select>
                
                <div className=" d-flex flex-column align-items-start w-75">
                <span className="text-muted"  >From </span>
                    <input type="date"  className="bg-light text-muted rounded  my-2 border border-mtted" style={{outline:"none",border:"none"}}></input>
                    
                    
                
            
                <span className="text-muted" >To </span>
                    <input type="date" className="bg-light text-muted rounded  my-2 border border-muted"></input>
                
                </div>
                
                    <input type="number" className="rounded w-75 py-1 my-2  border border-muted bg-light" placeholder="Your Percentage"></input>
                
                
                
                    <button onClick={()=>this.setState({editschool:false})}   className="btn btn-dark  mt-2 ml-auto rounded" >SAVE</button>
            
            
                </div>
                
                
            </Modal>
            <Modal isOpen={this.state.editemployeehistory} 
                    onRequestClose={()=>this.setState({editemployeehistory:false})}
                style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backdropFilter:"blur(3px)",
                    backgroundColor: 'rgba(255,255,255,0.2)'
                },
                content: {
                    width:"55vh",
                height:"400px",
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: "translate(-50%,-50%)",
                    border: '1px solid #ccc',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px'
                }
                }}
            
            >
                <div className="d-flex flex-column align-items-center justify-content-center h-100" >
                <span className="text-muted" style={{fontSize:"24px"}}>Edit Organisation</span>
                    <input type="text" className="rounded w-75 py-1 my-2  border border-muted bg-light" 
                    // value= {this.state.education[this.state.educationEdit][0]}
                     placeholder="Company Name">
                       
                    </input>

                    <input type="text" className="rounded w-75 py-1 my-2  border border-muted bg-light" 
                    // value= {this.state.education[this.state.educationEdit][0]}
                     placeholder="Role">
                       
                    </input>
                
                {/* <select  className="rounded w-75 py-1 my-2  border border-muted bg-light text-muted">
                    <option>HighSchool</option>
                    <option>Graduation</option>
                    <option>Primary School</option>
                    <option>Post Graduation</option>
                </select> */}
                
                <div className=" d-flex flex-column align-items-start w-75">
                <span className="text-muted"  >From </span>
                    <input type="date"  className="bg-light text-muted rounded  my-2 border border-mtted" style={{outline:"none",border:"none"}}></input>
                    
                    
                
            
                <span className="text-muted" >To </span>
                    <input type="date" className="bg-light text-muted rounded  my-2 border border-muted"></input>
                
                </div>
                
                    <input type="number" className="rounded w-75 py-1 my-2  border border-muted bg-light" placeholder="Your Percentage"></input>
                
                
                
                    <button onClick={()=>this.setState({editemployeehistory:false})}   className="btn btn-dark  mt-2 ml-auto rounded" >SAVE</button>
            
            
                </div>
                
                
            </Modal>
            <Modal isOpen={this.state.viewSolvedProblems} 
                onRequestClose={()=>this.setState({viewSolvedProblems:false})}
                style={{
                overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backdropFilter:"blur(3px)",
                backgroundColor: 'rgba(255,255,255,0.2)'
                },
                content: {
                width:"55vh",
                height:"450px",
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: "translate(-50%,-50%)",
                border: '1px solid #ccc',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px'
                }
                }}

                >
             
              
               <div className="d-flex flex-column align-items-center justify-content-start " >
                <span className="text-muted" style={{fontSize:"24px"}}>Problem 1</span>
               <span className="font-weight-bold align-self-start my-1 mt-4">Problem Statement</span>
               <span className="font-weight-normal align-self-start my-2">Given a singly linked list of size N. The task is to swap elements in the linked list pairwise.
                For example, if the input list is 1 2 3 4, the resulting list after swaps will be 2 1 4 3.
                Note: You need to swap the nodes, not only the data. If only data is swapped then driver will print -1.</span>
                <span className="font-weight-bold align-self-start my-1" style={{fontSize:"24px"}}>Asked in Uber <span className="fab fa-uber"></span></span>

             
             
              

                <button  className="btn btn-dark active mt-3 mb-3 ml-auto rounded" >PROBLEM SOLVED <span className="far fa-check-circle"></span></button>
                
                <div className="w-100">
                    <span className="fas fa-chevron-left btn btn-outline-dark" style={{fontSize:"25px"}}></span>
                    <span className="fas fa-chevron-right float-right btn btn-outline-dark " style={{fontSize:"25px"}}></span>
                </div>
               
     

                </div>

            

                </Modal>
             
            </div>
          
       )
    }
}
