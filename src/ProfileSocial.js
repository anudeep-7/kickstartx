import React, { Component } from 'react'

export class ProfileSocial extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
                id:1,
                Institution:"Chaitanya Bharathi Institute of Technology",
                Degreelevel:"Graduation",
                Stream:"Information Technology",
                Start:2017,
                End:2021,
                InstitutionLogo:"post.png"
        }
    }
    
    render() {
        return (
            <>
                  
                        <div  className="my-2 d-flex flex-column align-items-start bg-white w-100 border p-3 py-4" style={{borderRadius:"15px"}}>

                            <div className="w-100 d-flex flex-row ">
                                <div className="w-100 d-flex flex-column"><span className="" style={{fontWeight:"500"}}>{this.state.Institution}</span> 
                                            <span className="" style={{fontSize:"15px"}}>
                                            {this.state.Degreelevel}, {this.state.Stream}</span>
                                        <span className="text-muted"
                                         style={{fontSize:"13px"}}>
                                             {this.state.Start}-{this.state.End}
                                             </span>
                                </div>
                            <div className="w-100 ">
                            <span className="fas fa-pen float-right  p-3 "
                             id="edit" 
                            onClick={this.props.editEducationDetails} 
                            style={{borderRadius:"50%"}}> </span>
                                </div>
                     
                            </div>
                      
                      
                       
                        </div>
                       
                  
            </>
        )
    }
}

export default ProfileSocial
