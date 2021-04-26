
// import style from "./popup.module.css";
import React, { Component } from 'react'
import './pop.css';

export class SideNavPop extends Component {
    render() {
        return (
           
  
                <div className="popupbox" style={this.props.name==='sidebarclass'? {backgroundColor: "",backdropFilter:"brightness(20%)",zIndex:"999"}:{}}>
                  <div id="box" className={`${this.props.name} mx-1`}
                  style={{fontSize:"12px"}} >

                    <div className=" d-flex flex-column text-dark ">
                    <div className="mt-3 mb-2">
                        <span className="float-left pl-4">
                            <strong>
                            NOTIFICATIONS</strong></span>
                        <span className="float-right pr-3">TODAY</span>
                    </div>
                    <div className="d-flex flex-row mt-1 mx-1 rounded p-2 border-bottom " style={{}}>
                       
                            <img src="pk.jpeg" className="img-fluid rounded-circle float-left " style={{width:"16%"}}></img>
                            <span className="align-self-center mr-auto pl-4" style={{textAlign:"justify",maxWidth:"60%"}}>
                                <strong>Rohith Vangala</strong> started following you 
                            </span>
                            <span style={{fontSize:"10px"}}  className="text-muted align-self-center">
                                12 mins ago 
                            </span>
                        
                        
                    </div>
                    <div className="d-flex flex-row mt-1 mx-1 rounded p-2 border-bottom" style={{}}>
                       
                       <img src="pk.jpeg" className="img-fluid rounded-circle float-left " style={{width:"16%"}}></img>
                       <span className="align-self-center mr-auto pl-4" style={{textAlign:"justify",maxWidth:"60%"}}>
                           <strong>Gautham Kumar</strong> send you invite to attend the event scheduled for 7th Feb
                       </span>
                       <span style={{fontSize:"10px"}}  className="text-muted align-self-center">
                           12 mins ago 
                       </span>
                   
                   
               </div>
                    <div className="d-flex flex-row my-2 mx-1 rounded p-2 border-bottom" style={{}}>
                       
                       <img src="pk.jpeg" className="img-fluid rounded-circle float-left  " style={{width:"16%"}}></img>
                        <span className="align-self-center mr-auto pl-4" style={{textAlign:"justify",maxWidth:"60%"}}>
                           <strong>Manideep Parusa</strong>wants you to send a message
                       </span>
                       <span style={{fontSize:"10px"}}  className="text-muted align-self-center">
                           12 mins ago 
                       </span>
                   
                   
               </div>
                    <hr className="w-75 bg-light mt-0"></hr>
                    </div>

                    <div className=" d-flex flex-column text-dark ">
                    <div className="mt-0 mb-2">
                       
                        <span className="float-right pr-3">YESTERDAY</span>
                    </div>
                    <div className="d-flex flex-row  mx-1 my-1 rounded py-2 bg-light border " style={{}}>
                       
                            <img src="pk.jpeg" className="img-fluid rounded-circle float-left " style={{width:"16%"}}></img>
                            <span className="align-self-center mr-auto pl-4" style={{textAlign:"justify",maxWidth:"60%"}}>
                                <strong>Rohith Vangala</strong> started following you 
                            </span>
                            <span style={{fontSize:"10px"}}  className="text-muted align-self-center">
                                12 mins ago 
                            </span>
                        
                        
                    </div>
                    <div className="d-flex flex-row my-1 mx-1 rounded py-2 bg-light border" style={{}}>
                       
                       <img src="pk.jpeg" className="img-fluid rounded-circle float-left " style={{width:"16%"}}></img>
                       <span className="align-self-center mr-auto pl-4" style={{textAlign:"justify",maxWidth:"60%"}}>
                           <strong>Gautham Kumar</strong> send you invite to attend the event scheduled for 7th Feb
                       </span>
                       <span style={{fontSize:"10px"}}  className="text-muted align-self-center">
                           12 mins ago 
                       </span>
                   
                   
               </div>
                    <div className="d-flex flex-row my-1 mx-1 rounded py-2 bg-light border" style={{}}>
                       
                       <img src="pk.jpeg" className="img-fluid rounded-circle float-left " style={{width:"16%"}}></img>
                       <span className="align-self-center mr-auto pl-4" style={{textAlign:"justify",maxWidth:"60%"}}>
                           <strong>Manideep Parusa </strong>wants you to send a message
                       </span>
                       <span style={{fontSize:"10px"}}  className="text-muted align-self-center">
                           12 mins ago 
                       </span>
                   
                   
               </div>
                    <hr className="w-75 bg-light my-2 mb-0"></hr>
                    </div>
                   <div className="btn p-1 px-2 mt-2 btn-dark" style={{fontSize:"15px",borderRadius:"50%"}}>
                       <span className="fa fa-arrow-down"></span>
                   </div>
                  </div>
                  
                </div>
             
           
        )
    }
}

export default SideNavPop
