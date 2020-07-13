import React, {Component} from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import tickStore from '@/reducers'

import Login from '@/pages/login/login'
import Demo from '@/pages/demo/demo'
import Home from '@/pages/home/home'


const store = createStore(tickStore)
export default class RouteConfig extends Component {
    render() {
        return (
          <Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route path="/login" component= {Login}/>
                    <Route path="/home" component= {Home}/>
                    <Route path="/demo" component= {Demo}/>
                    {/* <Route path="/login" component= {login}/>
                    <Route path="/info"  component= {info}/>
                    <Route path="/msite" component= {msite}/>
                    <Route path="/setuser"  component= {setUser}/>
                    <Route path="/shop/:id"  component= {shop}/>
                    <Route path="/food/:geohash/:id/:title"  component= {food}/>
                    <Route path="/technology"  component= {technology}/>
                    <Redirect exact from='/' to='/profile'/>
                    <Route component= {profile}/> */}
                    <Redirect exact from='/' to='/login'/>
                </Switch>
            </HashRouter> 
          </Provider>
                       
        )
    }
}