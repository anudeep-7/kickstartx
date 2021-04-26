import React, { Component } from 'react'
import style from "./profile.module.css";
import './yourprofile.css';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import Modal from 'react-modal';
Modal.setAppElement('#root');
export default class CompanyProfile extends Component { 

    
    changeBioInfo=(event)=>
    {
        this.setState({
            bioinfo:event.target.value
        })
    }

    constructor(props) {
        super(props)
    
        this.state = {
            tabs:1,
            editprofile:false,
            editprofile1:1,
            editschool:false,
            editbio:false,
            createpage:false,
            bioinfo:"Engineering Graduate with leadership training and experience with academic training in University of Hyderabad.Proven skills in Project Management and research"

        }
    }
    render() {
       
        
        return (
           
            <div className="container">
                  <div  className="row d-flex flex-row justify-content-center " id="boxx">
            
            <div className="col-xl-3">
            <div className="row d-flex flex-row " >
            <div className="m-2" style={{width:"220px",borderRadius:"50%"}}>
                        <img src="stark.png" className="px-3 float-left ml-1 rounded-circle" id={style.profile_pic}
                        alt="Avatar"
                        style={{width:"210px",height:"210px",borderRadius:"50%"}}
                        /> 
        
        </div> 
            <div className="col-4 d-flex flex-column align-items-center justify-content-center d-none d-lg-block d-xl-none">

            {/* <div className="row btn btn-group-vertical pl-0">
                    <button type="button" class="btn bg-white border text-secondary">Connect</button>
                    <button type="button" class="btn bg-white border text-secondary">Message</button>
                    <button type="button" class="btn bg-white border text-secondary">Mail</button>
                    </div> */}
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
            <div className="row ">
                
            <div className="pt-1 col-10  ml-1 p-2 d-flex flex-column" style={{textAlign:"justify"}} >
            <span className="" style={{fontSize:"25px"}}>Stark Industries</span>
            <span className=" " style={{fontSize:"20px",opacity:"0.8"}}>
            Malibu CA
            </span>
            <span>1.22 billion followers</span>
            <span>Hyderabad, India</span>
            <span className=" py-1 mt-2 " style={{fontSize:"25px"}}>About   </span>    
            <div style={{lineHeight:"1.2"}}>
            <span className="" style={{fontSize:"14px",opacity:"0.9"}}>
            Stark Industries is primarily a defense company that develops and manufactures advanced weapons and military technologies. The company manufactures the armor worn by Iron Man and War Machine. It builds the helicarriers used by S.H.I.E.L.D, and it produces the Quinjets used by the Avengers. </span>
            </div>
            </div>
            </div>
           
                </div>
            </div>
            <div className="col-xl-7 col-lg-12 text-left  d-flex flex-column  mt-3  ">
                <div className="d-flex flex-row justify-content-center align-items-center">
                <input style={{width:"250px",height:"50px"}}></input>
                    <button className="btn btn-dark px-5" style={{borderRadius:"0px",height:"50px"}}>POST</button>
                    <select  className="rounded  py-3 px-3 mx-4 ml-auto border border-muted bg-dark text-white "
                style={{cursor:"pointer"}}>
                                    <option>Kickstartx.com</option>
                                    <option>XLabs</option>
                                    <option>XCode</option>
                                    <option>XLancer</option>
                                </select>
              
                </div>
                <div className="d-flex flex-row" >
                    <span className=" p-3 fas fa-image " style={{fontSize:"30px",cursor:"pointer"}}></span>
                    <span className="p-3 fas fa-video" style={{fontSize:"30px",cursor:"pointer"}}></span>
                    
            
      
                </div>
              
               
            </div>
           
          
            </div>
       
                   
            </div>
          
       )
    }
}
