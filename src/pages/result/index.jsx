import React from 'react'

import { maximize } from '../../helpers/solver/solver'

import ResultTable from './components/resultTable'
import DevelopmentTable from './components/developmentTable'

const Result = (props) => {

    const item = props.location.query

    const result = maximize(item.maximize, item.constraints)

    return (
        <div>

            <div className='col-md-4'>
                <ResultTable result={result} />
            </div>
            <div className='col-md-8'>
               <DevelopmentTable result={result}/>
            </div>
        </div>
    )
}

export default Result