import React, { Component } from 'react'
import posts from './posts.json'
export class ProfilePosts extends Component {
    render() {
        return (
            <div>
            {posts.map((post,index)=>(
                
                    <div className="d-flex flex-column bg-white my-4 " id="postInProfile" style={{border:"1px solid #cdd7d6",borderRadius:"5px"}}>
                    <div className="d-flex flex-row m-2 " style={{fontSize:"15px "}}>
                        <img src="chanti.png" className='img-fluid img-responsive rounded-circle rounded border ' style={{width:"50px",height:"50px"}}></img>
                        <div className="d-flex flex-column ml-2 text-left w-100">
                        <div className="d-flex flex-row  " >
                        <div className="d-flex flex-column w-100">
                        <span className="text-muted " style={{fontWeight:"600"}} >Anudeep Kakkireni</span>
                       
                       <span className="text-muted" style={{fontSize:"12px"}}>Excella Education Group</span>
                       <span  className="text-muted" style={{fontSize:"12px"}}>1w</span>
                        </div>
                        <div class=" dropup">
                        <button type="button"
                        style={{borderRadius:"50%",border:"1px solid #cccccc"}}
                        class="btn  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="fas fa-ellipsis-v px-1" ></span>
                        </button>
                        <div class="dropdown-menu ">
                           <span className=" btn px-2">Dont need this post</span>
                        </div>
                        </div>
                       
                       
                        </div>
                      
                        </div>
        
                    </div>
                    <p className="m-2 text-left text-muted" style={{fontSize:"13px"}}>
                    {post.Text}
                    </p>
                    <img src="post.jpg" id="imgPost"></img>
                    <span className="text-muted my-1 text-left mx-3  border-bottom pb-2" style={{fontSize:"12px"}}>{post.Likescount} UpVotes, {post.Commentscount} Comments</span>
                    <div className="d-flex flex-row justify-content-start">
                      
                            <div className=" btn justify-content-center px-2 ml-1 mt-2 text-muted"  id="abovePost" style={{fontSize:"14px"}}>
                                <span className="mx-1 far fa-hand-point-up"></span>
                                <span>UpVote</span>
                            </div>
                            <div className=" btn justify-content-center px-2  mt-2 text-muted"  id="abovePost" style={{fontSize:"14px"}}>
                                <span className="mx-1 far fa-comment"></span>
                                <span>Comment</span>
                            </div>
                            <div className=" btn justify-content-center px-2  mt-2 text-muted"  id="abovePost" style={{fontSize:"14px"}}>
                                <span className="mx-1 fas fa-star"></span>
                                <span>Recommended</span>
                            </div>
                           
                       
                    </div>
                    <div className="d-flex flex-row">
                    <img src="chanti.png" className="mx-2 my-2 img-fluid img-responsive rounded-circle border" style={{width:"50px"}}></img>
                    <div className="border mx-1 px-0 my-2 " style={{borderRadius:"20px",width:"80%"}}>
                        <input placeholder="Comment" className="text-muted py-1 my-2" style={{border:"none",width:"85%"}} />
                    </div>
                    </div>
                   
                </div>
                
            ))}
           
            </div>
        )
    }
}

export default ProfilePosts
