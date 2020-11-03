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
            },
            cousts: {
                c1: 3000,
                c2: 5000,
                c3: 10000
            },
            limits: {
                t1: 12,
                t2: 7000000,
                t3: 400
            },
            operations: {
                o1: 450000,
                o2: 833,
                o3: 120000
            }
        }
    }


    render() {
        return (
            <div>
                <h1>Calculadora</h1>
                <div className="col-md-6">
                    <PlanAndCousts
                        values={this.state.cousts}
                        onChange={cousts => {
                            this.setState({ cousts: cousts })
                        }}
                    />
                    <TotalLimits
                        values={this.state.limits}
                        onChange={limits => {
                            this.setState({ limits: limits })
                        }}
                    />
                </div>
                <div className="col-md-6">
                    <Fees
                        values={this.state.fees}
                        onChange={fees => {
                            this.setState({ fees: fees })
                        }}
                    />
                    <OperationCousts
                        values={this.state.operations}
                        onChange={operations => {
                            this.setState({ operations: operations })
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Examples