import React, { Component } from 'react'
import './login.scss'
class Login extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            password: '',
            passwordVisible: false
        }
        this.changeHandle.bind(this)
    }
    changeHandle(event, type) {
        let value = event.target.value
        let newState = {}
        newState[type] = value
        this.setState(newState)
    }
    changeVisible() {
        const newState = {
            passwordVisible: !this.state.passwordVisible
        }
        this.setState(newState)
    }
    submit() {
        console.log(this.state)
    }
    render() {
        return (
            <div class="login-wrapper flex-col-center ">
                <div class="login-pane">
                    <div>
                        <input type="text" placeholder="用户名"
                            value={this.state.userName}
                            onChange={(e) => this.changeHandle(e, 'userName')} />
                    </div>
                    <div>
                        <input type={this.state.passwordVisible ? 'password' : 'text'}
                            placeholder="密码"
                            value={this.state.password}
                            onChange={(e) => this.changeHandle(e, 'password')} />
                        <div onClick={() => this.changeVisible()}>
                            <i className={this.state.passwordVisible ? 'hy-icon-eye' : 'hy-icon-eye1'} />
                        </div>
                    </div>
                    <button onClick={() => this.submit()}>提交</button>                    
                </div>
            </div>
        )
    }
}

export default Login