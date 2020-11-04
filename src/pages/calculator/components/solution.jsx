import React, { Component } from 'react'

import { maximize } from '../../../helpers/solver/solver'

class Solution extends Component {

    render() {

        const { p1, p2, p3, r1, r2 } = this.props.values

        const solutionString = `x + y + z`

        const constraints = [
            `${p1}x + ${p2}y + ${p3}z >= ${r1 > r2 ? r1 : r2}`,
            `x => 0`,
            `y => 0`,
            `z => 0`,
        ]

        const result = maximize(solutionString, constraints)

        return (
            <div>
                <div className="jumbotron">
                    <h1>Solução</h1>
                    <p><strong>Função objetivo:</strong></p>
                    <p>Vmin = P1 + P2 + P3</p>

                    <p><strong>Restrições: </strong></p>
                    <p>{`${p1}P1 + ${p2}P2 + ${p3}P3 >= ${r1 > r2 ? r1 : r2}`}</p>
                    <p>{`P1 >= 0; P2 >= 0; p3 >= 0`}</p>

                    {
                        !result && <p>Não foi possível determinar uma solução factível</p>
                    }

                    <p><a onClick={this.props.onClickAction} className="btn btn-success btn-lg" href="#" role="button">Ver resumo</a></p>
                    <p><a onClick={this.props.onClickCancel} className="btn btn-warning btn-lg" href="#" role="button">Editar variáveis</a></p>
                </div>

                {
                    result && (
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Solução</h3>
                            </div>
                            <div className="panel-body">
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Mínimo</th>
                                            <th>P1</th>
                                            <th>P2</th>
                                            <th>P3</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{Number(result.max).toFixed(0)}</td>
                                            <td>{Number(result.x).toFixed(0)}</td>
                                            <td>{Number(result.y).toFixed(0)}</td>
                                            <td>{Number(result.z).toFixed(0)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Solution