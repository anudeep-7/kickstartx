import React, { Component } from 'react'
import './profileportfolio.css'
export class ProfilePortfolio extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             problemsolvingskill:30
        }
    }
    
    render() {
        return (
            <div className="d-flex flex-column align-items-start  ml-3 my-2" style={{width:"100%"}}>
                <span style={{fontSize:"24px"}} className="my-2">Problem Solving</span>
                <div class="skillBar border w-75 bg-secondary my-2">
                     <div class="skills problemSolving" style={{width:this.state.problemsolvingskill+"%"}}>{this.state.problemsolvingskill}%</div>
                </div>
                <div className="btn btn-link border text-dark border-dark "
                onClick={this.props.viewSolvedProblems}
                 style={{fontSize:"12px"}}>VIEW MORE</div>
                <span style={{fontSize:"24px"}} className="my-2">Quality Code</span>
                <div class="skillBar border w-75 bg-secondary my-2">
                     <div class="skills qualityCode">60%</div>
                </div>
                <span style={{fontSize:"24px"}} className="my-2">Stream Expertise</span>
                <div class="skillBar border w-75 bg-secondary my-2">
                     <div class="skills streamExpertise">56%</div>
                </div>
                <span style={{fontSize:"24px"}} className="my-2">Social Skill</span>
                <div class="skillBar border w-75 bg-secondary my-2">
                     <div class="skills socialSkill">95%</div>
                </div>
            </div>
        )
    }
}

export default ProfilePortfolio
