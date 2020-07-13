import React, { Component } from 'react'
import { connect } from 'react-redux'


const mapStateToProps = ({ userInfo }) => {
    return {
        userInfo
    }
}

class Home extends Component {
    constructor({ userInfo }) {
        super()
        this.state = {
            userInfo
        }
    }
    render() {
        return (
        <div>home:{this.state.userInfo.userName}</div>
        )
    }
}


export default connect(
    mapStateToProps
)(Home)