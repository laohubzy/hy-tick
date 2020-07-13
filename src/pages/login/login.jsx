import React, { Component } from 'react'
import { connect } from 'react-redux'

import { A_setUserInfo } from '@/actions/userInfo'
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
    submit() {
        const { userName, password } = this.state
        this.D_setUserInfo({
            userName,
            password
        })
        this.props.history.push('/home')
    }
    render() {
        return (
            <div className="login-wrapper flex-col-center ">
                <div className="login-pane">
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

export default connect(
    null,
    mapDispatchToProps
)(Login)