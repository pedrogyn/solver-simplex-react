import React, { Component } from 'react'

export default class Menu extends Component{
    render(){
        return (
            <nav className='navbar navbar-inverse bg-inverse'>
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#/home"><i className='fa fa-line-chart'> </i>    Solver Simplex </a>
                    </div>
                    <div id='navbar' className='navbar-collapse collapse'>
                        <ul className='nav navbar-nav'>
                            <li><a href="#/home">Início</a></li>
                            <li><a href="#/help">Ajuda</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}