import React from 'react'
import {Router, Route, Redirect, hashHistory } from 'react-router'

import Help from '../pages/help'
import Home from '../pages/home'

export default props => (
    <Router history={hashHistory} >
        <Route path='/home' component={Home}/>
        <Route path='/help' component={Help}/>
        <Redirect from='*' to='home'/>
    </Router>
)