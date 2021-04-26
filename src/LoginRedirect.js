import React, { Component } from 'react'

export class LoginRedirect extends Component {
    render() {
        return (
            <div onLoad={window.location.href="https://www.facebook.com"}>
                
            </div>
        )
    }
}

export default LoginRedirect
