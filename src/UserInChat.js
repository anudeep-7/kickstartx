import React, { Component } from 'react'
import style from "./chat.module.css";
export class UserInChat extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             val:1
        }
    }
    
    render() {
        return (
            <>
            <div  onClick={() => this.setState({ val:1 })}  className={this.state.val==1? "bg-dark text-dark  ml-3 pr-2":"bg-white text-dark  ml-3 pr-2"} id={style.headerText} style={{width:"100%",cursor:"pointer",borderRadius:"10px"}}>
            <img src="chanti.png" className="float-left" style={{width:"100px",border:"2px solid #cccccc",borderRadius:"10px"}}/>
               <span className="float-right px-1 pr-3 pt-3" style={{fontSize:"17px",fontWeight:"bolder"}}>
               Anudeep Kakkireni
                </span>
                <br></br>
                <span className="float-right pt-2 px-1 pr-3" style={{fontSize:"15px"}}>
              Dinner thinnava
                </span>
            </div>
            <div  onClick={() => this.setState({ val:2 })}  className={this.state.val==2? "bg-dark text-dark  ml-3 pr-2":"bg-white text-dark  ml-3 pr-2"} id={style.headerText} style={{width:"100%",cursor:"pointer",borderRadius:"10px"}}>
            <img src="other.jpeg" className="float-left" style={{width:"100px",border:"2px solid #cccccc",borderRadius:"10px"}}/>
               <span className="float-right px-1 pr-3 pt-3" style={{fontSize:"17px",fontWeight:"bolder"}}>
             Pavan Kalyan Varma
                </span>
                <br></br>
                <span className="float-right pt-2 px-1 pr-3" style={{fontSize:"15px"}}>
             college epud start
                </span>
            </div>
            <div  onClick={() => this.setState({ val:3 })}  className={this.state.val==3? "bg-dark text-dark  ml-3 pr-2":"bg-white text-dark  ml-3 pr-2"} id={style.headerText} style={{width:"100%",cursor:"pointer",borderRadius:"10px"}}>
            <img src="chanti.png" className="float-left" style={{width:"100px",border:"2px solid #cccccc",borderRadius:"10px"}}/>
               <span className="float-right px-1 pr-3 pt-3" style={{fontSize:"17px",fontWeight:"bolder"}}>
             Preethu Reddy
                </span>
                <br></br>
                <span className="float-right pt-2 px-1 pr-3" style={{fontSize:"15px"}}>
              emaindi? enduku rale
                </span>
            </div>
            <div  onClick={() => this.setState({ val:4 })}  className={this.state.val==4? "bg-dark text-dark  ml-3 pr-2":"bg-white text-dark  ml-3 pr-2"} id={style.headerText} style={{width:"100%",cursor:"pointer",borderRadius:"10px"}}>
            <img src="chanti.png" className="float-left" style={{width:"100px",border:"2px solid #cccccc",borderRadius:"10px"}}/>
               <span className="float-right px-1 pr-3 pt-3" style={{fontSize:"17px",fontWeight:"bolder"}}>
               Anudeep Kakkireni
                </span>
                <br></br>
                <span className="float-right pt-2 px-1 pr-3" style={{fontSize:"15px"}}>
            there ?
                </span>
            </div>
            <div  onClick={() => this.setState({ val:5 })}  className={this.state.val==5? "bg-dark text-dark  ml-3 pr-2":"bg-white text-dark  ml-3 pr-2"} id={style.headerText} style={{width:"100%",cursor:"pointer",borderRadius:"10px"}}>
            <img src="chanti.png" className="float-left" style={{width:"100px",border:"2px solid #cccccc",borderRadius:"10px"}}/>
               <span className="float-right px-1 pr-3 pt-3" style={{fontSize:"17px",fontWeight:"bolder"}}>
              Abhishek Chandra
                </span>
                <br></br>
                <span className="float-right pt-2 px-1 pr-3" style={{fontSize:"15px"}}>
              Hey, will you buy RE bike?
                </span>
            </div>
            <div  onClick={() => this.setState({ val:6})}  className={this.state.val==6? "bg-dark text-dark  ml-3 pr-2":"bg-white text-dark  ml-3 pr-2"} id={style.headerText} style={{width:"100%",cursor:"pointer",borderRadius:"10px"}}>
            <img src="chanti.png" className="float-left" style={{width:"100px",border:"2px solid #cccccc",borderRadius:"10px"}}/>
               <span className="float-right px-1 pr-3 pt-3" style={{fontSize:"17px",fontWeight:"bolder"}}>
               Manideep Kumar
                </span>
                <br></br>
                <span className="float-right pt-2 px-1 pr-3" style={{fontSize:"15px"}}>
              Visual studio new version?
                </span>
            </div>
            <div  onClick={() => this.setState({ val:7 })}  className={this.state.val==7? "bg-dark text-dark  ml-3 pr-2":"bg-white text-dark  ml-3 pr-2"} id={style.headerText} style={{width:"100%",cursor:"pointer",borderRadius:"10px"}}>
            <img src="chanti.png" className="float-left" style={{width:"100px",border:"2px solid #cccccc",borderRadius:"10px"}}/>
               <span className="float-right px-1 pr-3 pt-3" style={{fontSize:"17px",fontWeight:"bolder"}}>
              RaviChandra
                </span>
                <br></br>
                <span className="float-right pt-2 px-1 pr-3" style={{fontSize:"15px"}}>
              settest kada
                </span>
            </div>
          </>
        )
    }
}

export default UserInChat
