import React from 'react'

const developmentTable = ({ result }) => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">Tabelas</h3>
            </div>
            <div className="panel-body">
                {result.tableaus.map((table, i) => {
                    return (
                        <div key={i}>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        {table.variables.map((th, j) => {
                                            return (
                                                <th key={j} style={{ color: (table.pivot != undefined && table.pivot.row == (j - 1) ? 'blue' : 'black') }}>{th}</th>
                                            )
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {table.rows.map((row, r) => {
                                        return (
                                            <tr key={r} style={{ color: (table.pivot != undefined && table.pivot.column == (r + 1)) ? 'red' : 'black' }} >
                                                {row.map((td, d) => {
                                                    return (
                                                        <td key={d} style={{ color: (table.pivot != undefined && table.pivot.row == (d - 1)) ? 'blue' : null }}> {parseInt(td).toFixed(0)}</td>
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

export default developmentTable