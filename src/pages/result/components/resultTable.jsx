import React from 'react'

import { Link } from 'react-router'

const resultTable = ({ result, goBack }) => {
    return (
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
                            {result.z && <th>Z</th>}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{parseInt(result.max).toFixed(2)}</td>
                            <td>{parseInt(result.x).toFixed(2)}</td>
                            <td>{parseInt(result.y).toFixed(2)}</td>
                            {result.z && <td>{parseInt(result.z).toFixed(2)}</td>}
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="panel-footer">
                <button onClick={goBack} type="button" className="btn btn-primary">Voltar</button>
            </div>
        </div>
    )
}

export default resultTable