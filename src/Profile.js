import React, { Component } from 'react'
import style from "./profile.module.css";
import './profile.css';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'

export default class Profile extends Component { 
    // componentDidMount() { 
    //     let data; 
  
    //     axios 
    //         .get("http://localhost:8000/profile?user=sessionStorage.getItem('username')") 
    //         .then((res) => { 
    //             data = res.data; 
    //             this.setState({ 
    //                 details: data, 
    //             }); 
    //         }) 
    //         .catch((err) => {}); 
    // } 
 

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          like:1
    //     }
    // }
    render() {
       
        
        return (
           
            <div className="container">
                  <div  className="row d-flex flex-row justify-content-center " id="homeBox">
            
            <div className="col-xl-3">
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
            Engineering Graduate with leadership training and experience with academic training in University of Hyderabad.Proven skills in Project Management and research.
            </span>
            </div>
            </div>
            </div>
           
                </div>
            </div>
            
            <div className="col-xl-7 col-lg-12 text-left ml-3 d-flex flex-column  mt-3  ">
            <span className=" " style={{fontSize:"25px"}}>Anudeep Kakkireni</span>
            <span className=" " style={{fontSize:"20px",opacity:"0.8"}}>
            Kickstartx - Frontend Developer
            </span>
            <span>100+ connections</span>
            <span>Hyderabad, India</span>
            <div className="row ">
            <div className="pt-1 col-10 ml-xl-5 d-xl-none  " style={{textAlign:"justify"   }}>
            <span className=" py-1 mt-2  " style={{fontSize:"14px",textDecorationLine:"underline "}}>About   </span>    
            <div style={{lineHeight:"1.2"}}>
            <span className="" style={{fontSize:"14px",opacity:"0.9"}}>
            Engineering Graduate with leadership training and experience with academic training in University of Hyderabad.Proven skills in Project Management and research.
            </span>
            </div>
            </div>
            </div>
           <div className="mt-3 d-none d-xl-block d-xl-flex flex-xl-row justify-content-start   align-items-center">
                <button className="btn bg-white my-xl-0 my-2 mx-2 " style={{borderRadius:"30px",border:"1px solid #cccccc"}}>
                    <span className="px-2">Connect</span>
                    {/* <span className="fa fa-user-plus"></span> */}
                </button>
                <button className="btn bg-white  my-xl-0 my-2 mx-2 " style={{borderRadius:"30px",border:"1px solid #cccccc"}}>
                    <span className="px-2">Message</span>
                    {/* <span className="fa fa-envelope"></span> */}
                </button>
                <button className="btn bg-white  my-xl-0 my-2   mx-2" style={{borderRadius:"30px",border:"1px solid #cccccc"}}>
                    <span className="px-2">Mail</span>
                    {/* <span className="fa fa-globe"></span> */}
                </button>
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
                                    <div class="dropdown-menu ">
                                       <span className=" btn px-2">Share profile</span>
                                       {/* <span className=" btn px-2">Build a Resume</span> */}
                                       
                                    </div>
                                  
                                    </div>
                                   
                </div>
               
                </div>
                <div className="row   ">
                        <Navbar variant="" expand="sm" sticky="top">
                         
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav fill variant="tabs" className="mr-auto" defaultActiveKey="/myposts1">               
                                <Nav.Link href="/myposts" className="px-5 mx-2 text-dark" >Posts</Nav.Link>
                                <Nav.Link href="/published" className="px-5 mx-2 text-dark">Published</Nav.Link>
                                <Nav.Link href="/portfolio" className="px-5 mx-2 text-dark">Portfolio</Nav.Link>
                                <Nav.Link href="/experiences" className="px-5 mx-2 text-dark">Experiences</Nav.Link>
                                </Nav>
                              
                            </Navbar.Collapse>
                        </Navbar>

                 </div>
                 <div className="d-flex flex-row justify-content-center ">
                 <div className="my-xl-3 col-12 col-xl-8 bg-white rounded d-flex flex-column "  style={{height:"380px",border:"1px solid #cccccc"}}>
                        <div 
                        className="d-flex flex-row">
                           <img src="pk.jpeg" style={{width:"50px"}} className="rounded-circle img-fluid m-2 pl-2"></img>
                           <div className="mt-2 ml-1   " style={{fontSize:"15px"}}>
                               <span>Pavan Kalyan</span>
                               <br>
                               </br>
                               <div className=" text-left" style={{fontSize:"16px",opacity:"0.7"}}>
                               <span>Hyderabad</span>
                               </div>
                           </div>
                        </div >
                      <div style={{height:"67%"}} className="bg-dark">
                      <img src="wallpaper.jpg" className="img-fluid" style={{display:"block",width:"100%",height:"100%"}}></img>
                      </div>
                        <div
                        className="d-flex flex-column" 
                        style={{backgroundColor:"white",height:"18%"}}>
                            <div className="text-left  ">
                            <span className="fas fa-arrow-up pt-2 pl-3"></span>
                                <span className="far fa-heart pt-2 pl-3"></span>
                                <span className="fa fa-comment pt-2 pl-3"></span>
                                <span className="fa fa-bookmark float-right pt-2 pr-3"></span>
                            </div>
                            <div style={{fontSize:"12px",opacity:"0.9"}}
                            className="text-left ml-3">
                                <span>12k Likes | 21k comments</span>
                            </div>
                            <div style={{fontSize:"11px",opacity:"0.6"}}
                            className="text-left ml-3 ">
                                <span>Posted 1 hour ago</span>
                            </div>
                            
                        </div>
                    </div>
                   
                    </div>
            
        
              
      
               
            </div>
           
        </div>
   
            </div>
          
       )
    }
}
