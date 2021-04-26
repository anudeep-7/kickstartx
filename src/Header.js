import React, { Component } from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import style from "./header.module.css";
import Modal from 'react-modal';
import './font/flaticon.css'
import Popup from './Notifications';
import './DropDown.css';
import SideNavPop from './SideNavPop';
import { NavLink } from 'react-router-dom';
import "./header.css"
Modal.setAppElement('#root');

export class Header extends Component {
    componentDidMount=()=>{
        this.setState({headerIcons:localStorage.getItem('state')})
    }
    constructor(props) {
        super(props)
    
        this.state = {
             AddPost:false
        }
    }
    
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          open:false,
    //          sidebar:false,
    //          myclass:'',
    //          sidebarclass:'a',
    //          headerIcons:1
    //     }
    // }
    // divclicked=()=>{
    //     if (this.state.myclass === '') {
    //         this.setState({
    //         open:!this.state.open,
    //          myclass: 'coolclass'
    //         })
    //        }
    //       else {
    //        this.setState({
    //          open:!this.state.open,
    //          myclass: '',
    //        })
    //       }
    // }
    // barclicked=()=>{
    //     if (this.state.sidebarclass === 'a') {
    //         this.setState({
    //         sidebar:!this.state.sidebar,
    //          sidebarclass: 'coolclass'
    //         })
    //        }
    //       else {
    //        this.setState({
    //          sidebar:!this.state.sidebar,
    //          sidebarclass: 'a',
    //        })
    //       }
    // }
    
    
    render() {
     
        
        return (
        
            <div className={`${style.headerText} bg-white  `} id="headerContainer">
                 <Navbar   bg="white" variant="light"  id="header" className="d-flex flex-row justify-content-center align-items-center " expand="sm"  
                  >
                                <Nav href="#home"
                                className=" d-flex flex-row align-items-center  justify-content-around"
                                id="brand"
                                style={{fontWeight:"bolder",fontSize:"25px"}}><span className=" px-2 mr-auto ">kickstartx</span>
                               <div className=""  id="plus">
                            <button className="btn   bg-white"   onClick={()=>this.setState({AddPost:true})}      style={{borderRadius:"10%",border:"1px solid #cccccc"}}>
                            <span className="fas fa-plus"></span>
                             </button>
                               </div>
                   
                             
                             <div  className="mx-2" >
                             <Nav.Link >
                                    <div className="text-left bg-light text-secondary  "style={{fontSize:"17px"}} id="search" >
                                           <i className="fas fa-search px-2 py-2"></i>
                                           {/* <span>Search</span> */}
                                           <input className="Search" ></input>
                                       </div>
                                    </Nav.Link>
                             </div>
                               
                                  
                                  
                                  
                                   </Nav>

                                {/* <Navbar.Toggle
                                 aria-controls="responsive-navbar-nav" 
                                 /> */}
                                {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
                                   
                                <Nav className=" d-flex flex-row align-items-center justify-content-center">
                                   
                                     
                                    <Nav.Link 
                                    href="/home"
                                    onClick={()=>{localStorage.setItem('state', 1);this.setState({headerIcons:localStorage.getItem('state')})}}
                                    className=" text-dark ml-3 my-auto d-xl-flex flex-xl-column  justify-content-center align-items-center"  style={localStorage.getItem('state')==1? {maxHeight:"50px",borderBottom:"2px solid black"}:{maxHeight:"50px"}} >
                                        <span className=" px-3 fas fa-rss   " style={localStorage.getItem('state')==1?{fontSize:"18px",color:"black"}:{fontSize:"18px",color:"grey"}}></span>
                                        <span className=" d-none d-xl-block ">Feed</span>
                                    </Nav.Link>
                                    <Nav.Link
                                     onClick={()=>{localStorage.setItem('state', 2);this.setState({headerIcons:localStorage.getItem('state')})}}
                                     className="my-auto ml-3 d-xl-flex flex-xl-column d-flex flex-row"   style={localStorage.getItem('state')==2? {maxHeight:"55px",borderBottom:"2px solid black"}:{maxHeight:"55px"}}>
                                        <span className="px-3 far fa-comment-alt   " style={localStorage.getItem('state')==2?{fontSize:"18px",color:"black"}:{fontSize:"18px",color:"grey"}}></span>
                                        <span className="d-none d-xl-block">Chats</span>
                                        
                                    </Nav.Link>
                                    <Nav.Link
                                     
                                      onClick={()=>{localStorage.setItem('state', 3);this.setState({headerIcons:localStorage.getItem('state')})}}
                                      href="/jobs"
                                     className="my-auto ml-3 d-xl-flex flex-xl-column d-flex flex-row"  style={localStorage.getItem('state')==3? {maxHeight:"55px",borderBottom:"2px solid black"}:{maxHeight:"55px"}} >
                                        <span className=" px-3 fa fa-briefcase   " style={localStorage.getItem('state')==3?{fontSize:"18px",color:"black"}:{fontSize:"18px",color:"grey"}}></span>
                                        <span className="d-none d-xl-block">Jobs</span>
                                    </Nav.Link>
                                    <Nav.Link 
                                   onClick={()=>{localStorage.setItem('state', 4);this.setState({headerIcons:localStorage.getItem('state')})}}
                                     href="/notifications"
                                    className=" my-auto ml-3 d-xl-flex flex-xl-column d-flex flex-row"
                                    //  onClick={this.divclicked} 
                                      style={localStorage.getItem('state')==4? {maxHeight:"55px",borderBottom:"2px solid black"}:{maxHeight:"55px"}} >
                                        <span className=" px-3 far fa-bell  "style={localStorage.getItem('state')==4?{fontSize:"18px",color:"black"}:{fontSize:"18px",color:"grey"}}></span>
                                        <span className=" d-none d-xl-block">Notices</span>
                                    </Nav.Link>
                                    <Nav.Link className="ml-3 d-lg-block d-xl-none" 
                                     style={localStorage.getItem('state')==5? {borderBottom:"5px solid black"}:{}}>
                                    <button class="btn d-flex flex-column align-items-center justify-content-center dropdown-toggle py-1" >
                                <img src="chanti.png" className=" img-fluid rounded-circle border" style={{width:"39px"}}></img>
                               
                                    
                                </button>
                                    </Nav.Link>
                                    <div class="d-none d-xl-block dropdown ml-3" 
                                    //  style={localStorage.getItem('state')==5? {borderBottom:"2px solid black"}:{}}
                                    >
                                <button class="btn d-flex flex-column align-items-center justify-content-center dropdown-toggle py-1" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="chanti.png" className=" img-fluid rounded-circle border" style={{width:"39px"}}></img>
                                <div>
                                {/* <span className=" pt-0 pl-1 font-weight-normal text-muted " style={{fontSize:"13px"}}>
                                       Me
                                     </span> */}
                                     {/* <span className="fas fa-angle-down"></span> */}
                                </div>
                                    
                                </button>
                                <div class="dropdown-menu py-2 pb-4" aria-labelledby="dropdownMenu2" style={{width:"300px",borderRadius:"15px"}}>
                                    <a   href="/profile" >
                                    <button class="dropdown-item" type="button">
                                        <div className="d-flex flex-row">
                                            <img src="chanti.png" className="img-fluid rounded-circle border" style={{width:"60px"}}></img>
                                            <div className="d-flex flex-column justify-content-center">
                                                <span className="text-dark px-2" style={{fontWeight:"600",fontSize:"15px"}}>Anudeep Kakkireni</span>
                                                <div className="text-muted px-2">See your profile</div>
                                            </div>
                                       </div>
                                    </button>
                                    </a>
                                    <button class="dropdown-item" type="button">
                                        <div className="d-flex flex-row align-items-center py-2">
                                            <div>
                                            <button className="btn btn-circle" style={{borderRadius:"50%",backgroundColor:"#dddddd"}}>
                  
                                                <span className="fas fa-cog " ></span>
                                            </button>
       
                                            </div>
                                      
                                            <div className="d-flex flex-row ">
                                                <span className="text-dark px-2" style={{fontWeight:"600",fontSize:"15px"}}>Settings & Privacy</span>
                                                
                                            </div>
                                            <span className="fas fa-chevron-right ml-auto text-muted" style={{fontSize:"24px"}}></span>
                                       </div>
                                    </button>
                                  
                                    <button class="dropdown-item" type="button">
                                        <div className="d-flex flex-row align-items-center py-2">
                                            <div>
                                            <button className="btn btn-circle" style={{borderRadius:"50%",backgroundColor:"#dddddd"}}>
                  
                                                <span className="fas fa-question-circle " ></span>
                                            </button>
       
                                            </div>
                                      
                                            <div className="d-flex flex-row ">
                                                <span className="text-dark px-2" style={{fontWeight:"600",fontSize:"15px"}}>Help & support</span>
                                                
                                            </div>
                                            <span className="fas fa-chevron-right ml-auto text-muted" style={{fontSize:"24px"}}></span>
                                       </div>
                                    </button>
                                  
                                    <button class="dropdown-item" type="button">
                                        <div className="d-flex flex-row align-items-center py-2">
                                            <div>
                                            <button className="btn btn-circle" style={{borderRadius:"50%",backgroundColor:"#dddddd"}}>
                  
                                                <span className="fas fa-moon " ></span>
                                            </button>
       
                                            </div>
                                      
                                            <div className="d-flex flex-row ">
                                                <span className="text-dark px-2" style={{fontWeight:"600",fontSize:"15px"}}>Display & accessibility</span>
                                                
                                            </div>
                                            <span className="fas fa-chevron-right ml-auto text-muted" style={{fontSize:"24px"}}></span>
                                       </div>
                                    </button>
                                  
                                    <button class="dropdown-item" type="button">
                                        <div className="d-flex flex-row align-items-center py-2">
                                            <div>
                                            <button className="btn btn-circle" style={{borderRadius:"50%",backgroundColor:"#dddddd"}}>
                  
                                                <span className="fas fa-sign-out-alt " ></span>
                                            </button>
       
                                            </div>
                                      
                                            <div className="d-flex flex-row ">
                                                <span className="text-dark px-2" style={{fontWeight:"600",fontSize:"15px"}}>Log out</span>
                                                
                                            </div>
                                            {/* <span className="fas fa-chevron-right ml-auto text-muted" style={{fontSize:"24px"}}></span> */}
                                       </div>
                                    </button>
                                  
                                </div>
                               
                                </div>
                             
                                <div class="dropdown ml-auto my-auto" id="more">
                                <button class="btn  dropdown-toggle d-flex  justify-content-center " type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="text-dark  flaticon-dots-menu pt-1  " style={{fontSize:"18px",color:"black"}}></i>
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button class="dropdown-item" type="button" href="/profile">My Profile</button>
                                    <button class="dropdown-item" type="button">Skill - tests</button>
                                    <button class="dropdown-item" type="button">Blogs</button>
                                    <button class="dropdown-item" type="button">Settings</button>
                                    <button class="dropdown-item" type="button">Settings</button>
                                </div>
                                </div>
                                    {/* <NavDropdown className=" " 
                                    //  drop="bottom"
                                     title={ <> <img src="chanti.png" className="ml-5 img-fluid rounded-circle" style={{width:"13%"}}></img>
                                     <span className="text-muted px-1" style={{fontSize:"15px"}}>
                                       Anudeep
                                     </span> </>} id="basic-nav-dropdown">  
                                    <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Skill - tests</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Blogs</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                                </NavDropdown>
                                    */}
                                    {/* <Nav.Link
                                    href="/profile"
                                     className=" my-auto d-none d-lg-block  justify-content-center align-items-center ">
                                        <img src="chanti.png" className="ml-5 img-fluid rounded-circle" style={{width:"13%"}}></img>
                                        <span className="text-muted px-1" style={{fontSize:"15px"}}>
                                          Anudeep
                                        </span>
                                      
                                    </Nav.Link> */}
                                   
                                    {/* <Nav.Link  >
                                    <NavDropdown className=" d-flex flex-column justify-content-center align-items-center" 
                                    //  drop="bottom"
                                     title={ <i className="text-dark mx-2 px-2 flaticon-dots-menu  " style={{fontSize:"18px",color:"black"}}></i>} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Skill - tests</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Blogs</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                                </NavDropdown>
                                       
                                       
                                    </Nav.Link> */}
                       
                                    
                                  
                                    
                                  
                                    </Nav>
                                  
                                {/* </Navbar.Collapse> */}
                            </Navbar>
   
     {/* <Popup
    open={this.state.open}
     name={this.state.myclass}
      >
        
      </Popup> */}
                   

                   <Modal isOpen={this.state.AddPost} 
                                 onRequestClose={()=>this.setState({AddPost:false})}
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
            //  <div className={`${style.headerText} d-block  border bg-white`}>
            //     <span className="px-2" style={{fontSize:"8vw"}}>
            //             <strong>
            //                 Kickstartx
            //                 {this.state.sidebarclass}
            //             </strong>
            //         </span>
            //       <a style={{zIndex:"100000"}} href="/profile">
            //           assss
            //       </a>
                  

            //  <SideNavPop sidebar={this.state.sidebar} name={this.state.sidebarclass}></SideNavPop>
            // </div>
            
           
       )
    }
}

export default Header
