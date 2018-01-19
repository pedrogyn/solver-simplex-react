import React, { Component } from 'react'

export default class Home extends Component{

    constructor(){
        super()
        this.state={
            f: '',
            restricoes: ''
        }
    }

    setExemplo(){
        const f = 'x + y + 2z'
        const restricoes = '2x + y + z <= 50\n2x + y >= 36\nx + z >= 10'
        this.setState({f, restricoes})
    }

    render(){
        const funcaoL = 'Digite a função que deseja maximizar'
        const restricoes = 'Digite as restrições do problema. Não se esqueca das restricoes de não negatividade'
        return (
            <div>
                <div className='col-md-8'>
                    <h1>Solver Simplex - Maximização</h1>                
                </div>
                
                <div className="col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">L</span>
                        <input type="text" value={this.state.f} className="form-control" placeholder={funcaoL} aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group" style={{marginTop: 10}}>
                        <span className="input-group-addon" id="basic-addon1">X</span>
                        <textarea type="text" value={this.state.restricoes} onChange={(change)=>{console.log(change.target.value.split('\n'))}} className="form-control" placeholder={restricoes} aria-describedby="basic-addon1" />
                    </div>
                    <div style={{paddingTop: 10}}>
                        <button className='btn btn-success'>Gerar</button>                        
                        <button className='btn btn-primary' onClick={()=>{this.setExemplo()}} style={{marginLeft: 10}}>Preencher com Exemplo</button>                        
                    </div>
                </div>
                <div className='col-md-6'>
                    <table className='table'>
                      <thead>
                          <tr>
                              <th>teste</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>
                                  teste
                              </td>
                          </tr>
                      </tbody>
                    </table>
                </div>
            </div>
        )
    }
}