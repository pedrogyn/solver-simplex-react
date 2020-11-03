import React, { Component } from 'react'

import PlanAndCousts from './components/planAndCousts'
import TotalLimits from './components/totalLimits'
import Fees from './components/fees'
import OperationCousts from './components/operationCousts'

class Examples extends Component {

    constructor() {
        super()
        this.state = {
            fees: {
                i1: 10,
                i2: 5,
                i3: 30
            }
        }
    }


    render() {
        return (
            <div>
                <h1>Calculadora</h1>
                <div className="col-md-6">
                    <PlanAndCousts />
                    <TotalLimits />
                </div>
                <div className="col-md-6">
                    <Fees
                        values={this.state.fees}
                        onChange={fees => {
                            this.setState({fees: fees})
                        }}
                    />
                    <OperationCousts />
                </div>
            </div>
        )
    }
}

export default Examples