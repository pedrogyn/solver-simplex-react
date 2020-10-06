import React from 'react'
import { Link } from 'react-router'

import examples from '../../../helpers/examples'

import { maximize } from '../../../helpers/solver/solver'

const ExamplesTable = () => {

    const parseValue = (value) => {
        return Number(value).toFixed(2)
    }

    const resultValues = (result) => {
        const { max, x, y, z } = result

        let stringResult = ``;

        if (max) {
            stringResult += `Max = ${parseValue(max)}; `
        }

        if (x >= 0) {
            stringResult += `X1 = ${parseValue(x)}; `
        }

        if (y >= 0) {
            stringResult += `X2 = ${parseValue(y)}; `
        }

        if (z >= 0) {
            stringResult += `X3 = ${parseValue(z)}; `
        }

        return stringResult
    }

    const calculaResultado = (item) => {
        const result = maximize(item.maximize, item.constraints.split('\n'))

        return resultValues(result)
    }

    const renderRow = (item) => {
        return (
            <tr key={item.description}>
                <th scope="row">{item.description}</th>
                <td>{item.maximize}</td>
                <td>{calculaResultado(item)}</td>
                <td>
                    <Link to={{ pathname: '/result', query: { ...item, constraints: item.constraints.split('\n') } }}>
                        <button
                            type="button"
                            className="btn btn-success btn-sm"
                        >
                            Ver resolução
                    </button>
                    </Link>
                </td>
            </tr>
        )
    }


    return (
        <tbody>
            {
                examples.map((item, index) => {
                    return renderRow(item)
                })
            }
        </tbody>
    )
}

export default ExamplesTable