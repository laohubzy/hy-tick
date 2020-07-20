import React, { Component } from 'react'
import { connect } from 'react-redux'
import { message } from 'antd';

import { A_setUserInfo } from '@/actions/userInfo'
import userApi from '@/http/api/user'
import './login.scss'

const mapDispatchToProps = (dispatch) => {
    return {
        D_setUserInfo: (userInfo) => {
            dispatch(A_setUserInfo(userInfo))
        }
    }
}

class Login extends Component {
    constructor({ D_setUserInfo }) {
        super()
        this.state = {
            userName: '',
            password: '',
            passwordVisible: false
        }
        this.D_setUserInfo = D_setUserInfo
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
    login() {
        const { userName, password } = this.state
        if(!userName) {
            console.log(message)
            message.warn('请填写用户名！');
            return
        }
        if(!password) {
            message.warn('请填写密码！');
            return
        }
        userApi.login({
            userName,
            password
        }).then(res => {
            const { userId, userName, token } = res
            localStorage.setItem('userId', userId)
            localStorage.setItem('userName', userName)
            localStorage.setItem('token', token)
            this.props.history.push('/webApp')
        })
    }
    register() {
        const { userName, password } = this.state
        if(!userName) {
            message.warn('请填写用户名！');
            return
        }
        if(!password) {
            message.warn('请填写密码！');
            return
        }        
        userApi.register({
            userName,
            password
        }).then(res => {
            message.success('注册成功，请重新登录');
        })
    }
    render() {
        return (
            <div className="login-wrapper flex-col-center ">
                <div className="login-pane flex-col-center">
                    <div className="logo-pane flex-col-center">
                        <i className="hy-icon-logo"></i>
                        {/* <div className="title">用户登录</div> */}
                    </div>
                    <div className="login-input-row flex-center">
                        <i className="hy-icon-username" />
                        <input
                            className="login-input"
                            type="text" placeholder="用户名"
                            value={this.state.userName}
                            onChange={(e) => this.changeHandle(e, 'userName')} />
                    </div>
                    <div className="login-input-row flex-center">
                        <i className="hy-icon-lock" />
                        <input
                            className="login-input"
                            type={this.state.passwordVisible ? 'password' : 'text'}
                            placeholder="密码"
                            value={this.state.password}
                            onChange={(e) => this.changeHandle(e, 'password')} />
                        <div onClick={() => this.changeVisible()} className="input-icon">
                            <i className={this.state.passwordVisible ? 'hy-icon-eye' : 'hy-icon-close-eye'} />
                        </div>
                    </div>
                    <button onClick={() => this.login()} className="login-btn">登录</button>
                    <div onClick={() => this.register()} className="register-btn">注册</div>
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Login)