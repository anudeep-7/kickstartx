
// import style from "./popup.module.css";
import React, { Component } from 'react'
import './pop.css';
import notifications from './notifications.json'

export class Notifications extends Component {
    componentDidMount=()=>{
        // console.log("hello")
        localStorage.setItem('state',4)
    }
    render() {
        return (
           
            <div className="d-flex  justify-content-center " id="notify_container">
                <div className=" bg-white mx-auto"  style={{fontSize:"12px",width:"600px"}}>
               

                    <div className=" d-flex flex-column text-dark ">
                    <div className="mt-3 mb-2">
                        <span className="float-left pl-4">
                            <strong>
                            NOTIFICATIONS</strong></span>
                        <span className="float-right pr-3">TODAY</span>
                    </div>
                  {notifications.map((notification,index)=>(
                        <div className="d-flex flex-row mt-1 mx-1 rounded p-2 border-bottom " id="notify">
                       
                        <img src="pk.jpeg" className="img-fluid rounded-circle float-left " style={{width:"60px"}}></img>
                        <span className="align-self-center mr-auto pl-4" style={{textAlign:"justify",maxWidth:"60%"}}>
                           {notification.Notification} 
                        </span>
                        <span style={{fontSize:"10px"}}  className="text-muted align-self-center">
                            {notification.Date}
                        </span>
                        <div class=" dropup align-self-center mx-2">
                                <button type="button"
                                style={{borderRadius:"50%",border:"1px solid #cccccc"}}
                                class="btn  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="fas fa-ellipsis-v px-1" ></span>
                                </button>
                                <div class="dropdown-menu ">
                                   <span className=" btn px-2 dropdown-item">Mute</span>
                                   <span className=" btn px-2 dropdown=item">Delete</span>
                                </div>
                                </div>
                    
                </div>
              
                  ))}
                    </div>

                    <div className=" d-flex flex-column text-dark ">
                    <div className="mt-0 mb-2">
                       
                        <span className="float-right pr-3">YESTERDAY</span>
                    </div>
                    {notifications.map((notification,index)=>(
                        <div className="d-flex flex-row mt-1 mx-1 rounded p-2 border-bottom " id="notify">
                       
                        <img src="pk.jpeg" className="img-fluid rounded-circle float-left " style={{width:"60px"}}></img>
                        <span className="align-self-center mr-auto pl-4" style={{textAlign:"justify",maxWidth:"60%"}}>
                           {notification.Notification} 
                        </span>
                        <span style={{fontSize:"10px"}}  className="text-muted align-self-center">
                            {notification.Date}
                        </span>
                        <div class=" dropup align-self-center mx-2">
                                <button type="button"
                                style={{borderRadius:"50%",border:"1px solid #cccccc"}}
                                class="btn  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="fas fa-ellipsis-v px-1" ></span>
                                </button>
                                <div class="dropdown-menu ">
                                   <span className=" btn px-2 dropdown-item">Mute</span>
                                   <span className=" btn px-2 dropdown=item">Delete</span>
                                </div>
                                </div>
                    
                </div>
              
                  ))}
                    </div>
                   <div className="btn p-1 px-2 mt-2 btn-dark" style={{fontSize:"15px",borderRadius:"50%"}}>
                       <span className="fa fa-arrow-down"></span>
                   </div>
                 
                  
                </div>
             </div>
           
        )
    }
}

export default Notifications
