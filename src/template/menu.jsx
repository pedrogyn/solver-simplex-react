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
                            <li><a href="#/">Calculadora</a></li>
                            <li><a href="#/examples">Exercicios</a></li>
                            <li><a href="#/solver">Solver</a></li>
                            <li><a href="https://goo.gl/175w31"><i style={{fontSize: 20}} className="fa fa-github"></i> Código </a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}