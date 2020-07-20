import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class LeftMenu extends Component {
    constructor({ userInfo }) {
        super()
    }
    render() {
        return (
            <div>
                <Link to={'/webApp/list'}>First</Link>
            </div>
        )
    }
}


export default LeftMenu