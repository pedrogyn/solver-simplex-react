import React, { Component } from 'react'

export default class Home extends Component{



    render(){
        const funcaoL = 'Digite a função que deseja maximizar'
        const restricoes = 'Digite as restrições do problema. Não se esqueca das restricoes de não negatividade'
        return (
            <div className="col-md-6">
                <h1>Solver Simplex - Maximização</h1>
                <label></label>
                <div className="">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">L</span>
                        <input type="text" className="form-control" placeholder={funcaoL} aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">X</span>
                        <textarea type="text" className="form-control" placeholder={restricoes} aria-describedby="basic-addon1" />
                    </div>
                </div>
            </div>
        )
    }
}