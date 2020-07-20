import React, { Component } from 'react'
import {Router, Switch, Route, Redirect } from 'react-router-dom'


import LeftMenu from '../leftMenu/leftMenu';
import ListLayout from '../listLayout/listLayout';

class WebApp extends Component {
    constructor({ userInfo }) {
        super()
    }
    render() {
        return (
            <div className="flex">
                <LeftMenu />
                <Switch>
                    <Redirect exact from='/webApp' to='/webApp/list'/>
                    <Route exact path='list' component={ListLayout}/>
                </Switch>
            </div>
        )
    }
}


export default WebApp