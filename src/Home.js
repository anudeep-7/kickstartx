import React, { Component } from 'react'
import style from "./home.module.css";
import "./home.css"
import Modal from 'react-modal';
import ProfilePosts from './ProfilePosts';
Modal.setAppElement('#root');
export class Home extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             isopen:false,
            
        }
    }
    
    componentDidMount=()=>{
        // console.log("hello")
        localStorage.setItem('state',1)
    }
    render() {
      
       
        return (
            <div className="container " >
                <div className=" " id="homeBox">
                    <div className=" d-none d-xl-block  mx-3 " id="leftHome">
                    <div className="d-flex flex-column my-2  bg-white" id="profile"  style={{border:"1px solid #cdd7d6",borderRadius:"10px"}} >
                        <div className="d-flex flex-column justify-content-center align-items-center p-2 py-3" style={{borderBottom:"1px solid #cdd7d6"}}>
                        <img src="chanti.png" className="img-fluid img-responsive rounded-circle border my-1" style={{width:"70px"}}></img>
                        <span className="" style={{fontWeight:"600"}}>Anudeep Kakkireni</span>
                        <span style={{fontSize:"12px",maxWidth:"80%"}}>Student at Chaitanya Bharathi Institute Of Technology</span>
                        <span className="text-muted" style={{fontSize:"12px"}}>
                                Level : Professional
                            </span>
                       
                       
                       
                       
                       
                        {/* <div className="mt-2"  style={{fontSize:"12px",justifyContent:"le"}}>
                          Engineering Graduate with leadership training and experience with academic training in University of Hyderabad.Proven skills in Project Management and research.
                         </div> */}
                        </div>
                       
                        <div className="d-flex flex-column justify-content-center align-items-center p-2 py-3"
                        
                        // style={{borderBottom:"1px solid #cdd7d6"}}
                        >
                            <span className="text-muted" style={{fontSize:"12px"}}>
                                Who Viewed Your Profile
                            </span>
                            <span style={{fontSize:"15px",color:"#287ab2",cursor:"pointer",fontWeight:"500"}}>32</span>
                            <span className="text-muted" style={{fontSize:"12px"}}>
                                Connections
                            </span>
                            <span style={{fontSize:"15px",color:"#287ab2",cursor:"pointer",fontWeight:"500"}}>200</span>
                            <span className=" mt-2"  style={{cursor:"pointer",color:"#287ab2",fontSize:"12px",fontWeight:"600",textDecorationLine:"underline"}}>
                                Want to Grow Your Network ?
                            </span>

                          
                        </div>
                    </div>
                    <div className="d-flex flex-column  bg-white text-left pb-3"  style={{fontSize:"12px",border:"1px solid #cdd7d6",borderRadius:"10px"}} >
                    <span className="m-1 px-2 text-muted">Your Pages</span>
                    <a href="/companyprofile">
                    <div className="my-2 py-2"  id="yourpages">
                    <span className="m-1 px-2 float-left fab fa-google" style={{fontSize:"25px"}}></span>
                    <span className="m-1 px-2" style={{color:"#0a66c2",fontWeight:"600"}}>Stark Industries</span>
                    <br></br>
                    <span className="m-1 px-2 text-muted">Notifications - <strong>28
                        </strong></span>
                    </div>
                   
                    </a>
                   
                    <a href="/companyprofile">
                    <div className="my-2 py-2" id="yourpages">
                    <span className="m-1 px-2 float-left fab fa-facebook" style={{fontSize:"25px"}}></span>
                    <span className="m-1 px-2" style={{color:"#0a66c2",fontWeight:"600"}}>Facebook</span>
                    <br></br>
                    <span className="m-1 px-2 text-muted">Notifications - <strong>17
                        </strong></span>
                    </div>
                    </a>
                   
                  
                          
                      
                    </div>
                        
                    </div>                                        
                    <div className="d-flex flex-column mx-3 " id="middleHome">
                            <div className="d-flex flex-column bg-white my-2" style={{border:"1px solid #cdd7d6",borderRadius:"10px"}} id="haveSomething">
                                <div className="d-flex flex-row m-2 justify-content-center ">
                                    <img src="chanti.png"className="img-fluid img-respnsive rounded-circle border  " style={{width:"50px"}}></img>
                                    <div className="border bg-light btn  justify-content-center m-auto py-2 "
                                    onClick={()=>this.setState({isopen:true})}
                                     style={{cursor:"pointer",width:"410px",borderRadius:"25px"}}>
                                   <span className="text-muted " style={{fontWeight:"500"}}>
                                   Have Something to Share
                                   </span>
                                 
                                    </div>

                                </div>
                              <div className="d-flex flex-row justify-content-around ml-4 ">
                                <div style={{fontSize:"16px"}} className="btn" id="abovePost">
                                      <span className="fas fa-certificate " style={{color:"#f6d6a3"}}></span>
                                      <span className="mx-2 text-muted">Certificates</span>
                                  </div>
                                  <div className="btn" style={{fontSize:"16px"}} id="abovePost">
                                      <span className="fas fa-image " style={{color:"#89b9ee"}}></span>
                                      <span className="mx-2 text-muted">Photo</span>
                                  </div>
                                  <div style={{fontSize:"16px"}} className="btn"id="abovePost">
                                      <span className="fas fa-video  " style={{color:"#7fc35d"}}></span>
                                      <span className="mx-2 text-muted">Video</span>
                                  </div>
                                 
                              </div>
                            </div>
                       
                          <ProfilePosts></ProfilePosts>
                    </div>
                    <div className="d-flex flex-column mx-3 " id="rightHome">
                    <div className="d-flex flex-column my-2  bg-white" style={{border:"1px solid #cdd7d6",borderRadius:"10px"}} >
                        <div className="d-flex flex-column justify-content-center align-items-center p-2 py-3" style={{borderBottom:"1px solid #cdd7d6"}}>
                      <span style={{fontSize:"15px",fontWeight:"600"}}>XLabs</span>
                      <span className="text-muted" style={{fontSize:"12px"}}>
                          Want to get a Job ? Upgrade yourself by building your Projects
                      </span>
                      <span className="text-muted my-1" style={{fontSize:"12px",textDecorationLine:"underline"}}>
                          Your Projects
                      </span>
                      <span className="text-muted my-1" style={{fontSize:"12px"}}>
                          Web Page Generator
                      </span>
                      <span className="text-muted my-1" style={{fontSize:"12px"}}>
                         House Booking
                      </span>
                      <span className="text-muted my-1" style={{fontSize:"12px"}}>
                         Tumor Detection
                      </span>
                     <div className="btn  bg-white  ">
                     <span className=" m-1" style={{fontSize:"12px",color:"#0a66c2"}}>
                         VIEW MORE
                      </span>
                      <span className="fas fa-chevron-down mx-1" style={{fontSize:"12px",color:"#0a66c2"}}></span>
                     </div>
                       
                       
                       
                       
                       
                        {/* <div className="mt-2"  style={{fontSize:"12px",justifyContent:"le"}}>
                          Engineering Graduate with leadership training and experience with academic training in University of Hyderabad.Proven skills in Project Management and research.
                         </div> */}
                        </div>
                       
                        <div className="d-flex flex-column justify-content-center align-items-center p-2 py-3"
                        
                        // style={{borderBottom:"1px solid #cdd7d6"}}
                        >
                            <span className="text-muted" style={{fontSize:"12px"}}>
                               Having Any Doubts ?
                            </span>
                            
                            <span className="text-muted" style={{fontSize:"12px"}}>
                               Ask Mentors
                            </span>
                            <div className="btn border bg-white  ">
                     <span className="text-muted m-1" style={{fontSize:"12px"}}>
                         ASK DOUBTS
                      </span>
                     
                     </div>
                           
                           

                          
                        </div>
                    </div>
                    <div className="d-none bg-white" style={{border:"1px solid #cdd7d6",borderRadius:"10px"}} >
                     
                      
                          



                    <div className=" text-left  py-1 " >
                         
                                                
                                           
                                             <div className="text-left d-flex flex-column " style={{borderBottomColor:"#cccccc",borderBottomWidth:"1px",borderBottomStyle:"solid"}}>
                                             <span className="text-muted ml-2 mt-1 font-weight-bold" style={{fontSize:"12px"}}>Whats happening ?</span>
                                                  <div className="d-flex flex-column">
                                                   <span style={{fontSize:"12px",opacity:"0.7"}}
                                                   className=" ml-2 mt-2">
                                                       <strong>Covid Updates</strong></span>
                                                       
                                                   <span style={{fontSize:"12px",opacity:"0.7"}}
                                                   className=" ml-2 mb-2">
                                                     See new updates and stats...</span>
                                                     {/* <span className="bg-light" style={{width:"30px",height:"30px"}}></span> */}
                                                     </div>
                                               </div>
                                               <div className="text-left d-flex flex-column " style={{borderBottomColor:"#cccccc",borderBottomWidth:"1px",borderBottomStyle:"solid"}}>
                                                  
                                                  <div className="d-flex flex-column">
                                                   <span style={{fontSize:"12px",opacity:"0.7"}}
                                                   className=" ml-2 mt-2">
                                                       <strong>Covid Updates</strong></span>
                                                       
                                                   <span style={{fontSize:"12px",opacity:"0.7"}}
                                                   className=" ml-2 mb-2">
                                                     See new updates and stats...</span>
                                                     {/* <span className="bg-light" style={{width:"30px",height:"30px"}}></span> */}
                                                     </div>
                                               </div>
                                               <div className="text-left d-flex flex-column " style={{borderBottomColor:"#cccccc",borderBottomWidth:"1px",borderBottomStyle:"solid"}}>
                                                  
                                                  <div className="d-flex flex-column">
                                                   <span style={{fontSize:"12px",opacity:"0.7"}}
                                                   className=" ml-2 mt-2">
                                                       <strong>Covid Updates</strong></span>
                                                       
                                                   <span style={{fontSize:"12px",opacity:"0.7"}}
                                                   className=" ml-2 mb-2">
                                                     See new updates and stats...</span>
                                                     {/* <span className="bg-light" style={{width:"30px",height:"30px"}}></span> */}
                                                     </div>
                                               </div>
                                               <div className="text-left d-flex flex-column " style={{borderBottomColor:"#cccccc",borderBottomWidth:"1px",borderBottomStyle:"solid"}}>
                                                  
                                                  <div className="d-flex flex-column">
                                                   <span style={{fontSize:"12px",opacity:"0.7"}}
                                                   className=" ml-2 mt-2">
                                                       <strong>Covid Updates</strong></span>
                                                       
                                                   <span style={{fontSize:"12px",opacity:"0.7"}}
                                                   className=" ml-2 mb-2">
                                                     See new updates and stats...</span>
                                                     {/* <span className="bg-light" style={{width:"30px",height:"30px"}}></span> */}
                                                     </div>
                                               </div>
                                               <div className="text-left d-flex flex-column ">
                                                  
                                                  <div className="d-flex flex-column">
                                                   <span style={{fontSize:"12px",opacity:"0.7"}}
                                                   className=" ml-2 mt-2">
                                                       <strong>Covid Updates</strong></span>
                                                       
                                                   <span style={{fontSize:"12px",opacity:"0.7"}}
                                                   className=" ml-2 mb-2">
                                                     See new updates and stats...</span>
                                                     {/* <span className="bg-light" style={{width:"30px",height:"30px"}}></span> */}
                                                     </div>
                                               </div>
                                             
                                           
                                           </div>
                                  
                                           
                                             
                                         























                      
                    </div>
                    <div className="d-flex flex-column  bg-white text-left pb-1"  style={{fontSize:"12px",border:"1px solid #cdd7d6",borderRadius:"10px"}} >
                    <span className="m-1 px-2 text-muted">Recommended Connections</span>
                    <a href="#">
                    <div className="my-1 py-1 d-flex flex-column align-items-center justify-content-center"  id="yourpages">
                    {/* <div className="  w-100 p-0 m-0" style={{fontSize:"20px"}}>
                        <span className="float-right">&times;</span>
                    </div> */}
                    <div className="w-100 ">
                    <img src="pk.jpeg" className="float-left mx-1 px-1 img-fluid img-responsive rounded-circle" style={{width:"40px"}}></img>
                    <span className="far fa-check-circle float-right py-1 mx-1 " style={{fontSize:"25px",fontWeight:"200",opacity:"0.7"}}></span>

                    <span className="m-1 px-2" style={{color:"#0a66c2",fontWeight:"600"}}>PavanKalyan Inugurthi</span>
                    <br></br>
                    <span className="m-1 px-2 text-muted">
                    Working at Arcesium
                    </span>
                 
                    </div>
                 
                    </div>
                   
                    </a>

                    <a href="#">
                    <div className="my-1 py-1 d-flex flex-column align-items-center justify-content-center"  id="yourpages">
                    {/* <div className="  w-100 p-0 m-0" style={{fontSize:"20px"}}>
                        <span className="float-right">&times;</span>
                    </div> */}
                    <div className="w-100 ">
                    <img src="pk.jpeg" className="float-left mx-1 px-1 img-fluid img-responsive rounded-circle" style={{width:"40px"}}></img>
                    <span className="far fa-check-circle float-right py-1 mx-1 " style={{fontSize:"25px",fontWeight:"200",opacity:"0.7"}}></span>

                    <span className="m-1 px-2" style={{color:"#0a66c2",fontWeight:"600"}}>PavanKalyan Inugurthi</span>
                    <br></br>
                    <span className="m-1 px-2 text-muted">
                    Working at Arcesium
                    </span>
                 
                    </div>
                 
                    </div>
                   
                    </a>

                    <a href="#">
                    <div className="my-1 py-1 d-flex flex-column align-items-center justify-content-center"  id="yourpages">
                    {/* <div className="  w-100 p-0 m-0" style={{fontSize:"20px"}}>
                        <span className="float-right">&times;</span>
                    </div> */}
                    <div className="w-100 ">
                    <img src="pk.jpeg" className="float-left mx-1 px-1 img-fluid img-responsive rounded-circle" style={{width:"40px"}}></img>
                    <span className="far fa-check-circle float-right py-1 mx-1 " style={{fontSize:"25px",fontWeight:"200",opacity:"0.7"}}></span>

                    <span className="m-1 px-2" style={{color:"#0a66c2",fontWeight:"600"}}>PavanKalyan Inugurthi</span>
                    <br></br>
                    <span className="m-1 px-2 text-muted">
                    Working at Arcesium
                    </span>
                 
                    </div>
                 
                    </div>
                   
                    </a>

                    <a href="/friendrequests">
                        <div className="w-100 d-flex  justify-content-center  " id="seeMore">
                            <span style={{fontSize:"14px"}} className=" py-2">SEE MORE</span>
                        </div>
                    </a>
                   
                  
                          
                      
                    </div>
                      
                    </div>
                     </div>
                     <Modal isOpen={this.state.isopen} 
                                 onRequestClose={()=>this.setState({isopen:false})}
                             style={{
                                overlay: {
                                  position: 'fixed',
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  backgroundColor: 'rgba(255, 255, 255, 0.75)'
                                },
                                content: {
                                width:"55vh",
                                height:"400px",
                                  position: 'absolute',
                                  top: '46%',
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
                                <div className="w-100 d-flex flex-column">
                                    <div className="d-flex flex-row">
                                        <img src="chanti.png"  className="rounded-circle" style={{width:"60px"}}></img>
                                        <div className="ml-4 mt-1 d-flex flex-column">
                                            <span><strong>
                                                Anudeep Kakkireni</strong></span>
                                                <div className="dropdown">
                                            <button className="btn dropdown-toggle px-1 py-0"
                                            style={{backgroundColor:"#cccccc",fontSize:"13px"}}
                                             type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                               Friends of Friends
                                               <span className=" px-1 fas fa-angle-down mt-1" style={{fontSize:"14px"}}></span>
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item  px-1 py-0" href="#">Public</a>
                                                <a class="dropdown-item  px-1 py-0" href="#">Friends</a>
                                                <a class="dropdown-item  px-1 py-0" href="#">Friends of Friends</a>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-2">
                                    
                                    <textarea type="text" style={{fontSize:"30px",fontWeight:"100",maxWidth:"100%",width:"500px",height:"172px"}}
                                  placeholder=" Whats on your mind ?"
                                    >
                                       
                                    </textarea>
                                  
                                   
                                </div>
                                <div className="w-100 px-2 py-2 my-2 d-flex flex-row align-items-center rounded" style={{border:"1px groove #cccccc"}}>
                                <span><strong>
                                Add to your Post
                                    </strong></span>
                                    <div className="ml-auto px-0 mx-0" style={{fontSize:"25px"}}>
                                    <span className=" px-2 fa fa-image"></span>
                                    <span className="px-2 fa fa-video"></span>
                                    <span className="px-2 far fa-laugh-squint"></span>
                                </div>
                                   

                                </div>
                                <button className="btn btn-dark w-100">POST</button>
                            </Modal>
                                        
            </div>
           
//             <div className="container-fluid ">
//                 <div className="d-xl-flex flex-xl-row mt-4 justify-content-center"  style={{height:"100vh"}}>
//                     <div className=" mt-2 col-sm-5   d-flex flex-column">
//                         <div style={{height:"100px",border:"1px solid #cccccc",backgroundColor:"white"}} className="my-2 rounded d-flex flex-row mx-0 ">
//                             <img src="chanti.png" className="img-fluid rounded-circle align-self-center ml-2" style={{width:"80px",height:"80px"}}></img>
//                            <div className="d-flex flex-column col-xl-9 ml-xl-4 col-9" >
//                            <div onClick={()=>this.setState({isopen:true})}
//                            style={{border:"1px solid grey",borderRadius:"50px"}}
//                             className="btn mt-3 text-center pt-1 button" 
//                            >
//                                 <span style={{fontSize:"13px",color:"black",opacity:"0.6"}} className="align-self-left">
//                                 Have Something to Share?
//                                 </span>
//                             </div>
//                             <Modal isOpen={this.state.isopen} 
//                             onRequestClose={()=>this.setState({isopen:false})}
//                              style={{
//                                 overlay: {
//                                   position: 'fixed',
//                                   top: 0,
//                                   left: 0,
//                                   right: 0,
//                                   bottom: 0,
//                                   backgroundColor: 'rgba(255, 255, 255, 0.75)'
//                                 },
//                                 content: {
//                                 width:"55vh",
//                                 height:"400px",
//                                   position: 'absolute',
//                                   top: '46%',
//                                   left: '50%',
//                                   transform: "translate(-50%,-50%)",
//                                   border: '1px solid #ccc',
//                                   background: '#fff',
//                                   overflow: 'auto',
//                                   WebkitOverflowScrolling: 'touch',
//                                   borderRadius: '4px',
//                                   outline: 'none',
//                                   padding: '20px'
//                                 }
//                               }}
                           
//                            >
//                                 <div className="w-100 d-flex flex-column">
//                                     <div className="d-flex flex-row">
//                                         <img src="chanti.png"  className="rounded-circle" style={{width:"60px"}}></img>
//                                         <div className="ml-4 mt-1 d-flex flex-column">
//                                             <span><strong>
//                                                 Anudeep Kakkireni</strong></span>
//                                                 <div className="dropdown">
//                                             <button className="btn dropdown-toggle px-1 py-0"
//                                             style={{backgroundColor:"#cccccc",fontSize:"13px"}}
//                                              type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                                Friends of Friends
//                                                <span className=" px-1 fas fa-angle-down mt-1" style={{fontSize:"14px"}}></span>
//                                             </button>
//                                             <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                                                 <a class="dropdown-item  px-1 py-0" href="#">Public</a>
//                                                 <a class="dropdown-item  px-1 py-0" href="#">Friends</a>
//                                                 <a class="dropdown-item  px-1 py-0" href="#">Friends of Friends</a>
//                                             </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="my-2">
                                    
//                                     <textarea type="text" style={{fontSize:"30px",fontWeight:"100",maxWidth:"100%",width:"500px",height:"172px"}}
//                                   placeholder=" Whats on your mind ?"
//                                     >
                                       
//                                     </textarea>
                                  
                                   
//                                 </div>
//                                 <div className="w-100 px-2 py-2 my-2 d-flex flex-row align-items-center rounded" style={{border:"1px groove #cccccc"}}>
//                                 <span><strong>
//                                 Add to your Post
//                                     </strong></span>
//                                     <div className="ml-auto px-0 mx-0" style={{fontSize:"25px"}}>
//                                     <span className=" px-2 fa fa-image"></span>
//                                     <span className="px-2 fa fa-video"></span>
//                                     <span className="px-2 far fa-laugh-squint"></span>
//                                 </div>
                                   

//                                 </div>
//                                 <button className="btn btn-dark w-100">POST</button>
//                             </Modal>
                            
//                             <div className="d-flex flex-row   my-2" style={{fontSize:"14px",color:"black"}}>
//                             <span className="mx-sm-4">
//                                 <span className="fas fa-certificate px-1"></span>Certificates</span>
//                                 <span className="mx-sm-4">
                                    
//                                     <span className="fa fa-image px-1"></span>
//                                     Image</span>
//                                 <span className="mx-sm-4">
//                                 <span className="fas fa-video px-1"></span>
//                                 Video</span>
                               
//                             </div>
//                            </div>
//                         </div>
                     
//                         <div className="my-3 bg-white rounded d-flex flex-column py-1 " id={style.homepost}  style={{height:"70vh",border:"1px solid #cccccc"}}>
//                             <div style={{height:"15%"}}
//                             className="d-flex flex-row">
//                                <img src="chanti.png" className="rounded-circle img-fluid m-2 pl-2"></img>
//                                <div className="mt-3 ml-1   " style={{fontSize:"15px"}}>
//                                    <span>Pavan Kalyan</span>
//                                    <br>
//                                    </br>
//                                    <div className=" text-left" style={{fontSize:"16px",opacity:"0.7"}}>
//                                    <span>Hyderabad</span>
//                                    </div>
//                                </div>
//                             </div >
//                           <div style={{height:"67%"}} className="bg-dark">
//                           <img src="wallpaper.jpg" className="img-fluid" style={{display:"block",width:"100%",height:"100%"}}></img>
//                           </div>
//                             <div
//                             className="d-flex flex-column" 
//                             style={{backgroundColor:"white",height:"100px"}}>
//                                 <div className="text-left  " >
//                                     <span className="fas fa-arrow-up pt-2 pl-3" id="postIcons"></span>
//                                     <span className="far fa-comment-alt pt-2 pl-3" id="postIcons"></span>
//                                     <span className="far fa-thumbs-up pt-2 pl-3" id="postIcons"></span>
//                                     <span className="fa fa-bookmark float-right pt-2 pr-3" id="postIcons"></span>
//                                 </div>
//                                 <div style={{fontSize:"12px",opacity:"0.9"}}
//                                 className="text-left ml-3 ">
//                                     <span>12k Likes | 21k comments</span>
//                                 </div>
//                                 <div style={{fontSize:"11px",opacity:"0.6"}}
//                                 className="text-left ml-3 ">
//                                     <span>Posted 1 hour ago</span>
//                                 </div>
//                             </div>
//                         </div>

                     



                       

//                     </div>
//                     <div className="col-sm-3 ml-xl-5  d-none d-xl-block">
                  
                  
//                        <div className="  d-flex flex-column col-12 ml-xl-4 mt-3 bg-white d-flex flex-column  align-items-center" style={{borderRadius:"15px",height:"55vh",border:"1px solid #cccccc"}}>
//                           <div className=" border bg-dark " style={{width:"300px",height:"80px",borderRadius:"15px",borderBottomLeftRadius:"0px",borderBottomRightRadius:"0px"}} >
                         
                         
//                           </div>
//                           <img src="chanti.png" className="img-fluid img-reponsive" style={{top:"100px",width:"100px",borderRadius:"75px"}}/>
                        
                         
//                           <a href="">
//                           <span className="py-2 text-dark" style={{fontSize:"27px",fontWeight:"bold"}}>Anudeep Kakkireni</span>
                        
// {/*                         
//                           <span className="text-dark" style={{position:"relative",top:"60px",fontWeight:"bolder",fontSize:"16px",opacity:"0.9"}}>Viewed Your Profile</span>
//                            */}
//                           </a>
//                           <div className="mt-2"  style={{fontSize:"12px"}}>
//                           Engineering Graduate with leadership training and experience with academic training in University of Hyderabad.Proven skills in Project Management and research.
//                           </div>
                       
                        
                        
//                        </div>
                       
                 
                   
                    
//                          <div className="col-12  d-flex flex-column mt-3  ml-0 ml-xl-4 bg-white" style={{borderRadius:"15px",border:"1px solid #cccccc",height:"400px"}}>
                      
//                       <div style={{fontSize:"12px",opacity:"0.7",borderRadius:"50px"}}
//                       className=" py-1 my-2">
//                           What's happening ?
//                       </div>
                      
//                       <div className="text-left d-flex flex-column " style={{borderBottomColor:"#cccccc",borderBottomWidth:"1px",borderBottomStyle:"solid"}}>
                         
//                          <div className="d-flex flex-column">
//                           <span style={{fontSize:"12px",opacity:"0.7"}}
//                           className=" ml-2 mt-2">
//                               <strong>Covid Updates</strong></span>
                              
//                           <span style={{fontSize:"12px",opacity:"0.7"}}
//                           className=" ml-2 mb-2">
//                             See new updates and stats...</span>
//                             {/* <span className="bg-light" style={{width:"30px",height:"30px"}}></span> */}
//                             </div>
//                       </div>
//                       <div className="text-left d-flex flex-column " style={{borderBottomColor:"#cccccc",borderBottomWidth:"1px",borderBottomStyle:"solid"}}>
                         
//                          <div className="d-flex flex-column">
//                           <span style={{fontSize:"12px",opacity:"0.7"}}
//                           className=" ml-2 mt-2">
//                               <strong>Covid Updates</strong></span>
                              
//                           <span style={{fontSize:"12px",opacity:"0.7"}}
//                           className=" ml-2 mb-2">
//                             See new updates and stats...</span>
//                             {/* <span className="bg-light" style={{width:"30px",height:"30px"}}></span> */}
//                             </div>
//                       </div>
//                       <div className="text-left d-flex flex-column " style={{borderBottomColor:"#cccccc",borderBottomWidth:"1px",borderBottomStyle:"solid"}}>
                         
//                          <div className="d-flex flex-column">
//                           <span style={{fontSize:"12px",opacity:"0.7"}}
//                           className=" ml-2 mt-2">
//                               <strong>Covid Updates</strong></span>
                              
//                           <span style={{fontSize:"12px",opacity:"0.7"}}
//                           className=" ml-2 mb-2">
//                             See new updates and stats...</span>
//                             {/* <span className="bg-light" style={{width:"30px",height:"30px"}}></span> */}
//                             </div>
//                       </div>
//                       <div className="text-left d-flex flex-column " style={{borderBottomColor:"#cccccc",borderBottomWidth:"1px",borderBottomStyle:"solid"}}>
                         
//                          <div className="d-flex flex-column">
//                           <span style={{fontSize:"12px",opacity:"0.7"}}
//                           className=" ml-2 mt-2">
//                               <strong>Covid Updates</strong></span>
                              
//                           <span style={{fontSize:"12px",opacity:"0.7"}}
//                           className=" ml-2 mb-2">
//                             See new updates and stats...</span>
//                             {/* <span className="bg-light" style={{width:"30px",height:"30px"}}></span> */}
//                             </div>
//                       </div>
//                       <div className="text-left d-flex flex-column " style={{borderBottomColor:"#cccccc",borderBottomWidth:"1px",borderBottomStyle:"solid"}}>
                         
//                          <div className="d-flex flex-column">
//                           <span style={{fontSize:"12px",opacity:"0.7"}}
//                           className=" ml-2 mt-2">
//                               <strong>Covid Updates</strong></span>
                              
//                           <span style={{fontSize:"12px",opacity:"0.7"}}
//                           className=" ml-2 mb-2">
//                             See new updates and stats...</span>
//                             {/* <span className="bg-light" style={{width:"30px",height:"30px"}}></span> */}
//                             </div>
//                       </div>
//                       <div className="text-left d-flex flex-column " style={{borderBottomColor:"#cccccc",borderBottomWidth:"1px",borderBottomStyle:"solid"}}>
                         
//                          <div className="d-flex flex-column">
//                           <span style={{fontSize:"12px",opacity:"0.7"}}
//                           className=" ml-2 mt-2">
//                               <strong>Covid Updates</strong></span>
                              
//                           <span style={{fontSize:"12px",opacity:"0.7"}}
//                           className=" ml-2 mb-2">
//                             See new updates and stats...</span>
//                             {/* <span className="bg-light" style={{width:"30px",height:"30px"}}></span> */}
//                             </div>
//                       </div>

                  
//                   </div>
//                  </div>
                  
                    
//                 </div>
                
//             </div>
            
        )
    }
}

export default Home
