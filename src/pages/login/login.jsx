import React, { Component } from 'react'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            userName: 'wsy'
        }
    }
    render() {
        return (
        <div>{this.state.userName}</div>
        )
    }
}

export default Login