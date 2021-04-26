import React, { Component } from 'react'
import style from "./mainbody.module.css";

export class MainBody extends Component {
    render() {
        return (
            <div className={style.headerText}>
               <div className="row" style={{height:"90vh"}}>
                   <div className="col-lg-3 col-sm-12 ">
                       <div className="col-12 mx-3 my-4 bg-white" style={{borderRadius:"10px",border:"10px double grey",height:"80vh",width:"90%"}}>
                          <div className="row bg-dark" style={{height:"25%"}}></div>
                          <img src="chanti.png" style={{width:"150px",borderRadius:"75px",border:"2px solid #cccccc",position:"absolute",top:"50px",left:"40px"}}/>
                          <br></br>
                          <span style={{position:"relative",top:"60px",fontSize:"22px",fontWeight:"bolder"}}>Anudeep Kakkireni</span>
                          <br></br>
                          <span style={{position:"relative",top:"60px",fontSize:"16px",opacity:"0.7"}}>Student at Chaitanya Bharathi Institue of Technology</span>
                          <br>
                          </br>
                         
                          <a href="">
                          <span className="py-2 text-dark" style={{position:"relative",top:"60px",fontSize:"27px",fontWeight:"bold"}}>24</span>
                          <br>
                          </br>
                          <span className="text-dark" style={{position:"relative",top:"60px",fontWeight:"bolder",fontSize:"16px",opacity:"0.9"}}>Viewed Your Profile</span>
                          </a>
                        <br>
                        </br>
                        <a href="#">
                          <span className="py-2 text-dark" style={{position:"relative",top:"60px",fontSize:"27px",fontWeight:"bold"}}>150</span>
                          <br>
                          </br>
                          <span className="text-dark" style={{position:"relative",top:"60px",fontWeight:"bolder",fontSize:"16px",opacity:"0.9"}}>Connections</span>
                          </a>
                          <br>
                          </br>
                          <a href="/chat" >
                          <span className="py-2 text-dark" style={{position:"relative",top:"60px",fontSize:"17px",fontWeight:"bold"}}>7 new messages</span>
                          <br>
                          </br>
                          <span className="btn btn-outline-dark" style={{position:"relative",top:"60px",fontWeight:"bolder",fontSize:"16px",opacity:"0.9"}}>View Messages</span>
                          </a>
                       </div>
                       
                   </div>
                
                  <div className="col-lg-6  text-center py-2 px-1">
                   <div id={style.addButton} className="col-12 my-3 bg-white text-center py-3 mx-2" style={{borderRadius:"10px",border:"1px groove grey",height:"25vh",width:"90%"}}>
                   <button className="btn btn-dark my-1 p-2 mx-1" style={{fontWeight:"bold",border:"1px dotted black",borderRadius:"10px",opacity:"1"}} > SHARE POST <i className="fa fa-edit" style={{fontSize:"px"}}></i>
                           </button>
                           <br></br>
                         
                           <span className="my-3" style={{fontWeight:"bolder",textDecorationLine:"underline"}} >Add Photos, Videos or Documents 
                           </span>
                          
                           <span  className="fa fa-plus mx-1 my-2" style={{fontSize:"30px"}}></span>
                          
                       </div>
                       <div className="col-12 my-3 bg-white text-center py-3 mx-2" style={{borderRadius:"10px",border:"1px groove grey",height:"80vh",width:"90%"}}>
                           <img src="other.jpeg" style={{width:"70px",borderRadius:"35px",float:"left"}}></img>
                           <span className="float-left px-3" style={{fontWeight:"bolder"}}>Rohit Rajaan</span>
                           <br></br>
                           <span className="float-left px-3" style={{fontSize:"13px",color:"grey"}}>Student at National Institue of Technology - Warangal</span>
                           <br></br>
                           <span className="float-left px-3 py-0" style={{fontSize:"12px",color:"grey",paddingTop:"0px"}}>10h</span>
                           <br></br>
                            <img src="post.jpeg" style={{width:"100%",height:"75%"}}></img>  
                            <br></br> 
                            <div>
                                <span className="fa far fa-heart  my-3 mx-1" style={{fontSize:"30px",color:"red"}}></span>
                                <span className="fa far fa-comments  my-3 mx-1" style={{fontSize:"30px",color:"black"}}></span>
                                <span className="fa far fa-share  my-3 mx-1" style={{fontSize:"30px"}}></span>

                            </div>

                    </div>
                   </div>
                   
                   <div className="col-lg-3 col-sm-12" style={{backgroundColor:"#eeeeee"}}>
                       <div className="col-12  my-4 bg-white" style={{borderRadius:"10px",border:"2px solid grey",height:"100vh",width:"90%"}}>
                        <div className="row m-2 ">
                        <span style={{fontSize:"15px",fontWeight:"900",textDecorationLine:"underline"}}>Top Viewed Courses</span>
                        <span className="fa fa-info-circle  mx-2" style={{fontSize:"20px"}}></span>
                            <ol className="m-1 py-1" style={{fontSize:"16px",fontWeight:"400",float:"left",textAlign:"left"}}>
                                <li className="py-1">Machine Learning</li>
                                <li className="py-1">Deep Learning for image processing</li>
                                <li className="py-1">Neural Networks</li>
                                <li className="py-1">Artificial Intelligence</li>
                                <li className="py-1">Web Development</li>
                            </ol>
                           
                           
                        </div>
                        <div className="row mx-1">
                        <span style={{fontSize:"15px",fontWeight:"900",textDecorationLine:"underline"}}>Top Viewed Internships</span>
                        <span className="fa fa-info-circle  mx-2" style={{fontSize:"20px"}}></span>
                            <ol className="m-2 py-1" style={{fontSize:"16px",fontWeight:"400",float:"left",textAlign:"left"}}>
                                <li className="py-1">Amazon</li>
                                <li className="py-1">JP Morgan</li>
                                <li className="py-1">Kickstartx</li>
                                <li className="py-1">Accolite</li>
                                <li className="py-1">Micron Technology</li>
                            </ol>
                        </div>
                       
                         
                       </div>
                       
                   </div>
                
                </div> 
          
            </div>
        )
    }
}

export default MainBody
