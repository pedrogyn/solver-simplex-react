import React from 'react'
import {Router, Route, Redirect, hashHistory } from 'react-router'

import Examples from '../pages/examples'
import Solver from '../pages/solver'
import Result from '../pages/result'

export default props => (
    <Router history={hashHistory} >
        <Route path='/solver' component={Solver}/>
        <Route path='/result' component={Result}/>
        <Route path='/' component={Examples}/>
        <Redirect from='*' to='/'/>
    </Router>
)