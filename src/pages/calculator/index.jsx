import React, { Component } from 'react'

import PlanAndCousts from './components/planAndCousts'
import TotalLimits from './components/totalLimits'
import Fees from './components/fees'
import OperationCousts from './components/operationCousts'
import Resume from './components/resume'
import FinalSalePrice from './components/finalSalePrice'
import Solution from './components/solution'

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
                c1: 6000,
                c2: 7500,
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
            },
            resume: {
                k1: 5833.33,
                k2: 570833,
                k3: 400000,
                k4: 200000,
                v1: 3900,
                v2: 8000,
                v3: 13000,
            },
            showResume: false,
            showSolution: false,
            showVariables: true
        }
    }

    calculateResume() {

        let { o1, o2, o3 } = this.state.operations
        let { t1, t2, t3 } = this.state.limits
        let { i1, i2, i3 } = this.state.fees
        let { c1, c2, c3 } = this.state.cousts

        o1 = Number(o1)
        o2 = Number(o2)
        o3 = Number(o3)
        t1 = Number(t1)
        t2 = Number(t2)
        t3 = Number(t3)
        i1 = Number(i1)
        i2 = Number(i2)
        i3 = Number(i3)
        c1 = Number(c1)
        c2 = Number(c2)
        c3 = Number(c3)

        let k1 = Number((Number(t2) / 100) / t1)
        k1 = Number(k1.toFixed(2))
        const k2 = Number(o1 + o2 + o3)/100
        const k3 = Number(t3 * c3 * (i1 / 100))/100
        const k4 = Number(t3 * c3 * (i2 / 100))/100

        const profitFee = i3 / 100
        const v1 = c1 + (c1 * profitFee)
        const v2 = c2 + (c3 * profitFee)
        const v3 = c3 + (c3 * profitFee)

        const p1 = Number(v1/100).toFixed(2);
        const p2 = Number(v2/100).toFixed(2);
        const p3 = Number(v3/100).toFixed(2);

        const r1 = k1 + k2 + k3
        const r2 = k1 + k2 + k4

        const resume = {
            k1,
            k2,
            k3,
            k4,
            v1,
            v2,
            v3,
            p1,
            p2,
            p3,
            r1,
            r2,
        }

        this.setState({ resume })
    }


    render() {
        return (
            <div>
                {
                    this.state.showVariables &&
                    <div>
                        <div className="jumbotron">
                            <h1>Variáveis</h1>
                            <p>Contém todos os dados para calcular a solução do problema. Aqui você consegue editar todos os itens descritos no problema</p>
                            <p>
                                <a
                                    onClick={() => {
                                        this.setState({ showResume: true, showVariables: false })
                                        this.calculateResume()
                                    }}
                                    className="btn btn-primary btn-lg"
                                    href="#"
                                    role="button"
                                >
                                    Ver resumo
                                </a>
                            </p>
                        </div>

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
                }

                {
                    this.state.showResume &&
                    <div>
                        <div className="jumbotron">
                            <h1>Resumo</h1>
                            <p>São os dados das variáveis resumidos e sintetizados</p>
                            <p><a onClick={() => { this.setState({ showResume: false, showSolution: true }) }} className="btn btn-success btn-lg" href="#" role="button">Ver solução ótima</a></p>
                            <p><a onClick={() => { this.setState({ showResume: false, showVariables: true }) }} className="btn btn-warning btn-lg" href="#" role="button">Editar variáveis</a></p>
                        </div>

                        <div className="col-md-12">
                            <Resume values={this.state.resume} />
                            <FinalSalePrice values={this.state.resume} />
                        </div>
                    </div>
                }

                {
                    this.state.showSolution &&
                    <Solution
                        values={this.state.resume}
                        onClickAction={() => { this.setState({ showResume: true, showSolution: false }) }}
                        onClickCancel={() => { this.setState({ showResume: false, showSolution: false, showVariables: true }) }}
                    />
                }

            </div>
        )
    }
}

export default Examples