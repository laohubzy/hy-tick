import React, { Component } from 'react'
import { connect } from 'react-redux'

import { A_setUserInfo } from '@/actions/userInfo'
import userApi from '@/http/api/user'
import styles from './login.module.scss'

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

        userApi.login({
            userName,
            password
        }).then(res => {
            const { userId, userName, token } = res
            localStorage.setItem('userId', userId)
            localStorage.setItem('userName', userName)
            localStorage.setItem('token', token)
            this.props.history.push('/home')
        })
    }
    register() {
        const { userName, password } = this.state
        userApi.register({
            userName,
            password
        }).then(res => {
            console.log(res)
        })        
    }
    render() {
        return (
            <div className="login-wrapper flex-col-center ">
                <div className={styles['login-pane']}>
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
                    <button onClick={() => this.login()}>登录</button> 
                    <button onClick={() => this.register()}>注册</button>                    
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Login)