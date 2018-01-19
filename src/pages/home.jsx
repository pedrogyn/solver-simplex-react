import React, { Component } from 'react'

import { maximize } from '../helpers/solver/solver'
export default class Home extends Component{

    constructor(){
        super()
        this.state={
            f: '',
            restricoes: '',
            resultado: null,
            height: '80px'
        }
    }


    setExemplo(){
        const f = 'x + y + 2z'
        const restricoes = '2x + y + z <= 50\n2x + y >= 36\nx + z >= 10\nx>=0\ny>=0\nz>=0'
        const height= '160px'
        this.setState({f, restricoes, height})
    }

    maximize(){

        if(this.state.f.length == 0){
            alert('Preencha o campo da função objetivo')
        } else if(this.state.restricoes.length == 0){
            alert('Preenchar o campo das restrições')
        } else {
            // console.log({funcao: this.state.f, restricoes: this.state.restricoes.split('\n')})
            const resultado = maximize(this.state.f, this.state.restricoes.split('\n'))
            this.setState({resultado})
            console.log(resultado)
            if(resultado == undefined){
                alert('Não foi possível definir um resultado. Verifique os dados informados')
            }
        }


        
    }

    resultado(){
        if(this.state.resultado != null){
            return(
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Solução</h3>
                    </div>
                    <div className="panel-body">
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Máximo</th>
                                    <th>X</th>
                                    <th>Y</th>
                                    <th>Z</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.resultado.max}</td>
                                    <td>{this.state.resultado.x}</td>
                                    <td>{this.state.resultado.y}</td>
                                    <td>{this.state.resultado.z}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    }

    // style={{color: (table.pivot != undefined && table.pivot.column == r) ? 'red' : 'black' }}

    tabelas(){
        if(this.state.resultado != null){
            return(
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Tabelas</h3>
                    </div>
                    <div className="panel-body">
                        {this.state.resultado.tableaus.map((table, i) => {
                            return(
                                <div key={i}>
                                    <table  className='table'>
                                        <thead>
                                            <tr>
                                                {table.variables.map((th, j) => {
                                                    return(
                                                        <th key={j} style={{color: (table.pivot != undefined && table.pivot.row == (j - 1 )   ? 'blue' : 'black' )}}>{th}</th>
                                                    )
                                                })}
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {table.rows.map((row, r) => {
                                            return(
                                                <tr key={r} style={{color: (table.pivot != undefined && table.pivot.column == (r + 1)) ? 'red' : 'black'}} >
                                                    {row.map((td, d) => {
                                                        return(
                                                            <td key={d} style={{ color: (table.pivot != undefined && table.pivot.row == (d - 1)) ? 'blue' : null}}> {parseInt(td).toFixed(1)}</td> 
                                                        )
                                                    })}
                                                </tr>
                                            )
                                        })}
                                        </tbody>
                                    </table>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }
    }



    render(){
        const funcaoL = 'Digite a função que deseja maximizar'
        const restricoes = 'Digite as restrições do problema. Não se esqueca das restricoes de não negatividade'
        return (
            <div>
                <div className='col-md-8'>
                    <h1>Solver Simplex - Maximização</h1>                
                </div>
                <div className='col-md-8'>
                    <p>Esse sistema resolve problemas de maximização seguindo os seguintes critérios: </p>
                    <ul>
                        <li>{ 'Utilizar os seguintes operadores: +, -, >=, <= ou = '} </li>
                        <li>Colocar uma função por linha</li>
                        <li>Caso tenha dúvidas, clique no botão exemplo</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">{funcaoL}</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">L</span>
                        <input type="text" value={this.state.f} onChange={(change)=>{this.setState({f: change.target.value})}} className="form-control" placeholder='Função Objetivo' aria-describedby="basic-addon1" />
                    </div>
                    <label htmlFor="" style={{marginTop: 20}}>{restricoes}</label>
                    <div className="input-group" >
                        <span className="input-group-addon" id="basic-addon1">X</span>
                        <textarea type="text" style={{height: this.state.height}} value={this.state.restricoes} onChange={(change)=>{this.setState({restricoes: change.target.value})}} className="form-control" placeholder='Restrições do problema' aria-describedby="basic-addon1" />
                    </div>
                    <div style={{paddingTop: 20, paddingBottom: 20}}>
                        <button className='btn btn-success' onClick={()=>{this.maximize()}}>Maximizar função</button>                        
                        <button className='btn btn-primary' onClick={()=>{this.setExemplo()}} style={{marginLeft: 10}}>Preencher com Exemplo</button>                        
                    </div>
                </div>
                <div className='col-md-6'>
                    {this.resultado()}
                    {this.tabelas()}
                </div>
            </div>
        )
    }
}