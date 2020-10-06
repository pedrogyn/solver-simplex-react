import React, { Component } from 'react'

import ExamplesTable from './components/examplesTable'

class Examples extends Component {
    render() {
        return (
            <div>
                <h1>Exercícios</h1>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Descrição</th>
                            <th scope="col">Função Objetivo</th>
                            <th scope="col">Resultado</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <ExamplesTable />
                </table>
                
            </div>
        )
    }
}

export default Examples